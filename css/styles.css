
/* =========================================================
   VARIABLES
========================================================= */

:root {
  --bg: #f5f7f9;
  --bg-alt: #eaf0f5;
  --surface: #ffffff;

  --text: #101827;
  --text-soft: #566274;
  --text-faint: #8792a3;

  --accent: #b86632;
  --accent-light: #d98b58;

  --blue: #3f6f9d;
  --border: rgba(16, 24, 39, .12);
  --border-strong: rgba(16, 24, 39, .22);

  --shadow-sm: 0 8px 30px rgba(16, 24, 39, .06);
  --shadow-lg: 0 30px 80px rgba(16, 24, 39, .13);

  --ease: cubic-bezier(.22, 1, .36, 1);
  --container: 1160px;

  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
}

[data-theme="dark"] {
  --bg: #0a101b;
  --bg-alt: #101927;
  --surface: #131e2d;

  --text: #edf2f7;
  --text-soft: #aab5c4;
  --text-faint: #718096;

  --accent: #df8a4c;
  --accent-light: #efa56f;

  --blue: #78a5cd;

  --border: rgba(255,255,255,.11);
  --border-strong: rgba(255,255,255,.2);

  --shadow-sm: 0 8px 30px rgba(0,0,0,.18);
  --shadow-lg: 0 30px 80px rgba(0,0,0,.3);
}


/* =========================================================
   RESET
========================================================= */

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  transition:
    background .45s var(--ease),
    color .45s var(--ease);
}

body.modal-open {
  overflow: hidden;
}

img,
svg {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea {
  font: inherit;
}

button {
  border: 0;
  cursor: pointer;
}

h1,
h2,
h3,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

::selection {
  background: var(--accent);
  color: white;
}


/* =========================================================
   ACCESSIBILITY
========================================================= */

:focus-visible {
  outline: 2px solid var(--blue);
  outline-offset: 4px;
}

.skip-link {
  position: fixed;
  top: 0;
  left: -999px;
  z-index: 9999;
  padding: 12px 18px;
  background: var(--text);
  color: var(--bg);
}

.skip-link:focus {
  left: 0;
}


/* =========================================================
   PROGRESS BAR
========================================================= */

.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 0;
  height: 2px;
  background: var(--accent);
  transform-origin: left;
}


/* =========================================================
   GLOBAL
========================================================= */

.container {
  width: min(var(--container), calc(100% - 48px));
  margin-inline: auto;
}

.section {
  position: relative;
  padding: 120px 0;
}

.section--alt {
  background: var(--bg-alt);
}

.section__head {
  max-width: 700px;
  margin: 0 auto 65px;
  text-align: center;
}

.section__head--left {
  margin: 0;
  text-align: left;
}

.section-number {
  display: inline-block;
  margin-bottom: 17px;
  color: var(--accent);
  font: 600 .72rem/1 var(--font-display);
  letter-spacing: .16em;
}

.section__head h2,
.about__copy h2 {
  font: 600 clamp(2rem, 4vw, 3.2rem)/1.08 var(--font-display);
  letter-spacing: -.045em;
}

.section__head h2 span,
.about__copy h2 span,
.hero__title span {
  color: var(--text-soft);
}

.section__head p {
  max-width: 620px;
  margin: 20px auto 0;
  color: var(--text-soft);
}


/* =========================================================
   BUTTONS
========================================================= */

.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  min-height: 52px;
  padding: 0 24px;

  border: 1px solid transparent;
  border-radius: 5px;

  font-weight: 600;
  font-size: .9rem;

  overflow: hidden;

  transition:
    transform .45s var(--ease),
    background .45s var(--ease),
    border-color .45s var(--ease),
    color .45s var(--ease),
    box-shadow .45s var(--ease);
}

.btn::before {
  content: "";
  position: absolute;
  inset: 0;

  background: rgba(255,255,255,.1);

  transform: translateX(-105%);
  transition: transform .6s var(--ease);
}

.btn:hover::before {
  transform: translateX(0);
}

.btn:hover {
  transform: translateY(-3px);
}

.btn span {
  position: relative;
  z-index: 1;
}

