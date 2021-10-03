import React from "react";
import { BsChevronDoubleUp } from "react-icons/bs";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaCodepen,
} from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__icon">
        <BsChevronDoubleUp />
      </div>

      <ul className="footer__links">
        <li className="footer__link">
          <FaLinkedinIn />
        </li>
        <li className="footer__link">
          <FaFacebookF />
        </li>
        <li className="footer__link">
          <FaInstagram />
        </li>
        <li className="footer__link">
          <FaCodepen />
        </li>
      </ul>
      <p className="footer__copyright">
        SAGAR CHAWLA <span> &copy; 2021</span>
      </p>
    </footer>
  );
}

export default Footer;
