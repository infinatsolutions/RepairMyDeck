(function () {
  "use strict";

  const navToggle = document.querySelector(".nav-toggle");
  const primaryNav = document.getElementById("primary-nav");
  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", function () {
      const isOpen = primaryNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    primaryNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        primaryNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function renderStars(rating) {
    const full = Math.max(0, Math.min(5, Math.round(Number(rating) || 0)));
    return "★".repeat(full) + "☆".repeat(5 - full);
  }

  async function loadReviews() {
    const reviewsSummary = document.getElementById("reviews-summary");
    const reviewsList = document.getElementById("reviews-list");

    if (!reviewsSummary || !reviewsList || !window.REPAIR_MY_DECK_REVIEWS) {
      return;
    }

    let payload;

    try {
      if (window.REPAIR_MY_DECK_REVIEWS.mode === "live") {
        payload = await window.REPAIR_MY_DECK_REVIEWS.fetchGoogleReviews();
      } else {
        payload = {
          summary: window.REPAIR_MY_DECK_REVIEWS.demoSummary,
          reviews: window.REPAIR_MY_DECK_REVIEWS.demoReviews
        };
      }
    } catch (error) {
      payload = {
        summary: window.REPAIR_MY_DECK_REVIEWS.demoSummary,
        reviews: window.REPAIR_MY_DECK_REVIEWS.demoReviews
      };
      console.warn("Using demo reviews fallback:", error);
    }

    const summary = payload.summary || {};
    const reviews = Array.isArray(payload.reviews) ? payload.reviews : [];

    reviewsSummary.textContent = `${summary.averageRating || "N/A"} / 5 rating from ${summary.totalReviews || 0} review entries (${summary.sourceLabel || "Demo"}).`;

    reviewsList.innerHTML = "";

    if (!reviews.length) {
      reviewsList.innerHTML = "<p>No reviews available yet. Please check back soon.</p>";
      return;
    }

    reviews.forEach(function (item) {
      const card = document.createElement("article");
      card.className = "review-card";

      const author = item.author || "Anonymous";
      const relativeTime = item.relativeTime || "Recent";
      const text = item.text || "Review content unavailable.";

      card.innerHTML = `
        <div class="review-meta">
          <strong>${author}</strong>
          <span>${relativeTime}</span>
        </div>
        <div class="stars" aria-label="${item.rating || 0} out of 5 stars">${renderStars(item.rating)}</div>
        <p>${text}</p>
      `;

      reviewsList.appendChild(card);
    });
  }

  function showFormMessage(el, message, type) {
    if (!el) return;
    el.className = `form-status ${type}`;
    el.textContent = message;
  }

  function validateContactForm(formData) {
    const name = (formData.get("name") || "").toString().trim();
    const phone = (formData.get("phone") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const city = (formData.get("city") || "").toString().trim();
    const projectType = (formData.get("projectType") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();
    const honeypot = (formData.get("companyWebsite") || "").toString().trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9+()\-\.\s]{7,20}$/;

    if (honeypot) return "Spam check failed.";
    if (name.length < 2) return "Please enter your full name.";
    if (!phonePattern.test(phone)) return "Please enter a valid phone number.";
    if (!emailPattern.test(email)) return "Please enter a valid email address.";
    if (city.length < 2) return "Please enter your city.";
    if (!projectType) return "Please select a project type.";
    if (message.length < 10) return "Please provide a few project details (at least 10 characters).";

    return "";
  }

  function wireContactForm() {
    const form = document.getElementById("contact-form");
    const statusEl = document.getElementById("form-status");

    if (!form || !statusEl) return;

    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      showFormMessage(statusEl, "", "");

      const formData = new FormData(form);
      const validationError = validateContactForm(formData);

      if (validationError) {
        showFormMessage(statusEl, validationError, "error");
        return;
      }

      const action = form.getAttribute("action") || "";
      const method = (form.getAttribute("method") || "post").toUpperCase();

      try {
        const response = await fetch(action, {
          method,
          body: formData,
          headers: {
            Accept: "application/json"
          }
        });

        // If PHP endpoint returns HTML redirect, response.ok can still be true.
        if (!response.ok) {
          throw new Error("Form submit failed.");
        }

        showFormMessage(statusEl, "Thanks! Your request has been sent. We will contact you shortly.", "success");
        form.reset();
      } catch (error) {
        // Graceful fallback for static-only hosting where backend is not configured.
        showFormMessage(
          statusEl,
          "Your request could not be sent automatically right now. Please call 614-522-9472 for immediate service.",
          "error"
        );
        console.warn("Contact form submission error:", error);
      }
    });
  }

  loadReviews();
  wireContactForm();
})();
