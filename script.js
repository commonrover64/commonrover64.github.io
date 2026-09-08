"use strict";

const footerYearElement = document.getElementById("footer-year");
if (footerYearElement) footerYearElement.textContent = new Date().getFullYear();

// Subtle hero parallax, skipped for touch devices and reduced motion
const hero = document.querySelector(".hero");
const heroMedia = document.querySelector(".hero-media");
const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
).matches;
const finePointer = window.matchMedia("(pointer: fine)").matches;

if (hero && heroMedia && finePointer && !reducedMotion) {
    let ticking = false;

    const updateHero = () => {
        const scrollY = window.scrollY;
        const heroHeight = hero.offsetHeight;
        if (scrollY <= heroHeight) {
            heroMedia.style.transform = `scale(1.025) translate3d(0, ${scrollY * 0.06}px, 0)`;
        }
        ticking = false;
    };

    window.addEventListener(
        "scroll",
        () => {
            if (!ticking) {
                window.requestAnimationFrame(updateHero);
                ticking = true;
            }
        },
        { passive: true },
    );
}

// Scroll reveal, replays both entering and leaving the viewport
const revealEls = document.querySelectorAll(".reveal");

if (revealEls.length) {
    if (reducedMotion) {
        revealEls.forEach((el) => el.classList.add("visible"));
    } else {
        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    entry.target.classList.toggle(
                        "visible",
                        entry.isIntersecting,
                    );
                });
            },
            { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
        );
        revealEls.forEach((el) => revealObserver.observe(el));
    }
}
