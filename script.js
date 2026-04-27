(function () {
  "use strict";

  var menuToggle = document.querySelector(".menu-toggle");
  var siteNav = document.getElementById("site-nav");
  var yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", function () {
      var open = siteNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
    });

    siteNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        siteNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function setStatus(el, text, type) {
    if (!el) return;
    el.className = "form-status " + (type || "");
    el.textContent = text || "";
  }

  function validateForm(formData) {
    var name = String(formData.get("name") || "").trim();
    var phone = String(formData.get("phone") || "").trim();
    var email = String(formData.get("email") || "").trim();
    var city = String(formData.get("city") || "").trim();
    var projectType = String(formData.get("projectType") || "").trim();
    var message = String(formData.get("message") || "").trim();
    var honeypot = String(formData.get("companyWebsite") || "").trim();

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRegex = /^[0-9+()\-\.\s]{7,20}$/;

    if (honeypot) return "Spam check failed.";
    if (name.length < 2) return "Please enter your name.";
    if (!phoneRegex.test(phone)) return "Please enter a valid phone number.";
    if (!emailRegex.test(email)) return "Please enter a valid email address.";
    if (city.length < 2) return "Please enter your city.";
    if (!projectType) return "Please select a project type.";
    if (message.length < 8) return "Please provide project details.";

    return "";
  }

  function setupContactForm() {
    var form = document.getElementById("contact-form");
    var status = document.getElementById("form-status");

    if (!form || !status) return;

    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      setStatus(status, "", "");

      var formData = new FormData(form);
      var error = validateForm(formData);

      if (error) {
        setStatus(status, error, "error");
        return;
      }

      try {
        var res = await fetch(form.action, {
          method: (form.method || "post").toUpperCase(),
          body: formData,
          headers: { Accept: "application/json" }
        });

        if (!res.ok) throw new Error("Request failed");

        setStatus(status, "Thanks! Your request has been sent to repairmydeck@iCloud.com.", "success");
        form.reset();
      } catch (err) {
        setStatus(status, "Unable to send right now. Please call 614-522-9472.", "error");
        console.warn("Contact form submission error:", err);
      }
    });
  }

  setupContactForm();
})();