.btn--primary {
  background: var(--text);
  color: var(--bg);
  box-shadow: 0 10px 25px rgba(16,24,39,.12);
}

[data-theme="dark"] .btn--primary {
  background: var(--accent);
  color: #111;
}

.btn--ghost {
  border-color: var(--border-strong);
}

.btn--ghost:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.btn--outline {
  width: 100%;
  border-color: var(--border-strong);
}

.btn--outline:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.btn--submit {
  width: 100%;
}


/* =========================================================
   NAVBAR
========================================================= */

.navbar {
  position: sticky;
  top: 0;
  z-index: 500;

  background: color-mix(in srgb, var(--bg) 82%, transparent);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  border-bottom: 1px solid var(--border);

  transition:
    background .4s var(--ease),
    box-shadow .4s var(--ease);
}

.navbar.is-scrolled {
  box-shadow: 0 8px 30px rgba(0,0,0,.06);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand__mark {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  color: var(--accent);
}

.brand__mark svg {
  width: 100%;
  height: 100%;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.4;
}

.brand__name {
  font: 600 1rem var(--font-display);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav-links a {
  position: relative;
  color: var(--text-soft);
  font-size: .87rem;
  transition: color .3s var(--ease);
}

.nav-links a:not(.nav-cta)::after {
  content: "";

  position: absolute;
  right: 100%;
  bottom: -6px;
  left: 0;

  height: 1px;

  background: var(--accent);

  transition: right .45s var(--ease);
}

.nav-links a:not(.nav-cta):hover::after {
  right: 0;
}

.nav-links a:hover {
  color: var(--text);
}

.nav-cta {
  padding: 10px 18px;
  border-radius: 4px;
  background: var(--text);
  color: var(--bg) !important;
}

[data-theme="dark"] .nav-cta {
  background: var(--accent);
  color: #111 !important;
}

.navbar__actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.theme-toggle {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: transparent;
  color: var(--text);
  transition: background .3s, transform .3s var(--ease);
}

.theme-toggle:hover {
  background: var(--bg-alt);
  transform: rotate(15deg);
}

.theme-toggle svg {
  width: 18px;
  height: 18px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.6;
}

.icon-moon {
  display: none;
}

[data-theme="dark"] .icon-sun {
  display: none;
}

[data-theme="dark"] .icon-moon {
  display: block;
}

.menu-toggle {
  display: none;
  width: 38px;
  height: 38px;
  background: transparent;
}

.menu-toggle span {
  display: block;
  width: 21px;
  height: 2px;
  margin: 4px auto;
  background: var(--text);

  transition:
    transform .4s var(--ease),
    opacity .3s var(--ease);
}

.menu-toggle[aria-expanded="true"] span:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.menu-toggle[aria-expanded="true"] span:nth-child(2) {
  opacity: 0;
}

.menu-toggle[aria-expanded="true"] span:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}


/* =========================================================
   HERO
========================================================= */

.hero {
  position: relative;
  min-height: calc(100vh - 72px);
  display: grid;
  align-items: center;
  padding: 90px 0 110px;
  overflow: hidden;
}

.hero::before {
  content: "";

  position: absolute;
  width: 600px;
  height: 600px;

  right: -260px;
  top: -260px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      color-mix(in srgb, var(--accent) 12%, transparent),
      transparent 68%
    );

  pointer-events: none;
}

.hero__grid {
  display: grid;
  grid-template-columns: 1fr .9fr;
  gap: 70px;
  align-items: center;
}

.hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 9px;

  margin-bottom: 18px;

  color: var(--text-soft);
  font-size: .78rem;
  font-weight: 500;
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #48a868;

  box-shadow: 0 0 0 5px rgba(72,168,104,.1);

  animation: pulse 2.4s infinite;
}

@keyframes pulse {
  50% {
    box-shadow: 0 0 0 8px rgba(72,168,104,0);
  }
}

.tag {
  margin-bottom: 14px;
  color: var(--blue);
  font: 600 .72rem var(--font-display);
  letter-spacing: .12em;
  text-transform: uppercase;
}

.hero__title {
  max-width: 720px;

  font: 600 clamp(3.1rem, 7vw, 5.8rem)/.94 var(--font-display);
  letter-spacing: -.065em;
}

