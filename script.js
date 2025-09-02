
/* ===== Mobile Menu Toggle ===== */
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

/* ===== Typewriter Effect ===== */
const typewriterText = document.querySelector('.home-content h3');
const words = ['Web Developer', 'UI/UX Designer', 'Freelancer'];
let wordIndex = 0;
let charIndex = 0;
let currentWord = '';
let isDeleting = false;

function type() {
  if (wordIndex >= words.length) wordIndex = 0;
  currentWord = words[wordIndex];

  if (!isDeleting && charIndex <= currentWord.length) {
    typewriterText.textContent = currentWord.slice(0, charIndex);
    charIndex++;
    setTimeout(type, 150);
  } else if (isDeleting && charIndex >= 0) {
    typewriterText.textContent = currentWord.slice(0, charIndex);
    charIndex--;
    setTimeout(type, 100);
  }

  if (charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex++;
    setTimeout(type, 500);
  }
}

document.addEventListener('DOMContentLoaded', type);

/* ===== Scroll Sections Active Link ===== */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) current = section.getAttribute('id');
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

/* ===== Scroll Reveal Animation (Optional) ===== */
window.addEventListener('scroll', () => {
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      el.classList.add('active');
    }
  });
});
/* ===== Mobile Menu Toggle ===== */
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

/* ===== Typewriter Effect ===== */
const typewriterText = document.querySelector('.home-content h3');
const words = ['Web Developer', 'UI/UX Designer', 'Freelancer'];
let wordIndex = 0;
let charIndex = 0;
let currentWord = '';
let isDeleting = false;

function type() {
  if (wordIndex >= words.length) wordIndex = 0;
  currentWord = words[wordIndex];

  if (!isDeleting && charIndex <= currentWord.length) {
    typewriterText.textContent = currentWord.slice(0, charIndex);
    charIndex++;
    setTimeout(type, 150);
  } else if (isDeleting && charIndex >= 0) {
    typewriterText.textContent = currentWord.slice(0, charIndex);
    charIndex--;
    setTimeout(type, 100);
  }

  if (charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex++;
    setTimeout(type, 500);
  }
}

document.addEventListener('DOMContentLoaded', type);

/* ===== Scroll Sections Active Link ===== */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) current = section.getAttribute('id');
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

/* ===== Scroll Reveal Animation (Optional) ===== */
window.addEventListener('scroll', () => {
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      el.classList.add('active');
    }
  });
});
