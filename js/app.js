/* ================================================================
   COMPLETE TESTING GUIDE — App Logic
================================================================ */

// ── State ──────────────────────────────────────────────────────
const state = {
  currentSection: null,
  currentTopicId: null,
  completedTopics: JSON.parse(localStorage.getItem('ctg_completed') || '[]'),
  theme: localStorage.getItem('ctg_theme') || 'light',
};

// ── Topic Registry ─────────────────────────────────────────────
const TOPIC_REGISTRY = {
  manual:      MANUAL_TOPICS,
  selenium:    SELENIUM_TOPICS,
  testng:      TESTNG_TOPICS,
  cucumber:    CUCUMBER_TOPICS,
  tosca:       TOSCA_TOPICS,
  playwright:  PLAYWRIGHT_TOPICS,
  'ai-testing': AI_TESTING_TOPICS,
};

const SECTION_LABELS = {
  manual:       'Manual Testing',
  selenium:     'Selenium',
  testng:       'TestNG',
  cucumber:     'Cucumber',
  tosca:        'Tosca',
  playwright:   'Playwright',
  'ai-testing': 'AI With Testing',
};

// ── Init ───────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(state.theme);
  buildSidebar();
  buildHomeCards();
  updateProgress();
  initSearch();
  initMobileNav();
  initThemeToggle();
});

// ================================================================
// SIDEBAR BUILDER
// ================================================================
function buildSidebar() {
  buildNavItems('manualNavItems',     MANUAL_TOPICS,     'manual');
  buildNavItems('seleniumNavItems',   SELENIUM_TOPICS,   'selenium');
  buildNavItems('testngNavItems',     TESTNG_TOPICS,     'testng');
  buildNavItems('cucumberNavItems',   CUCUMBER_TOPICS,   'cucumber');
  buildNavItems('toscaNavItems',      TOSCA_TOPICS,      'tosca');
  buildNavItems('playwrightNavItems',  PLAYWRIGHT_TOPICS,  'playwright');
  buildNavItems('aiTestingNavItems',   AI_TESTING_TOPICS,  'ai-testing');
}

function buildNavItems(containerId, topics, section) {
  const ul = document.getElementById(containerId);
  if (!ul) return;
  ul.innerHTML = topics.map(t => `
    <li>
      <a href="#" onclick="loadTopic('${section}','${t.id}'); return false;"
         id="nav_${section}_${t.id}" class="nav-link-item">
        <span>${t.title}</span>
        ${state.completedTopics.includes(t.id)
          ? '<i class="bi bi-check-circle-fill nav-done"></i>'
          : ''}
      </a>
    </li>
  `).join('');
}

// ================================================================
// HOME CARDS
// ================================================================
function buildHomeCards() {
  const allTopics = Object.values(TOPIC_REGISTRY).flat();
  document.getElementById('totalTopicsCount').textContent = allTopics.length;
  document.getElementById('totalTopicsCountHome').textContent = allTopics.length;

  // Manual topics badges
  buildTopicBadges('manualTopicsBadges', MANUAL_TOPICS, 6);
  document.getElementById('manualTopicsCount').textContent = MANUAL_TOPICS.length;

  // Auto topics badges (combined)
  const autoTopics = [
    ...SELENIUM_TOPICS.slice(0,2).map(t=>({...t,label:'Selenium'})),
    ...TESTNG_TOPICS.slice(0,1).map(t=>({...t,label:'TestNG'})),
    ...CUCUMBER_TOPICS.slice(0,1).map(t=>({...t,label:'Cucumber'})),
    ...TOSCA_TOPICS.slice(0,1).map(t=>({...t,label:'Tosca'})),
  ];
  buildTopicBadges('autoTopicsBadges', autoTopics, 6);
  const autoCount = SELENIUM_TOPICS.length + TESTNG_TOPICS.length + CUCUMBER_TOPICS.length + TOSCA_TOPICS.length;
  document.getElementById('autoTopicsCount').textContent = autoCount;
}