.hero__subtitle {
  max-width: 590px;
  margin-top: 28px;

  color: var(--text-soft);
  font-size: 1.02rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;
}

.hero__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  margin-top: 30px;

  color: var(--text-faint);
  font-size: .76rem;
}

.hero__visual {
  position: relative;
  min-height: 500px;
  display: grid;
  place-items: center;
}

.browser {
  position: relative;
  width: min(100%, 490px);

  border: 1px solid var(--border-strong);
  border-radius: 12px;

  background: var(--surface);
  box-shadow: var(--shadow-lg);

  transform: perspective(1200px) rotateY(-5deg) rotateX(2deg);

  transition: transform .8s var(--ease);
}

.hero__visual:hover .browser {
  transform: perspective(1200px) rotateY(0) rotateX(0) translateY(-5px);
}

.browser::after {
  content: "";

  position: absolute;
  inset: 0;

  border-radius: inherit;

  background: linear-gradient(
    120deg,
    transparent 25%,
    rgba(255,255,255,.15),
    transparent 75%
  );

  transform: translateX(-120%);
  transition: transform 1.1s var(--ease);
}

.hero__visual:hover .browser::after {
  transform: translateX(120%);
}

.browser__top {
  display: flex;
  align-items: center;
  gap: 20px;

  height: 44px;
  padding: 0 16px;

  border-bottom: 1px solid var(--border);
}

.browser__dots {
  display: flex;
  gap: 6px;
}

.browser__dots span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--border-strong);
}

.browser__address {
  flex: 1;

  padding: 5px 12px;

  border-radius: 5px;
  background: var(--bg);

  color: var(--text-faint);
  font-size: .65rem;
}

.browser__content {
  min-height: 320px;
  padding: 40px;
}

.browser__line {
  width: 45%;
  height: 7px;
  margin-top: 12px;
  border-radius: 5px;
  background: var(--border-strong);
}

.browser__line--small {
  width: 25%;
  background: var(--accent);
}

.browser__line--large {
  width: 72%;
  height: 14px;
  margin-top: 25px;
  background: var(--text);
}

.browser__button {
  width: 90px;
  height: 28px;
  margin-top: 28px;
  border-radius: 4px;
  background: var(--text);
}

.browser__cards {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 12px;
  margin-top: 55px;
}

.browser__cards div {
  height: 100px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background:
    linear-gradient(
      140deg,
      var(--bg-alt),
      transparent
    );
}

.floating-card {
  position: absolute;

  display: flex;
  align-items: center;
  gap: 10px;

  padding: 13px 16px;

  border: 1px solid var(--border);
  border-radius: 8px;

  background: color-mix(in srgb, var(--surface) 88%, transparent);
  backdrop-filter: blur(15px);

  box-shadow: var(--shadow-sm);

  animation: float 5s ease-in-out infinite;
}

.floating-card strong {
  display: block;
  font-size: .72rem;
}

.floating-card small {
  display: block;
  margin-top: 2px;
  color: var(--text-faint);
  font-size: .58rem;
}

.floating-card__icon {
  display: grid;
  place-items: center;

  width: 30px;
  height: 30px;

  border-radius: 6px;

  background: var(--bg-alt);
  color: var(--accent);
  font-weight: 700;
}

.floating-card--one {
  top: 10%;
  left: -2%;
}

.floating-card--two {
  right: -4%;
  bottom: 12%;
  animation-delay: -2s;
}

@keyframes float {
  0%,100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

.hero-orbit {
  position: absolute;
  border: 1px solid var(--border);
  border-radius: 50%;
  pointer-events: none;
}

.orbit-1 {
  width: 480px;
  height: 480px;
}

.orbit-2 {
  width: 580px;
  height: 580px;
  opacity: .4;
}


/* =========================================================
   PRICING
========================================================= */

.pricing {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 20px;
}

.price-card {
  position: relative;

  display: flex;
  flex-direction: column;

  min-height: 520px;
  padding: 34px;

  border: 1px solid var(--border);
  border-radius: 10px;

  background: var(--surface);

  transition:
    transform .6s var(--ease),
    box-shadow .6s var(--ease),
    border-color .6s var(--ease);
}

.price-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
  border-color: var(--border-strong);
}

