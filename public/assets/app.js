import {
  ROLE_SLIDES,
  TECH_STACK_NODES,
  SECTION_THEMES,
  PROJECTS,
  MEDIA_SHOWCASE,
  CONTACT_COOLDOWN_MS,
  CONTACT_TIMEOUT_MS,
  MAX_CONTACT_MESSAGE_LENGTH,
  filterProjects,
  getProjectById,
  computeActiveSectionId,
  getInquiryPlaceholder,
  buildInquiryPayload,
  validateContactField,
  validateInquiryFields,
  resolveInquiryFromSearch,
  submitInquiryRequest,
  moveBoardMatrix,
  isBoardGameOver,
} from './portfolio-logic.js';
import { initMascot } from './mascot.js';

const FORM_ENDPOINT = "https://REPLACE-WITH-MY-ENDPOINT";

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  // Helper: Clean failsafe handler when images finish loading or fail
  const wireMediaFrame = (container) => {
    if (!container) return;
    const img = container.querySelector('img');
    if (!img) return;
    container.classList.remove('is-loading');
    const syncState = () => {
      container.classList.remove('is-loading');
      if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) {
        container.classList.add('is-broken');
      } else {
        container.classList.remove('is-broken');
      }
    };
    if (img.complete) {
      syncState();
      return;
    }
    img.addEventListener('load', syncState, { once: true });
    img.addEventListener('error', syncState, { once: true });
  };

  for (const frame of document.querySelectorAll('.media-frame')) {
    wireMediaFrame(frame);
  }

  // =======================================================================
  // 0. CALM SELECTIVE 3D CURSOR-REACTIVE TILT (~75% OF PRIMARY CONTROLS)
  // =======================================================================
  const bind3DTilt = (el) => {
    if (!el || el.dataset.tiltWired === 'true') return;
    el.dataset.tiltWired = 'true';
    if (!finePointer || reducedMotion) return;

    const isCompact =
      el.classList.contains('btn-3d') ||
      el.classList.contains('contact-squircle-badge');
    const maxDeg = isCompact ? 3.5 : 1.7;

    el.addEventListener(
      'mousemove',
      (e) => {
        if (window.innerWidth < 1024) return;
        const rect = el.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const px = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
        const py = Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height));
        const rx = ((0.5 - py) * 2 * maxDeg).toFixed(2);
        const ry = ((px - 0.5) * 2 * maxDeg).toFixed(2);
        el.style.setProperty('--rx', `${rx}deg`);
        el.style.setProperty('--ry', `${ry}deg`);
        el.style.setProperty('--gx', `${(px * 100).toFixed(1)}%`);
        el.style.setProperty('--gy', `${(py * 100).toFixed(1)}%`);
        el.style.setProperty('--glare', '1');
      },
      { passive: true }
    );

    el.addEventListener('mouseleave', () => {
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
      el.style.setProperty('--glare', '0');
    });
  };

  for (const tiltEl of document.querySelectorAll('[data-tilt]')) {
    bind3DTilt(tiltEl);
  }

  // =======================================================================
  // 1. BLINKING ROLE SLIDESHOW TEXT (TYPEWRITER CYCLE)
  // =======================================================================
  const slideshowEl = document.getElementById('role-slideshow-text');
  if (slideshowEl && ROLE_SLIDES.length > 0) {
    if (reducedMotion) {
      slideshowEl.textContent = ROLE_SLIDES[0];
    } else {
      let slideIdx = 0;
      let charIdx = ROLE_SLIDES[0].length;
      let deleting = false;
      let pauseTicks = 24;

      setInterval(() => {
        if (document.hidden) return;
        const word = ROLE_SLIDES[slideIdx];
        if (pauseTicks > 0) {
          pauseTicks--;
          return;
        }
        if (!deleting) {
          charIdx++;
          slideshowEl.textContent = word.slice(0, charIdx);
          if (charIdx >= word.length) {
            deleting = true;
            pauseTicks = 28;
          }
        } else {
          charIdx--;
          if (charIdx <= 0) {
            deleting = false;
            slideIdx = (slideIdx + 1) % ROLE_SLIDES.length;
            charIdx = 1;
            slideshowEl.textContent = ROLE_SLIDES[slideIdx].slice(0, 1);
            pauseTicks = 1;
          } else {
            slideshowEl.textContent = word.slice(0, charIdx);
          }
        }
      }, 65);
    }
  }

  // =======================================================================
  // 2. PULL-CHAIN THEME TOGGLE (OBSIDIAN NIGHT <-> LIGHT MODE)
  // =======================================================================
  const themeToggle = document.getElementById('theme-toggle');
  if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    if (themeToggle) themeToggle.setAttribute('aria-pressed', 'true');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', (e) => {
      e.preventDefault();
      body.classList.toggle('light-mode');
      const isLight = body.classList.contains('light-mode');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      themeToggle.setAttribute('aria-pressed', String(isLight));
    });
  }

  // =======================================================================
  // 3. DUAL-MODE STARFIELD: STAR WARS WARP + VLADGPT SKY (PAUSED UNDER REDUCED MOTION)
  // =======================================================================
  const canvas = document.getElementById('starfield');
  const progressBar = document.getElementById('scroll-progress-bar');
  let activeBgTheme = SECTION_THEMES.about;

  const updateScrollProgress = () => {
    if (!progressBar) return;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
    progressBar.style.transform = `scaleX(${ratio})`;
  };

  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let cx = 0;
    let cy = 0;
    let warpStars = [];
    let ambientStars = [];
    let lastFrameTime = 0;
    let rafId = null;
    let currentSpeed = activeBgTheme.speed;
    let warpOpacity = body.classList.contains('about-page') ? 0.25 : 1;

    const createWarpStar = () => ({
      x: (Math.random() - 0.5) * width * 1.75,
      y: (Math.random() - 0.5) * height * 1.75,
      z: Math.random() * 980 + 80,
      pz: 990,
      seed: Math.random(),
    });

    const createAmbientStar = () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 0.75 + Math.random() * 1.65,
      vy: 0.14 + Math.random() * 0.28,
      twinkle: Math.random() * Math.PI * 2,
      navyTint: Math.random() > 0.68,
    });

    const initCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      cx = width * 0.54;
      cy = height * 0.44;
      canvas.width = width;
      canvas.height = height;
      warpStars = Array.from({ length: 118 }, createWarpStar);
      ambientStars = Array.from({ length: 105 }, createAmbientStar);
    };

    const drawFrame = (timestamp = 0) => {
      if (document.hidden) {
        rafId = null;
        return;
      }

      if (reducedMotion || timestamp - lastFrameTime >= 32) {
        lastFrameTime = timestamp;
        ctx.clearRect(0, 0, width, height);
        const isLight = body.classList.contains('light-mode');
        const focal = 460;
        const scrollDriftY = window.scrollY * 0.045;
        const targetWarp = activeBgTheme.mode === 'hyperspace' ? 1 : 0.18;

        currentSpeed += (activeBgTheme.speed - currentSpeed) * 0.08;
        warpOpacity += (targetWarp - warpOpacity) * 0.07;

        const dotWeight = 1 - warpOpacity * 0.65;
        if (dotWeight > 0.05) {
          for (const d of ambientStars) {
            if (!reducedMotion) {
              d.y -= d.vy;
              d.twinkle += 0.035;
              if (d.y < -4) {
                d.y = height + 4;
                d.x = Math.random() * width;
              }
            }
            const alpha = (0.28 + 0.48 * (0.5 + 0.5 * Math.sin(d.twinkle))) * dotWeight;
            if (d.navyTint) {
              ctx.fillStyle = isLight
                ? `rgba(28, 53, 94, ${alpha * 0.55})`
                : `rgba(116, 159, 224, ${alpha * 0.72})`;
            } else {
              ctx.fillStyle = isLight
                ? `rgba(10, 12, 16, ${alpha * 0.35})`
                : `rgba(244, 246, 250, ${alpha})`;
            }
            ctx.beginPath();
            ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        if (warpOpacity > 0.08) {
          for (const s of warpStars) {
            if (!reducedMotion) {
              s.pz = s.z + 6.5;
              s.z -= currentSpeed;
              if (s.z < 30) {
                Object.assign(s, createWarpStar());
                s.z = 980;
                s.pz = 986;
              }
            } else {
              s.pz = s.z + 4;
            }

            const sx = (s.x / s.z) * focal + cx;
            const sy = (s.y / s.z) * focal + cy - (scrollDriftY % 120);
            const px = (s.x / s.pz) * focal + cx;
            const py = (s.y / s.pz) * focal + cy - (scrollDriftY % 120);

            if (sx < -40 || sx > width + 40 || sy < -40 || sy > height + 40) continue;

            const depthRatio = Math.max(0.08, 1 - s.z / 1000);
            const alpha = (isLight ? 0.25 : 0.72) * depthRatio * warpOpacity;

            ctx.strokeStyle =
              s.seed > 0.72
                ? isLight
                  ? `rgba(28, 53, 94, ${alpha})`
                  : `rgba(116, 159, 224, ${alpha * 0.9})`
                : isLight
                  ? `rgba(10, 12, 16, ${alpha * 0.45})`
                  : `rgba(244, 246, 250, ${alpha * 0.85})`;

            ctx.lineWidth = Math.max(0.85, depthRatio * 1.95);
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(sx, sy);
            ctx.stroke();
          }
        }
      }

      if (!reducedMotion) {
        rafId = requestAnimationFrame(drawFrame);
      }
    };

    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && !reducedMotion && rafId === null) {
        rafId = requestAnimationFrame(drawFrame);
      }
    });

    window.addEventListener('resize', () => {
      initCanvas();
      if (reducedMotion) drawFrame();
    });

    initCanvas();
    drawFrame();
  }

  // =======================================================================
  // 4. SAFE PROGRESSIVE SCROLL REVEALS (VISIBLE BY DEFAULT)
  // =======================================================================
  const revealTargets = Array.from(document.querySelectorAll('.reveal-block'));
  for (const el of revealTargets) {
    el.classList.add('is-revealed');
  }

  // Experience timeline entries: visible by default & without JS; progressive once-on-scroll slide/fade
  const timelineItems = Array.from(document.querySelectorAll('.exp-timeline-item'));
  if (timelineItems.length > 0 && !reducedMotion && 'IntersectionObserver' in window) {
    const timelineObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.remove('is-tl-pending');
          timelineObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
    );

    for (const item of timelineItems) {
      const rect = item.getBoundingClientRect();
      if (rect.top > window.innerHeight * 0.94) {
        item.classList.add('is-tl-pending');
        timelineObserver.observe(item);
      }
    }
  }

  // =======================================================================
  // 5. ABOUT PAGE STATS COUNTER ANIMATION ON VIEW
  // =======================================================================
  const statCounters = Array.from(document.querySelectorAll('.about-stat-num[data-count-to]'));
  if (statCounters.length > 0) {
    const renderFinalStat = (el) => {
      const target = Number(el.getAttribute('data-count-to') || '0');
      const prefix = el.getAttribute('data-prefix') || '';
      const suffix = el.getAttribute('data-suffix') || '';
      el.textContent = `${prefix}${target}${suffix}`;
    };

    if (reducedMotion || !('IntersectionObserver' in window)) {
      for (const el of statCounters) renderFinalStat(el);
    } else {
      const statsObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const el = entry.target;
            statsObserver.unobserve(el);
            const target = Number(el.getAttribute('data-count-to') || '0');
            const startFrom = Number(el.getAttribute('data-count-from') || '0');
            const prefix = el.getAttribute('data-prefix') || '';
            const suffix = el.getAttribute('data-suffix') || '';
            const startTime = performance.now();
            const duration = 680;

            const step = (now) => {
              const t = Math.min(1, (now - startTime) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              const current = Math.round(startFrom + (target - startFrom) * eased);
              el.textContent = `${prefix}${current}${suffix}`;
              if (t < 1) {
                requestAnimationFrame(step);
              } else {
                renderFinalStat(el);
              }
            };
            requestAnimationFrame(step);
          }
        },
        { threshold: 0.25 }
      );
      for (const el of statCounters) statsObserver.observe(el);
    }
  }

  // =======================================================================
  // 6. LIGHTWEIGHT SINGLE-SHAPE PRECISION CURSOR (NO DOUBLE CIRCLES)
  // =======================================================================
  const llmCursor = document.getElementById('llm-cursor');
  const llmCursorLabel = document.getElementById('llm-cursor-label');

  if (llmCursor && finePointer && !reducedMotion) {
    body.classList.add('has-llm-cursor');
    let targetX = -100;
    let targetY = -100;
    let curX = -100;
    let curY = -100;
    let cursorTicking = false;

    const tickCursor = () => {
      curX += (targetX - curX) * 0.56;
      curY += (targetY - curY) * 0.56;
      llmCursor.style.transform = `translate3d(${curX}px, ${curY}px, 0)`;

      if (Math.abs(targetX - curX) > 0.3 || Math.abs(targetY - curY) > 0.3) {
        requestAnimationFrame(tickCursor);
      } else {
        cursorTicking = false;
      }
    };

    document.addEventListener(
      'mousemove',
      (e) => {
        if (window.innerWidth < 1024) {
          llmCursor.classList.remove('is-visible');
          return;
        }
        if (e.clientX === 0 && e.clientY === 0) return;

        targetX = e.clientX;
        targetY = e.clientY;
        llmCursor.classList.add('is-visible');
        llmCursor.classList.toggle('flip-left', e.clientX > window.innerWidth - 110);
        if (!cursorTicking) {
          cursorTicking = true;
          requestAnimationFrame(tickCursor);
        }

        const interactive = e.target.closest('a, button, select, [role="button"], input, textarea');
        if (interactive) {
          llmCursor.classList.add('is-active');
          const tag = interactive.getAttribute('data-cursor');
          if (tag && llmCursorLabel) {
            llmCursorLabel.textContent = tag;
            llmCursor.classList.add('has-label');
          } else {
            llmCursor.classList.remove('has-label');
          }
        } else {
          llmCursor.classList.remove('is-active', 'has-label');
        }
      },
      { passive: true }
    );

    document.addEventListener('mousedown', () => llmCursor.classList.add('is-pressed'));
    document.addEventListener('mouseup', () => llmCursor.classList.remove('is-pressed'));
    document.addEventListener('mouseleave', () => {
      llmCursor.classList.remove('is-visible');
      targetX = -100;
      targetY = -100;
    });
  }

  // =======================================================================
  // 7. NAVBAR BRAND TRIGGER, SIDEBAR DRAWER, THREAD SYNC & STICKY HIRE PILL
  // =======================================================================
  const sidebarEl = document.getElementById('llm-sidebar');
  const brandNavTrigger = document.getElementById('brand-nav-trigger');
  const sidebarCloseBtn = document.getElementById('sidebar-close-btn');
  const sidebarBackdrop = document.getElementById('sidebar-backdrop');
  const threadLinks = Array.from(document.querySelectorAll('.thread-item'));
  const scrollSections = Array.from(document.querySelectorAll('[data-scroll-section]'));

  const FOCUSABLE_SELECTOR =
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

  const getFocusableElements = (container) => {
    if (!container) return [];
    return Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)).filter(
      (el) => !el.hidden && el.offsetParent !== null
    );
  };

  const trapTabFocus = (container, event) => {
    if (event.key !== 'Tab' || !container) return;
    const focusables = getFocusableElements(container);
    if (focusables.length === 0) {
      event.preventDefault();
      return;
    }
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey) {
      if (document.activeElement === first || !container.contains(document.activeElement)) {
        event.preventDefault();
        last.focus();
      }
    } else if (document.activeElement === last || !container.contains(document.activeElement)) {
      event.preventDefault();
      first.focus();
    }
  };

  let sidebarOpener = null;

  const setSidebarOpen = (open, { restoreFocus = false } = {}) => {
    const wasOpen = body.classList.contains('sidebar-open');
    body.classList.toggle('sidebar-open', open);
    if (sidebarEl) {
      sidebarEl.setAttribute('aria-hidden', String(!open));
      if ('inert' in sidebarEl) sidebarEl.inert = !open;
    }
    if (brandNavTrigger) brandNavTrigger.setAttribute('aria-expanded', String(open));
    if (sidebarBackdrop) sidebarBackdrop.hidden = !open;

    if (open && !wasOpen) {
      sidebarOpener = document.activeElement instanceof HTMLElement ? document.activeElement : brandNavTrigger;
      requestAnimationFrame(() => {
        const focusables = getFocusableElements(sidebarEl);
        (sidebarCloseBtn || focusables[0])?.focus();
      });
    } else if (!open && wasOpen && restoreFocus) {
      (sidebarOpener || brandNavTrigger)?.focus();
      sidebarOpener = null;
    }
  };

  setSidebarOpen(false);

  if (brandNavTrigger) {
    brandNavTrigger.addEventListener('click', () => {
      const next = !body.classList.contains('sidebar-open');
      if (next) {
        window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
      }
      setSidebarOpen(next, { restoreFocus: !next });
    });
  }

  if (sidebarCloseBtn) {
    sidebarCloseBtn.addEventListener('click', () => setSidebarOpen(false, { restoreFocus: true }));
  }
  if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener('click', () => setSidebarOpen(false, { restoreFocus: true }));
  }

  if (sidebarEl) {
    for (const socialLink of sidebarEl.querySelectorAll('a:not(.thread-item)')) {
      socialLink.addEventListener('click', () => setSidebarOpen(false));
    }
  }

  window.addEventListener('resize', updateScrollProgress);

  const applySectionBackgroundMode = (sectionId) => {
    const theme = SECTION_THEMES[sectionId] || SECTION_THEMES.about;
    activeBgTheme = theme;
    body.setAttribute('data-active-section', sectionId);
  };

  const setActiveThread = (sectionId) => {
    if (scrollSections.length === 0) return;
    for (const link of threadLinks) {
      const targetSec = link.getAttribute('data-section');
      if (!targetSec) continue;
      const match = targetSec === sectionId;
      link.classList.toggle('active', match);
      if (match) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
    applySectionBackgroundMode(sectionId);
  };

  for (const link of threadLinks) {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href') || '';
      if (!href.startsWith('#')) {
        setSidebarOpen(false);
        return;
      }
      const id = href.slice(1);
      const target = id ? document.getElementById(id) : null;
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
        setActiveThread(id);
        setSidebarOpen(false);
      } else {
        setSidebarOpen(false);
      }
    });
  }

  const updateScrollSpy = () => {
    if (scrollSections.length > 0) {
      const rects = scrollSections.map((el) => ({
        id: el.id,
        top: el.getBoundingClientRect().top + window.scrollY,
      }));
      const activeId = computeActiveSectionId(rects, window.scrollY, 200);
      if (activeId) setActiveThread(activeId);
    }
    updateScrollProgress();
  };

  let scrollTicking = false;
  window.addEventListener(
    'scroll',
    () => {
      if (!scrollTicking) {
        requestAnimationFrame(() => {
          updateScrollSpy();
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    },
    { passive: true }
  );
  updateScrollSpy();

  // =======================================================================
  // 8. INTERACTIVE TECH STACK LOGO SLIDESHOW & ON-CLICK DETAIL PANEL
  // =======================================================================
  const marqueeViewport = document.getElementById('stack-marquee');
  const marqueeDrag = document.getElementById('stack-marquee-drag');
  const marqueeTrack = document.getElementById('stack-marquee-track');
  const detailPanel = document.getElementById('stack-detail-panel');
  const detailIcon = document.getElementById('stack-detail-icon');
  const detailName = document.getElementById('stack-detail-name');
  const detailDesc = document.getElementById('stack-detail-desc');
  const detailProjectsRow = document.getElementById('stack-detail-projects-row');
  const detailPills = document.getElementById('stack-detail-pills');
  const detailCloseBtn = document.getElementById('stack-detail-close');

  let activeTechId = null;
  let lastStackTrigger = null;
  let jumpHighlightTimer = null;
  let ensureAllProjectsVisible = null;

  const renderTechGlyph = (container, node) => {
    container.innerHTML = '';
    container.style.color = node.color || 'var(--text-main)';
    if (node.svg) {
      container.innerHTML = node.svg;
    } else if (node.icon) {
      const i = document.createElement('i');
      i.className = node.icon;
      i.setAttribute('aria-hidden', 'true');
      container.appendChild(i);
    }
  };

  const scrollToProjectCard = (projectId) => {
    let targetCard = document.getElementById(`project-${projectId}`);
    if (!targetCard && typeof ensureAllProjectsVisible === 'function') {
      ensureAllProjectsVisible();
      targetCard = document.getElementById(`project-${projectId}`);
    }
    if (!targetCard) return;

    targetCard.scrollIntoView({
      behavior: reducedMotion ? 'auto' : 'smooth',
      block: 'center',
    });

    for (const prev of document.querySelectorAll('.vault-card.is-jump-highlight')) {
      prev.classList.remove('is-jump-highlight');
    }
    targetCard.classList.add('is-jump-highlight');
    if (jumpHighlightTimer) clearTimeout(jumpHighlightTimer);
    jumpHighlightTimer = setTimeout(() => {
      targetCard.classList.remove('is-jump-highlight');
    }, 1600);
  };

  const syncActiveLogos = () => {
    if (!marqueeTrack) return;
    for (const btn of marqueeTrack.querySelectorAll('.stack-logo-btn')) {
      const isMatch = Boolean(activeTechId) && btn.dataset.techId === activeTechId;
      btn.classList.toggle('is-active', isMatch);
      btn.setAttribute('aria-pressed', String(isMatch));
      btn.setAttribute('aria-expanded', String(isMatch));
    }
  };

  const closeStackPanel = ({ restoreFocus = false } = {}) => {
    if (!activeTechId && (!detailPanel || detailPanel.hidden)) return;
    activeTechId = null;
    if (detailPanel) detailPanel.hidden = true;
    if (marqueeViewport) marqueeViewport.classList.remove('is-paused');
    syncActiveLogos();
    if (restoreFocus && lastStackTrigger && typeof lastStackTrigger.focus === 'function') {
      lastStackTrigger.focus();
    }
    lastStackTrigger = null;
  };

  const openStackPanel = (node, triggerEl = null) => {
    if (!detailPanel || !node) return;
    if (activeTechId === node.id) {
      closeStackPanel();
      return;
    }

    activeTechId = node.id;
    lastStackTrigger = triggerEl;
    if (marqueeViewport) marqueeViewport.classList.add('is-paused');

    if (detailIcon) renderTechGlyph(detailIcon, node);
    if (detailName) detailName.textContent = node.name;
    if (detailDesc) detailDesc.textContent = node.details || '';

    if (detailProjectsRow && detailPills) {
      detailPills.innerHTML = '';
      const projects = Array.isArray(node.projects) ? node.projects : [];
      if (projects.length > 0) {
        for (const proj of projects) {
          const pill = document.createElement('button');
          pill.type = 'button';
          pill.className = 'stack-project-pill';
          pill.setAttribute('data-cursor', 'Jump');
          pill.textContent = proj.title;
          pill.addEventListener('click', () => scrollToProjectCard(proj.id));
          detailPills.appendChild(pill);
        }
        detailProjectsRow.hidden = false;
      } else {
        detailProjectsRow.hidden = true;
      }
    }

    detailPanel.hidden = false;
    syncActiveLogos();
  };

  if (marqueeViewport && marqueeDrag && marqueeTrack && Array.isArray(TECH_STACK_NODES)) {
    let suppressNextClick = false;
    let dragX = 0;

    const buildLogoSet = (isClone) => {
      const setEl = document.createElement('div');
      setEl.className = 'stack-marquee-set';
      if (isClone) {
        setEl.dataset.clone = 'true';
        setEl.setAttribute('aria-hidden', 'true');
      }

      for (const node of TECH_STACK_NODES) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'stack-logo-btn';
        btn.dataset.techId = node.id;
        btn.setAttribute('aria-label', node.name);
        btn.setAttribute('aria-pressed', 'false');
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-controls', 'stack-detail-panel');
        btn.setAttribute('data-cursor', node.name);
        if (isClone) btn.tabIndex = -1;

        const glyph = document.createElement('span');
        glyph.className = 'stack-logo-glyph';
        glyph.setAttribute('aria-hidden', 'true');
        renderTechGlyph(glyph, node);

        const label = document.createElement('span');
        label.className = 'stack-logo-label';
        label.textContent = node.name;

        btn.append(glyph, label);
        btn.addEventListener('click', (e) => {
          if (suppressNextClick) {
            e.preventDefault();
            suppressNextClick = false;
            return;
          }
          openStackPanel(node, btn);
        });

        setEl.appendChild(btn);
      }
      return setEl;
    };

    // 3 sets: [clone-left][primary][clone-right] for seamless loop & bidirectional swipe
    marqueeTrack.innerHTML = '';
    marqueeTrack.append(buildLogoSet(true), buildLogoSet(false), buildLogoSet(true));

    if (detailCloseBtn) {
      detailCloseBtn.addEventListener('click', () => closeStackPanel({ restoreFocus: true }));
    }

    // Swipe / drag support on mobile and desktop (disabled under reduced motion where native scroll applies)
    if (!reducedMotion) {
      let pointerActive = false;
      let dragging = false;
      let startX = 0;
      let startY = 0;
      let startDragX = 0;
      let activePointerId = null;

      const wrapDragOffset = (val) => {
        const setWidth = marqueeTrack.scrollWidth / 3;
        if (!setWidth) return val;
        const half = setWidth / 2;
        let wrapped = val;
        while (wrapped > half) wrapped -= setWidth;
        while (wrapped < -half) wrapped += setWidth;
        return wrapped;
      };

      marqueeViewport.addEventListener('pointerdown', (e) => {
        if (e.button !== 0 && e.pointerType === 'mouse') return;
        pointerActive = true;
        dragging = false;
        activePointerId = e.pointerId;
        startX = e.clientX;
        startY = e.clientY;
        startDragX = dragX;
      });

      marqueeViewport.addEventListener('pointermove', (e) => {
        if (!pointerActive || e.pointerId !== activePointerId) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        if (!dragging) {
          if (Math.abs(dx) < 6) return;
          if (Math.abs(dy) > Math.abs(dx)) {
            pointerActive = false;
            return;
          }
          dragging = true;
          marqueeViewport.classList.add('is-dragging');
          try {
            marqueeViewport.setPointerCapture(e.pointerId);
          } catch {
            // ignore capture error
          }
        }

        dragX = wrapDragOffset(startDragX + dx);
        marqueeDrag.style.setProperty('--drag-x', `${dragX.toFixed(1)}px`);
      });

      const endDrag = (e) => {
        if (!pointerActive || (activePointerId !== null && e.pointerId !== activePointerId)) return;
        if (dragging) {
          suppressNextClick = true;
          setTimeout(() => {
            suppressNextClick = false;
          }, 80);
          marqueeViewport.classList.remove('is-dragging');
          try {
            marqueeViewport.releasePointerCapture(e.pointerId);
          } catch {
            // ignore
          }
        }
        pointerActive = false;
        dragging = false;
        activePointerId = null;
      };

      marqueeViewport.addEventListener('pointerup', endDrag);
      marqueeViewport.addEventListener('pointercancel', endDrag);
    }
  }

  // =======================================================================
  // 9. PROJECT VAULT FILTERING & CASE-STUDY DETAIL MODAL
  // =======================================================================
  const vaultGrid = document.getElementById('vault-grid');
  const filterButtons = Array.from(document.querySelectorAll('.filter-tab[data-filter]'));
  const projectModal = document.getElementById('project-modal');
  const closeProjectModalBtn = document.getElementById('close-project-modal');
  const modalPreviewWrap = document.getElementById('modal-project-preview-wrap');
  const modalPreviewImg = document.getElementById('modal-project-preview');
  const modalMeta = document.getElementById('modal-project-meta');
  const modalTitle = document.getElementById('modal-project-title');
  const modalSubtitle = document.getElementById('modal-project-subtitle');
  const modalSummary = document.getElementById('modal-project-summary');
  const modalCaseProblem = document.getElementById('modal-case-problem');
  const modalCaseRole = document.getElementById('modal-case-role');
  const modalCaseApproach = document.getElementById('modal-case-approach');
  const modalCaseResult = document.getElementById('modal-case-result');
  const modalHighlights = document.getElementById('modal-project-highlights');
  const modalStack = document.getElementById('modal-project-stack');
  const modalLinks = document.getElementById('modal-project-links');
  let lastFocusedTrigger = null;

  const openProjectModal = (projectId, triggerEl = null) => {
    const project = getProjectById(PROJECTS, projectId);
    if (!project || !projectModal) return;
    lastFocusedTrigger = triggerEl || document.activeElement;

    if (modalPreviewWrap && modalPreviewImg) {
      if (project.previewImg) {
        modalPreviewImg.src = project.previewWebp || project.previewImg;
        modalPreviewImg.alt = `${project.title} — ${project.subtitle} screenshot`;
        modalPreviewWrap.hidden = false;
        wireMediaFrame(modalPreviewWrap);
      } else {
        modalPreviewImg.removeAttribute('src');
        modalPreviewWrap.hidden = true;
      }
    }

    modalMeta.textContent = `${project.categoryLabel} · ${project.year} · ${project.status}`;
    modalTitle.textContent = project.title;
    modalSubtitle.textContent = project.subtitle;
    modalSummary.textContent = project.summary;

    const cs = project.caseStudy || {};
    if (modalCaseProblem) modalCaseProblem.textContent = cs.problem || project.summary;
    if (modalCaseRole) modalCaseRole.textContent = cs.role || project.role || '[ADD ROLE]';
    if (modalCaseApproach) modalCaseApproach.textContent = cs.approach || project.highlights[0] || '';
    if (modalCaseResult) modalCaseResult.textContent = cs.result || '[ADD METRIC]';

    modalHighlights.innerHTML = '';
    for (const bullet of project.highlights) {
      const li = document.createElement('li');
      li.textContent = bullet;
      modalHighlights.appendChild(li);
    }

    modalStack.textContent = `Tech Stack: ${project.stack.join(' · ')}`;

    modalLinks.innerHTML = '';
    if (project.liveUrl) {
      const liveA = document.createElement('a');
      liveA.href = project.liveUrl;
      liveA.target = '_blank';
      liveA.rel = 'noopener noreferrer';
      liveA.className = 'btn-3d btn-3d-primary btn-sm-pill';
      liveA.textContent = project.liveLabel || 'Visit Live Site';
      modalLinks.appendChild(liveA);
    }
    if (project.repoUrl) {
      const repoA = document.createElement('a');
      repoA.href = project.repoUrl;
      repoA.target = '_blank';
      repoA.rel = 'noopener noreferrer';
      repoA.className = 'btn-3d btn-3d-navy btn-sm-pill';
      repoA.textContent = 'View on GitHub';
      modalLinks.appendChild(repoA);
    }

    projectModal.hidden = false;
    closeProjectModalBtn?.focus();
  };

  const closeProjectModal = () => {
    if (projectModal && !projectModal.hidden) {
      projectModal.hidden = true;
      if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === 'function') {
        lastFocusedTrigger.focus();
      }
    }
  };

  if (closeProjectModalBtn) closeProjectModalBtn.addEventListener('click', closeProjectModal);
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) closeProjectModal();
    });
  }

  const renderVault = (category = 'all') => {
    if (!vaultGrid) return;
    const list = filterProjects(PROJECTS, category);
    const featuredItems = list.filter((p) => Boolean(p.featured));
    const regularItems = list.filter((p) => !p.featured);
    const ordered = [...featuredItems, ...regularItems];
    const hasOddTrailingRegular = regularItems.length % 2 === 1;

    vaultGrid.innerHTML = '';

    ordered.forEach((item, idx) => {
      const card = document.createElement('article');
      card.id = `project-${item.id}`;
      card.dataset.projectCardId = item.id;
      const isHighlighted = Boolean(item.featured);
      const isOddSpan =
        !isHighlighted &&
        hasOddTrailingRegular &&
        item === regularItems[regularItems.length - 1];
      card.className = `vault-card${isHighlighted ? ' vault-card-featured card-3d' : ''}${isOddSpan ? ' vault-card-span' : ''} reveal-block is-revealed`;
      if (isHighlighted) {
        card.setAttribute('data-tilt', '');
        bind3DTilt(card);
      }

      if (item.previewImg) {
        const previewBox = document.createElement('button');
        previewBox.type = 'button';
        previewBox.className = 'vault-preview-box media-frame';
        previewBox.setAttribute('data-cursor', 'Case Study');
        previewBox.setAttribute('aria-label', `Inspect ${item.title} case study`);

        const picture = document.createElement('picture');
        if (item.previewWebp) {
          const source = document.createElement('source');
          source.srcset = item.previewWebp;
          source.type = 'image/webp';
          picture.appendChild(source);
        }

        const img = document.createElement('img');
        img.src = item.previewImg;
        img.alt = item.previewAlt || `${item.title} — ${item.subtitle} interface preview`;
        img.width = item.previewWidth || 1280;
        img.height = item.previewHeight || 720;
        img.decoding = 'async';
        img.referrerPolicy = 'no-referrer';

        picture.appendChild(img);
        previewBox.appendChild(picture);

        previewBox.addEventListener('click', () => openProjectModal(item.id, previewBox));
        card.appendChild(previewBox);
        wireMediaFrame(previewBox);
      }

      const bodyWrap = document.createElement('div');
      bodyWrap.className = 'vault-card-body';

      const meta = document.createElement('div');
      meta.className = 'vault-card-meta tabular-nums';
      meta.textContent = isHighlighted
        ? `${item.featuredBadge} · ${item.categoryLabel} · ${item.year}`
        : `${item.categoryLabel} · ${item.year} · ${item.status}`;

      const title = document.createElement('h3');
      title.textContent = item.title;

      const summary = document.createElement('p');
      summary.textContent = item.summary;

      const stack = document.createElement('p');
      stack.className = 'vault-card-stack';
      stack.textContent = item.stack.join(' · ');

      const actions = document.createElement('div');
      actions.className = 'vault-card-actions';

      const detailBtn = document.createElement('button');
      detailBtn.type = 'button';
      detailBtn.className = 'vault-open-btn';
      detailBtn.setAttribute('data-cursor', 'Case Study');
      detailBtn.textContent = 'Inspect details →';
      detailBtn.addEventListener('click', () => openProjectModal(item.id, detailBtn));
      actions.appendChild(detailBtn);

      const extHref = item.liveUrl || item.repoUrl;
      if (extHref) {
        const extLink = document.createElement('a');
        extLink.href = extHref;
        extLink.target = '_blank';
        extLink.rel = 'noopener noreferrer';
        extLink.className = 'vault-ext-link';
        extLink.setAttribute('data-cursor', 'Open');
        extLink.textContent = item.liveUrl ? 'Live Site ↗' : 'GitHub ↗';
        actions.appendChild(extLink);
      }

      bodyWrap.append(meta, title, summary, stack, actions);
      card.appendChild(bodyWrap);
      vaultGrid.appendChild(card);
    });
  };

  if (filterButtons.length > 0 && vaultGrid) {
    const activateFilterTab = (btn, shouldFocus = false) => {
      const cat = btn.getAttribute('data-filter') || 'all';
      for (const b of filterButtons) {
        const active = b === btn;
        b.classList.toggle('active', active);
        b.setAttribute('aria-selected', String(active));
        b.setAttribute('tabindex', active ? '0' : '-1');
      }
      vaultGrid.setAttribute('aria-labelledby', btn.id || '');
      renderVault(cat);
      if (shouldFocus) btn.focus();
    };

    ensureAllProjectsVisible = () => {
      const allBtn = filterButtons.find((b) => b.getAttribute('data-filter') === 'all');
      if (allBtn) activateFilterTab(allBtn, false);
    };

    filterButtons.forEach((btn, idx) => {
      btn.setAttribute('tabindex', btn.classList.contains('active') ? '0' : '-1');
      btn.addEventListener('click', () => activateFilterTab(btn, false));
      btn.addEventListener('keydown', (e) => {
        let targetIdx = null;
        if (e.key === 'ArrowRight') targetIdx = (idx + 1) % filterButtons.length;
        else if (e.key === 'ArrowLeft') targetIdx = (idx - 1 + filterButtons.length) % filterButtons.length;
        else if (e.key === 'Home') targetIdx = 0;
        else if (e.key === 'End') targetIdx = filterButtons.length - 1;
        if (targetIdx !== null) {
          e.preventDefault();
          activateFilterTab(filterButtons[targetIdx], true);
        }
      });
    });

    renderVault('all');
  }

  for (const trigger of document.querySelectorAll('[data-project-id]')) {
    trigger.addEventListener('click', () => {
      const id = trigger.getAttribute('data-project-id');
      if (id) openProjectModal(id, trigger);
    });
  }

  // =======================================================================
  // 10. EMBEDDED VIDEO REELS & YOUTUBE FACADE THEATER MODAL
  // =======================================================================
  const reelsStrip = document.getElementById('reels-strip');
  const reelsPrevBtn = document.getElementById('reels-prev');
  const reelsNextBtn = document.getElementById('reels-next');
  const videoModal = document.getElementById('video-modal');
  const closeVideoModalBtn = document.getElementById('close-video-modal');
  const videoModalPlatform = document.getElementById('video-modal-platform');
  const videoModalTitle = document.getElementById('video-modal-title');
  const videoPlayerStage = document.getElementById('video-player-stage');

  const closeVideoModal = () => {
    if (videoModal) videoModal.hidden = true;
    if (videoPlayerStage) {
      videoPlayerStage.innerHTML = '';
      videoPlayerStage.classList.remove('is-vertical');
    }
    if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === 'function') {
      lastFocusedTrigger.focus();
      lastFocusedTrigger = null;
    }
  };

  const openVideoModal = (item, triggerEl = null) => {
    if (!videoModal || !videoPlayerStage || !item) return;
    lastFocusedTrigger = triggerEl || document.activeElement;
    if (videoModalPlatform) videoModalPlatform.textContent = item.platform;
    if (videoModalTitle) videoModalTitle.textContent = item.title;

    videoPlayerStage.innerHTML = '';
    videoPlayerStage.classList.toggle('is-vertical', item.aspect === 'vertical');

    const spinner = document.createElement('span');
    spinner.className = 'video-stage-spinner';
    spinner.textContent = 'Loading player…';
    videoPlayerStage.appendChild(spinner);

    if (item.kind === 'mp4') {
      const video = document.createElement('video');
      video.src = item.src;
      video.poster = item.poster;
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      video.addEventListener('loadeddata', () => spinner.remove(), { once: true });
      videoPlayerStage.appendChild(video);
    } else {
      const iframe = document.createElement('iframe');
      iframe.src = item.embedUrl;
      iframe.title = item.title;
      iframe.loading = 'lazy';
      iframe.allow =
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      iframe.addEventListener('load', () => spinner.remove(), { once: true });
      videoPlayerStage.appendChild(iframe);
    }

    videoModal.hidden = false;
    closeVideoModalBtn?.focus();
  };

  if (reelsStrip) {
    for (const item of MEDIA_SHOWCASE) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'reel-item';
      btn.setAttribute('data-cursor', 'Play');
      btn.setAttribute('data-media-id', item.id);
      btn.setAttribute('aria-label', `Play ${item.title}`);

      const thumb = document.createElement('div');
      thumb.className = 'reel-thumb media-frame';

      const img = document.createElement('img');
      img.src = item.poster;
      img.alt = `${item.title} video edit thumbnail`;
      img.width = item.width || 720;
      img.height = item.height || 900;
      img.loading = 'lazy';
      img.decoding = 'async';
      img.referrerPolicy = 'no-referrer';

      const scrim = document.createElement('div');
      scrim.className = 'reel-scrim';

      const playBadge = document.createElement('span');
      playBadge.className = 'reel-play-badge';
      playBadge.innerHTML = '<i class="fa-solid fa-play" aria-hidden="true"></i>';

      scrim.appendChild(playBadge);
      thumb.append(img, scrim);
      wireMediaFrame(thumb);

      const meta = document.createElement('div');
      meta.className = 'reel-meta';

      const titleEl = document.createElement('span');
      titleEl.className = 'reel-title';
      titleEl.textContent = item.title;

      const platformEl = document.createElement('span');
      platformEl.className = 'reel-platform';
      platformEl.textContent = item.platform;

      meta.append(titleEl, platformEl);
      btn.append(thumb, meta);
      btn.addEventListener('click', () => openVideoModal(item, btn));
      reelsStrip.appendChild(btn);
    }

    const syncReelsArrows = () => {
      const maxScroll = Math.max(0, reelsStrip.scrollWidth - reelsStrip.clientWidth);
      if (reelsPrevBtn) reelsPrevBtn.disabled = reelsStrip.scrollLeft <= 2;
      if (reelsNextBtn) reelsNextBtn.disabled = reelsStrip.scrollLeft >= maxScroll - 2;
    };

    const scrollReelsBy = (dir) => {
      const firstItem = reelsStrip.querySelector('.reel-item');
      const step = firstItem ? firstItem.getBoundingClientRect().width + 22 : 322;
      reelsStrip.scrollBy({
        left: dir * step,
        behavior: reducedMotion ? 'auto' : 'smooth',
      });
    };

    if (reelsPrevBtn) reelsPrevBtn.addEventListener('click', () => scrollReelsBy(-1));
    if (reelsNextBtn) reelsNextBtn.addEventListener('click', () => scrollReelsBy(1));
    reelsStrip.addEventListener('scroll', syncReelsArrows, { passive: true });
    window.addEventListener('resize', syncReelsArrows);
    requestAnimationFrame(syncReelsArrows);
  }

  if (closeVideoModalBtn) closeVideoModalBtn.addEventListener('click', closeVideoModal);
  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeVideoModal();
    });
  }

  // =======================================================================
  // 11. CERTIFICATE LIGHTBOX MODAL (SHARED BY INDEX.HTML & ABOUT.HTML)
  // =======================================================================
  const certModal = document.getElementById('cert-modal');
  const certModalImg = document.getElementById('cert-modal-img');
  const certModalFrame = certModalImg?.closest('.media-frame');
  const certModalMeta = document.getElementById('cert-modal-meta');
  const certModalTitle = document.getElementById('cert-modal-title');
  const certModalDesc = document.getElementById('cert-modal-desc');
  const certModalActions = document.getElementById('cert-modal-actions');
  const closeCertModalBtn = document.getElementById('close-cert-modal');

  const closeCertModal = () => {
    if (certModal && !certModal.hidden) {
      certModal.hidden = true;
      if (certModalImg) certModalImg.removeAttribute('src');
      if (certModalActions) {
        certModalActions.innerHTML = '';
        certModalActions.hidden = true;
      }
      if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === 'function') {
        lastFocusedTrigger.focus();
        lastFocusedTrigger = null;
      }
    }
  };

  for (const thumb of document.querySelectorAll('[data-cert-title]')) {
    thumb.addEventListener('click', () => {
      const src = thumb.getAttribute('data-cert-src') || '';
      const title = thumb.getAttribute('data-cert-title') || 'Certificate';
      const meta = thumb.getAttribute('data-cert-meta') || '';
      const desc = thumb.getAttribute('data-cert-desc') || '';
      const verifyUrl = thumb.getAttribute('data-cert-verify');
      const verifyLabel = thumb.getAttribute('data-cert-verify-label') || 'Verify Credential ↗';

      if (!certModal || !certModalTitle) return;
      lastFocusedTrigger = thumb;

      if (certModalFrame && certModalImg) {
        if (src) {
          certModalImg.src = src;
          certModalImg.alt = `${title} credential image`;
          certModalFrame.hidden = false;
          wireMediaFrame(certModalFrame);
        } else {
          certModalImg.removeAttribute('src');
          certModalFrame.hidden = true;
        }
      }

      if (certModalMeta) certModalMeta.textContent = meta;
      certModalTitle.textContent = title;
      if (certModalDesc) certModalDesc.textContent = desc;

      if (certModalActions) {
        certModalActions.innerHTML = '';
        if (verifyUrl) {
          const verifyA = document.createElement('a');
          verifyA.href = verifyUrl;
          verifyA.target = '_blank';
          verifyA.rel = 'noopener noreferrer';
          verifyA.className = 'btn-3d btn-3d-primary btn-sm-pill';
          verifyA.textContent = verifyLabel;
          certModalActions.appendChild(verifyA);
          certModalActions.hidden = false;
        } else {
          certModalActions.hidden = true;
        }
      }

      certModal.hidden = false;
      closeCertModalBtn?.focus();
    });
  }

  if (closeCertModalBtn) closeCertModalBtn.addEventListener('click', closeCertModal);
  if (certModal) {
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) closeCertModal();
    });
  }

  // =======================================================================
  // 12. CONTACT COMPOSER: PRESELECTION, VALIDATION, WORKER FETCH & FALLBACK
  // =======================================================================
  const copyTextSafely = async (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch {
        // fall through
      }
    }
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try {
      ok = document.execCommand('copy');
    } catch {
      ok = false;
    }
    document.body.removeChild(ta);
    return ok;
  };

  const contactForm = document.getElementById('contact-form');
  const contactFormFields = document.getElementById('contact-form-fields');
  const contactSuccessPanel = document.getElementById('contact-success-panel');
  const contactSuccessHeading = document.getElementById('contact-success-heading');
  const contactSendAnotherBtn = document.getElementById('contact-send-another');
  const topicRadios = Array.from(document.querySelectorAll('#contact-topic-group input[name="topic"]'));
  const contactNameInput = document.getElementById('contact-name');
  const contactEmailInput = document.getElementById('contact-email');
  const contactCompanyInput = document.getElementById('contact-company');
  const contactMessageInput = document.getElementById('contact-message');
  const contactWebsiteInput = document.getElementById('contact-website');
  const contactMessageCounter = document.getElementById('contact-message-counter');
  const contactStatus = document.getElementById('contact-status');
  const copyInquiryBtn = document.getElementById('copy-inquiry-btn');
  const submitInquiryBtn = document.getElementById('contact-submit-btn');
  const submitLabelEl = submitInquiryBtn?.querySelector('.form-submit-label');

  const fieldMap = {
    name: {
      input: contactNameInput,
      errorEl: document.getElementById('contact-name-error'),
    },
    email: {
      input: contactEmailInput,
      errorEl: document.getElementById('contact-email-error'),
    },
    message: {
      input: contactMessageInput,
      errorEl: document.getElementById('contact-message-error'),
    },
  };

  let isSubmittingContact = false;
  let cooldownUntil = 0;
  let cooldownTimerId = null;

  // Inline contact copy buttons (email & phone) with 1.5s "Copied" feedback
  for (const copyBtn of document.querySelectorAll('.contact-copy-chip[data-copy-value]')) {
    let resetTimer = null;
    copyBtn.addEventListener('click', async () => {
      const value = copyBtn.getAttribute('data-copy-value') || '';
      if (!value) return;
      const ok = await copyTextSafely(value);
      const labelSpan = copyBtn.querySelector('span');
      const iconEl = copyBtn.querySelector('i');
      if (!ok) return;
      if (resetTimer) clearTimeout(resetTimer);
      copyBtn.classList.add('is-copied');
      if (labelSpan) labelSpan.textContent = 'Copied';
      if (iconEl) iconEl.className = 'fa-solid fa-check';
      resetTimer = setTimeout(() => {
        copyBtn.classList.remove('is-copied');
        if (labelSpan) labelSpan.textContent = 'Copy';
        if (iconEl) iconEl.className = 'fa-regular fa-copy';
      }, 1500);
    });
  }

  const getSelectedInquiryType = () => {
    const checked = topicRadios.find((r) => r.checked);
    return checked?.value || 'Dec 2026 OJT / Internship';
  };

  const syncMessagePlaceholder = () => {
    if (!contactMessageInput) return;
    contactMessageInput.placeholder = getInquiryPlaceholder(getSelectedInquiryType());
  };

  const syncMessageCounter = () => {
    if (!contactMessageInput || !contactMessageCounter) return;
    const len = contactMessageInput.value.length;
    contactMessageCounter.textContent = `${len} / ${MAX_CONTACT_MESSAGE_LENGTH}`;
    contactMessageCounter.classList.toggle('is-near-limit', len >= 900 && len < MAX_CONTACT_MESSAGE_LENGTH);
    contactMessageCounter.classList.toggle('is-at-limit', len >= MAX_CONTACT_MESSAGE_LENGTH);
  };

  const preselectInquiry = (value) => {
    if (topicRadios.length === 0 || !value) return;
    const options = topicRadios.map((r) => r.value);
    const needle = value.trim().toLowerCase();
    const match =
      options.find((v) => v.toLowerCase() === needle) ||
      options.find((v) => v.toLowerCase().includes(needle));
    if (match) {
      for (const radio of topicRadios) {
        radio.checked = radio.value === match;
      }
      syncMessagePlaceholder();
    }
  };

  if (topicRadios.length > 0) {
    const options = topicRadios.map((r) => r.value);
    const resolved = resolveInquiryFromSearch(window.location.search, options);
    if (resolved) preselectInquiry(resolved);
    syncMessagePlaceholder();

    topicRadios.forEach((radio, idx) => {
      radio.addEventListener('change', syncMessagePlaceholder);
      radio.addEventListener('keydown', (e) => {
        let nextIdx = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          nextIdx = (idx + 1) % topicRadios.length;
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          nextIdx = (idx - 1 + topicRadios.length) % topicRadios.length;
        }
        if (nextIdx !== null) {
          e.preventDefault();
          topicRadios[nextIdx].checked = true;
          topicRadios[nextIdx].focus();
          syncMessagePlaceholder();
        }
      });
    });
  }

  for (const ctaTrigger of document.querySelectorAll('[data-inquiry]')) {
    ctaTrigger.addEventListener('click', () => {
      const val = ctaTrigger.getAttribute('data-inquiry');
      if (val) preselectInquiry(val);
    });
  }

  const setFieldError = (fieldKey, message) => {
    const entry = fieldMap[fieldKey];
    if (!entry || !entry.input) return;
    const hasError = Boolean(message);
    entry.input.setAttribute('aria-invalid', hasError ? 'true' : 'false');
    if (entry.errorEl) entry.errorEl.textContent = message || '';
  };

  const clearAllFieldErrors = () => {
    setFieldError('name', '');
    setFieldError('email', '');
    setFieldError('message', '');
  };

  for (const [key, entry] of Object.entries(fieldMap)) {
    if (!entry.input) continue;
    entry.input.addEventListener('blur', () => {
      const err = validateContactField(key, entry.input.value);
      setFieldError(key, err);
    });
    entry.input.addEventListener('input', () => {
      if (key === 'message') syncMessageCounter();
      if (entry.input.getAttribute('aria-invalid') === 'true') {
        const err = validateContactField(key, entry.input.value);
        setFieldError(key, err);
      }
    });
  }

  syncMessageCounter();

  const readContactFields = () => ({
    type: getSelectedInquiryType(),
    topic: getSelectedInquiryType(),
    name: contactNameInput?.value || '',
    email: contactEmailInput?.value || '',
    company: contactCompanyInput?.value || '',
    message: contactMessageInput?.value || '',
    website: contactWebsiteInput?.value || '',
  });

  const setContactStatus = (msg, state = '') => {
    if (!contactStatus) return;
    contactStatus.textContent = msg;
    contactStatus.classList.remove('is-error', 'is-success');
    if (state === 'error') contactStatus.classList.add('is-error');
    if (state === 'success') contactStatus.classList.add('is-success');
  };

  const triggerMailtoLink = (mailtoUrl) => {
    const link = document.createElement('a');
    link.href = mailtoUrl;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const syncCooldownButton = () => {
    if (!submitInquiryBtn || !submitLabelEl) return;
    if (isSubmittingContact) return;
    const remainingMs = cooldownUntil - Date.now();
    if (remainingMs > 0) {
      const secs = Math.ceil(remainingMs / 1000);
      submitInquiryBtn.disabled = true;
      submitLabelEl.textContent = `Wait ${secs}s`;
    } else {
      submitInquiryBtn.disabled = false;
      submitLabelEl.textContent = 'Send Message';
      if (cooldownTimerId !== null) {
        clearInterval(cooldownTimerId);
        cooldownTimerId = null;
      }
    }
  };

  const startContactCooldown = () => {
    cooldownUntil = Date.now() + CONTACT_COOLDOWN_MS;
    if (cooldownTimerId !== null) clearInterval(cooldownTimerId);
    cooldownTimerId = setInterval(syncCooldownButton, 500);
    syncCooldownButton();
  };

  const showContactSuccess = () => {
    clearAllFieldErrors();
    setContactStatus('');
    if (contactFormFields) contactFormFields.hidden = true;
    if (contactSuccessPanel) {
      contactSuccessPanel.hidden = false;
      contactSuccessHeading?.focus();
    }
  };

  const restoreContactForm = () => {
    if (contactForm) contactForm.reset();
    clearAllFieldErrors();
    syncMessagePlaceholder();
    syncMessageCounter();
    setContactStatus('');
    if (contactSuccessPanel) contactSuccessPanel.hidden = true;
    if (contactFormFields) contactFormFields.hidden = false;
    syncCooldownButton();
    contactNameInput?.focus();
  };

  if (contactSendAnotherBtn) {
    contactSendAnotherBtn.addEventListener('click', restoreContactForm);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (isSubmittingContact) return;

      const remainingMs = cooldownUntil - Date.now();
      if (remainingMs > 0) {
        const secs = Math.ceil(remainingMs / 1000);
        setContactStatus(`Please wait ${secs}s before sending another message.`, 'error');
        return;
      }

      const raw = readContactFields();
      const validation = validateInquiryFields(raw);

      if (validation.isSpam) {
        contactForm.reset();
        syncMessagePlaceholder();
        syncMessageCounter();
        showContactSuccess();
        return;
      }

      setFieldError('name', validation.errors.name);
      setFieldError('email', validation.errors.email);
      setFieldError('message', validation.errors.message);

      if (!validation.ok) {
        setContactStatus(validation.error, 'error');
        const firstEl = validation.firstInvalidField ? fieldMap[validation.firstInvalidField]?.input : null;
        firstEl?.focus();
        return;
      }

      isSubmittingContact = true;
      if (submitInquiryBtn) {
        submitInquiryBtn.disabled = true;
        submitInquiryBtn.classList.add('is-sending');
        submitInquiryBtn.setAttribute('aria-busy', 'true');
      }
      if (submitLabelEl) submitLabelEl.textContent = 'Sending...';
      setContactStatus('Sending your message...');

      try {
        const result = await submitInquiryRequest(
          { ...validation.cleaned, website: raw.website },
          { endpoint: FORM_ENDPOINT, timeoutMs: CONTACT_TIMEOUT_MS }
        );

        if (result.status === 'honeypot' || result.status === 'sent') {
          startContactCooldown();
          showContactSuccess();
          return;
        }

        // Unconfigured placeholder, timeout, or network error -> mailto fallback & keep user text
        triggerMailtoLink(result.mailtoUrl);
        if (result.reason === 'unconfigured') {
          setContactStatus(
            'Direct form delivery is not connected yet — opened a prefilled email to mereziko@gmail.com instead (or click Copy Note).',
            'success'
          );
        } else if (result.reason === 'timeout') {
          setContactStatus(
            'Request timed out after 10 seconds — opened a prefilled email to mereziko@gmail.com instead. Your message is still here if you want to copy it.',
            'error'
          );
        } else {
          setContactStatus(
            'Could not reach the form server — opened a prefilled email to mereziko@gmail.com instead. Your message is still here if you want to copy it.',
            'error'
          );
        }
      } finally {
        isSubmittingContact = false;
        if (submitInquiryBtn) {
          submitInquiryBtn.classList.remove('is-sending');
          submitInquiryBtn.removeAttribute('aria-busy');
        }
        syncCooldownButton();
      }
    });
  }

  if (copyInquiryBtn) {
    copyInquiryBtn.addEventListener('click', async () => {
      const fields = readContactFields();
      if (!fields.name.trim() || !fields.message.trim()) {
        setContactStatus('Enter your name and message first to copy the note.', 'error');
        return;
      }
      const { subject, bodyText } = buildInquiryPayload(fields);
      const ok = await copyTextSafely(`To: mereziko@gmail.com\nSubject: ${subject}\n\n${bodyText}`);
      if (ok) {
        copyInquiryBtn.classList.add('is-feedback-pop');
        setContactStatus('Formatted inquiry copied to clipboard for easy pasting.', 'success');
        setTimeout(() => copyInquiryBtn.classList.remove('is-feedback-pop'), 1800);
      } else {
        setContactStatus('Please email mereziko@gmail.com directly.', 'error');
      }
    });
  }

  // =======================================================================
  // 13. 2048 MINI-GAME MODAL (QUIET ACCESS VIA FOOTER / SIDEBAR)
  // =======================================================================
  const gameModal = document.getElementById('game-modal');
  const openGameBtns = Array.from(document.querySelectorAll('#open-game-btn, .open-game-trigger'));
  const closeGameBtn = document.getElementById('close-game');
  const resetGameBtn = document.getElementById('reset-game');
  const gridEl = document.getElementById('game-grid');
  const scoreEl = document.getElementById('game-score');
  const gameOverBanner = document.getElementById('game-over-banner');
  const finalScoreEl = document.getElementById('game-final-score');

  let board = [];
  let score = 0;

  const spawnTile = () => {
    const empty = [];
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c] === 0) empty.push({ r, c });
      }
    }
    if (empty.length > 0) {
      const rand = empty[Math.floor(Math.random() * empty.length)];
      board[rand.r][rand.c] = Math.random() < 0.9 ? 2 : 4;
    }
  };

  const renderBoard = () => {
    if (!gridEl || !scoreEl) return;
    gridEl.innerHTML = '';
    scoreEl.textContent = String(score);
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        const val = board[r][c];
        const cell = document.createElement('div');
        cell.className = `game-cell ${val > 0 ? `tile-${val}` : ''}`;
        cell.textContent = val > 0 ? String(val) : '';
        gridEl.appendChild(cell);
      }
    }
  };

  const initGame = () => {
    board = Array.from({ length: 4 }, () => Array(4).fill(0));
    score = 0;
    if (gameOverBanner) gameOverBanner.hidden = true;
    spawnTile();
    spawnTile();
    renderBoard();
  };

  const handleMove = (dir) => {
    const res = moveBoardMatrix(board, dir);
    if (!res.changed) return;
    board = res.board;
    score += res.gained;
    spawnTile();
    renderBoard();
    if (isBoardGameOver(board) && gameOverBanner && finalScoreEl) {
      finalScoreEl.textContent = `Final Score: ${score}`;
      gameOverBanner.hidden = false;
    }
  };

  if (gameModal) {
    for (const triggerBtn of openGameBtns) {
      triggerBtn.addEventListener('click', () => {
        gameModal.hidden = false;
        initGame();
        setSidebarOpen(false);
        closeGameBtn?.focus();
      });
    }
  }
  if (closeGameBtn && gameModal) {
    closeGameBtn.addEventListener('click', () => {
      gameModal.hidden = true;
    });
  }
  if (gameModal) {
    gameModal.addEventListener('click', (e) => {
      if (e.target === gameModal) gameModal.hidden = true;
    });
  }
  if (resetGameBtn) resetGameBtn.addEventListener('click', initGame);

  for (const dirBtn of document.querySelectorAll('.dir-btn[data-dir]')) {
    dirBtn.addEventListener('click', () => {
      const dir = dirBtn.getAttribute('data-dir');
      if (dir) handleMove(dir);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (gameModal && !gameModal.hidden) {
        trapTabFocus(gameModal, e);
        return;
      }
      if (certModal && !certModal.hidden) {
        trapTabFocus(certModal, e);
        return;
      }
      if (videoModal && !videoModal.hidden) {
        trapTabFocus(videoModal, e);
        return;
      }
      if (projectModal && !projectModal.hidden) {
        trapTabFocus(projectModal, e);
        return;
      }
      if (body.classList.contains('sidebar-open') && sidebarEl) {
        trapTabFocus(sidebarEl, e);
        return;
      }
    }

    if (e.key === 'Escape') {
      if (body.classList.contains('sidebar-open')) setSidebarOpen(false, { restoreFocus: true });
      closeStackPanel({ restoreFocus: true });
      closeProjectModal();
      closeVideoModal();
      closeCertModal();
      if (gameModal && !gameModal.hidden) gameModal.hidden = true;
      return;
    }

    if (!gameModal || gameModal.hidden) return;
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      handleMove('up');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      handleMove('down');
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handleMove('left');
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleMove('right');
    }
  });

  initMascot();
});
