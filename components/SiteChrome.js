"use client";

import { useEffect, useState } from "react";

// Site-wide polish that must run in the browser: active section highlighting,
// a back-to-top button, counting up the stats, and safe placeholder links.
export default function SiteChrome() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const links = Array.from(
      document.querySelectorAll('header nav a[href^="#"]'),
    );
    const targets = links.map((link) =>
      document.querySelector(link.getAttribute("href")),
    );
    const setActive = () => {
      const offset = 150;
      let current = -1;
      targets.forEach((target, i) => {
        if (target && target.getBoundingClientRect().top <= offset) current = i;
      });
      if (current === -1 && window.scrollY < 400) current = 0;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) current = targets.length - 1;
      links.forEach((link, i) => {
        link.classList.toggle("is-active", i === current);
        if (i === current) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    };

    // Placeholder project links (#) should not jump the visitor to the top,
    // while the header logo scrolls up smoothly instead of snapping.
    const guardPlaceholders = (event) => {
      const anchor = event.target.closest?.('a[href="#"]');
      if (!anchor) return;
      event.preventDefault();
      if (anchor.closest("header"))
        window.scrollTo({ top: 0, behavior: "smooth" });
      else anchor.setAttribute("aria-disabled", "true");
    };

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setShowTop(window.scrollY > 700);
        setActive();
      });
    };
    setActive();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    document.addEventListener("click", guardPlaceholders);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.removeEventListener("click", guardPlaceholders);
    };
  }, []);

  // Count the hero stats up from zero the first time they scroll into view.
  useEffect(() => {
    const numbers = Array.from(document.querySelectorAll(".stat-number"));
    if (!numbers.length) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const entries = numbers
      .map((element) => {
        const match = /^(\D*)(\d+)([\s\S]*)$/.exec(element.textContent.trim());
        if (!match) return null;
        return {
          element,
          prefix: match[1],
          value: Number(match[2]),
          suffix: match[3],
        };
      })
      .filter(Boolean);
    if (!entries.length) return;
    if (reduced || !("IntersectionObserver" in window)) return;

    const animate = ({ element, prefix, value, suffix }) => {
      const duration = 900;
      const started = performance.now();
      const step = (now) => {
        const progress = Math.min((now - started) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = `${prefix}${Math.round(value * eased)}${suffix}`;
        if (progress < 1) requestAnimationFrame(step);
      };
      element.textContent = `${prefix}0${suffix}`;
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (observed) => {
        observed.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const found = entries.find((item) => item.element === entry.target);
          if (found) animate(found);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.4 },
    );
    entries.forEach(({ element }) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <button
      type="button"
      className={`back-to-top${showTop ? " is-visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      tabIndex={showTop ? 0 : -1}
      aria-hidden={!showTop}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 19V5m0 0-6 6m6-6 6 6"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
