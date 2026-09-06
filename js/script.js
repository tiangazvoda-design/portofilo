(function(){
  "use strict";

  /* ---------- Theme toggle ---------- */
  var root = document.documentElement;
  var themeToggle = document.getElementById('themeToggle');
  var stored = localStorage.getItem('theme');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if(stored === 'dark' || (!stored && prefersDark)){
    root.setAttribute('data-theme','dark');
  }

  themeToggle.addEventListener('click', function(){
    var isDark = root.getAttribute('data-theme') === 'dark';
    if(isDark){
      root.removeAttribute('data-theme');
      localStorage.setItem('theme','light');
    } else {
      root.setAttribute('data-theme','dark');
      localStorage.setItem('theme','dark');
    }
  });

  /* ---------- Mobile menu ---------- */
  var menuToggle = document.getElementById('menuToggle');
  var navLinks = document.getElementById('navLinks');

  menuToggle.addEventListener('click', function(){
    var isOpen = navLinks.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  navLinks.querySelectorAll('a').forEach(function(link){
    link.addEventListener('click', function(){
      navLinks.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded','false');
    });
  });

  /* ---------- Accordion (FAQ) ---------- */
  document.querySelectorAll('.accordion__trigger').forEach(function(trigger){
    trigger.addEventListener('click', function(){
      var expanded = trigger.getAttribute('aria-expanded') === 'true';
      var panel = trigger.nextElementSibling;

      // close all others
      document.querySelectorAll('.accordion__trigger').forEach(function(other){
        if(other !== trigger){
          other.setAttribute('aria-expanded','false');
          other.nextElementSibling.style.maxHeight = null;
        }
      });

      trigger.setAttribute('aria-expanded', String(!expanded));
      panel.style.maxHeight = expanded ? null : panel.scrollHeight + 'px';
    });
  });

  /* ---------- Project modal ---------- */
  var projectData = {
    vodovod: {
      title: 'Vodovod Kern — koncept',
      category: 'Vodovodno podjetje',
      desc: 'Predstavitvena stran za vodovodno podjetje, zasnovana tako, da stranka v nekaj sekundah najde nujno telefonsko številko in seznam storitev.',
      features: [
        'Naslovnica z jasno izpostavljeno telefonsko številko za nujne primere',
        'Pregleden seznam storitev (napeljave, okvare, kotlovnice)',
        'Območje delovanja / lokacija',
        'Preprost obrazec za povpraševanje',
        'Responsive prikaz za iskanje "na terenu" preko telefona'
      ]
    },
    avtomehanik: {
      title: 'Avto Servis Rok — koncept',
      category: 'Avtomehanična delavnica',
      desc: 'Stran za avtomehanično delavnico, ki poudarja zaupanje in preprosto naročanje termina za servis.',
      features: [
        'Cenik osnovnih storitev (servis, menjava olja, diagnostika)',
        'Obrazec za naročilo termina',
        'Lokacija in delovni čas na zemljevidu',
        'Predstavitev opreme in specializacije delavnice',
        'Hitro nalaganje tudi na mobilnih napravah'
      ]
    },
    mizarstvo: {
      title: 'Mizarstvo Novak — koncept',
      category: 'Mizarstvo',
      desc: 'Portfolio stran za mizarstvo, kjer je v ospredju galerija izdelkov po meri in zgodba obrti.',
      features: [
        'Galerija realiziranih izdelkov po meri',
        'Opis procesa izdelave in uporabljenih materialov',
        'Obrazec za povpraševanje po projektu (mere, material, rok)',
        'Predstavitev mizarja in delavnice',
        'Vizualno mirna, "lesena" estetika brez pretiravanja'
      ]
    }
  };

  var modal = document.getElementById('projectModal');
  var modalTitle = document.getElementById('modalTitle');
  var modalCategory = document.getElementById('modalCategory');
  var modalDesc = document.getElementById('modalDesc');
  var modalFeatures = document.getElementById('modalFeatures');
  var lastFocused = null;

  function openModal(key){
    var data = projectData[key];
    if(!data) return;
    modalTitle.textContent = data.title;
    modalCategory.textContent = data.category;
    modalDesc.textContent = data.desc;
    modalFeatures.innerHTML = '';
    data.features.forEach(function(f){
      var li = document.createElement('li');
      li.textContent = f;
      modalFeatures.appendChild(li);
    });
    lastFocused = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden','false');
    modal.querySelector('.modal__close').focus();
    document.body.style.overflow = 'hidden';
  }

  function closeModal(){
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
    if(lastFocused) lastFocused.focus();
  }

  document.querySelectorAll('[data-open-project]').forEach(function(btn){
    btn.addEventListener('click', function(){
      openModal(btn.getAttribute('data-open-project'));
    });
  });

  modal.querySelectorAll('[data-close-modal]').forEach(function(el){
    el.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && modal.classList.contains('is-open')){
      closeModal();
    }
  });

  /* ---------- Contact form ---------- */
  var form = document.getElementById('contactForm');
  var formNote = document.getElementById('formNote');

  form.addEventListener('submit', function(e){
    e.preventDefault();

    var ime = form.ime.value.trim();
    var podjetje = form.podjetje.value.trim();
    var email = form.email.value.trim();
    var sporocilo = form.sporocilo.value.trim();

    if(!ime || !email || !sporocilo){
      formNote.textContent = 'Prosim, izpolnite vsa obvezna polja.';
      return;
    }

    var subject = encodeURIComponent('Povpraševanje za spletno stran' + (podjetje ? ' — ' + podjetje : ''));
    var body = encodeURIComponent(
      'Ime: ' + ime + '\n' +
      'Podjetje: ' + (podjetje || '/') + '\n' +
      'Email: ' + email + '\n\n' +
      'Sporočilo:\n' + sporocilo
    );

    window.location.href = 'mailto:tian.gazvoda@gmail.com?subject=' + subject + '&body=' + body;
    formNote.textContent = 'Odpira se vaš e-poštni program s pripravljenim sporočilom.';
  });

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && revealEls.length){
    var revealObserver = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function(el){ revealObserver.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('is-visible'); });
  }

  /* ---------- Footer year ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();

})();
