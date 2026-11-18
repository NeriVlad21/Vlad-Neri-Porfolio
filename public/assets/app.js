import {
  ROLE_SLIDES,
  TECH_STACK_NODES,
  SECTION_THEMES,
  PROJECTS,
  MEDIA_SHOWCASE,
  filterProjects,
  getProjectById,
  computeActiveSectionId,
  buildInquiryPayload,
  moveBoardMatrix,
  isBoardGameOver,
} from './portfolio-logic.js';

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  // Helper: Loading Shimmer Removal & Failsafe when images finish or fail
  const wireMediaFrame = (container) => {
    if (!container) return;
    const img = container.querySelector('img');
    if (!img) return;
    const done = () => {
      container.classList.remove('is-loading');
      if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) {
        container.classList.add('is-broken');
      } else {
        container.classList.remove('is-broken');
      }
    };
    if (img.complete) {
      done();
      return;
    }
    container.classList.add('is-loading');
    img.addEventListener('load', done, { once: true });
    img.addEventListener('error', done, { once: true });
    setTimeout(() => container.classList.remove('is-loading'), 1200);
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
      el.classList.contains('stack-node-btn') ||
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
  // 2. PULL-CHAIN THEME TOGGLE (OBSIDIAN NIGHT <-> ICE CREAM DAY)
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
  // 3. DUAL-MODE STARFIELD: 30% FASTER STAR WARS WARP + VLADGPT SKY
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
    let warpOpacity = 1;

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

        // Subtle vladgpt.page.gd twinkling dots backdrop (prominent in lower sections)
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

        // 30% faster Star Wars warp lines (dominant in landing & tech stack sections)
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
  // 4. SCROLL-TRIGGERED SECTION & CARD REVEALS
  // =======================================================================
  const revealTargets = Array.from(document.querySelectorAll('.reveal-block'));
  const observeReveals = (elements) => {
    if (reducedMotion || !('IntersectionObserver' in window)) {
      for (const el of elements) el.classList.add('is-revealed');
      return null;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    for (const el of elements) observer.observe(el);
    return observer;
  };

  const revealObserver = observeReveals(revealTargets);

  // =======================================================================
  // 5. LIGHTWEIGHT SINGLE-SHAPE PRECISION CURSOR (NO DOUBLE CIRCLES)
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
  // 6. NAVBAR NAME TRIGGER (SCROLL TOP + TOGGLE SIDEBAR) & THREAD SYNC
  // =======================================================================
  const sidebarEl = document.getElementById('llm-sidebar');
  const brandNavTrigger = document.getElementById('brand-nav-trigger');
  const sidebarCloseBtn = document.getElementById('sidebar-close-btn');
  const sidebarBackdrop = document.getElementById('sidebar-backdrop');
  const threadLinks = Array.from(document.querySelectorAll('.thread-item[data-section]'));
  const scrollSections = Array.from(document.querySelectorAll('[data-scroll-section]'));

  const setSidebarOpen = (open) => {
    body.classList.toggle('sidebar-open', open);
    if (sidebarEl) sidebarEl.setAttribute('aria-hidden', String(!open));
    if (brandNavTrigger) brandNavTrigger.setAttribute('aria-expanded', String(open));
    if (sidebarBackdrop) sidebarBackdrop.hidden = !open;
  };

  setSidebarOpen(false);

  if (brandNavTrigger) {
    brandNavTrigger.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
      const next = !body.classList.contains('sidebar-open');
      setSidebarOpen(next);
    });
  }

  if (sidebarCloseBtn) sidebarCloseBtn.addEventListener('click', () => setSidebarOpen(false));
  if (sidebarBackdrop) sidebarBackdrop.addEventListener('click', () => setSidebarOpen(false));

  window.addEventListener('resize', updateScrollProgress);

  const applySectionBackgroundMode = (sectionId) => {
    const theme = SECTION_THEMES[sectionId] || SECTION_THEMES.about;
    activeBgTheme = theme;
    body.setAttribute('data-active-section', sectionId);
  };

  const setActiveThread = (sectionId) => {
    for (const link of threadLinks) {
      const match = link.getAttribute('data-section') === sectionId;
      link.classList.toggle('active', match);
      if (match) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
    applySectionBackgroundMode(sectionId);
  };

  for (const link of threadLinks) {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('data-section');
      const target = id ? document.getElementById(id) : null;
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
        setActiveThread(id);
        setSidebarOpen(false);
      }
    });
  }

  const updateScrollSpy = () => {
    const rects = scrollSections.map((el) => ({
      id: el.id,
      top: el.getBoundingClientRect().top + window.scrollY,
    }));
    const activeId = computeActiveSectionId(rects, window.scrollY, 200);
    if (activeId) setActiveThread(activeId);
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
  // 7. INTERACTIVE TECH STACK ICON DOCK + INLINE DETAIL & CATEGORY SYNC
  // =======================================================================
  const stackRack = document.getElementById('stack-rack');
  const tooltipName = document.getElementById('stack-tooltip-name');
  const tooltipRole = document.getElementById('stack-tooltip-role');
  const tooltipDetail = document.getElementById('stack-tooltip-detail');
  const stackGroups = Array.from(document.querySelectorAll('.stack-group[data-group]'));

  if (stackRack && Array.isArray(TECH_STACK_NODES)) {
    const stackNodeEntries = [];

    const setActiveStackNode = (node, btnEl) => {
      for (const entry of stackNodeEntries) {
        const isCurrent = entry.btn === btnEl;
        entry.btn.classList.toggle('is-active', isCurrent);
        entry.btn.setAttribute('aria-selected', String(isCurrent));
      }
      if (tooltipName) tooltipName.textContent = node.name;
      if (tooltipRole) tooltipRole.textContent = node.role;
      if (tooltipDetail) tooltipDetail.textContent = node.details || '';
      for (const groupEl of stackGroups) {
        groupEl.classList.toggle('is-group-active', groupEl.dataset.group === node.groupId);
      }
    };

    TECH_STACK_NODES.forEach((node, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `stack-node-btn${idx === 2 ? ' is-active' : ''}`;
      btn.dataset.nodeId = node.id;
      btn.setAttribute('role', 'option');
      btn.setAttribute('aria-selected', String(idx === 2));
      btn.setAttribute('aria-label', `${node.name} — ${node.role}`);
      btn.setAttribute('data-cursor', node.name);
      btn.setAttribute('data-tilt', '');

      const icon = document.createElement('i');
      icon.className = node.icon;
      icon.style.color = node.color;
      icon.setAttribute('aria-hidden', 'true');

      btn.appendChild(icon);
      bind3DTilt(btn);

      btn.addEventListener('mouseenter', () => setActiveStackNode(node, btn));
      btn.addEventListener('focus', () => setActiveStackNode(node, btn));
      btn.addEventListener('click', () => setActiveStackNode(node, btn));
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          e.preventDefault();
          const delta = e.key === 'ArrowRight' ? 1 : -1;
          const nextIdx = (idx + delta + stackNodeEntries.length) % stackNodeEntries.length;
          const nextEntry = stackNodeEntries[nextIdx];
          setActiveStackNode(nextEntry.node, nextEntry.btn);
          nextEntry.btn.focus();
        }
      });

      stackNodeEntries.push({ node, btn });
      stackRack.appendChild(btn);
    });

    for (const groupEl of stackGroups) {
      groupEl.addEventListener('click', () => {
        const match = stackNodeEntries.find((entry) => entry.node.groupId === groupEl.dataset.group);
        if (match) setActiveStackNode(match.node, match.btn);
      });
    }

    if (stackNodeEntries[2]) {
      setActiveStackNode(stackNodeEntries[2].node, stackNodeEntries[2].btn);
    }
  }

  // =======================================================================
  // 8. PROJECT VAULT FILTERING & PROJECT DETAIL MODAL WITH SCREENSHOTS
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
  const modalHighlights = document.getElementById('modal-project-highlights');
  const modalStack = document.getElementById('modal-project-stack');
  const modalLinks = document.getElementById('modal-project-links');

  const openProjectModal = (projectId) => {
    const project = getProjectById(PROJECTS, projectId);
    if (!project || !projectModal) return;

    if (modalPreviewWrap && modalPreviewImg) {
      if (project.previewImg) {
        modalPreviewImg.src = project.previewImg;
        modalPreviewImg.alt = `${project.title} screenshot`;
        modalPreviewWrap.hidden = false;
        wireMediaFrame(modalPreviewWrap);
      } else {
        modalPreviewImg.removeAttribute('src');
        modalPreviewWrap.hidden = true;
      }
    }

    modalMeta.textContent = `${project.categoryLabel} · ${project.year} · ${project.status}`;
    modalTitle.textContent = project.title;
    modalSubtitle.textContent = `${project.subtitle} — ${project.role}`;
    modalSummary.textContent = project.summary;

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
    if (projectModal) projectModal.hidden = true;
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

    for (const item of ordered) {
      const card = document.createElement('article');
      const isHighlighted = Boolean(item.featured);
      const isOddSpan =
        !isHighlighted &&
        hasOddTrailingRegular &&
        item === regularItems[regularItems.length - 1];
      card.className = `vault-card${isHighlighted ? ' vault-card-featured card-3d' : ''}${isOddSpan ? ' vault-card-span' : ''} reveal-block`;
      if (isHighlighted) {
        card.setAttribute('data-tilt', '');
        bind3DTilt(card);
      }

      if (item.previewImg) {
        const previewBox = document.createElement('div');
        previewBox.className = `vault-preview-box media-frame${item.previewFit === 'contain' ? ' is-contain' : ''}`;
        previewBox.setAttribute('role', 'button');
        previewBox.setAttribute('tabindex', '0');
        previewBox.setAttribute('data-cursor', 'Specs');
        previewBox.setAttribute('aria-label', `Inspect ${item.title}`);

        const img = document.createElement('img');
        img.src = item.previewImg;
        img.alt = `${item.title} preview screenshot`;
        img.referrerPolicy = 'no-referrer';
        previewBox.appendChild(img);

        previewBox.addEventListener('click', () => openProjectModal(item.id));
        previewBox.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openProjectModal(item.id);
          }
        });
        card.appendChild(previewBox);
        wireMediaFrame(previewBox);
      } else {
        const fallback = document.createElement('div');
        fallback.className = 'vault-fallback-box';
        fallback.setAttribute('role', 'button');
        fallback.setAttribute('tabindex', '0');
        fallback.setAttribute('data-cursor', 'Specs');
        fallback.innerHTML =
          '<div class="vault-fallback-top"><span>Streamlit Cloud · ITE 398</span><span class="tabular-nums">2025</span></div>' +
          '<div class="vault-fallback-mid">' +
          '  <div><strong class="tabular-nums">~100</strong><span>Dishes indexed</span></div>' +
          '  <div><strong class="tabular-nums">100</strong><span>Real testers</span></div>' +
          '  <div><strong class="tabular-nums">SQLite</strong><span>Data store</span></div>' +
          '</div>' +
          '<div class="vault-fallback-foot">Pandas ingestion &amp; ingredient-to-dish recommendation engine →</div>';
        fallback.addEventListener('click', () => openProjectModal(item.id));
        fallback.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openProjectModal(item.id);
          }
        });
        card.appendChild(fallback);
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
      detailBtn.setAttribute('data-cursor', 'Specs');
      detailBtn.textContent = 'Inspect details →';
      detailBtn.addEventListener('click', () => openProjectModal(item.id));
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

      if (revealObserver) {
        revealObserver.observe(card);
      } else {
        card.classList.add('is-revealed');
      }
    }
  };

  for (const btn of filterButtons) {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-filter') || 'all';
      for (const b of filterButtons) {
        const active = b === btn;
        b.classList.toggle('active', active);
        b.setAttribute('aria-selected', String(active));
      }
      renderVault(cat);
    });
  }

  for (const trigger of document.querySelectorAll('[data-project-id]')) {
    trigger.addEventListener('click', () => {
      const id = trigger.getAttribute('data-project-id');
      if (id) openProjectModal(id);
    });
  }

  renderVault('all');

  // =======================================================================
  // 9. EMBEDDED VIDEO REELS & YOUTUBE THEATER MODAL
  // =======================================================================
  const mediaGrid = document.getElementById('media-grid');
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
  };

  const openVideoModal = (item) => {
    if (!videoModal || !videoPlayerStage || !item) return;
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

  if (mediaGrid) {
    for (const item of MEDIA_SHOWCASE) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'media-card card-3d reveal-block';
      btn.setAttribute('data-tilt', '');
      btn.setAttribute('data-cursor', 'Play');
      btn.setAttribute('data-media-id', item.id);
      btn.setAttribute('aria-label', `Play ${item.title}`);
      bind3DTilt(btn);

      const thumbBox = document.createElement('div');
      thumbBox.className = 'media-thumb-box media-frame';

      const img = document.createElement('img');
      img.src = item.poster;
      img.alt = `${item.title} preview`;
      img.referrerPolicy = 'no-referrer';

      const scrim = document.createElement('div');
      scrim.className = 'media-thumb-scrim';

      const playBadge = document.createElement('span');
      playBadge.className = 'media-play-badge';
      playBadge.innerHTML = '<i class="fa-solid fa-play" aria-hidden="true"></i>';

      scrim.appendChild(playBadge);
      thumbBox.append(img, scrim);
      wireMediaFrame(thumbBox);

      const info = document.createElement('div');
      info.className = 'media-card-info';

      const platformEl = document.createElement('span');
      platformEl.className = 'media-card-platform';
      platformEl.textContent = item.platform;

      const titleEl = document.createElement('span');
      titleEl.className = 'media-card-title';
      titleEl.textContent = item.title;

      info.append(platformEl, titleEl);
      btn.append(thumbBox, info);
      btn.addEventListener('click', () => openVideoModal(item));
      mediaGrid.appendChild(btn);

      if (revealObserver) {
        revealObserver.observe(btn);
      } else {
        btn.classList.add('is-revealed');
      }
    }
  }

  if (closeVideoModalBtn) closeVideoModalBtn.addEventListener('click', closeVideoModal);
  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeVideoModal();
    });
  }

  // =======================================================================
  // 10. CERTIFICATE LIGHTBOX MODAL WITH CLICK-TO-VIEW CREDENTIAL DETAILS
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
    if (certModal) certModal.hidden = true;
    if (certModalImg) certModalImg.removeAttribute('src');
    if (certModalActions) {
      certModalActions.innerHTML = '';
      certModalActions.hidden = true;
    }
  };

  for (const thumb of document.querySelectorAll('[data-cert-src]')) {
    thumb.addEventListener('click', () => {
      const src = thumb.getAttribute('data-cert-src');
      const title = thumb.getAttribute('data-cert-title') || 'Certificate';
      const meta = thumb.getAttribute('data-cert-meta') || '';
      const desc = thumb.getAttribute('data-cert-desc') || '';
      const verifyUrl = thumb.getAttribute('data-cert-verify');

      if (certModal && certModalImg && certModalTitle && src) {
        certModalImg.src = src;
        certModalImg.alt = title;
        wireMediaFrame(certModalFrame);
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
            verifyA.textContent = 'Verify CCP Credential ↗';
            certModalActions.appendChild(verifyA);
            certModalActions.hidden = false;
          } else {
            certModalActions.hidden = true;
          }
        }

        certModal.hidden = false;
        closeCertModalBtn?.focus();
      }
    });
  }

  if (closeCertModalBtn) closeCertModalBtn.addEventListener('click', closeCertModal);
  if (certModal) {
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) closeCertModal();
    });
  }

  // =======================================================================
  // 11. CONTACT COMPOSER WITH CLIPBOARD FALLBACK
  // =======================================================================
  const copyTextSafely = async (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch {
        // fall through to textarea copy
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
  const contactStatus = document.getElementById('contact-status');
  const copyInquiryBtn = document.getElementById('copy-inquiry-btn');

  const readContactFields = () => ({
    topic: document.getElementById('contact-topic')?.value || 'Dec 2026 OJT / Internship',
    name: document.getElementById('contact-name')?.value.trim() || '',
    email: document.getElementById('contact-email')?.value.trim() || '',
    message: document.getElementById('contact-message')?.value.trim() || '',
  });

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const fields = readContactFields();
      if (!fields.name || !fields.email || !fields.message) {
        if (contactStatus) contactStatus.textContent = 'Please complete your name, email, and message first.';
        return;
      }

      const { mailtoUrl } = buildInquiryPayload(fields);
      window.location.href = mailtoUrl;

      if (contactStatus) {
        contactStatus.textContent = 'Opening your mail app addressed to mereziko@gmail.com (or click Copy Note).';
      }
    });
  }

  if (copyInquiryBtn) {
    copyInquiryBtn.addEventListener('click', async () => {
      const fields = readContactFields();
      if (!fields.name || !fields.message) {
        if (contactStatus) contactStatus.textContent = 'Enter your name and message first to copy the note.';
        return;
      }
      const { subject, bodyText } = buildInquiryPayload(fields);
      const ok = await copyTextSafely(`To: mereziko@gmail.com\nSubject: ${subject}\n\n${bodyText}`);
      if (ok) {
        copyInquiryBtn.classList.add('is-feedback-pop');
        if (contactStatus) contactStatus.textContent = 'Formatted inquiry copied to clipboard for easy pasting.';
        setTimeout(() => copyInquiryBtn.classList.remove('is-feedback-pop'), 1800);
      } else if (contactStatus) {
        contactStatus.textContent = 'Please email mereziko@gmail.com directly.';
      }
    });
  }

  // =======================================================================
  // 12. 2048 MINI-GAME MODAL (NO WINDOW.ALERT)
  // =======================================================================
  const gameModal = document.getElementById('game-modal');
  const openGameBtn = document.getElementById('open-game-btn');
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

  if (openGameBtn && gameModal) {
    openGameBtn.addEventListener('click', () => {
      gameModal.hidden = false;
      initGame();
      setSidebarOpen(false);
    });
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
    if (e.key === 'Escape') {
      if (body.classList.contains('sidebar-open')) setSidebarOpen(false);
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
});