.price-card--featured {
  border-color: color-mix(in srgb, var(--accent) 65%, var(--border));
  box-shadow: 0 15px 45px rgba(184,102,50,.1);
}

.price-card__featured {
  position: absolute;
  top: -12px;
  left: 24px;

  padding: 5px 10px;

  border-radius: 3px;
  background: var(--accent);
  color: white;

  font: 600 .62rem var(--font-display);
  letter-spacing: .08em;
  text-transform: uppercase;
}

.price-card__top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;

  color: var(--text-faint);
  font: 600 .65rem var(--font-display);
  letter-spacing: .12em;
}

.price-card__number {
  color: var(--accent);
}

.price-card h3 {
  font: 600 1.65rem var(--font-display);
}

.price-card__desc {
  min-height: 85px;
  margin-top: 12px;

  color: var(--text-soft);
  font-size: .88rem;
}

.price-card__price {
  margin: 25px 0;

  font: 600 2.7rem var(--font-display);
  letter-spacing: -.05em;
}

.price-card__price span {
  margin-left: 4px;
  color: var(--text-soft);
  font-size: 1rem;
}

.price-card__list {
  display: grid;
  gap: 11px;

  flex: 1;

  margin-bottom: 28px;
}

.price-card__list li {
  position: relative;
  padding-left: 20px;
  color: var(--text-soft);
  font-size: .82rem;
}

.price-card__list li::before {
  content: "✓";

  position: absolute;
  left: 0;

  color: var(--accent);
  font-weight: 700;
}

.price-note {
  margin-top: 28px;
  text-align: center;
  color: var(--text-faint);
  font-size: .76rem;
}


/* =========================================================
   PROJECTS
========================================================= */

.projects {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 22px;
}

.project-card {
  overflow: hidden;

  border: 1px solid var(--border);
  border-radius: 10px;

  background: var(--surface);

  transition:
    transform .6s var(--ease),
    box-shadow .6s var(--ease),
    border-color .6s var(--ease);
}

.project-card:hover {
  transform: translateY(-9px);
  border-color: var(--border-strong);
  box-shadow: var(--shadow-lg);
}

.project-card__visual {
  position: relative;
  min-height: 280px;

  display: grid;
  place-items: center;

  overflow: hidden;
}

.project-card__visual::before {
  content: "";

  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      135deg,
      transparent 40%,
      rgba(255,255,255,.08)
    );

  transform: translateX(-100%);
  transition: transform 1s var(--ease);
}

.project-card:hover .project-card__visual::before {
  transform: translateX(100%);
}

.project-card__visual--blue {
  background: #dce8f2;
  color: #3f6f9d;
}

.project-card__visual--dark {
  background: #172131;
  color: #d98b58;
}

.project-card__visual--warm {
  background: #e9ded2;
  color: #9c613c;
}

.project-index {
  position: absolute;
  top: 18px;
  right: 20px;

  font: 600 .65rem var(--font-display);
  opacity: .7;
}

.mini-browser {
  width: 68%;
  border: 1px solid currentColor;
  border-radius: 7px;
  background: rgba(255,255,255,.2);
  transform: perspective(800px) rotateY(-8deg);
  transition: transform .7s var(--ease);
}

.project-card:hover .mini-browser {
  transform: perspective(800px) rotateY(0) scale(1.03);
}

.mini-browser__top {
  display: flex;
  gap: 4px;
  padding: 9px;
  border-bottom: 1px solid currentColor;
}

.mini-browser__top span {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: currentColor;
}

.mini-content {
  padding: 25px;
}

.mini-content > div {
  width: 75%;
  height: 6px;
  margin-bottom: 9px;
  border-radius: 3px;
  background: currentColor;
  opacity: .7;
}

.mini-content > div:nth-child(2) {
  width: 52%;
}

.mini-content__button {
  width: 50px !important;
  height: 17px !important;
  margin-top: 25px;
  opacity: 1 !important;
}