function buildTopicBadges(containerId, topics, max) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = topics.slice(0, max).map(t => `
    <span class="path-badge">${t.label || t.title}</span>
  `).join('') + (topics.length > max ? `<span class="path-badge">+${topics.length - max} more</span>` : '');
}

// ================================================================
// TOPIC LOADER
// ================================================================
function loadTopic(section, topicId) {
  const topics = TOPIC_REGISTRY[section];
  if (!topics) return;

  const topic = topics.find(t => t.id === topicId);
  if (!topic) return;

  state.currentSection = section;
  state.currentTopicId = topicId;

  // Show topic page
  hideAllPages();
  const topicPage = document.getElementById('topicPage');
  topicPage.classList.remove('d-none');

  // Scroll to top
  document.getElementById('mainContent').scrollTo({ top: 0, behavior: 'smooth' });
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Breadcrumb
  document.getElementById('bcSection').innerHTML =
    `<a href="#" onclick="showSection('${section}'); return false;">${SECTION_LABELS[section]}</a>`;
  document.getElementById('bcTopic').textContent = topic.title;

  // Header
  document.getElementById('topicHeader').innerHTML = buildTopicHeader(topic, section);

  // Body
  document.getElementById('topicBody').innerHTML =
    topic.content + buildInterviewSection(topic.interviewQuestions || []);

  // Nav footer
  updateTopicNavButtons(section, topicId);
  updateMarkCompleteBtn(topicId);

  // Highlight active sidebar item
  highlightSidebarItem(section, topicId);

  // Close sidebar on mobile
  if (window.innerWidth < 992) closeSidebar();

  // Re-highlight code
  if (window.Prism) Prism.highlightAll();
}

function buildTopicHeader(topic, section) {
  const badgeClass = `badge-${section}`;
  const diff = topic.difficulty || 'easy';
  const diffClass = `difficulty-${diff}`;
  const diffIcon = diff === 'easy' ? 'bi-circle-fill' : diff === 'medium' ? 'bi-square-fill' : 'bi-diamond-fill';
  const sectionLabel = SECTION_LABELS[section];

  return `
    <div class="topic-section-badge ${badgeClass}">
      <i class="bi bi-tag-fill me-1"></i>${sectionLabel}
    </div>
    <h1 class="topic-main-title">${topic.title}</h1>
    <p class="topic-short-desc">${topic.shortDesc}</p>
    <div class="topic-meta-row">
      <div class="topic-meta-item">
        <i class="bi ${diffIcon} ${diffClass}"></i>
        <span class="${diffClass}" style="text-transform:capitalize;">${diff}</span>
      </div>
      <div class="topic-meta-item">
        <i class="bi bi-clock"></i> ${topic.time}
      </div>
      ${state.completedTopics.includes(topic.id)
        ? '<div class="topic-meta-item"><i class="bi bi-check-circle-fill text-green"></i> <span style="color:var(--green)">Completed</span></div>'
        : ''}
    </div>
  `;
}

