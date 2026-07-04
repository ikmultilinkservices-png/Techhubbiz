document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Responsive Nav Controls ---
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    // Safe Event listener binds for hamburger interface elements
    navToggle?.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu?.classList.toggle('active');
        navToggle?.classList.toggle('active');
    });

    // Auto close overlay interface drawer menu when internal links are clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu?.classList.remove('active');
            navToggle?.classList.remove('active');
        });
    });

    // Handle clicks outside navbar zone to hide the opened mobile responsive menu drawer
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            navMenu?.classList.remove('active');
            navToggle?.classList.remove('active');
        }
    });

    // Run active tracking status updates and visual animation layers
    updateActiveNav();
    handleNavbarScroll();
    initializeUIFeedback();
});

// Match active window location strings to paint active navigation highlight items
function updateActiveNav() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
}

// Alter Navigation Layer Drop Shadows dynamically on window scrolls
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            if (navbar) navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            if (navbar) navbar.style.boxShadow = 'var(--shadow)';
        }
    });
}

// Staggered reveal animations for target document cards present in view
function initializeUIFeedback() {
    document.querySelectorAll('.card').forEach((card, index) => {
        card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.15}s forwards`;
    });
}