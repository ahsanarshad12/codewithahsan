"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useRef,
  useState,
} from "react";

export default function ContactForm({ children, ...props }) {
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const submitting = useRef(false);
  const honeypot = useRef(null);
  const pending = status.type === "sending";

  async function handleSubmit(event) {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    submitting.current = true;
    setStatus({ type: "sending", message: "Sending your note…" });
    const values = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          website: honeypot.current?.value || "",
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(
          data.error ||
            "Your note could not be sent. Please try again or email me directly.",
        );
      }
      setStatus({
        type: "success",
        message:
          "Your note has been sent! Thanks for reaching out — I’ll be in touch soon.",
      });
      form.reset();
    } catch (error) {
      // Keep the visitor's entered values so they can retry.
      setStatus({
        type: "error",
        message:
          error.message ||
          "Connection issue. Please try again or email me directly.",
      });
    } finally {
      submitting.current = false;
    }
  }

  return (
    <form {...props} onSubmit={handleSubmit} aria-busy={pending}>
      {Children.map(children, (child) => {
        if (
          isValidElement(child) &&
          child.type === "button" &&
          child.props.type === "submit"
        ) {
          return cloneElement(child, {
            disabled: pending,
            "aria-disabled": pending,
            children: pending ? "Sending your note…" : child.props.children,
          });
        }
        return child;
      })}
      {/* Out of normal layout; invisible to humans and assistive technology. */}
      <div className="contact-honeypot" aria-hidden="true">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input
          ref={honeypot}
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <p className="form-privacy">
        {
          "Your details are only used to reply to this enquiry — never shared, sold or added to a mailing list."
        }
      </p>
      {status.message && (
        <p
          role={status.type === "error" ? "alert" : "status"}
          aria-live="polite"
          className={`contact-feedback contact-feedback-${status.type}`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