.mini-car {
  position: relative;
  width: 170px;
  height: 75px;
  border: 3px solid currentColor;
  border-radius: 35px 35px 12px 12px;
  transform: translateY(-10px);
  transition: transform .6s var(--ease);
}

.project-card:hover .mini-car {
  transform: translateY(-18px);
}

.car-wheel {
  position: absolute;
  bottom: -18px;

  width: 34px;
  height: 34px;

  border: 3px solid currentColor;
  border-radius: 50%;

  background: #172131;
}

.car-wheel--one {
  left: 22px;
}

.car-wheel--two {
  right: 22px;
}

.wood-shape {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  height: 160px;
}

.wood-shape div {
  width: 45px;
  border: 3px solid currentColor;
  border-radius: 3px;
  transition: transform .6s var(--ease);
}

.wood-shape div:nth-child(1) {
  height: 95px;
}

.wood-shape div:nth-child(2) {
  height: 135px;
}

.wood-shape div:nth-child(3) {
  height: 75px;
}

.project-card:hover .wood-shape div:nth-child(1) {
  transform: translateY(-8px);
}

.project-card:hover .wood-shape div:nth-child(2) {
  transform: translateY(-15px);
}

.project-card:hover .wood-shape div:nth-child(3) {
  transform: translateY(-5px);
}

.project-card__body {
  padding: 25px;
}

.project-card__badge {
  display: inline-block;
  margin-bottom: 13px;
  padding: 4px 8px;

  border: 1px solid currentColor;
  border-radius: 3px;

  color: var(--accent);

  font: 600 .58rem var(--font-display);
  letter-spacing: .08em;
}

.project-card__cat {
  display: block;
  margin-bottom: 6px;

  color: var(--text-faint);
  font-size: .72rem;
}

.project-card__body h3 {
  font: 600 1.35rem var(--font-display);
}

.project-card__body p {
  min-height: 70px;
  margin-top: 9px;

  color: var(--text-soft);
  font-size: .82rem;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 9px;

  padding: 0;
  margin-top: 16px;

  background: transparent;
  color: var(--accent);

  font-weight: 600;
  font-size: .8rem;
}

.project-link span {
  transition: transform .4s var(--ease);
}

.project-link:hover span {
  transform: translate(4px,-4px);
}


/* =========================================================
   PROCESS
========================================================= */

.process {
  display: grid;
  grid-template-columns: repeat(5,1fr);
  gap: 20px;
}

.process__step {
  position: relative;
  padding-top: 30px;
}

.process__number {
  display: block;
  margin-bottom: 25px;

  color: var(--accent);
  font: 600 .72rem var(--font-display);
}

.process__line {
  position: absolute;
  top: 3px;
  left: 30px;
  right: -10px;

  height: 1px;

  background: var(--border-strong);
}

.process__step:last-child .process__line {
  display: none;
}

.process__step h3 {
  font: 600 1.05rem var(--font-display);
}

.process__step p {
  margin-top: 10px;
  color: var(--text-soft);
  font-size: .8rem;
}


/* =========================================================
   WHY
========================================================= */

.why-layout {
  display: grid;
  grid-template-columns: .8fr 1.2fr;
  gap: 80px;
  align-items: start;
}

.features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;

  border: 1px solid var(--border);
  background: var(--border);
}

.feature {
  display: flex;
  gap: 18px;

  padding: 30px;

  background: var(--bg-alt);

  transition:
    background .4s var(--ease),
    transform .4s var(--ease);
}

.feature:hover {
  background: var(--surface);
  transform: scale(1.015);
  z-index: 2;
}

.feature__number {
  color: var(--accent);
  font: 600 .68rem var(--font-display);
}

.feature h3 {
  font: 600 .95rem var(--font-display);
}

.feature p {
  margin-top: 6px;
  color: var(--text-soft);
  font-size: .78rem;
}


/* =========================================================
   ABOUT
========================================================= */

.about__grid {
  display: grid;
  grid-template-columns: .7fr 1.3fr;
  gap: 90px;
  align-items: center;
}

.about-card {
  position: relative;

  padding: 30px;

  border: 1px solid var(--border-strong);
  border-radius: 10px;

  background: var(--surface);

  box-shadow: var(--shadow-sm);

  transition:
    transform .7s var(--ease),
    box-shadow .7s var(--ease);
}

