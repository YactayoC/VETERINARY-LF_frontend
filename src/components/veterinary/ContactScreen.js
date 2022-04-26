import React from "react";
import { Footer } from "../ui/Footer";
import { Hero } from "../ui/Hero";
import { NavBar } from "../ui/NavBar";

export const ContactScreen = () => {
  return (
    <>
      <NavBar />
      <Hero title="Contact" />
      <form className="form form-contact animate__animated animate__fadeIn">
        <h2>Formulary Contact</h2>
        <div className="form__group">
          <input
            className="form__input"
            type="text"
            placeholder="Name"
            name="name"
            autoComplete="off"
          />
        </div>

        <div className="form__group">
          <input
            className="form__input"
            type="text"
            placeholder="Email"
            name="email"
            autoComplete="off"
          />
        </div>
        <div className="form__group">
          <input
            className="form__input"
            type="text"
            placeholder="Phone"
            name="phone"
            autoComplete="off"
          />
        </div>
        <div className="form__group">
          <textarea
            className="form__input form__area"
            placeholder="How can I help you?"
            name="messageC"
            autoComplete="off"
          ></textarea>
        </div>
        <div className="form__submit">
          <div className="form__check">
            <input type="checkbox" id="checkbox1" />
            <p>
              I have read the <span>privacy policy</span>
            </p>
          </div>
          <button className="form__button" id="buttonSend" disabled>
            Send
          </button>
        </div>
      </form>
      <Footer />
    </>
  );
};
