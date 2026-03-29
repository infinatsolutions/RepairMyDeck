(function () {
  "use strict";

  var navToggle = document.querySelector(".nav-toggle");
  var primaryNav = document.getElementById("primary-nav");
  var yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = primaryNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    var navLinks = primaryNav.querySelectorAll("a");
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        primaryNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function renderStars(rating) {
    var full = Math.max(0, Math.min(5, Math.round(Number(rating) || 0)));
    return "★".repeat(full) + "☆".repeat(5 - full);
  }


  function reviewCardMarkup(item) {
    var author = item.author || "Anonymous";
    var relativeTime = item.relativeTime || "Recent";
    var text = item.text || "Review content unavailable.";
    var rating = Number(item.rating) || 0;

    return (
      '<article class="review-card">' +
        '<div class="review-meta">' +
          '<strong>' + author + '</strong>' +
          '<span>' + relativeTime + '</span>' +
        '</div>' +
        '<div class="stars" aria-label="' + rating + ' out of 5 stars">' + renderStars(rating) + '</div>' +
        '<p>' + text + '</p>' +
      '</article>'
    );
  }

  async function loadReviews() {
    var reviewsSummary = document.getElementById("reviews-summary");
    var reviewsList = document.getElementById("reviews-list");

    if (!reviewsSummary || !reviewsList || !window.REPAIR_MY_DECK_REVIEWS) {
      return;
    }

    var payload;

    try {
      if (window.REPAIR_MY_DECK_REVIEWS.mode === "live") {
        payload = await window.REPAIR_MY_DECK_REVIEWS.fetchGoogleReviews();
      } else {
        payload = {
          summary: window.REPAIR_MY_DECK_REVIEWS.demoSummary,
          reviews: window.REPAIR_MY_DECK_REVIEWS.demoReviews
        };
      }
    } catch (err) {
      payload = {
        summary: window.REPAIR_MY_DECK_REVIEWS.demoSummary,
        reviews: window.REPAIR_MY_DECK_REVIEWS.demoReviews
      };
      console.warn("Review fetch failed. Demo reviews shown instead.", err);
    }

    var summary = payload.summary || {};
    var reviews = Array.isArray(payload.reviews) ? payload.reviews : [];

    reviewsSummary.textContent =
      (summary.averageRating || "N/A") +
      " / 5 average from " +
      (summary.totalReviews || 0) +
      " entries (" +
      (summary.sourceLabel || "Demo Content") +
      ").";

    if (!reviews.length) {
      reviewsList.innerHTML = "<p>No reviews available yet. Please check back soon.</p>";
      return;
    }

    reviewsList.innerHTML = reviews.map(reviewCardMarkup).join("");
  }

  function setFormMessage(statusEl, message, type) {
    if (!statusEl) return;
    statusEl.className = "form-status " + (type || "");
    statusEl.textContent = message || "";
  }

  function validate(formData) {
    var honeypot = String(formData.get("companyWebsite") || "").trim();
    var name = String(formData.get("name") || "").trim();
    var phone = String(formData.get("phone") || "").trim();
    var email = String(formData.get("email") || "").trim();
    var city = String(formData.get("city") || "").trim();
    var projectType = String(formData.get("projectType") || "").trim();
    var message = String(formData.get("message") || "").trim();

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRegex = /^[0-9+()\-\.\s]{7,20}$/;

    if (honeypot) return "Spam check failed.";
    if (name.length < 2) return "Please enter your full name.";
    if (!phoneRegex.test(phone)) return "Please enter a valid phone number.";
    if (!emailRegex.test(email)) return "Please enter a valid email address.";
    if (city.length < 2) return "Please enter your city.";
    if (!projectType) return "Please select a project type.";
    if (message.length < 10) return "Please provide more project details (at least 10 characters).";

    return "";
  }

  function wireContactForm() {
    var form = document.getElementById("contact-form");
    var statusEl = document.getElementById("form-status");

    if (!form || !statusEl) return;

    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      setFormMessage(statusEl, "", "");

      var formData = new FormData(form);
      var validationError = validate(formData);
      if (validationError) {
        setFormMessage(statusEl, validationError, "error");
        return;
      }

      var action = form.getAttribute("action") || "";
      var method = (form.getAttribute("method") || "post").toUpperCase();

      try {
        var response = await fetch(action, {
          method: method,
          body: formData,
          headers: { Accept: "application/json" }
        });

        if (!response.ok) {
          throw new Error("Submission failed");
        }

        setFormMessage(statusEl, "Thank you. Your quote request has been sent. We will contact you soon.", "success");
        form.reset();
      } catch (err) {
        setFormMessage(
          statusEl,
          "We could not submit the form automatically right now. Please call 614-522-9472 for immediate help.",
          "error"
        );
        console.warn("Contact form error:", err);
      }
    });
  }

  // Basic consistency checks for common IDs used by JS.
  ["reviews-summary", "reviews-list", "contact-form", "form-status", "year"].forEach(function (id) {
    if (!document.getElementById(id)) {
      console.warn("Expected element missing:", id);
    }
  });

  loadReviews();
  wireContactForm();
})();
