import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__info">
          <img src="../assets/ui/logo.png" alt="logo" />
          <p>
            LoalyFriend is the first comprehensive veterinary service at home in
            the district of Chilca
          </p>
          <div className="footer__info-buttons">
            <a
              href="https://www.facebook.com/sebastianaron.yactayocrisostomo.7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../assets/icons/fb-icon.png" alt="" />
            </a>
            <a
              href="https://www.instagram.com/sebastianaronyactayo/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../assets/icons/instagram-icon.png" alt="" />
            </a>
            <Link
              to="#"
              onClick={(e) => {
                window.location.href = "mailto:sebastianaronyactayo@gmail.com";
                e.preventDefault();
              }}
            >
              <img src="../assets/icons/email-icon.png" alt="" />
            </Link>
          </div>
        </div>

        <div className="footer__schedule">
          <h4>Schedule</h4>
          <ul>
            <li>Monday - 10:00 to 20:00h</li>
            <li>Tuesday - 10:00 to 20:00h</li>
            <li>Wednesday - 10:00 to 20:00h</li>
            <li>Thursday - 10:00 to 20:00h</li>
            <li>Friday - 10:00 to 20:00h</li>
            <li>Saturday - 10:00 to 20:00h</li>
            <li>Sunday - Only emergencies</li>
          </ul>
        </div>

        <div className="footer__contact">
          <h4>Contact</h4>
          <ul>
            <li>
              <Link
                to="#"
                onClick={(e) => {
                  window.location.href = "tel:5892065";
                  e.preventDefault();
                }}
              >
                <i className="fa-solid fa-phone-flip"></i>5892065
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={(e) => {
                  window.location.href =
                    "mailto:sebastianaronyactayo@gmail.com";
                  e.preventDefault();
                }}
              >
                <i className="fa-solid fa-envelope"></i>loalyfriend@gmail.com
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyrigth">
        <p>© Copyright 2022 | LoalyFriend | All Rights Reserved</p>
      </div>
    </footer>
  );
};
