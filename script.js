document.addEventListener("DOMContentLoaded", function () {
  const navMenu = document.querySelector(".nav-menu");
  const navToggle = document.querySelector(".nav-toggle");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      const isOpen = navMenu.classList.toggle("active");
      navToggle.classList.toggle("active", isOpen);
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    document.querySelectorAll(".nav-menu a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        navToggle.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll(".faq-item").forEach(function (item) {
    const button = item.querySelector(".faq-question");
    if (button) {
      button.addEventListener("click", function () {
        item.classList.toggle("active");
      });
    }
  });

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const message = document.getElementById("formMessage");
      if (message) {
        message.textContent = "Thank you! Your message has been received.";
      }
      contactForm.reset();
    });
  }

  const uploadForm = document.getElementById("newsUploadForm");
  if (uploadForm) {
    uploadForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("News uploaded successfully.");
      uploadForm.reset();
    });
  }
});
