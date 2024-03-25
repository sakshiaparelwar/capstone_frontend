import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="leftFooter">
          <h4>DOWNLOAD OUR APP</h4>
          <p>Download App for Android and IOS mobile phone</p>
        </div>

        <div className="midFooter">
          <h1>
            Event<span>era.</span>
          </h1>
          <p>High Quality is our first priority</p>

          <p>Copyrights 2024 &copy; SakshiParelwar</p>
        </div>
        <div id="links">
          <h2>Links</h2>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="rightFooter">
          <h4>Follow Us</h4>
          <a href="">
            <FaInstagram />
          </a>
          <a href="">
            <FaYoutube />
          </a>
          <a href="">
            <FaFacebook />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