.about-card:hover {
  transform: translateY(-7px) rotate(.4deg);
  box-shadow: var(--shadow-lg);
}

.about-card__top {
  display: flex;
  justify-content: space-between;

  color: var(--text-faint);
  font: 600 .62rem var(--font-display);
  letter-spacing: .1em;
}

.about-card__symbol {
  display: grid;
  place-items: center;

  width: 110px;
  height: 110px;

  margin: 70px auto 30px;

  border: 1px solid var(--accent);
  border-radius: 50%;

  color: var(--accent);
  font: 600 2rem var(--font-display);

  animation: symbolFloat 5s ease-in-out infinite;
}

@keyframes symbolFloat {
  50% {
    transform: translateY(-7px) rotate(3deg);
  }
}

.about-card__name {
  text-align: center;
  font: 600 1.3rem var(--font-display);
}

.about-card__role {
  margin-top: 5px;
  text-align: center;
  color: var(--text-soft);
  font-size: .75rem;
}

.about-card__stats {
  display: grid;
  grid-template-columns: repeat(3,1fr);

  margin-top: 50px;
  padding-top: 20px;

  border-top: 1px solid var(--border);
}

.about-card__stats div {
  padding: 0 10px;
  border-right: 1px solid var(--border);
}

.about-card__stats div:last-child {
  border: 0;
}

.about-card__stats span,
.about-card__stats strong {
  display: block;
}

.about-card__stats span {
  color: var(--text-faint);
  font-size: .55rem;
}

.about-card__stats strong {
  margin-top: 5px;
  font: 600 .72rem var(--font-display);
}

.about__copy p {
  max-width: 650px;
  margin-top: 20px;
  color: var(--text-soft);
}


/* =========================================================
   FAQ
========================================================= */

.accordion__item {
  border-bottom: 1px solid var(--border);
}

.accordion__trigger {
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 25px 0;

  background: transparent;
  color: var(--text);

  text-align: left;
  font: 600 1rem var(--font-display);
}

.accordion__icon {
  position: relative;

  width: 20px;
  height: 20px;

  flex-shrink: 0;
}

.accordion__icon::before,
.accordion__icon::after {
  content: "";

  position: absolute;

  background: currentColor;

  transition:
    transform .45s var(--ease),
    opacity .3s;
}

.accordion__icon::before {
  top: 9px;
  left: 0;

  width: 20px;
  height: 1px;
}

.accordion__icon::after {
  top: 0;
  left: 9px;

  width: 1px;
  height: 20px;
}

.accordion__trigger[aria-expanded="true"] .accordion__icon::after {
  transform: rotate(90deg);
  opacity: 0;
}

.accordion__panel {
  max-height: 0;
  overflow: hidden;

  transition: max-height .65s var(--ease);
}

.accordion__panel p {
  max-width: 650px;
  padding: 0 35px 25px 0;

  color: var(--text-soft);
  font-size: .86rem;
}


/* =========================================================
   CONTACT
========================================================= */

.contact {
  overflow: hidden;
}

.contact__grid {
  display: grid;
  grid-template-columns: .85fr 1.15fr;
  gap: 90px;
  align-items: start;
}

.contact__intro h2 {
  font: 600 clamp(2.2rem,4vw,3.6rem)/1 var(--font-display);
  letter-spacing: -.05em;
}

.contact__intro h2 span {
  display: block;
  color: var(--text-soft);
}

.contact__intro > p {
  max-width: 480px;
  margin-top: 25px;
  color: var(--text-soft);
}

.contact__direct {
  margin-top: 45px;
}

.contact__direct span {
  display: block;
  margin-bottom: 7px;
  color: var(--text-faint);
  font-size: .65rem;
  text-transform: uppercase;
  letter-spacing: .12em;
}

.contact__direct a {
  color: var(--accent);
  font: 600 1rem var(--font-display);
}

.contact__form {
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 18px;

  padding: 35px;

  border: 1px solid var(--border);
  border-radius: 10px;

  background: var(--surface);
  box-shadow: var(--shadow-sm);
}

