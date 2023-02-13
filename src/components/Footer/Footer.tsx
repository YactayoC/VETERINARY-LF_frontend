import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const urlFacebook = 'https://www.facebook.com/sebastianaron.yactayocrisostomo.7';
  const urlInstagram = 'https://www.instagram.com/sebastianaronyactayo/?hl=es';
  const urlGithub = 'https://www.facebook.com/sebastianaron.yactayocrisostomo.7';

  const onClickPhone = (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    window.location.href = 'tel:5892065';
  };

  const onClickMail = (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    window.location.href = 'mailto:sebastianaronyactayo@gmail.com';
  };

  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__info">
          <img src="/assets/ui/logo.png" alt="logo" />
          <p>LoyalFriend is the first comprehensive veterinary service at home in the district of Chilca</p>
          <div className="footer__info-buttons">
            <a href={urlFacebook} target="_blank" rel="noopener noreferrer">
              <img src="../assets/icons/fb-icon.png" alt="" />
            </a>
            <a href={urlInstagram} target="_blank" rel="noopener noreferrer">
              <img src="../assets/icons/instagram-icon.png" alt="" />
            </a>
            <Link to="#" onClick={onClickMail}>
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
              <Link to="#" onClick={onClickPhone}>
                <i className="fa-solid fa-phone-flip"></i>5892065
              </Link>
            </li>
            <li>
              <Link to="#" onClick={onClickMail}>
                <i className="fa-solid fa-envelope"></i>loyalfriend@gmail.com
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyrigth">
        <p>© Copyright 2022 | LoyalFriend | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
