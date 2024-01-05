import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import message from "./message sending.json";
import Lottie from "lottie-react";
import creds from "./credentials";
function Contact() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        creds.serviceId,
        creds.templateId,
        form.current,
        creds.publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          document.getElementById("form").reset();
          window.alert("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Whole">
      <div className="head">
        <h1>Get in touch</h1>
      </div>
      <div className="contact" id="contact">
        <form id="form" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
        <Lottie
          className="animation"
          animationData={message}
          style={{ marginLeft: "10%", scale: "1" }}
        />
      </div>
    </div>
  );
}

export default Contact;
