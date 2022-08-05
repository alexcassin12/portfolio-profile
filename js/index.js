"use strict";
import "regenerator-runtime/runtime";

{
  // Hide preloader screen
  const loaders = document.querySelectorAll("div[class*=preloader]");
  const preloaderLogo = document.querySelector(".preloader-logo");

  window.addEventListener("load", () => {
    loaders.forEach((loader) => {
      loader.style.width = "0";

      setTimeout(() => {
        loader.style.display = "none";
      }, 2000);
    });

    preloaderLogo.style.display = "none";
  });

  // Reveal Sections

  const revealSection = (entries, observer) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section-hidden");
    observer.unobserve(entry.target);
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.1,
  });

  const allSections = document.querySelectorAll(".sliding-section");

  allSections.forEach((section) => {
    sectionObserver.observe(section);
    section.classList.add("section-hidden");
  });

  /// Lazy Loading

  const imgTargets = document.querySelectorAll("img[data-src]");

  const loadImg = (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.src = entry.target.dataset.src;

      entry.target.addEventListener("load", () => {
        entry.target.classList.remove("lazy-img");
      });
      observer.unobserve(entry.target);
    });
  };

  const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: "300px",
  });

  imgTargets.forEach((img) => {
    imgObserver.observe(img);
  });

  // Nav bar sticky

  const makeNavSticky = (entries, observer) => {
    const [entry] = entries;
    const navBar = document.querySelector(".nav-bar");
    if (entry.isIntersecting) {
      navBar.style.position = "relative";
    }
    if (!entry.isIntersecting) {
      navBar.style.position = "sticky";
      navBar.style.top = "0";
      navBar.style.left = "0";
    }
  };

  const navBarObserver = new IntersectionObserver(makeNavSticky, {
    root: null,
    threshold: 0,
    rootMargin: "-90px",
  });

  const page1 = document.querySelector(".page-1");

  navBarObserver.observe(page1);

  // About us click images functionality

  const img1 = document.querySelector(".img1-cover");
  const img2 = document.querySelector(".img2-cover");
  const img3 = document.querySelector(".img3-cover");
  const textBox = document.querySelector(".about-me-text-container");
  const textSection1 = document.querySelector(".text-section-1");
  const textSection2 = document.querySelector(".text-section-2");
  const textSection3 = document.querySelector(".text-section-3");

  img1.addEventListener("click", function () {
    if (textSection1.classList.contains("hide-text-section")) {
      //Affects scale of image
      this.closest(".img-wrapper").style.transform = "scale(1.05)";
      img2.closest(".img-wrapper").style.transform = "scale(1)";
      img3.closest(".img-wrapper").style.transform = "scale(1)";
      //Affects Image opacity
      this.style.opacity = "0";
      img2.style.opacity = "1";
      img3.style.opacity = "1";
      // Affects textbox and text
      textBox.classList.remove("hide-text-container");
      textSection1.classList.remove("hide-text-section");
      textSection2.classList.add("hide-text-section");
      textSection3.classList.add("hide-text-section");
      return;
    }
    if (!textSection1.classList.contains("hide-text-section")) {
      //Affects scale of image
      this.closest(".img-wrapper").style.transform = "scale(1)";
      //Affects Image Opcity
      this.style.opacity = "1";
      //Affects textbox and text
      textBox.classList.add("hide-text-container");
      textSection1.classList.add("hide-text-section");
      return;
    }
  });

  img2.addEventListener("click", function () {
    if (textSection2.classList.contains("hide-text-section")) {
      //Affects scale of image
      this.closest(".img-wrapper").style.transform = "scale(1.05)";
      img1.closest(".img-wrapper").style.transform = "scale(1)";
      img3.closest(".img-wrapper").style.transform = "scale(1)";
      //Affects Image opacity
      this.style.opacity = "0";
      img1.style.opacity = "1";
      img3.style.opacity = "1";
      // Affects textbox and text
      textBox.classList.remove("hide-text-container");
      textSection2.classList.remove("hide-text-section");
      textSection1.classList.add("hide-text-section");
      textSection3.classList.add("hide-text-section");
      return;
    }
    if (!textSection2.classList.contains("hide-text-section")) {
      //Affects scale of image
      this.closest(".img-wrapper").style.transform = "scale(1)";
      //Affects Image Opcity
      this.style.opacity = "1";
      //Affects textbox and text
      textBox.classList.add("hide-text-container");
      textSection2.classList.add("hide-text-section");
      return;
    }
  });

  img3.addEventListener("click", function () {
    if (textSection3.classList.contains("hide-text-section")) {
      //Affects scale of image
      this.closest(".img-wrapper").style.transform = "scale(1.05)";
      img1.closest(".img-wrapper").style.transform = "scale(1)";
      img2.closest(".img-wrapper").style.transform = "scale(1)";
      //Affects Image opacity
      this.style.opacity = "0";
      img1.style.opacity = "1";
      img2.style.opacity = "1";
      // Affects textbox and text
      textBox.classList.remove("hide-text-container");
      textSection3.classList.remove("hide-text-section");
      textSection1.classList.add("hide-text-section");
      textSection2.classList.add("hide-text-section");
      return;
    }
    if (!textSection3.classList.contains("hide-text-section")) {
      //Affects scale of image
      this.closest(".img-wrapper").style.transform = "scale(1)";
      //Affects Image Opcity
      this.style.opacity = "1";
      //Affects textbox and text
      textBox.classList.add("hide-text-container");
      textSection3.classList.add("hide-text-section");
      return;
    }
  });

  // About us picture slide in
  const slidingImgs = document.querySelectorAll(".sliding-img");
  const leftImg = document.querySelector(".coding-pic");
  const rightImg = document.querySelector(".hobbies-pic");

  leftImg.classList.add("push-img-right-and-hide");
  rightImg.classList.add("push-img-left-and-hide");

  const slideImages = (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.remove("push-img-left-and-hide");
      entry.target.classList.remove("push-img-right-and-hide");
      observer.unobserve(entry.target);
    });
  };

  const slidingImgObserver = new IntersectionObserver(slideImages, {
    root: null,
    threshold: 0.8,
  });

  slidingImgs.forEach((img) => {
    slidingImgObserver.observe(img);
  });

  // Yellow Background box animate
  const yellowBoxes = document.querySelectorAll(".yellow-background-box");

  const animateBoxes = (entries, observer) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.style.width = "100%";
    entry.target.style.opacity = "1";
    observer.unobserve(entry.target);
  };

  const yellowBoxObserver = new IntersectionObserver(animateBoxes, {
    root: null,
    threshold: 0.4,
  });

  yellowBoxes.forEach((box) => {
    yellowBoxObserver.observe(box);
    box.style.width = "1%";
    box.style.opacity = "0";
  });
}