function buildInterviewSection(questions) {
  if (!questions || questions.length === 0) return '';
  return `
    <div class="interview-section">
      <div class="interview-section-header">
        <div class="interview-icon"><i class="bi bi-chat-quote-fill"></i></div>
        <div>
          <div class="interview-section-title">Scenario Based Interview Questions</div>
          <div class="interview-section-sub">Real-time project scenarios &amp; interview questions</div>
        </div>
      </div>
      ${questions.map((q, i) => `
        <div class="iq-card" id="iq_${i}">
          <div class="iq-question" onclick="toggleIQ(${i})">
            <div class="iq-num">Q${i + 1}</div>
            <div class="iq-question-text">${q.q}</div>
            <i class="bi bi-chevron-down iq-toggle"></i>
          </div>
          <div class="iq-answer">
            ${q.a}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function toggleIQ(index) {
  const card = document.getElementById(`iq_${index}`);
  if (card) card.classList.toggle('open');
}

// ================================================================
// TOPIC NAVIGATION
// ================================================================
function getAllTopicsFlat() {
  const flat = [];
  ['manual','selenium','testng','cucumber','tosca','playwright','ai-testing'].forEach(sec => {
    (TOPIC_REGISTRY[sec] || []).forEach(t => flat.push({ ...t, section: sec }));
  });
  return flat;
}

function updateTopicNavButtons(section, topicId) {
  const flat = getAllTopicsFlat();
  const idx  = flat.findIndex(t => t.section === section && t.id === topicId);

  const prevBtn = document.getElementById('prevTopicBtn');
  const nextBtn = document.getElementById('nextTopicBtn');

  prevBtn.disabled = idx <= 0;
  nextBtn.disabled = idx >= flat.length - 1;

  if (idx > 0) {
    prevBtn.onclick = () => loadTopic(flat[idx - 1].section, flat[idx - 1].id);
    prevBtn.innerHTML = `<i class="bi bi-arrow-left me-1"></i> ${flat[idx - 1].title.slice(0, 20)}...`;
  } else {
    prevBtn.innerHTML = `<i class="bi bi-arrow-left me-1"></i> Previous`;
  }
  if (idx < flat.length - 1) {
    nextBtn.onclick = () => loadTopic(flat[idx + 1].section, flat[idx + 1].id);
    nextBtn.innerHTML = `${flat[idx + 1].title.slice(0, 20)}... <i class="bi bi-arrow-right ms-1"></i>`;
  } else {
    nextBtn.innerHTML = `Next <i class="bi bi-arrow-right ms-1"></i>`;
  }
}

function navigateTopic(dir) {
  const flat = getAllTopicsFlat();
  const idx  = flat.findIndex(t => t.section === state.currentSection && t.id === state.currentTopicId);
  const next = flat[idx + dir];
  if (next) loadTopic(next.section, next.id);
}

function updateMarkCompleteBtn(topicId) {
  const btn = document.getElementById('markCompleteBtn');
  const done = state.completedTopics.includes(topicId);
  btn.className = done ? 'btn-complete completed' : 'btn-complete';
  btn.innerHTML = done
    ? '<i class="bi bi-check-circle-fill me-1"></i> Completed!'
    : '<i class="bi bi-check-circle me-1"></i> Mark as Complete';
  btn.onclick = () => toggleComplete(topicId);
}

function toggleComplete(topicId) {
  const idx = state.completedTopics.indexOf(topicId);
  if (idx === -1) {
    state.completedTopics.push(topicId);
    showToast('✅ Topic marked as complete!', 'success');
  } else {
    state.completedTopics.splice(idx, 1);
    showToast('↩ Topic marked as incomplete', 'info');
  }
  localStorage.setItem('ctg_completed', JSON.stringify(state.completedTopics));
  updateMarkCompleteBtn(topicId);
  updateProgress();
  buildSidebar();
  updateTopicHeader(topicId);
}

function updateTopicHeader(topicId) {
  const topics = TOPIC_REGISTRY[state.currentSection];
  if (!topics) return;
  const topic = topics.find(t => t.id === topicId);
  if (topic) document.getElementById('topicHeader').innerHTML = buildTopicHeader(topic, state.currentSection);
}

// ================================================================
// PROGRESS
// ================================================================
function updateProgress() {
  const total = getAllTopicsFlat().length;
  const done  = state.completedTopics.length;
  const pct   = total > 0 ? Math.round((done / total) * 100) : 0;

  // Home page
  const hpb = document.getElementById('homeProgressBar');
  if (hpb) hpb.style.width = pct + '%';
  const hpc = document.getElementById('homeProgressPercent');
  if (hpc) hpc.textContent = pct + '%';
  const cc  = document.getElementById('completedCount');
  if (cc)  cc.textContent = done;
  const ttc = document.getElementById('totalTopicsCountHome');
  if (ttc) ttc.textContent = total;

  // Circle
  const circle = document.getElementById('progressCircle');
  const circumference = 2 * Math.PI * 50; // r=50
  if (circle) {
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference - (pct / 100) * circumference;
  }
  const ct = document.getElementById('progressCircleText');
  if (ct) ct.textContent = pct + '%';

  // Sidebar
  const sp  = document.getElementById('sidebarProgress');
  const spb = document.getElementById('sidebarProgressBar');
  if (sp)  sp.textContent  = pct + '%';
  if (spb) spb.style.width = pct + '%';
}

// ================================================================
// HOME NAVIGATION
// ================================================================
function showHome() {
  hideAllPages();
  document.getElementById('homePage').classList.remove('d-none');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showSection(section) {
  // Open the relevant sidebar collapse and load first topic
  const sectionMap = {
    manual:   { collapseId: 'navManual',    firstTopic: MANUAL_TOPICS[0] },
    selenium: { collapseId: 'navSelenium',  firstTopic: SELENIUM_TOPICS[0] },
    testng:   { collapseId: 'navTestng',    firstTopic: TESTNG_TOPICS[0] },
    cucumber: { collapseId: 'navCucumber',  firstTopic: CUCUMBER_TOPICS[0] },
    tosca:      { collapseId: 'navTosca',      firstTopic: TOSCA_TOPICS[0] },
    playwright:    { collapseId: 'navPlaywright', firstTopic: PLAYWRIGHT_TOPICS[0] },
    'ai-testing':  { collapseId: 'navAiTesting',  firstTopic: AI_TESTING_TOPICS[0] },
  };
  const cfg = sectionMap[section];
  if (cfg && cfg.firstTopic) loadTopic(section, cfg.firstTopic.id);
}

function scrollToSection() {
  const el = document.getElementById('learningSection');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ================================================================
// SIDEBAR ACTIVE HIGHLIGHT
// ================================================================
function highlightSidebarItem(section, topicId) {
  document.querySelectorAll('.nav-link-item').forEach(el => el.classList.remove('active'));
  const activeLink = document.getElementById(`nav_${section}_${topicId}`);
  if (activeLink) {
    activeLink.classList.add('active');
    // Expand the parent collapses
    const parentCollapse = activeLink.closest('.collapse');
    if (parentCollapse) {
      parentCollapse.classList.add('show');
      // Also expand parent of parent if nested
      const grandparent = parentCollapse.parentElement?.closest('.collapse');
      if (grandparent) grandparent.classList.add('show');
    }
  }
}

// ================================================================
// SEARCH
// ================================================================
function initSearch() {
  const input    = document.getElementById('globalSearch');
  const dropdown = document.getElementById('searchDropdown');
  if (!input || !dropdown) return;

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (q.length < 2) { dropdown.classList.add('d-none'); return; }

    const results = [];
    Object.entries(TOPIC_REGISTRY).forEach(([section, topics]) => {
      topics.forEach(t => {
        const score = [t.title, t.shortDesc, t.id].join(' ').toLowerCase();
        if (score.includes(q)) results.push({ section, topic: t });
      });
    });

    if (results.length === 0) {
      dropdown.innerHTML = `<div class="search-item"><div class="search-item-title">No results found</div></div>`;
    } else {
      dropdown.innerHTML = results.slice(0, 8).map(r => `
        <div class="search-item" onclick="loadTopic('${r.section}','${r.topic.id}'); closeSearch();">
          <div class="search-item-title">${highlight(r.topic.title, q)}</div>
          <div class="search-item-section">${SECTION_LABELS[r.section]}</div>
        </div>
      `).join('');
    }
    dropdown.classList.remove('d-none');
  });

  document.addEventListener('click', e => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) closeSearch();
  });
}

