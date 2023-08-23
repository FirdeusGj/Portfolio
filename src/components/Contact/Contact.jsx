import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

export default function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // eslint-disable-next-line
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
  const loadingScreen = document.querySelector(".loading-screen");
  const submitMsg = document.querySelector(".sent-message");
  // eslint-disable-next-line
  const isFormValid =
    name.trim() !== "" && email.trim() !== "" && message.trim() !== "";
  const handleSubmit = (event) => {
    loadingScreen.style.display = "block";
    event.preventDefault();
    emailjs
      .sendForm(
        "service_qtdfrdc",
        "template_cjfz4q9",
        form.current,
        "X4Mi8L9q9HTYDrE3U"
      )
      .then(() => {
        submitMsg.style.display = "block";
        setTimeout(() => {
          loadingScreen.style.display = "none";
        }, 1000);
      })
      .catch(() => {
        alert(
          "The email service is temporarily unavailable. Please contact me directly on firdegjepali@gmail.com"
        );
        loadingScreen.style.display = "none";
      });
  };
  return (
    <section className="contact-wrapper flex-center">
      <div id="contact">
        <div className="loading-screen">
          <div className="flex-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
            </svg>
          </div>
        </div>
        <div className="sent-message">
          <div className="flex-center">
            <h1>
              Sent! <br />
              Thanks for the message
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
          </div>
        </div>
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
                Got opportunities, ideas, or burning questions? Send them my
                way, and let's turn them into something remarkable!
              </h3>
            </div>
          </div>
        </div>
        <div className="contact-input-wrapper">
          <form
            ref={form}
            onSubmit={handleSubmit}
            action=""
            className="contact-form"
          >
            <div className="input-name-wrapper">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                required
                name="user_name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="input-email-wrapper">
              <label htmlFor="">Email</label>
              <input
                type="email"
                required
                name="user_email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="input-message-wrapper">
              <label htmlFor="">Message</label>
              <textarea
                name="message"
                required
                value={message}
                onChange={handleMessageChange}
                id=""
              ></textarea>
            </div>
            <div className="form-button">
              <button type="submit" id="unSent">
                {isSent ? "Sent! Thanks for the message" : "Send it my way"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}