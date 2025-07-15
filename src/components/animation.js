import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function animateNavMenu() {
  gsap.from(".menu", { duration: 1.5, y: 0, opacity: 0, ease: "power2.out" });
}

export function toggleMenuIcon(menuToggle) {
  const [line1, line2, line3] = menuToggle.children;
  const isMenuOpen = menuToggle.classList.contains("open");

  const timeline = gsap.timeline({
    defaults: { duration: 0.8, ease: "power2.inOut" },
  });

  if (isMenuOpen) {
    // Animate back to menu icon and hide menu
    timeline
      .to(line1, { rotation: 0, y: 0 })
      .to(line2, { opacity: 1 }, "<")
      .to(line3, { rotation: 0, y: 0 }, "<")
      .to(".links", { opacity: 0, x: 100, stagger: 0.1 }, "-=0.3") // Hide links first
      .to("#navigation-menu", { x: "100%" }, "-=0.2"); // Slide menu out

    menuToggle.classList.remove("open");
  } else {
    // Animate to "X" icon and show menu
    timeline
      .to(line1, { rotation: 45, y: 8 })
      .to(line2, { opacity: 0 }, "<")
      .to(line3, { rotation: -45, y: -8 }, "<")
      .to("#navigation-menu", { x: "0%" }, "-=0.2") // Slide menu in
      .to(".links", { opacity: 1, x: 0, stagger: 0.1 }, "-=0.3"); // Show links
    menuToggle.classList.add("open");
  }
}

export function animateSignatureSection() {
  const timeline = gsap.timeline();

  timeline
    .to("#signature-section", {
      duration: 1.5,
      y: "-100%",
      delay: 0,
      ease: "power2.inOut",
    })
    .to("#signature-section", {
      display: "none",
      duration: 0,
    });
}

export function animateSignature() {
  const path = document.querySelector(".signature-section path");
  const timeline = gsap.timeline();

  timeline.fromTo(
    path,
    {
      strokeDasharray: path.getTotalLength(),
      strokeDashoffset: path.getTotalLength(),
    },
    {
      strokeDashoffset: 0,
      duration: 20,
      ease: "sine",
    }
  );
}

export function animateCustomCursor() {
  const cursor = document.querySelector(".cursor");

  if (!cursor) {
    console.error("Custom cursor not found!");
    return; // Exit if the cursor element doesn't exist
  }

  document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.clientX - cursor.offsetWidth / 2,
      y: e.clientY - cursor.offsetHeight / 2,
      duration: 0.3,
      ease: "power2.out",
    });
  });
}

export function animateContactHeadText() {
  const contactHeadText = document.querySelector("#contactHeadText");
  const footer = document.querySelector("footer");

  gsap.set(contactHeadText, {
    position: "relative",
    left: "0%",
    top: "0%",
    xPercent: 0,
    transformOrigin: "center top",
    scale: 1,
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#contactSection",
      start: "top top",
      endTrigger: footer,
      end: "bottom bottom",
      pin: contactHeadText,
      pinSpacing: false,
      toggleActions: "play none none reverse",
    },
  });

  tl.to(contactHeadText, {
    duration: 0.2,
    scale: 0.5,
    ease: "power2.out",
  });
}

export function animateContactFirstImage() {
  const firstImage = document.querySelector(".contactFirstImg");
  gsap.set(firstImage, { rotation: 3 });
  if (firstImage) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: firstImage,
          start: "top center",
          end: "bottom top",
          scrub: 1,
        },
      })
      .to(firstImage, {
        scale: 1.1,
        rotation: 2,
        x: 40,
        ease: "power2.out",
      });
  }
}

export function animateContactSecImage() {
  const secondImage = document.querySelector(".contactSecondImg");
  gsap.set(secondImage, { x: 40 });
  if (secondImage) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: secondImage,
          start: "top center",
          end: "bottom top",
          scrub: 0.5,
        },
      })
      .to(secondImage, {
        scale: 1.1,
        rotation: -16,
        x: -60,
        y: 0,
        ease: "power2.out",
      });
  }
}

export function animateAboutImage() {
  const aboutImageContainer = document.querySelector(".aboutImgContainer");
  const aboutImg = document.querySelector(".aboutImg");

  if (aboutImageContainer && aboutImg) {
    gsap.set(aboutImageContainer, { width: "0%" });
    gsap.set(aboutImg, { scale: 1, transformOrigin: "center center" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#aboutSection",
          start: "top center",
          end: "top top",
          scrub: 1.5,
        },
      })
      .to(aboutImageContainer, {
        width: "28%",
        ease: "power3.inOut",
      })
      .to(
        aboutImg,
        {
          scale: 1.1,
          ease: "power1.out",
        },
        ">-0.3"
      );
  }
}