function highlight(text, q) {
  const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(re, '<mark style="background:rgba(99,102,241,.3);color:var(--text);border-radius:3px;">$1</mark>');
}

function closeSearch() {
  document.getElementById('searchDropdown')?.classList.add('d-none');
  document.getElementById('globalSearch').value = '';
}

// ================================================================
// THEME
// ================================================================
function initThemeToggle() {
  document.getElementById('themeToggle').addEventListener('click', () => {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('ctg_theme', state.theme);
    applyTheme(state.theme);
  });
}

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  const icon = document.getElementById('themeIcon');
  if (icon) icon.className = theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
}

// ================================================================
// MOBILE SIDEBAR
// ================================================================
function initMobileNav() {
  const toggleBtn = document.getElementById('sidebarToggleMobile');
  if (toggleBtn) toggleBtn.addEventListener('click', openSidebar);
}

function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebarOverlay').classList.add('show');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('show');
}

// ================================================================
// CODE COPY
// ================================================================
function copyCode(btn) {
  const codeBlock = btn.closest('.code-block');
  const code = codeBlock.querySelector('code');
  if (!code) return;
  navigator.clipboard.writeText(code.textContent).then(() => {
    btn.innerHTML = '<i class="bi bi-check2"></i> Copied!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.innerHTML = '<i class="bi bi-clipboard"></i> Copy';
      btn.classList.remove('copied');
    }, 2000);
  }).catch(() => {
    showToast('Copy failed — please select and copy manually', 'warning');
  });
}

