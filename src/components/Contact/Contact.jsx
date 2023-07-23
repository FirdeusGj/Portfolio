import React, { useRef, useState } from "react";
import emailjs from 'emailjs-com';
import "./Contact.css";
export default function Contact() {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const isFormValid = name.trim() !== '' && email.trim() !== '' && message.trim() !== '';
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSent(true)
    emailjs.sendForm(
      'service_qtdfrdc',
      'template_cjfz4q9',
      form.current,
      'X4Mi8L9q9HTYDrE3U').catch(() => {
        alert(
            'The email service is temporarily unavailable. Please contact me directly on firdegjepali@gmail.com'
        )
    })
  }
  return (
    <section className="contact-wrapper">
    <div id="contact">
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
          <a href="mailto:firdegjepali@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
            </svg>
            firdegjepali@gmail.com
          </a>
        </div>
      </div>
      <div className="contact-input-wrapper">
        <form ref={form} onSubmit={handleSubmit} action="" className="contact-form">
          <div className="input-name-wrapper">
            <label htmlFor="name">Name</label>
            <input type="text" required name="user_name" value={name} onChange={handleNameChange} />
          </div>
          <div className="input-email-wrapper">
            <label htmlFor="">Email</label>
            <input type="email" required name="user_email" value={email} onChange={handleEmailChange} />
          </div>
          <div className="input-message-wrapper">
            <label htmlFor="">Message</label>
            <textarea name="message" required value={message} onChange={handleMessageChange} id=""></textarea>
          </div>
          <div className="form-button">
            <button
            type="submit"
              id={`${isSent ? 'Sent' : 'unSent'}`}
              disabled={!isFormValid}
              >
              {isSent ? 'Sent! Thanks for the message' : 'Send it my way'}
            </button>
          </div>
        </form>
      </div>
    </div>
              </section>
  );
}
