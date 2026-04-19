/* ============================================================
   DOWN TOWN CAFE — script.js
   Features: Dark mode, Nav, Filters, Lightbox, Counters,
             Contact form validation, Scroll-to-top, FABs
   ============================================================ */

'use strict';

/* ─── DARK MODE ─── */
const darkToggle = document.getElementById('darkToggle');
const body = document.body;
const savedTheme = localStorage.getItem('dtc-theme');
if (savedTheme === 'dark') body.classList.add('dark');

darkToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('dtc-theme', body.classList.contains('dark') ? 'dark' : 'light');
});

/* ─── NAVBAR ─── */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navLinkItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
  updateActiveLink();
  toggleScrollTop();
}, { passive: true });

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
});

// Close mobile nav when a link is clicked
navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

function updateActiveLink() {
  const sections = ['home', 'menu', 'gallery', 'reviews', 'contact'];
  const scrollY = window.scrollY + 100;

  sections.forEach(id => {
    const el = document.getElementById(id);
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (!el || !link) return;
    if (scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight) {
      navLinkItems.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}

/* ─── MENU CATEGORY FILTER ─── */
const filterBtns = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.menu-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    menuCards.forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !show);
      if (show) {
        card.style.animation = 'none';
        card.offsetHeight; // reflow
        card.style.animation = 'fadeUp 0.4s ease both';
      }
    });
  });
});

/* ─── GALLERY LIGHTBOX ─── */
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentLightboxIndex = 0;
const galleryData = Array.from(galleryItems).map(item => ({
  src: item.dataset.src,
  caption: item.dataset.caption,
  alt: item.querySelector('img').alt
}));

function openLightbox(index) {
  currentLightboxIndex = index;
  const { src, caption, alt } = galleryData[index];
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightboxCaption.textContent = caption;
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = '';
  galleryItems[currentLightboxIndex].focus();
}

function navigateLightbox(dir) {
  currentLightboxIndex = (currentLightboxIndex + dir + galleryData.length) % galleryData.length;
  const { src, caption, alt } = galleryData[currentLightboxIndex];
  lightboxImg.style.opacity = '0';
  setTimeout(() => {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightboxCaption.textContent = caption;
    lightboxImg.style.opacity = '1';
  }, 150);
}

galleryItems.forEach((item, i) => {
  item.addEventListener('click', () => openLightbox(i));
  item.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(i); }
  });
});

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
lightboxNext.addEventListener('click', () => navigateLightbox(1));

lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => {
  if (lightbox.hidden) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') navigateLightbox(-1);
  if (e.key === 'ArrowRight') navigateLightbox(1);
});

/* ─── ANIMATED COUNTERS ─── */
const counters = document.querySelectorAll('.counter');
let countersStarted = false;

function startCounters() {
  if (countersStarted) return;
  countersStarted = true;

  counters.forEach(counter => {
    const target = +counter.dataset.target;
    const duration = 1800;
    const startTime = performance.now();

    const easeOut = t => 1 - Math.pow(1 - t, 3);

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.round(easeOut(progress) * target);
      counter.textContent = value.toLocaleString('en-IN') + (target >= 100 ? '+' : '%');
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}

// Trigger on hero scroll into view
const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
  const heroObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) startCounters();
  }, { threshold: 0.5 });
  heroObserver.observe(heroStats);
}

/* ─── CONTACT FORM VALIDATION ─── */
const form = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

function showError(field, errorId, msg) {
  field.classList.add('error');
  document.getElementById(errorId).textContent = msg;
  return false;
}

function clearError(field, errorId) {
  field.classList.remove('error');
  document.getElementById(errorId).textContent = '';
}

function validateForm() {
  let valid = true;

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');

  // Name
  if (!name.value.trim() || name.value.trim().length < 2) {
    showError(name, 'nameError', 'Please enter your full name (at least 2 characters).');
    valid = false;
  } else { clearError(name, 'nameError'); }

  // Email
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim() || !emailRe.test(email.value.trim())) {
    showError(email, 'emailError', 'Please enter a valid email address.');
    valid = false;
  } else { clearError(email, 'emailError'); }

  // Subject
  if (!subject.value) {
    showError(subject, 'subjectError', 'Please select a subject.');
    valid = false;
  } else { clearError(subject, 'subjectError'); }

  // Message
  if (!message.value.trim() || message.value.trim().length < 10) {
    showError(message, 'messageError', 'Please enter a message (at least 10 characters).');
    valid = false;
  } else { clearError(message, 'messageError'); }

  return valid;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!validateForm()) return;

  const submitBtn = form.querySelector('.form-submit');
  const btnText = submitBtn.querySelector('.btn-text');
  btnText.textContent = 'Sending…';
  submitBtn.disabled = true;

  // Simulate async submit
  setTimeout(() => {
    form.reset();
    formSuccess.hidden = false;
    btnText.textContent = 'Send Message';
    submitBtn.disabled = false;
    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    setTimeout(() => { formSuccess.hidden = true; }, 5000);
  }, 1200);
});

// Live validation on blur
['name', 'email', 'subject', 'message'].forEach(id => {
  const el = document.getElementById(id);
  el.addEventListener('blur', () => validateForm());
  el.addEventListener('input', () => {
    if (el.classList.contains('error')) validateForm();
  });
});

/* ─── SCROLL TO TOP ─── */
const scrollTopBtn = document.getElementById('scrollTop');

function toggleScrollTop() {
  scrollTopBtn.hidden = false;
  scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
}

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ─── INTERSECTION OBSERVER: Animate cards on scroll ─── */
const animTargets = document.querySelectorAll(
  '.menu-card, .review-card, .info-card, .gallery-item, .section-header'
);

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeUp 0.5s ease both';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

animTargets.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.animationDelay = `${(i % 4) * 0.08}s`;
  revealObserver.observe(el);
});

/* ─── ADD BUTTON FEEDBACK ─── */
document.querySelectorAll('.add-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    const original = this.textContent;
    this.textContent = '✓ Added!';
    this.style.background = 'var(--green)';
    this.style.color = 'var(--white)';
    setTimeout(() => {
      this.textContent = original;
      this.style.background = '';
      this.style.color = '';
    }, 1500);
  });
});

/* ─── LIGHTBOX IMG TRANSITION ─── */
lightboxImg.style.transition = 'opacity 0.15s ease';
