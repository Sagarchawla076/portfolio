import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, []);
  return (
    <section className="contact" id="contact">
      <div className="contact__heading">
        <h2 className="contact__heading--text" data-aos="fade-right">
          Contact
        </h2>
        <div className="contact__heading--underline" data-aos="fade-left"></div>
      </div>
      <p className="contact__question">
        Have a question or want to work together?
      </p>
      <form className="contact__form">
        <input
          type="text"
          name="Name"
          placeholder="Name"
          className="contact__form--name"
        />
        <input
          type="text"
          name="email"
          placeholder="Enter email"
          className="contact__form--email"
        />
        <textarea
          name=""
          placeholder="Your Message"
          id=""
          cols="30"
          rows="7"
          className="contact__form--text-area"
        ></textarea>
      </form>
      <button className="contact__btn">Submit</button>
    </section>
  );
}

export default Contact;
