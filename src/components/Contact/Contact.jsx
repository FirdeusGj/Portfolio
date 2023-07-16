import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-text-wrapper">
        <div className="contact-text">
          <div className="contact-text-title">
            <h4>Contact</h4>
          </div>
          <div className="contact-text-main">
            <h1>
              Let's connect and craft an extraordinary online masterpiece!
            </h1>
          </div>
          <div className="contact-text-ending">
            <h3>
              Got opportunities, ideas, or burning questions? Send them my way,
              and let's turn them into something remarkable!
            </h3>
          </div>
        </div>
        <div className="email">
          <a href="mailto:firdegjepali@gmail.com">firdegjepali@gmail.com</a>
        </div>
      </div>
      <div className="contact-input-wrapper">
        <div className="input-name-wrapper">
          <label htmlFor="">Name</label>
          <input type="text" />
        </div>
        <div className="input-email-wrapper">
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>
        <div className="input-message-wrapper">
          <label htmlFor="">Message</label>
          <input type="text" />
        </div>
      </div>
    </section>
  );
}
