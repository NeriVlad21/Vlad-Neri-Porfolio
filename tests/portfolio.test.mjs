import test from 'node:test';
import assert from 'node:assert/strict';
import {
  ROLE_SLIDES,
  TECH_STACK_NODES,
  SECTION_THEMES,
  PROJECTS,
  SIDEBAR_SECTIONS,
  MEDIA_SHOWCASE,
  filterProjects,
  getProjectById,
  computeActiveSectionId,
  buildInquiryPayload,
  slideAndMergeRow,
  moveBoardMatrix,
  isBoardGameOver,
} from '../public/assets/portfolio-logic.js';

test('ROLE_SLIDES, TECH_STACK_NODES, and SECTION_THEMES provide verified UI configuration', () => {
  assert.ok(Array.isArray(ROLE_SLIDES) && ROLE_SLIDES.length >= 5);
  assert.ok(ROLE_SLIDES.includes('MOTION GRAPHICS'));
  assert.ok(ROLE_SLIDES.includes('AI & DATA SYSTEMS'));
  assert.ok(Array.isArray(TECH_STACK_NODES) && TECH_STACK_NODES.length >= 8);
  assert.ok(TECH_STACK_NODES.every((n) => Boolean(n.groupId) && Boolean(n.details)));
  assert.ok(TECH_STACK_NODES.some((n) => n.id === 'mediapipe'));
  assert.ok(SECTION_THEMES.about.mode === 'hyperspace' && SECTION_THEMES.about.speed >= 1.3);
  assert.ok(SECTION_THEMES.projects.mode === 'vladgpt' && SECTION_THEMES.contact.mode === 'vladgpt');
});

test('PROJECTS includes FSLAMES, Jonathan Photography, and Food Recommender as top 3 highlights with 11 previews', () => {
  const ids = PROJECTS.map((p) => p.id);
  for (const required of [
    'fslames',
    'jonathan-photography',
    'panlasang-pinoy',
    'barangay-one',
    'u-eat',
    'pennywise',
    'life-flow',
    'moya',
    'manga-haven',
    'phinma-ed',
    'mang-kanor',
  ]) {
    assert.ok(ids.includes(required), `Expected project ${required} to exist`);
  }

  const featured = PROJECTS.filter((p) => p.featured);
  assert.equal(featured.length, 3);
  assert.deepEqual(
    featured.map((p) => p.id),
    ['fslames', 'jonathan-photography', 'panlasang-pinoy']
  );

  const jonathan = getProjectById(PROJECTS, 'jonathan-photography');
  assert.equal(jonathan?.liveUrl, 'https://jonathanphotography.page.gd/');

  const food = getProjectById(PROJECTS, 'panlasang-pinoy');
  assert.equal(food?.previewImg, './previews/food-recommender.png');
  assert.equal(food?.featured, true);

  const barangay = getProjectById(PROJECTS, 'barangay-one');
  assert.equal(barangay?.liveUrl, 'https://barangayone.pages.dev/');
  assert.equal(barangay?.previewImg, './previews/barangay-one.png');
  assert.ok(!barangay?.featured);

  const withPreviews = PROJECTS.filter((p) => Boolean(p.previewImg));
  assert.equal(withPreviews.length, 11);
});

test('SIDEBAR_SECTIONS and MEDIA_SHOWCASE place About Me first, unified Projects, and Contact last', () => {
  assert.equal(SIDEBAR_SECTIONS[0].id, 'about');
  assert.equal(SIDEBAR_SECTIONS[1].id, 'tech-stack');
  assert.equal(SIDEBAR_SECTIONS[2].id, 'projects');
  assert.equal(SIDEBAR_SECTIONS[SIDEBAR_SECTIONS.length - 1].id, 'contact');
  assert.equal(MEDIA_SHOWCASE.length, 4);
  assert.ok(MEDIA_SHOWCASE.filter((m) => m.kind === 'mp4').length === 2);
  assert.ok(MEDIA_SHOWCASE.filter((m) => m.kind === 'youtube').length === 2);
});

test('filterProjects filters by category cleanly', () => {
  assert.equal(filterProjects(PROJECTS, 'all').length, PROJECTS.length);
  const aiProjects = filterProjects(PROJECTS, 'ai-data');
  assert.ok(aiProjects.some((p) => p.id === 'fslames'));
  assert.ok(aiProjects.every((p) => p.category === 'ai-data'));
  const androidProjects = filterProjects(PROJECTS, 'android');
  assert.ok(androidProjects.some((p) => p.id === 'u-eat'));
  assert.ok(androidProjects.some((p) => p.id === 'pennywise'));
  const webProjects = filterProjects(PROJECTS, 'web');
  assert.ok(webProjects.some((p) => p.id === 'barangay-one'));
  assert.ok(webProjects.some((p) => p.id === 'jonathan-photography'));
});

test('getProjectById returns matching project or null', () => {
  const fslames = getProjectById(PROJECTS, 'fslames');
  assert.equal(fslames?.title, 'FSLAMES');
  assert.equal(getProjectById(PROJECTS, 'non-existent'), null);
});

test('computeActiveSectionId tracks scroll position accurately', () => {
  const sections = [
    { id: 'overview', top: 0 },
    { id: 'featured-work', top: 800 },
    { id: 'projects-vault', top: 1800 },
    { id: 'contact', top: 3200 },
  ];
  assert.equal(computeActiveSectionId(sections, 0, 160), 'overview');
  assert.equal(computeActiveSectionId(sections, 700, 160), 'featured-work');
  assert.equal(computeActiveSectionId(sections, 1700, 160), 'projects-vault');
  assert.equal(computeActiveSectionId(sections, 3100, 160), 'contact');
});

test('buildInquiryPayload generates encoded mailto link and formatted message text', () => {
  const res = buildInquiryPayload({
    topic: 'Dec 2026 OJT / Internship',
    name: 'Alex',
    email: 'alex@example.com',
    message: 'Interested in discussing our engineering internship.',
  });
  assert.equal(res.subject, '[Dec 2026 OJT / Internship] Inquiry from Alex');
  assert.ok(res.bodyText.includes('Reply-To: alex@example.com'));
  assert.ok(res.mailtoUrl.startsWith('mailto:mereziko@gmail.com?subject='));
});

test('2048 slideAndMergeRow merges adjacent tiles and updates score', () => {
  const res = slideAndMergeRow([2, 2, 4, 0]);
  assert.deepEqual(res.row, [4, 4, 0, 0]);
  assert.equal(res.gained, 4);

  const doubleMerge = slideAndMergeRow([2, 2, 2, 2]);
  assert.deepEqual(doubleMerge.row, [4, 4, 0, 0]);
  assert.equal(doubleMerge.gained, 8);
});

test('2048 moveBoardMatrix and isBoardGameOver work across directions', () => {
  const board = [
    [2, 2, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  const movedLeft = moveBoardMatrix(board, 'left');
  assert.equal(movedLeft.changed, true);
  assert.equal(movedLeft.gained, 4);
  assert.deepEqual(movedLeft.board[0], [4, 0, 0, 0]);
  assert.equal(isBoardGameOver(movedLeft.board), false);

  const stuckBoard = [
    [2, 4, 2, 4],
    [4, 2, 4, 2],
    [2, 4, 2, 4],
    [4, 2, 4, 2],
  ];
  assert.equal(isBoardGameOver(stuckBoard), true);
});
