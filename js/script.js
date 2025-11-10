
  // ================================================
// 📱 Responsive Navbar Animation (Slide-in Effect)
// ================================================
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });
  }

  // Optional: Close menu on link click (for better UX)
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  });
});

// ================================================
// ✉ Contact Form Validation
// ================================================
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");
  
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("⚠ Please fill out all fields before submitting!");
        return;
      }

      alert("✅ Thank you for contacting Seven 8 Six Associates!");
      form.reset();
    });
  }

  // ================================================
  // 🔐 Login Page Validation
  // ================================================
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
      e.preventDefault();
      
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (username === "admin" && password === "1234") {
        alert("✅ Login successful! Redirecting to dashboard...");
        window.location.href = "dashboard.html";
      } else {
        alert("❌ Invalid username or password!");
      }
    });
  }
});

// ================================================
// 🎬 Scroll Animations for Hero & About Sections
// ================================================
window.addEventListener("scroll", () => {
  const about = document.querySelector(".about-inner");
  if (!about) return;

  const pos = about.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.2;

  if (pos < screenPos) {
    about.style.opacity = "1";
    about.style.transform = "translateY(0)";
  }
});

window.addEventListener("scroll", () => {
  const heroContent = document.querySelector(".hero-content");
  if (!heroContent) return;

  const pos = heroContent.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;

  if (pos < screenPos) {
    heroContent.style.opacity = "1";
    heroContent.style.transform = "translateY(0)";
  }
});