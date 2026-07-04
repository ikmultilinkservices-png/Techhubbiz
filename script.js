// Mobile Navigation Toggle Setup
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    // Toggle menu visibility
    navToggle?.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu?.classList.toggle('active');
        navToggle?.classList.toggle('active');
    });

    // Close mobile menu when a navigation item link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu?.classList.remove('active');
            navToggle?.classList.remove('active');
        });
    });

    // Close mobile menu when clicking anywhere outside the navbar container boundary
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            navMenu?.classList.remove('active');
            navToggle?.classList.remove('active');
        }
    });

    // Manage Page Navigation Active Styling Highlights dynamically
    updateActiveNav();

    // Trigger visual scroll styling adjustments to header layout dynamically
    handleNavbarScroll();

    // Setup interactive helper actions safely if they exist on the target document view
    initializeUIFeedback();
});

// Dynamic Path Match highlighting active link indicators
function updateActiveNav() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        const linkTarget = link.getAttribute('href');
        if (linkTarget === currentPath) {
            link.classList.add('active');
        }
    });
}

// Adjust Navbar drop shadow styles dynamically relative to scroll position depth
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            if (navbar) navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
        } else {
            if (navbar) navbar.style.boxShadow = 'var(--shadow)';
        }
    });
}

// Dynamic UI elements hooks without causing execution blocks on pages lacking those containers
function initializeUIFeedback() {
    // Stat Card Entry Animations
    document.querySelectorAll('.stat-card').forEach((card, index) => {
        card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`;
    });

    // Cart Selection UI States
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.classList.contains('btn-primary') && this.textContent.includes('Choose')) {
                const originalText = this.textContent;
                this.textContent = 'Added to Cart';
                setTimeout(() => { this.textContent = originalText; }, 2000);
            }
        });
    });
}

// Global smooth transition section jumper function util wrapper
function scrollToSection(sectionId) {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
}
