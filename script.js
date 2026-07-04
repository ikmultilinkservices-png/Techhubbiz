document.addEventListener("DOMContentLoaded", function () {

    // ==========================
    // Mobile Navigation
    // ==========================

    const navMenu = document.querySelector(".nav-menu");
    const navToggle =
        document.querySelector(".nav-toggle") ||
        document.querySelector(".menu-btn");

    if (navToggle && navMenu) {

        navToggle.addEventListener("click", function () {

            navMenu.classList.toggle("active");

            navToggle.classList.toggle("active");

        });

        document.querySelectorAll(".nav-menu a").forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("active");

                navToggle.classList.remove("active");

            });

        });

    }

    // ==========================
    // FAQ
    // ==========================

    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {

        question.addEventListener("click", function () {

            const item = this.parentElement;

            item.classList.toggle("active");

        });

    });

    // ==========================
    // Contact Form
    // ==========================

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const message = document.getElementById("formMessage");

            message.innerHTML = "✅ Thank you! Your message has been sent.";

            message.style.color = "green";

            contactForm.reset();

        });

    }

    // ==========================
    // News Upload (Only if it exists)
    // ==========================

    const uploadForm = document.getElementById("newsUploadForm");

    if (uploadForm) {

        uploadForm.addEventListener("submit", function (e) {

            e.preventDefault();

            alert("News uploaded successfully.");

            uploadForm.reset();

        });

    }

});
