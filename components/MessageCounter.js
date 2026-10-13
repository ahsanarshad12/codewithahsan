"use client";

import { useEffect, useState } from "react";

// Live character feedback for the project details field.
export default function MessageCounter({ max = 6000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const textarea = document.getElementById("contact-message");
    const form = textarea?.closest("form");
    if (!textarea) return;
    const update = () => setCount(textarea.value.length);
    update();
    textarea.addEventListener("input", update);
    form?.addEventListener("reset", update);
    return () => {
      textarea.removeEventListener("input", update);
      form?.removeEventListener("reset", update);
    };
  }, []);

  const near = count > max * 0.9;
  return (
    <p className="message-counter" aria-live="off">
      <span className={near ? "is-near-limit" : undefined}>
        {count.toLocaleString("en-US")}
      </span>
      {` / ${max.toLocaleString("en-US")} characters`}
    </p>
  );
}
