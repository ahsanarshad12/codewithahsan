"use client";

import { Children, isValidElement, useCallback, useEffect, useRef, useState } from "react";

function getPerView() {
  if (typeof window === "undefined") return 3;
  if (window.matchMedia("(min-width: 1024px)").matches) return 3;
  if (window.matchMedia("(min-width: 768px)").matches) return 2;
  return 1;
}

function Chevron({ direction }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={direction === "prev" ? { transform: "rotate(180deg)" } : undefined}
    >
      <path
        d="m9 6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WorkSlider({ children }) {
  // Only the project cards, ignoring whitespace text nodes.
  const slides = Children.toArray(children).filter(isValidElement);
  const track = useRef(null);
  const drag = useRef({ active: false, moved: 0, startX: 0, startScroll: 0 });
  const [perView, setPerView] = useState(3);
  const [index, setIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const lastIndex = Math.max(0, slides.length - perView);
  const pages = lastIndex + 1;

  // Position of a slide, measured from the first slide, works at any width.
  const offsetOf = useCallback((i) => {
    const element = track.current;
    const slide = element?.children?.[i];
    const first = element?.children?.[0];
    if (!element || !slide || !first) return 0;
    return slide.offsetLeft - first.offsetLeft;
  }, []);

  const goTo = useCallback(
    (next, behavior = "smooth") => {
      const element = track.current;
      if (!element) return;
      const target = Math.min(Math.max(next, 0), lastIndex);
      element.scrollTo({ left: offsetOf(target), behavior });
      setIndex(target);
    },
    [lastIndex, offsetOf],
  );

  const indexFromScroll = useCallback(() => {
    const element = track.current;
    if (!element) return 0;
    let closest = 0;
    let smallest = Infinity;
    for (let i = 0; i <= lastIndex; i += 1) {
      const distance = Math.abs(offsetOf(i) - element.scrollLeft);
      if (distance < smallest) {
        smallest = distance;
        closest = i;
      }
    }
    return closest;
  }, [lastIndex, offsetOf]);

  useEffect(() => {
    const update = () => setPerView(getPerView());
    update();
    const queries = [
      window.matchMedia("(min-width: 768px)"),
      window.matchMedia("(min-width: 1024px)"),
    ];
    queries.forEach((query) => query.addEventListener("change", update));
    return () =>
      queries.forEach((query) => query.removeEventListener("change", update));
  }, []);

  // Keep the active slide valid and aligned after a layout change.
  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const clamped = Math.min(index, lastIndex);
    if (clamped !== index) setIndex(clamped);
    element.scrollTo({ left: offsetOf(clamped), behavior: "auto" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perView, lastIndex]);

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (drag.current.active) return;
        setIndex(indexFromScroll());
      });
    };
    element.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      element.removeEventListener("scroll", onScroll);
    };
  }, [indexFromScroll]);

  function onPointerDown(event) {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    const element = track.current;
    drag.current = {
      active: true,
      moved: 0,
      startX: event.clientX,
      startScroll: element.scrollLeft,
    };
    element.setPointerCapture(event.pointerId);
    setDragging(true);
  }

  function onPointerMove(event) {
    if (!drag.current.active) return;
    const element = track.current;
    const distance = event.clientX - drag.current.startX;
    drag.current.moved = Math.max(drag.current.moved, Math.abs(distance));
    element.scrollLeft = drag.current.startScroll - distance;
  }

  function endDrag(event) {
    if (!drag.current.active) return;
    const element = track.current;
    drag.current.active = false;
    setDragging(false);
    if (element.hasPointerCapture?.(event.pointerId))
      element.releasePointerCapture(event.pointerId);
    goTo(indexFromScroll());
  }

  // A drag should never open a project link.
  function blockClick(event) {
    if (drag.current.moved > 6) {
      event.preventDefault();
      event.stopPropagation();
      drag.current.moved = 0;
    }
  }

  function onKeyDown(event) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(index + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(index - 1);
    }
  }

  const counter = `${String(index + 1).padStart(2, "0")} / ${String(pages).padStart(2, "0")}`;

  return (
    <div
      className="work-slider"
      role="group"
      aria-roledescription="carousel"
      aria-label="Selected work"
    >
      <div
        ref={track}
        className={`work-slider-track${dragging ? " is-dragging" : ""}`}
        style={{ "--work-per-view": perView }}
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={blockClick}
        onKeyDown={onKeyDown}
      >
        {slides.map((slide, i) => (
          <div
            className="work-slide"
            key={i}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${i + 1} of ${slides.length}`}
          >
            {slide}
          </div>
        ))}
      </div>
      <div className="work-slider-controls">
        <button
          type="button"
          className="work-slider-btn"
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
          aria-label="Previous projects"
        >
          <Chevron direction="prev" />
        </button>
        <span className="work-slider-counter" aria-hidden="true">
          {counter}
        </span>
        <button
          type="button"
          className="work-slider-btn"
          onClick={() => goTo(index + 1)}
          disabled={index === lastIndex}
          aria-label="Next projects"
        >
          <Chevron direction="next" />
        </button>
      </div>
      <div className="work-slider-dots">
        {Array.from({ length: pages }, (_, i) => (
          <button
            key={i}
            type="button"
            className={`work-slider-dot${i === index ? " is-active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to projects page ${i + 1}`}
            aria-current={i === index ? "true" : undefined}
          />
        ))}
      </div>
      <p className="work-slider-hint">
        {"Drag, swipe or use the arrows — three cards at a time on desktop."}
      </p>
      <p
        className="sr-only"
        aria-live="polite"
      >{`Showing page ${index + 1} of ${pages}`}</p>
    </div>
  );
}
