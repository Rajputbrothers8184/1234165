const projectGrid = document.querySelector('#projectGrid');
const filterButtons = [...document.querySelectorAll('.filter-button')];
const themeToggle = document.querySelector('.theme-toggle');
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#mobileMenu');

const projects = [
  // Social media — 5 directions
  { category: 'social', style: 'social-a', title: 'Night Shift', meta: 'Campaign system · Social', short: 'NIGHT\nSHIFT', label: 'Social drop' },
  { category: 'social', style: 'social-b', title: 'Rooftop Sessions', meta: 'Launch campaign · Social', short: 'ROOFTOP\nSESSIONS', label: 'Event series' },
  { category: 'social', style: 'social-c', title: 'Layyah Eats', meta: 'Content kit · Social', short: 'LAYYAH\nEATS', label: 'Food stories' },
  { category: 'social', style: 'social-d', title: 'Field Notes', meta: 'Education series · Social', short: 'FIELD\nNOTES', label: 'Weekly series' },
  { category: 'social', style: 'social-e', title: 'Creator Kit', meta: 'Personal brand · Social', short: 'CREATE\nLOUD', label: 'Creator launch' },

  // Logo and identity — 5 directions
  { category: 'brand', style: 'brand-a', title: 'Mitti & Co.', meta: 'Logo suite · Identity', short: 'MITTI', label: 'Handcrafted identity' },
  { category: 'brand', style: 'brand-b', title: 'Mosaic Tech', meta: 'Brand identity · Digital', short: 'MOSAIC', label: 'Tech identity' },
  { category: 'brand', style: 'brand-c', title: 'Riwaaj House', meta: 'Logo system · Hospitality', short: 'RIWAAJ', label: 'House mark' },
  { category: 'brand', style: 'brand-d', title: 'Loop Learning', meta: 'Visual identity · Edtech', short: 'LOOP', label: 'Learning system' },
  { category: 'brand', style: 'brand-e', title: 'Gx Studio', meta: 'Monogram · Personal brand', short: 'GX', label: 'Studio mark' },

  // Web and software — 5 directions
  { category: 'web', style: 'web-a', title: 'Aster Clinic', meta: 'Website · Digital experience', label: 'Care, made simple' },
  { category: 'web', style: 'web-b', title: 'EditFlow', meta: 'SaaS product · Web app', label: 'Build boldly' },
  { category: 'web', style: 'web-c', title: 'Kite Commerce', meta: 'E-commerce · Web build', label: 'Find your next' },
  { category: 'web', style: 'web-d', title: 'Local / Layyah', meta: 'Directory · Web platform', label: 'Made nearby' },
  { category: 'web', style: 'web-e', title: 'Nexa Systems', meta: 'Software portal · Product', label: 'Think forward' },

  // Apps — 5 directions
  { category: 'app', style: 'app-a', title: 'Route 82', meta: 'Mobile app · Product flow', label: 'Find your way' },
  { category: 'app', style: 'app-b', title: 'Wallet Flow', meta: 'Mobile app · Fintech', label: 'Own your money' },
  { category: 'app', style: 'app-c', title: 'Learnly', meta: 'Mobile app · Learning', label: 'Learn in loops' },
  { category: 'app', style: 'app-d', title: 'Event Pass', meta: 'Mobile app · Events', label: 'Show up' },
  { category: 'app', style: 'app-e', title: 'Field Notes', meta: 'Mobile app · Utility', label: 'Capture the day' },

  // Video editing — 5 directions
  { category: 'video', style: 'motion-a', title: 'Brand Reel', meta: 'Video edit · Social film', short: 'MOVE\nWITH IT', label: '00:23 / 9:16' },
  { category: 'video', style: 'motion-b', title: 'Product Teaser', meta: 'Video edit · Launch film', short: 'COMING\nIN HOT', label: '00:15 / 16:9' },
  { category: 'video', style: 'motion-c', title: 'Culture Reel', meta: 'Video edit · Story cut', short: 'STAY\nCURIOUS', label: '00:37 / 9:16' },
  { category: 'video', style: 'motion-d', title: 'Type in Motion', meta: 'Motion edit · Title sequence', short: 'TYPE\nMOVES', label: '00:18 / 1:1' },
  { category: 'video', style: 'motion-e', title: 'Launch Edit', meta: 'Video edit · Campaign cut', short: 'MAKE\nNOISE', label: '00:29 / 9:16' },

  // Print design — 5 directions
  { category: 'print', style: 'print-a', title: 'Market Poster', meta: 'Poster · Print design', short: 'LOCAL\nMARKET', label: 'A2 / poster' },
  { category: 'print', style: 'print-b', title: 'Menu System', meta: 'Menu · Print design', short: 'GOOD\nFOOD', label: 'A4 / menu' },
  { category: 'print', style: 'print-c', title: 'Festival Kit', meta: 'Collateral · Print design', short: 'MAKE\nA SCENE', label: 'A3 / event' },
  { category: 'print', style: 'print-d', title: 'Packaging Notes', meta: 'Packaging · Print design', short: 'MADE\nWITH CARE', label: 'Pack / label' },
  { category: 'print', style: 'print-f', title: 'Annual Report', meta: 'Editorial · Print design', short: 'THE\nYEAR', label: 'Book / print' }
];

