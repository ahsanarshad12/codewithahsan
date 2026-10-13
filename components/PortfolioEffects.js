"use client";

import { useEffect } from "react";

// Original interaction values, with React lifecycle cleanup.
export default function PortfolioEffects() {
  useEffect(() => {
    const cleanups = [];
    const listen = (element, event, handler) => {
      element.addEventListener(event, handler);
      cleanups.push(() => element.removeEventListener(event, handler));
    };

    const letters = document.querySelectorAll(
      "#portfolio-title-letters .letter-cutout",
    );
    letters.forEach((letter, index) => {
      listen(letter, "mouseenter", () => {
        letter.style.transition =
          "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)";
        const direction = index % 2 === 0 ? -6 : 6;
        letter.style.transform = `translateY(-12px) scale(1.15) rotate(${direction}deg)`;
      });
      listen(letter, "mouseleave", () => {
        letter.style.transform = "";
      });
      cleanups.push(() => {
        letter.style.transform = "";
        letter.style.transition = "";
      });
    });

    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
      );
      revealElements.forEach((element) => observer.observe(element));
      cleanups.push(() => observer.disconnect());
    } else {
      revealElements.forEach((element) => element.classList.add("is-revealed"));
    }

    const bars = document.querySelectorAll(".skill-bar");
    const skillsContainer = document.getElementById("skills-bars-container");
    const fillBars = () =>
      bars.forEach((bar) => {
        bar.style.width = bar.getAttribute("data-target") || "85%";
      });
    if (skillsContainer && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              fillBars();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.25 },
      );
      observer.observe(skillsContainer);
      cleanups.push(() => observer.disconnect());
    } else {
      fillBars();
    }

    document.querySelectorAll(".work-poster-card").forEach((card) => {
      listen(card, "mousemove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;
        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
      });
      listen(card, "mouseleave", () => {
        card.style.transform = "";
      });
      cleanups.push(() => {
        card.style.transform = "";
      });
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return null;
}
