// Hamburger menu functionality
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenuBtn = document.getElementById("close-menu-btn");
const mobileMenuLinks = mobileMenu.querySelectorAll("a");
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

function toggleMobileMenu() {
    mobileMenu.classList.toggle("hidden");
}

hamburgerBtn.addEventListener("click", toggleMobileMenu);
closeMenuBtn.addEventListener("click", toggleMobileMenu);
mobileMenuLinks.forEach(link => {
    link.addEventListener("click", toggleMobileMenu);
});

document.addEventListener('click', (event) => {
    if (!mobileMenu.classList.contains('hidden') && !mobileMenu.contains(event.target) && event.target !== hamburgerBtn) {
        toggleMobileMenu();
    }
});

// Active navigation link on scroll
function updateActiveNavLink() {
    let currentSectionId = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === currentSectionId) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Image gallery auto-swipe
const gallery = document.querySelector('.image-gallery');
const track = document.querySelector('.image-track');
const images = track.querySelectorAll('img');
const imageWidth = images[0].offsetWidth;
let currentIndex = 0;
let intervalId;
const swipeInterval = 3000; // Time in milliseconds between swipes (adjust as needed)

function nextSlide() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0; // Loop back to the first image
  }
  gallery.scrollLeft = currentIndex * imageWidth;
}

function startAutoSwipe() {
  intervalId = setInterval(nextSlide, swipeInterval);
}

function stopAutoSwipe() {
  clearInterval(intervalId);
}

// Start the automatic swiping when the page loads
startAutoSwipe();

// Optional: Pause auto-swiping on hover
gallery.addEventListener('mouseenter', stopAutoSwipe);
gallery.addEventListener('mouseleave', startAutoSwipe);