function escapeHtml(value = '') {
  return value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  })[character]);
}

function addLineBreaks(value = '') {
  return escapeHtml(value).replace(/\n/g, '<br>');
}

function visualMarkup(project) {
  const style = escapeHtml(project.style);
  const label = escapeHtml(project.label || 'Gx_Rajput project');
  const short = addLineBreaks(project.short || project.title);

  if (project.category === 'social') {
    return `<div class="social-poster ${style}"><small>GX / SOCIAL DROP</small><strong>${short}</strong><span>${label}</span><i></i></div>`;
  }

  if (project.category === 'brand') {
    const mark = escapeHtml((project.short || project.title).replace(/\n/g, '').slice(0, 2));
    return `<div class="brand-board ${style}"><small>IDENTITY STUDY / 0${projects.filter((item) => item.category === 'brand').indexOf(project) + 1}</small><div class="brand-mark-large">${mark}</div><strong>${escapeHtml(project.short || project.title)}</strong><span>${label}</span></div>`;
  }

  if (project.category === 'web') {
    return `<div class="browser ${style}"><div class="browser-bar"><i></i><i></i><i></i><b>${label.toLowerCase()}.studio</b></div><div class="browser-body"><div class="browser-copy"><em>GX / DIGITAL PRODUCT</em><h4>${short.split('<br>')[0]}<br><span>made simple.</span></h4><div class="ui-lines"><i></i><i></i><i></i></div></div><div class="browser-art"></div></div></div>`;
  }

  if (project.category === 'app') {
    return `<div class="phone-stage ${style}"><div class="phone"><div class="phone-bar"><b>${label.toUpperCase()}</b><span>•••</span></div><div class="phone-art"></div><div class="phone-row"><i></i><i></i></div></div></div>`;
  }

  if (project.category === 'video') {
    return `<div class="motion-poster ${style}"><small>GX / EDIT SUITE</small><div class="motion-lines"></div><div class="play-circle">▶</div><strong>${short}</strong><span class="motion-label">${label}</span></div>`;
  }

  return `<div class="print-poster ${style}"><small>GX / PRINT STUDY</small><strong>${short}</strong><span>${label}</span></div>`;
}

function renderProjects(filter = 'all') {
  const visibleProjects = filter === 'all' ? projects : projects.filter((project) => project.category === filter);
  projectGrid.setAttribute('aria-busy', 'true');
  projectGrid.innerHTML = visibleProjects.map((project, index) => `
    <article class="project-card" style="animation-delay: ${index * 35}ms">
      ${visualMarkup(project)}
      <div class="project-meta">
        <div><h3>${escapeHtml(project.title)}</h3><p>${escapeHtml(project.meta)}</p></div>
        <span class="project-index">${String(projects.indexOf(project) + 1).padStart(2, '0')}</span>
      </div>
    </article>
  `).join('');
  requestAnimationFrame(() => projectGrid.setAttribute('aria-busy', 'false'));
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle('is-active', isActive);
      item.setAttribute('aria-pressed', String(isActive));
    });
    renderProjects(button.dataset.filter);
  });
});

// Keep the portfolio comfortable to browse on smaller screens.
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    mobileMenu.classList.toggle('is-open', !isOpen);
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
      mobileMenu.classList.remove('is-open');
    });
  });
}

function setTheme(theme) {
  const isDark = theme === 'dark';
  document.body.classList.toggle('dark-mode', isDark);
  themeToggle?.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  themeToggle?.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  localStorage.setItem('gx-rajput-theme', isDark ? 'dark' : 'light');
}

const savedTheme = localStorage.getItem('gx-rajput-theme');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if (savedTheme) setTheme(savedTheme);
else if (prefersDark) setTheme('dark');

themeToggle?.addEventListener('click', () => {
  setTheme(document.body.classList.contains('dark-mode') ? 'light' : 'dark');
});

const contactForm = document.querySelector('#contactForm');
const formStatus = document.querySelector('#formStatus');
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const message = String(formData.get('message') || '').trim();
  const subject = encodeURIComponent(`Project inquiry from ${name}`);
  const body = encodeURIComponent(`Hi Gx_Rajput,\n\nMy name is ${name}.\nMy email is ${email}.\n\nHere is what I would like to make:\n${message}\n\nThanks!`);
  formStatus.textContent = 'Opening your email app…';
  window.location.href = `mailto:n88908410@gmail.com?subject=${subject}&body=${body}`;
});

const currentYear = document.querySelector('#currentYear');
if (currentYear) currentYear.textContent = new Date().getFullYear();

renderProjects();