.form__heading {
  display: flex;
  justify-content: space-between;

  margin-bottom: 5px;

  color: var(--text-faint);
  font: 600 .62rem var(--font-display);
  letter-spacing: .1em;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.field label {
  color: var(--text-soft);
  font-size: .72rem;
}

.field input,
.field textarea {
  width: 100%;

  border: 1px solid var(--border);
  border-radius: 5px;

  padding: 14px 15px;

  background: var(--bg);
  color: var(--text);

  outline: none;
  resize: vertical;

  transition:
    border-color .35s var(--ease),
    box-shadow .35s var(--ease),
    transform .35s var(--ease);
}

.field input::placeholder,
.field textarea::placeholder {
  color: var(--text-faint);
}

.field input:focus,
.field textarea:focus {
  border-color: var(--blue);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--blue) 10%, transparent);
  transform: translateY(-1px);
}

.field__note {
  min-height: 20px;

  color: var(--accent);
  font-size: .76rem;
  text-align: center;
}

.honeypot {
  position: absolute !important;
  left: -9999px !important;
  width: 1px !important;
  height: 1px !important;
  opacity: 0 !important;
  pointer-events: none !important;
}


/* =========================================================
   MODAL
========================================================= */

.modal {
  position: fixed;
  inset: 0;
  z-index: 900;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 25px;

  opacity: 0;
  visibility: hidden;

  transition:
    opacity .45s var(--ease),
    visibility .45s;
}

.modal.is-open {
  opacity: 1;
  visibility: visible;
}

.modal__overlay {
  position: absolute;
  inset: 0;

  background: rgba(5,10,18,.65);
  backdrop-filter: blur(12px);
}

.modal__dialog {
  position: relative;
  z-index: 2;

  width: min(600px,100%);
  max-height: 85vh;
  overflow-y: auto;

  padding: 40px;

  border: 1px solid var(--border);
  border-radius: 12px;

  background: var(--surface);
  box-shadow: var(--shadow-lg);

  transform: translateY(30px) scale(.96);

  transition: transform .6s var(--ease);
}

.modal.is-open .modal__dialog {
  transform: translateY(0) scale(1);
}

.modal__close {
  position: absolute;
  top: 17px;
  right: 20px;

  width: 38px;
  height: 38px;

  border-radius: 50%;

  background: var(--bg-alt);
  color: var(--text);

  font-size: 1.5rem;

  transition:
    transform .4s var(--ease),
    background .3s;
}

.modal__close:hover {
  transform: rotate(90deg);
  background: var(--accent);
  color: white;
}

.modal__category {
  display: block;
  margin: 10px 0 5px;

  color: var(--text-faint);
  font-size: .72rem;
}

.modal__dialog h3 {
  font: 600 2rem var(--font-display);
}

.modal__desc {
  margin-top: 15px;
  color: var(--text-soft);
}

.modal__block {
  margin-top: 30px;
  padding-top: 25px;
  border-top: 1px solid var(--border);
}

.modal__label {
  display: block;
  margin-bottom: 15px;

  color: var(--accent);
  font: 600 .68rem var(--font-display);
  letter-spacing: .1em;
  text-transform: uppercase;
}

.modal__block ul {
  display: grid;
  gap: 10px;
}

.modal__block li {
  position: relative;
  padding-left: 22px;
  color: var(--text-soft);
  font-size: .85rem;
}

.modal__block li::before {
  content: "✓";

  position: absolute;
  left: 0;

  color: var(--accent);
}

.modal__disclaimer {
  margin-top: 28px;
  color: var(--text-faint);
  font-size: .7rem;
  font-style: italic;
}


/* =========================================================
   FOOTER
========================================================= */

.footer {
  padding: 40px 0;
  border-top: 1px solid var(--border);
}

.footer__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.footer__links {
  display: flex;
  gap: 22px;
}

.footer__links a,
.footer__meta {
  color: var(--text-faint);
  font-size: .72rem;
}

.footer__links a:hover {
  color: var(--accent);
}

.footer__meta {
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: right;
}

.footer__meta a {
  color: var(--text-soft);
}


/* =========================================================
   REVEAL ANIMATIONS
========================================================= */

