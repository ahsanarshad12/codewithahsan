"use client";

import { useState } from "react";

export default function CopyEmailButton({ email }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Clipboard can be blocked; the mailto link next to this button still works.
      setCopied(false);
      return;
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      className="copy-email"
      onClick={copy}
      aria-label={
        copied ? "Email address copied" : `Copy email address ${email}`
      }
    >
      {copied ? "Copied ✓" : "Copy"}
    </button>
  );
}
