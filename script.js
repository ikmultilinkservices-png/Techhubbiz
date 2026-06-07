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

// Live Chat Functionality
const chatToggle = document.getElementById('chatToggle');
const chatWidget = document.getElementById('chatWidget');
const closeChatBtn = document.getElementById('closeChatBtn');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const chatMessages = document.getElementById('chatMessages');
const chatOpenBtn = document.getElementById('chatOpenBtn');

// Toggle chat widget
chatToggle?.addEventListener('click', () => {
    chatWidget.classList.toggle('active');
});

closeChatBtn?.addEventListener('click', () => {
    chatWidget.classList.remove('active');
});

chatOpenBtn?.addEventListener('click', () => {
    chatWidget.classList.add('active');
    chatInput.focus();
});

// Send chat message
function sendMessage() {
    const message = chatInput.value.trim();
    if (message === '') return;

    // Add user message
    const userMessage = document.createElement('div');
    userMessage.classList.add('chat-message', 'user');
    userMessage.innerHTML = `<p>${escapeHtml(message)}</p>`;
    chatMessages.appendChild(userMessage);

    chatInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Simulate bot response
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.classList.add('chat-message', 'bot');
        const responses = [
            'Thank you for your message! Our team will respond shortly.',
            'Great question! We\'re here to help. For more info, check our FAQ section.',
            'Thanks for reaching out! Visit our Services page to learn more.',
            'We appreciate your interest! Feel free to contact us anytime.',
            'Your message has been received. We\'ll get back to you soon!',
            'Happy to assist! Is there anything else you\'d like to know?'
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        botMessage.innerHTML = `<p>${randomResponse}</p>`;
        chatMessages.appendChild(botMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 500);
}

sendBtn?.addEventListener('click', sendMessage);
chatInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const subscribe = document.getElementById('subscribe').checked;

    // Basic validation
    if (!name || !email || !subject || !message) {
        showFormMessage('Please fill out all required fields.', 'error');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
    }

    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
        // Simulate successful submission
        showFormMessage('Thank you! Your message has been sent successfully. We\'ll be in touch soon!', 'success');
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;

        // Optional: Log the data (in real scenario, this would be sent to server)
        console.log('Form Data:', {
            name,
            email,
            phone,
            subject,
            message,
            subscribe,
            timestamp: new Date().toISOString()
        });
    }, 1500);
});

function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    
    setTimeout(() => {
        formMessage.textContent = '';
        formMessage.className = 'form-message';
    }, 5000);
}

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');

        // Close other FAQ items
        faqQuestions.forEach(otherQuestion => {
            if (otherQuestion !== question) {
                otherQuestion.parentElement.classList.remove('active');
            }
        });
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .stat-card, .team-card, .service-card, .pricing-card').forEach(el => {
    observer.observe(el);
});

// Active navigation link update
window.addEventListener('scroll', () => {
    updateActiveNav();
});

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

// Prevent form submission on Enter in chat input
chatInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

// Add loading state to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.classList.contains('btn-primary') && this.textContent.includes('Choose')) {
            const originalText = this.textContent;
            this.textContent = 'Added to Cart';
            setTimeout(() => {
                this.textContent = originalText;
            }, 2000);
        }
    });
});

console.log('TechHub Website Initialized Successfully!');