.reveal {
  opacity: 0;
  transform: translateY(35px);
  transition:
    opacity .9s var(--ease),
    transform .9s var(--ease);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.reveal-delay-1 {
  transition-delay: .08s;
}

.reveal-delay-2 {
  transition-delay: .16s;
}

.reveal-delay-3 {
  transition-delay: .24s;
}

.reveal-delay-4 {
  transition-delay: .32s;
}

.reveal-delay-5 {
  transition-delay: .4s;
}

.reveal-group .reveal:nth-child(1) {
  transition-delay: .05s;
}

.reveal-group .reveal:nth-child(2) {
  transition-delay: .13s;
}

.reveal-group .reveal:nth-child(3) {
  transition-delay: .21s;
}

.reveal-group .reveal:nth-child(4) {
  transition-delay: .29s;
}

.reveal-group .reveal:nth-child(5) {
  transition-delay: .37s;
}

.reveal-group .reveal:nth-child(6) {
  transition-delay: .45s;
}


/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 1000px) {

  .hero__grid {
    grid-template-columns: 1fr;
  }

  .hero__visual {
    order: -1;
    min-height: 420px;
  }

  .hero__copy {
    max-width: 750px;
  }

  .pricing,
  .projects {
    grid-template-columns: 1fr;
  }

  .price-card {
    min-height: auto;
  }

  .process {
    grid-template-columns: repeat(3,1fr);
  }

  .process__line {
    display: none;
  }

  .why-layout,
  .about__grid,
  .contact__grid {
    grid-template-columns: 1fr;
    gap: 55px;
  }

  .section__head--left {
    max-width: 650px;
  }

  .about-card {
    max-width: 450px;
  }
}


@media (max-width: 720px) {

  .container {
    width: min(100% - 32px, var(--container));
  }

  .section {
    padding: 80px 0;
  }

  .navbar__inner {
    height: 64px;
  }

  .nav-links {
    position: fixed;
    top: 64px;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 35px 24px;

    background: var(--bg);

    transform: translateX(100%);
    transition: transform .6s var(--ease);
  }

  .nav-links.is-open {
    transform: translateX(0);
  }

  .nav-links a {
    font-size: 1.15rem;
  }

  .nav-cta {
    margin-top: 8px;
  }

  .menu-toggle {
    display: block;
  }

  .hero {
    min-height: auto;
    padding: 60px 0 80px;
  }

  .hero__title {
    font-size: clamp(3rem, 15vw, 4.5rem);
  }

  .hero__visual {
    min-height: 330px;
  }

  .browser {
    width: 92%;
  }

  .browser__content {
    min-height: 230px;
    padding: 25px;
  }

  .browser__cards {
    margin-top: 30px;
  }

  .browser__cards div {
    height: 70px;
  }

  .floating-card {
    transform: scale(.8);
  }

  .floating-card--one {
    left: -10%;
  }

  .floating-card--two {
    right: -10%;
  }

  .orbit-1 {
    width: 350px;
    height: 350px;
  }

  .orbit-2 {
    width: 420px;
    height: 420px;
  }

  .pricing,
  .projects {
    gap: 16px;
  }

  .features {
    grid-template-columns: 1fr;
  }

  .process {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .process__step {
    padding-top: 0;
    padding-left: 45px;
  }

  .process__number {
    position: absolute;
    left: 0;
    top: 0;
  }

  .about-card {
    padding: 25px;
  }

  .contact__form {
    padding: 24px;
  }

  .footer__inner {
    flex-direction: column;
    text-align: center;
  }

  .footer__meta {
    text-align: center;
  }

  .footer__links {
    flex-wrap: wrap;
    justify-content: center;
  }
}


@media (max-width: 480px) {

  .hero__actions {
    flex-direction: column;
  }

  .hero__actions .btn {
    width: 100%;
  }

  .hero__meta {
    flex-direction: column;
    gap: 8px;
  }

  .price-card,
  .project-card__body {
    padding: 25px;
  }

  .project-card__visual {
    min-height: 220px;
  }

  .about-card__stats {
    gap: 5px;
  }

  .modal__dialog {
    padding: 28px 22px;
  }
}


/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {

  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: .001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .001ms !important;
  }
}
