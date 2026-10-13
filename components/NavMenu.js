"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Selected Work" },
  { href: "#skills", label: "Skills" },
  { href: "#journey", label: "The Path" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

// Small screens had no way to reach the sections, so this adds a themed menu.
export default function NavMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={`nav-burger${open ? " is-open" : ""}`}
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {/* Portal: the header's backdrop-filter would otherwise trap position:fixed
          inside the header box instead of covering the viewport. */}
      {open &&
        mounted &&
        createPortal(
          <div className="mobile-menu" id="mobile-menu">
            <nav className="mobile-menu-list" aria-label="Sections">
              {LINKS.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{ animationDelay: `${index * 40}ms` }}
                >
                  <span className="mobile-menu-bullet" aria-hidden="true">✦</span>
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              className="mobile-menu-cta btn-spring"
              href="#contact"
              onClick={() => setOpen(false)}
            >
              {"Let's Talk →"}
            </a>
          </div>,
          document.body,
        )}
    </>
  );
}
