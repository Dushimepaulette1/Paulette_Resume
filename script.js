document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll("#navbar a");
  navLinks.forEach((link) => {
    link.addEventListener("click", handleNavClick);
  });

  // Fade-in effect for sections
  const sections = document.querySelectorAll("section");
  const fadeInObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    fadeInObserver.observe(section);
  });

  // Form validation
  const contactForm = document.querySelector("#contact form");
  if (contactForm) {
    contactForm.addEventListener("submit", validateForm);
  }

  // Portfolio filtering
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      projectCards.forEach((card) => {
        if (
          filterValue === "all" ||
          card.getAttribute("data-category") === filterValue
        ) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Project card hover effect
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.querySelector(".project-info").style.transform = "translateY(0)";
    });
    card.addEventListener("mouseleave", () => {
      card.querySelector(".project-info").style.transform = "translateY(100%)";
    });
  });
});

function handleNavClick(e) {
  const targetId = this.getAttribute("href");

  // Check if the link is to another page
  if (targetId.includes(".html")) {
    // Allow normal link behavior for external pages
    return;
  }

  // For same-page links, use smooth scrolling
  e.preventDefault();
  const targetSection = document.querySelector(targetId);
  if (targetSection) {
    window.scrollTo({
      top: targetSection.offsetTop - 80,
      behavior: "smooth",
    });
  }
}

function validateForm(e) {
  e.preventDefault();
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const messageInput = document.querySelector("#message");

  if (!nameInput.value || !emailInput.value || !messageInput.value) {
    alert("Please fill out all fields");
    return;
  }

  if (!isValidEmail(emailInput.value)) {
    alert("Please enter a valid email address");
    return;
  }

  // If validation passes, you can submit the form or handle the data as needed
  alert("Form submitted successfully!");
  this.reset();
}

function isValidEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
