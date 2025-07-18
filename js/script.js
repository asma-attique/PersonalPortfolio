const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80; // Adjust if navbar height differs
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links');

function closeMenu() {
  navMenu.classList.remove('active');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', false);
}

// Hamburger click toggles menu open/close
hamburger.addEventListener('click', () => {
  const isActive = navMenu.classList.toggle('active');
  hamburger.classList.toggle('open', isActive);
  hamburger.setAttribute('aria-expanded', isActive);
});

// When a nav link is clicked, close the menu
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

