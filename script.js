// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle?.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navMenu.classList.remove('active');
        navToggle?.classList.remove('active');
    }
});

// Scroll effect for navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = 'var(--shadow)';
    }
});

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function updateActiveNav() {
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentLocation.split('/').pop() || 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Initialize active nav on page load
document.addEventListener('DOMContentLoaded', () => {
    updateActiveNav();

    // Add smooth animations on page load
    const delay = (element, index) => {
        element.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`;
    };

    document.querySelectorAll('.stat-card').forEach(delay);
});

// Add loading state to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function () {
        if (this.classList.contains('btn-primary') && this.textContent.includes('Choose')) {
            const originalText = this.textContent;
            this.textContent = 'Added to Cart';
            setTimeout(() => {
                this.textContent = originalText;
            }, 2000);
        }
    });
});