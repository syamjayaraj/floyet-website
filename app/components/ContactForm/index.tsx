"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

const ContactForm = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      if (data.mailto) {
        window.location.href = data.mailto;
      }

      form.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Unable to send your message. Please email info@floyet.com."
      );
    }
  };

  return (
    <>
      <form
        className="contact-form-apple"
        onSubmit={handleSubmit}
        noValidate
        aria-label="Contact form"
      >
        <div className="form-row">
          <div className="form-group-apple">
            <label htmlFor="contact-name" className="form-label-apple">
              Name <span className="form-required">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              className="form-input-apple"
              required
              autoComplete="name"
              disabled={status === "submitting"}
            />
          </div>
          <div className="form-group-apple">
            <label htmlFor="contact-email" className="form-label-apple">
              Email <span className="form-required">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              className="form-input-apple"
              required
              autoComplete="email"
              disabled={status === "submitting"}
            />
          </div>
        </div>

        <div className="form-group-apple">
          <label htmlFor="contact-subject" className="form-label-apple">
            Subject
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            className="form-input-apple"
            placeholder="Product inquiry, partnership, support..."
            disabled={status === "submitting"}
          />
        </div>

        <div className="form-group-apple">
          <label htmlFor="contact-message" className="form-label-apple">
            Message <span className="form-required">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            className="form-textarea-apple"
            required
            rows={5}
            disabled={status === "submitting"}
          />
        </div>

        {status === "error" && (
          <p className="form-error" role="alert">
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          className="btn-apple btn-apple-primary hover-lift"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending..." : "Send message"}
        </button>
      </form>

      {status === "success" && (
        <div
          className="success-overlay-apple"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
          onClick={() => setStatus("idle")}
        >
          <div
            className="success-card-apple"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="success-icon-apple" aria-hidden="true">
              <i className="bi bi-check-lg" />
            </div>
            <h3 id="success-title">Message sent</h3>
            <p>Thanks for reaching out. We&apos;ll get back to you within 24 hours.</p>
            <button
              type="button"
              className="btn-apple btn-apple-primary mt-4"
              onClick={() => setStatus("idle")}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
