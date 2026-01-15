import React from "react";
import '../App.css'
import { useState } from "react";
import linkedin from '../assets/linkedin.png';
import github from '../assets/github-142-svgrepo-com (2).svg';
import email from '../assets/email-svgrepo-com.svg';

export default function Footer() {
  const [copied, setCopied] = useState("");

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(""), 1500);
  };

  return (
    <div className="footer">
      <h4>Kontakta mig:</h4>
      <div className="contact-logo-container">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/emma-rene/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-logo-wrapper"
        >
          <img
            className="contact-logo"
            src={linkedin}
            alt="LinkedIn"
          />
          <span className="tooltip">LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/anderssonskan"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-logo-wrapper"
        >
          <img
            className="contact-logo"
            src={github}
            alt="GitHub"
          />
          <span className="tooltip">GitHub</span>
        </a>

        {/* E-post */}
        <button
          onClick={() => handleCopy("emma.hultsten@gmail.com", "E-post kopierad!")}
          className="contact-logo-wrapper"
        >
          <img
            className="contact-logo"
            src={email}
            alt="Email"
          />
          <span className="tooltip">emma.hultsten@gmail.com</span>
        </button>
      </div>

      {/* Feedback-meddelande */}
      {copied && <div className="copy-message">{copied}</div>}
    </div>
  );
}