export function animateProjectHeadText() {
  const projectHeadText = document.querySelector(".projectHeadText");

  if (projectHeadText) {
    gsap.set(projectHeadText, {
      scale: 1,
      y: "-100%",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#projectSection",
          start: "top 90%",
          end: "top top",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      })
      .to(
        projectHeadText,
        {
          duration: 1,
          y: "0",
          ease: "power2.out",
        },
        ">-0.3"
      );
  }
}

export function animateAboutHeadText() {
  const aboutHeadText = document.querySelector(".aboutHeadText");

  if (aboutHeadText) {
    gsap.set(aboutHeadText, {
      scale: 1,
      y: "-100%",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#aboutSection",
          start: "top 90%",
          end: "top top",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      })
      .to(
        aboutHeadText,
        {
          duration: 1,
          y: "0",
          ease: "power2.out",
        },
        ">-0.3"
      );
  }
}

export function animateExperienceHeadText() {
  const experienceHeadText = document.querySelector(".experienceHeadText");

  if (experienceHeadText) {
    gsap.set(experienceHeadText, {
      scale: 1,
      y: "-100%",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#experienceSection",
          start: "top 90%",
          end: "top top",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      })
      .to(
        experienceHeadText,
        {
          duration: 1,
          y: "0",
          ease: "power2.out",
        },
        ">-0.3"
      );
  }
}

export function animateHoverBoxes() {
  const boxes = document.querySelectorAll(".hoverBox");
  const EXPANDED = "50%";
  const COLLAPSED = "15%";
  let activeIndex = 0;

  // set initial widths
  boxes.forEach((b, i) => {
    gsap.set(b, {
      transformOrigin: "left center",
      width: i === activeIndex ? EXPANDED : COLLAPSED,
    });
  });

  boxes.forEach((box, index) => {
    box.addEventListener("mouseenter", () => {
      boxes.forEach((b, i) => {
        gsap.to(b, {
          width: i === index ? EXPANDED : COLLAPSED,
          duration: 1.3,
          ease: "power2.out",
        });
      });
      activeIndex = index;
    });

    box.addEventListener("mouseleave", () => {
      activeBoxIndex = index;
      boxes.forEach((b, i) => {
        gsap.to(b, {
          width: i === activeBoxIndex ? "50%" : "15%",
          duration: 0.7,
          ease: "power2.inOut",
        });
      });
    });
  });
}

export function animateAboutSkills() {
  document.querySelectorAll("#aboutSection h3").forEach((heading) => {
    const section = heading.closest(".flex.gap-4.justify-between");
    if (!section) return;

    const icons = Array.from(section.children[1].children);

    gsap
      .timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      })
      .from(heading, {
        opacity: 0,
        y: 20,
        ease: "power3.out",
        duration: 0.6,
      })
      .from(
        icons,
        {
          opacity: 0,
          y: 20,
          ease: "power3.out",
          stagger: 0.1,
          duration: 0.5,
        },
        "-=0.3"
      );
  });
}

export function animateRevealText() {
  const elements = document.querySelectorAll(".reveal-text");

  elements.forEach((element) => {
    if (element.splitTextInstance) {
      element.splitTextInstance.revert();
    }

    const split = new SplitText(element, { type: "lines" });
    console.log(split);
    element.splitTextInstance = split;

    gsap.from(split.lines, {
      yPercent: 100,
      opacity: 0,
      stagger: {
        amount: 0.5,
      },
      duration: 1,
      delay: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".text-container",
        start: "top 80%",
        toggleActions: "restart none none none",
        // markers: true,
      },
    });
  });
}
export function animateAboutRevealText() {
  const elements = document.querySelectorAll(".aboutTextContent");
  console.log(elements);

  elements.forEach((element) => {
    if (element.splitTextInstance) {
      element.splitTextInstance.revert();
    }

    const split = new SplitText(element, { type: "lines" });
    console.log(split.lines);
    element.splitTextInstance = split;

    gsap.from(split.lines, {
      yPercent: 100,
      opacity: 0,
      stagger: {
        amount: 0.5,
      },
      duration: 1,
      delay: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".aboutContentContainer",
        start: "top 100%",
        toggleActions: "restart none none none",
      },
    });
  });
}
