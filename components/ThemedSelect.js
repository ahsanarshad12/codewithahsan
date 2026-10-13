"use client";

import * as Select from "@radix-ui/react-select";
import { useEffect, useRef, useState } from "react";

const serviceDetails = {
  "Frontend / Next.js Development": "Fast, polished, production-ready websites",
  "Figma to Responsive HTML/React": "Your design, built pixel by pixel",
  "Full-Stack Web Application": "Frontend, backend & everything between",
  "Performance Optimization": "A faster, smoother experience",
  "Other Collaboration": "Let’s explore your idea together",
};
const budgetDetails = {
  "< $500 (Small Task / Fix)": "Small task / fix",
  "$500 - $1,500 (Standard Website)": "Standard website",
  "$1,500 - $5,000 (Complete Platform)": "Complete platform",
  "$5,000+ (Long-term / Full-Time Contract)": "Long-term / full-time contract",
};

function Chevron() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ThemedSelect({ id, name, options, kind }) {
  const [value, setValue] = useState(options[0]);
  const trigger = useRef(null);
  const isBudget = kind === "budget";
  useEffect(() => {
    const form = trigger.current?.closest("form");
    const reset = () => setValue(options[0]);
    form?.addEventListener("reset", reset);
    return () => form?.removeEventListener("reset", reset);
  }, [options]);

  return (
    <Select.Root name={name} value={value} onValueChange={setValue}>
      <Select.Trigger
        ref={trigger}
        id={id}
        aria-labelledby={`${id}-label`}
        className="themed-select-trigger"
      >
        <span
          className={`themed-select-badge ${isBudget ? "themed-select-badge-budget" : ""}`}
          aria-hidden="true"
        >
          {isBudget ? "$" : "✦"}
        </span>
        <Select.Value />
        <Select.Icon className="themed-select-chevron">
          <Chevron />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          className="themed-select-menu"
          position="popper"
          sideOffset={9}
          collisionPadding={16}
          align="start"
        >
          <div className="themed-select-heading" aria-hidden="true">
            <span>
              {isBudget ? "FIND YOUR RANGE" : "LET’S BUILD SOMETHING"}
            </span>
            <span>✦</span>
          </div>
          <Select.ScrollUpButton className="themed-select-scroll themed-select-scroll-up">
            <Chevron />
          </Select.ScrollUpButton>
          <Select.Viewport className="themed-select-viewport">
            {options.map((option) => {
              const label = isBudget ? option.split(" (")[0] : option;
              const description = isBudget
                ? budgetDetails[option]
                : serviceDetails[option];
              return (
                <Select.Item
                  key={option}
                  value={option}
                  textValue={option}
                  className="themed-select-option"
                >
                  <span className="themed-select-option-copy">
                    <Select.ItemText>{label}</Select.ItemText>
                    <span className="themed-select-option-description">
                      {description}
                    </span>
                  </span>
                  <Select.ItemIndicator className="themed-select-check">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="m5 12 4 4L19 6"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Select.ItemIndicator>
                </Select.Item>
              );
            })}
          </Select.Viewport>
          <Select.ScrollDownButton className="themed-select-scroll">
            <Chevron />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