// ================================================================
// INTERVIEW & SCENARIO PAGES
// ================================================================

// Page state for each Q page
const qPageState = {
  interview: { section: 'manual', difficulty: 'all', search: '' },
  scenario:  { section: 'manual', difficulty: 'all', search: '' },
};

const QPAGE_LABELS = {
  manual: 'Manual Testing', selenium: 'Selenium',
  testng: 'TestNG', cucumber: 'Cucumber', tosca: 'Tosca', playwright: 'Playwright',
  'ai-testing': 'AI With Testing',
};

function showInterviewPage(section) {
  hideAllPages();
  document.getElementById('interviewPage').classList.remove('d-none');
  qPageState.interview.section = section || 'manual';
  qPageState.interview.difficulty = 'all';
  qPageState.interview.search = '';
  // Activate correct tab
  const tabs = document.querySelectorAll('#iqTabs .qtab');
  tabs.forEach((t, i) => {
    const secs = ['manual','selenium','testng','cucumber','tosca','playwright','ai-testing'];
    t.classList.toggle('active', secs[i] === qPageState.interview.section);
  });
  // Reset diff filters
  document.querySelectorAll('#interviewPage .diff-btn').forEach(b => b.classList.toggle('active', b.classList.contains('all')));
  document.getElementById('iqSearch').value = '';
  renderQPage('interview');
  highlightQPageNav('iq', section);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (window.innerWidth < 992) closeSidebar();
}

function showScenarioPage(section) {
  hideAllPages();
  document.getElementById('scenarioPage').classList.remove('d-none');
  qPageState.scenario.section = section || 'manual';
  qPageState.scenario.difficulty = 'all';
  qPageState.scenario.search = '';
  const tabs = document.querySelectorAll('#sqTabs .qtab');
  tabs.forEach((t, i) => {
    const secs = ['manual','selenium','testng','cucumber','tosca','playwright','ai-testing'];
    t.classList.toggle('active', secs[i] === qPageState.scenario.section);
  });
  document.querySelectorAll('#scenarioPage .diff-btn').forEach(b => b.classList.toggle('active', b.classList.contains('all')));
  document.getElementById('sqSearch').value = '';
  renderQPage('scenario');
  highlightQPageNav('sq', section);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (window.innerWidth < 992) closeSidebar();
}

function hideAllPages() {
  document.getElementById('homePage').classList.add('d-none');
  document.getElementById('topicPage').classList.add('d-none');
  document.getElementById('interviewPage').classList.add('d-none');
  document.getElementById('scenarioPage').classList.add('d-none');
  document.querySelectorAll('.nav-link-item').forEach(el => el.classList.remove('active'));
  state.currentSection = null;
  state.currentTopicId = null;
}

