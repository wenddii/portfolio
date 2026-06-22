import { useState } from "react";
import "./ContactSection.css";

const contactEndpoint = "https://formsubmit.co/ajax/wendwosen03@gmail.com";

function ContactSection() {
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitState, setSubmitState] = useState("idle");

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setEnquiryForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const submitEnquiry = async () => {
      setSubmitState("sending");

      try {
        const response = await fetch(contactEndpoint, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: enquiryForm.name.trim(),
            email: enquiryForm.email.trim(),
            subject: enquiryForm.subject.trim() || "Portfolio enquiry",
            message: enquiryForm.message.trim(),
            _template: "table",
            _captcha: false,
          }),
        });

        if (!response.ok) {
          throw new Error("Unable to send enquiry right now.");
        }

        setEnquiryForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setSubmitState("sent");
      } catch {
        setSubmitState("error");
      }
    };

    submitEnquiry();
  };

  return (
    <section id="contact" className="story-section contact-section">
      <div className="section-head">
        <p className="eyebrow">Contact</p>
        <h2>Let's build something useful.</h2>
        <p>
          If you are hiring, collaborating, or just want to talk about software, business, or
          learning, I’m easy to reach.
        </p>
      </div>

      <div className="contact-layout">
        <form className="enquiry-form" onSubmit={handleFormSubmit}>
          <label>
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={enquiryForm.name}
              onChange={handleFormChange}
              placeholder="Your name"
              required
            />
          </label>

          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={enquiryForm.email}
              onChange={handleFormChange}
              placeholder="you@example.com"
              required
            />
          </label>

          <label>
            <span>Subject</span>
            <input
              type="text"
              name="subject"
              value={enquiryForm.subject}
              onChange={handleFormChange}
              placeholder="Internship, collaboration, enquiry"
            />
          </label>

          <label>
            <span>Message</span>
            <textarea
              name="message"
              value={enquiryForm.message}
              onChange={handleFormChange}
              placeholder="Write your enquiry here..."
              rows="5"
              required
            />
          </label>

          <div className="enquiry-actions">
            <button
              type="submit"
              className="contact-submit"
              disabled={submitState === "sending"}
            >
              {submitState === "sending" ? "Sending..." : "Send enquiry"}
            </button>
            <p className="contact-note">
              This sends directly to my email without opening your mail app.
            </p>
            {submitState === "sent" && (
              <p className="contact-success">Thanks. Your message has been sent.</p>
            )}
            {submitState === "error" && (
              <p className="contact-error">
                Something went wrong. Please try again or use the email link below.
              </p>
            )}
          </div>
        </form>

        <div className="contact-links-panel">
          <a className="contact-link" href="mailto:wendwosen03@gmail.com">
            Email
          </a>
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/wendwosen-tessema-3b8733274?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a className="contact-link" href="https://github.com/wendii" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

