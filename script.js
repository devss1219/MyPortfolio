// Array of texts to cycle through
const texts = [
  "Frontend Developer",
  "Web Designer", 
  "UI/UX Designer",
  "Full Stack Developer"
];
// Menu Toggle Functionality
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navbar.classList.toggle('active');
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navbar.classList.remove('active');
    });
});
const element = document.getElementById('typewriter');
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

function typeWriter() {
  const currentText = texts[textIndex];
  
  if (isDeleting) {
    element.textContent = currentText.substring(0, charIndex-1);
    charIndex--;
    typingSpeed = 50;
  } else {
    element.textContent = currentText.substring(0, charIndex+1);
    charIndex++;
    typingSpeed = 150;
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    typingSpeed = 1000; // Pause at end
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    typingSpeed = 500; // Pause before typing next
  }

  setTimeout(typeWriter, typingSpeed);
}

// Start the animation
typeWriter();
document.addEventListener('DOMContentLoaded', function() {
  // Get all navbar links
  const navLinks = document.querySelectorAll('.navbar a');
  
  // Add click event to each link
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Remove active class from all links
      navLinks.forEach(l => l.classList.remove('active'));
      
      // Add active class to clicked link
      this.classList.add('active');
    });
  });
  
  // Optional: Highlight the current section based on scroll position
  window.addEventListener('scroll', function() {
    const fromTop = window.scrollY + 100;
    
    navLinks.forEach(link => {
      const section = document.querySelector(link.hash);
      
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
});
// Animation for service boxes
const serviceBoxes = document.querySelectorAll('.service-box');

serviceBoxes.forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.style.transform = 'translateY(-10px)';
    box.style.boxShadow = '0 0 25px var(--main-color), 0 0 50px var(--main-color)';
  });
  
  box.addEventListener('mouseleave', () => {
    box.style.transform = 'translateY(0)';
    box.style.boxShadow = '0 0 10px var(--main-color)';
  });
});

// Animation for testimonial boxes
const testimonialBoxes = document.querySelectorAll('.testimonial-box');

testimonialBoxes.forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.style.transform = 'scale(1.03)';
  });
  
  box.addEventListener('mouseleave', () => {
    box.style.transform = 'scale(1)';
  });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form values
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);
  
  // Here you would typically send the data to a server
  console.log('Form submitted:', data);
  
  // Show success message
  alert('Thank you for your message! I will get back to you soon.');
  contactForm.reset();
});
// Add this to your script.js for extra interactivity
document.querySelectorAll('.timeline-content').forEach(item => {
  // Click to toggle details
  item.addEventListener('click', function() {
    this.classList.toggle('active');
  });
  
  // Hover animation
  item.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px)';
    this.style.boxShadow = '0 0 30px var(--main-color)';
    this.querySelector('.timeline-dot').style.transform = 'translateX(-50%) scale(1.3)';
  });
  
  item.addEventListener('mouseleave', function() {
    this.style.transform = '';
    this.style.boxShadow = '';
    this.querySelector('.timeline-dot').style.transform = '';
  });
});

// Animate timeline items on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {threshold: 0.1});

document.querySelectorAll('.timeline-item').forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(50px)';
  item.style.transition = 'all 0.8s ease';
  observer.observe(item);
});
// Add to your existing script.js
document.getElementById('year').textContent = new Date().getFullYear();
// Mobile menu toggle
document.getElementById('menu-icon').addEventListener('click', () => {
  document.querySelector('.navbar').classList.toggle('active');
});

// Close menu when clicking links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.navbar').classList.remove('active');
  });
});

// Viewport height adjustment for mobile
function setVh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
window.addEventListener('resize', setVh);
setVh();
// CV Button Handler
document.querySelector('.btn-cv')?.addEventListener('click', function(e) {
  if(this.getAttribute('href') === '#') {
    e.preventDefault();
    alert('CV will be available soon!');
    // Optional: Track how many people tried downloading
    console.log('CV download attempted');
  }
});
