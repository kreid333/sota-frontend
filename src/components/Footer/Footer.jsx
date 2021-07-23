import React from "react"
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHouzz,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bg">
        <div className="container text-center">
          <span className="footer-title">SOTA Window Coverings</span>
          <div className="contact mb-2 mt-2">
            <span>4624 Danson Way</span>
            <span>Delray Beach, FL 33445</span>
            <span>
              Phone:{" "}
              <a href="tel:5617054900" className="white-text">
                (561) 705-4900
              </a>
            </span>
          </div>
          <div className="footer-links">
            <a href="https://www.houzz.com/professionals/window-treatments/sota-window-coverings-pfvwus-pf~1762534943" className="footer-icon" target="_blank">
              <FontAwesomeIcon icon={faHouzz} size="2x" />
            </a>
            <a href="https://www.facebook.com/SOTA-Window-Coverings-162212467184332/" className="footer-icon" target="_blank">
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
              />
            </a>
            <a href="https://instagram.com/sota_window_coverings" className="footer-icon" target="_blank">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
          <small>&copy;2021, SOTA Window Coverings</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer
