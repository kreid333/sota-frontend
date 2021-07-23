import { Link } from "gatsby"
import React from "react"
import "./ContactUs.css"

const ContactUs = () => {
  return (
    <>
      <div className="section-header">Contact Us</div>
      <div className="section contact-info">
          <span>
            If you are looking for a window covering company in the Delray Beach
            and surrounding areas that specializes in Plantation Shutters in
            Wood and Poly, Solar Shades, Horizontal Shades and Vertical Shades,
            then please call <a href="tel:5617054900">(561) 705-4900</a> or{" "}
            <Link to="/contact">complete our online consultation form</Link>.
          </span>
        </div>
    </>
  )
}

export default ContactUs
