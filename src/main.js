import { renderHero } from "./components/hero.js";
import { renderNavbar } from "./components/navbar.js";
// import { renderSkills } from "./components/skills.js";
import { renderContact } from "./components/contact.js";
import { renderSignature } from "./components/signature.js";
import { renderCustomCursor } from "./components/customCursor.js";
import { toggleDarkMode, initializeDarkMode } from "./components/theme.js";
// import { renderFooter } from "./components/footer.js";
import { renderAbout } from "./components/about.js";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

import {
  animateNavMenu,
  toggleMenuIcon,
  animateSignature,
  animateSignatureSection,
  animateCustomCursor,
  animateContactHeadText,
  animateContactFirstImage,
  animateContactSecImage,
  animateAboutImage,
  animateProjectHeadText,
  animateAboutHeadText,
  animateHoverBoxes,
  animateExperienceHeadText,
  animateAboutSkills,
  animateAboutRevealText,
  animateRevealText,
} from "./components/animation.js";
import "./style.css";
import { renderProjects } from "./components/projects.js";
import { renderExperience } from "./components/experience.js";

initializeDarkMode();

const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="relative">
      ${renderSignature()}
      ${renderCustomCursor()}
      ${renderNavbar()}
      ${renderHero()}
      ${renderAbout()}
      ${renderExperience()}
      ${renderProjects()}
      ${renderContact()}
    </div>
  `;

  animateNavMenu();
  animateSignature();
  animateCustomCursor();
  animateContactHeadText();
  animateContactFirstImage();
  animateContactSecImage();
  animateAboutImage();
  animateAboutHeadText();
  animateAboutSkills();
  animateProjectHeadText();
  animateHoverBoxes();
  animateExperienceHeadText();
  animateRevealText();
  animateAboutRevealText();

  setTimeout(function () {
    animateSignatureSection();
  }, 3000);

  // Nav Menu
  const menuToggle = document.getElementById("menu-toggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", () => toggleMenuIcon(menuToggle));
  } else {
    console.error("Menu toggle button not found!");
  }

  //  Theme toggle
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleDarkMode);
  }

  // theme toggle button
  const moonIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
`;

  const sunIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
`;

  const themeToggleButton = document.getElementById("theme-toggle");

  if (themeToggleButton) {
    let isMoon = document.documentElement.classList.contains("dark");

    themeToggleButton.addEventListener("click", (e) => {
      if (isMoon) {
        themeToggleButton.innerHTML = sunIcon;
      } else {
        themeToggleButton.innerHTML = moonIcon;
      }
      isMoon = !isMoon;
    });
  } else {
    console.error("Theme toggle button not found!");
  }

  const sidebarLinks = document.querySelectorAll("#navigation-menu .links a");
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      toggleMenuIcon(menuToggle);
    });
  });
});
