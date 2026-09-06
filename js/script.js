
(function () {
  "use strict";


  /* =========================================================
     THEME
  ========================================================= */

  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");

  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    root.setAttribute("data-theme", "dark");
  }

  themeToggle.addEventListener("click", () => {

    const isDark =
      root.getAttribute("data-theme") === "dark";

    if (isDark) {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    } else {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }

  });


  /* =========================================================
     MOBILE NAVIGATION
  ========================================================= */

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", () => {

    const isOpen =
      navLinks.classList.toggle("is-open");

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    document.body.classList.toggle(
      "menu-open",
      isOpen
    );

  });

  navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("is-open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      document.body.classList.remove("menu-open");

    });

  });


  /* =========================================================
     NAVBAR SCROLL EFFECT
  ========================================================= */

  const navbar = document.getElementById("navbar");

  function updateNavbar() {

    navbar.classList.toggle(
      "is-scrolled",
      window.scrollY > 20
    );

  }

  updateNavbar();

  window.addEventListener(
    "scroll",
    updateNavbar,
    { passive: true }
  );


  /* =========================================================
     SCROLL PROGRESS
  ========================================================= */

  const progress =
    document.getElementById("scrollProgress");

  function updateProgress() {

    const scrollTop = window.scrollY;

    const scrollHeight =
      document.documentElement.scrollHeight -
      window.innerHeight;

    const percentage =
      scrollHeight > 0
        ? (scrollTop / scrollHeight) * 100
        : 0;

    progress.style.width =
      percentage + "%";

  }

  window.addEventListener(
    "scroll",
    updateProgress,
    { passive: true }
  );

  updateProgress();


  /* =========================================================
     SMOOTH REVEAL
  ========================================================= */

  const revealElements =
    document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const revealObserver =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add(
              "is-visible"
            );

            revealObserver.unobserve(
              entry.target
            );

          });

        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -50px 0px"
        }
      );

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });

  } else {

    revealElements.forEach(element => {
      element.classList.add("is-visible");
    });

  }


  /* =========================================================
     FAQ ACCORDION
  ========================================================= */

  const accordionTriggers =
    document.querySelectorAll(
      ".accordion__trigger"
    );

  accordionTriggers.forEach(trigger => {

    trigger.addEventListener("click", () => {

      const isExpanded =
        trigger.getAttribute(
          "aria-expanded"
        ) === "true";

      const panel =
        trigger.nextElementSibling;


      /* Close every other item */

      accordionTriggers.forEach(other => {

        if (other === trigger) {
          return;
        }

        other.setAttribute(
          "aria-expanded",
          "false"
        );

        other.nextElementSibling.style.maxHeight =
          null;

      });


      /* Toggle selected item */

      trigger.setAttribute(
        "aria-expanded",
        String(!isExpanded)
      );

      if (!isExpanded) {

        panel.style.maxHeight =
          panel.scrollHeight + "px";

      } else {

        panel.style.maxHeight = null;

      }

    });

  });


  /* =========================================================
     PROJECT MODAL
  ========================================================= */

  const projectData = {

    vodovod: {
      title: "Vodovod Kern",
      category: "Vodovodno podjetje",
      desc:
        "Koncept spletne strani za vodovodno podjetje, kjer je glavni cilj, da obiskovalec čim hitreje najde storitve in kontakt za nujne primere.",
      features: [
        "Jasno izpostavljen nujni kontakt",
        "Pregled storitev",
        "Območje delovanja",
        "Kontaktni obrazec",
        "Responsive mobilni prikaz"
      ]
    },

    avtomehanik: {
      title: "Avto Servis Rok",
      category: "Avtomehanična delavnica",
      desc:
        "Koncept moderne strani za avtomehanično delavnico, ki gradi zaupanje in obiskovalca hitro pripelje do naročila termina.",
      features: [
        "Predstavitev storitev",
        "Cenik osnovnih storitev",
        "Naročilo termina",
        "Lokacija in delovni čas",
        "Predstavitev opreme"
      ]
    },

    mizarstvo: {
      title: "Mizarstvo Novak",
      category: "Mizarstvo",
      desc:
        "Vizualno usmerjena konceptna stran za mizarstvo, kjer so v ospredju končni izdelki, proces izdelave in delo po meri.",
      features: [
        "Galerija izdelkov",
        "Predstavitev materialov",
        "Proces izdelave",
        "Povpraševanje za projekt",
        "Predstavitev delavnice"
      ]
    }

  };


  const modal =
    document.getElementById("projectModal");

  const modalTitle =
    document.getElementById("modalTitle");

  const modalCategory =
    document.getElementById("modalCategory");

  const modalDesc =
    document.getElementById("modalDesc");

  const modalFeatures =
    document.getElementById("modalFeatures");

  const projectButtons =
    document.querySelectorAll(
      "[data-open-project]"
    );

  const closeModalElements =
    modal.querySelectorAll(
      "[data-close-modal]"
    );

  let lastFocusedElement = null;


  function openModal(key) {

    const project =
      projectData[key];

    if (!project) {
      return;
    }

    modalTitle.textContent =
      project.title;

    modalCategory.textContent =
      project.category;

    modalDesc.textContent =
      project.desc;

    modalFeatures.innerHTML = "";

    project.features.forEach(feature => {

      const li =
        document.createElement("li");

      li.textContent = feature;

      modalFeatures.appendChild(li);

    });

    lastFocusedElement =
      document.activeElement;

    modal.classList.add("is-open");

    modal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.classList.add(
      "modal-open"
    );

    requestAnimationFrame(() => {

      modal.querySelector(
        ".modal__close"
      ).focus();

    });

  }


  function closeModal() {

    modal.classList.remove(
      "is-open"
    );

    modal.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.classList.remove(
      "modal-open"
    );

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }

  }


  projectButtons.forEach(button => {

    button.addEventListener("click", () => {

      openModal(
        button.getAttribute(
          "data-open-project"
        )
      );

    });

  });


  closeModalElements.forEach(element => {

    element.addEventListener(
      "click",
      closeModal
    );

  });


  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape" &&
        modal.classList.contains("is-open")
      ) {
        closeModal();
      }

    }
  );


  /* =========================================================
     CONTACT FORM
     
     Sends directly through FormSubmit.
     No mail application is opened.
  ========================================================= */

  const form =
    document.getElementById("contactForm");

  const formNote =
    document.getElementById("formNote");

  const submitButton =
    form.querySelector(
      ".btn--submit"
    );

  const submitText =
    submitButton.querySelector(
      "span:first-child"
    );


  form.addEventListener(
    "submit",
    async event => {

      event.preventDefault();


      /* Honeypot spam protection */

      const honey =
        form.querySelector(
          '[name="_honey"]'
        );

      if (honey.value.trim() !== "") {
        return;
      }


      /* Browser validation */

      if (!form.checkValidity()) {

        form.reportValidity();

        return;

      }


      const ime =
        form.ime.value.trim();

      const podjetje =
        form.podjetje.value.trim();

      const email =
        form.email.value.trim();

      const sporocilo =
        form.sporocilo.value.trim();


      if (
        !ime ||
        !email ||
        !sporocilo
      ) {

        formNote.textContent =
          "Prosim, izpolni vsa obvezna polja.";

        return;

      }


      /* Loading state */

      submitButton.disabled = true;

      submitText.textContent =
        "Pošiljam...";

      formNote.textContent =
        "";


      try {

        const formData =
          new FormData(form);

        const response =
          await fetch(
            form.action,
            {
              method: "POST",
              body: formData,
              headers: {
                "Accept":
                  "application/json"
              }
            }
          );


        if (!response.ok) {
          throw new Error(
            "Napaka pri pošiljanju."
          );
        }


        /* Success */

        formNote.textContent =
          "✓ Povpraševanje je bilo uspešno poslano. Hvala!";

        form.reset();

        submitText.textContent =
          "Poslano ✓";


      } catch (error) {

        console.error(error);

        formNote.textContent =
          "Pri pošiljanju je prišlo do napake. Poskusi ponovno.";

        submitText.textContent =
          "Poskusi ponovno";

      } finally {

        setTimeout(() => {

          submitButton.disabled =
            false;

          if (
            submitText.textContent ===
            "Poslano ✓"
          ) {

            submitText.textContent =
              "Pošlji povpraševanje";

          }

        }, 3500);

      }

    }
  );


  /* =========================================================
     FOOTER YEAR
  ========================================================= */

  const year =
    document.getElementById("year");

  year.textContent =
    new Date().getFullYear();


  /* =========================================================
     TILT EFFECT FOR PROJECT CARDS
  ========================================================= */

  const cards =
    document.querySelectorAll(
      ".project-card"
    );

  const isTouchDevice =
    window.matchMedia(
      "(hover: none)"
    ).matches;


  if (!isTouchDevice) {

    cards.forEach(card => {

      card.addEventListener(
        "mousemove",
        event => {

          const rect =
            card.getBoundingClientRect();

          const x =
            event.clientX - rect.left;

          const y =
            event.clientY - rect.top;

          const rotateX =
            ((y / rect.height) - .5) * -4;

          const rotateY =
            ((x / rect.width) - .5) * 4;

          card.style.transform =
            `translateY(-9px) perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        }
      );


      card.addEventListener(
        "mouseleave",
        () => {

          card.style.transform =
            "";

        }
      );

    });

  }


})();

