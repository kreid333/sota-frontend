import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"
import ContactUs from "../../components/ContactUs/ContactUs"
import Layout from "../../components/Layout"
import Reviews from "../../components/Reviews/Reviews"

const gallery = () => {
  return (
    <Layout title="Gallery">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1 className="m-3" style={{ padding: "20px" }}>
              Gallery
            </h1>
          </div>
        </div>
        <div className="services">
          <div className="row">
            <div className="col-sm-12 services-img view-all">
              <Link to="/gallery/all">
                <h3>View All</h3>
                <span>
                  View Photos <FontAwesomeIcon icon={faChevronCircleRight} />
                </span>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 services-img plantation-shutters">
              <Link to="/gallery/plantationshutters">
                <h3>Plantation Shutters</h3>
                <span>
                  View Photos <FontAwesomeIcon icon={faChevronCircleRight} />
                </span>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 services-img solar-shades">
              <Link to="/gallery/solarshades">
                <h3>Solar Shades</h3>
                <span>
                  View Photos <FontAwesomeIcon icon={faChevronCircleRight} />
                </span>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 services-img motorization">
              <Link to="/gallery/motorization">
                <h3>Motorization</h3>
                <span>
                  View Video <FontAwesomeIcon icon={faChevronCircleRight} />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <Reviews />
        <ContactUs />
      </div>
    </Layout>
  )
}

export default gallery