function highlightQPageNav(prefix, section) {
  document.querySelectorAll(`[id^="${prefix}Nav_"]`).forEach(el => el.classList.remove('active'));
  const el = document.getElementById(`${prefix}Nav_${section}`);
  if (el) {
    el.classList.add('active');
    const parentCollapse = el.closest('.collapse');
    if (parentCollapse) parentCollapse.classList.add('show');
  }
}

function filterQPage(pageType, section, btn) {
  qPageState[pageType].section = section;
  qPageState[pageType].search = '';
  const searchId = pageType === 'interview' ? 'iqSearch' : 'sqSearch';
  document.getElementById(searchId).value = '';
  const tabsId = pageType === 'interview' ? 'iqTabs' : 'sqTabs';
  document.querySelectorAll(`#${tabsId} .qtab`).forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  highlightQPageNav(pageType === 'interview' ? 'iq' : 'sq', section);
  renderQPage(pageType);
}

function filterDifficulty(pageType, diff, btn) {
  qPageState[pageType].difficulty = diff;
  const container = pageType === 'interview' ? 'interviewPage' : 'scenarioPage';
  document.querySelectorAll(`#${container} .diff-btn`).forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderQPage(pageType);
}

function searchQPage(pageType, value) {
  qPageState[pageType].search = value.trim().toLowerCase();
  renderQPage(pageType);
}

function renderQPage(pageType) {
  const ps = qPageState[pageType];
  const data = pageType === 'interview' ? INTERVIEW_QUESTIONS : SCENARIO_QUESTIONS;
  const bodyId = pageType === 'interview' ? 'iqBody' : 'sqBody';
  const body = document.getElementById(bodyId);
  if (!body) return;

  let questions = (data[ps.section] || []);

  if (ps.difficulty !== 'all') {
    questions = questions.filter(q => q.difficulty === ps.difficulty);
  }
  if (ps.search) {
    questions = questions.filter(q => q.q.toLowerCase().includes(ps.search));
  }

  if (questions.length === 0) {
    body.innerHTML = `<div class="qpage-empty"><i class="bi bi-search"></i><p>No questions found for the current filters.</p></div>`;
    return;
  }

  const prefix = pageType === 'interview' ? 'iq' : 'sq';
  const sectionLabel = QPAGE_LABELS[ps.section] || ps.section;
  body.innerHTML = `
    <div class="qpage-count">${questions.length} question${questions.length !== 1 ? 's' : ''} in <strong>${sectionLabel}</strong></div>
    ${questions.map((q, i) => `
      <div class="iq-card" id="${prefix}_card_${i}">
        <div class="iq-question" onclick="toggleQCard('${prefix}','${i}')">
          <div class="iq-num">Q${i + 1}</div>
          <div class="iq-question-text">${q.q}</div>
          <span class="diff-badge diff-${q.difficulty}">${q.difficulty}</span>
          <i class="bi bi-chevron-down iq-toggle"></i>
        </div>
        <div class="iq-answer">${q.a}</div>
      </div>
    `).join('')}
  `;
}

function toggleQCard(prefix, index) {
  const card = document.getElementById(`${prefix}_card_${index}`);
  if (card) card.classList.toggle('open');
}

// ================================================================
// TOAST
// ================================================================
function showToast(msg, type = 'info') {
  const toastEl = document.getElementById('liveToast');
  const toastMsg = document.getElementById('toastMsg');
  if (!toastEl || !toastMsg) return;

  toastMsg.textContent = msg;
  const colorMap = { success: '#10b981', info: '#6366f1', warning: '#f59e0b', error: '#ef4444' };
  toastEl.style.borderLeft = `4px solid ${colorMap[type] || colorMap.info}`;

  const toast = bootstrap.Toast.getOrCreateInstance(toastEl, { delay: 2500 });
  toast.show();
}
