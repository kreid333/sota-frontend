import React from "react"
import Layout from "../components/Layout"
import { Carousel } from "react-bootstrap"
import IMG1 from "../assets/images/index/IMG_5117.jpg"
import IMG2 from "../assets/images/index/IMG_5119.jpg"
import IMG3 from "../assets/images/index/IMG_5120.jpg"
import IMG5 from "../assets/images/index/IMG_5130.jpg"
import IMG6 from "../assets/images/index/IMG_5131.jpg"
import IMG7 from "../assets/images/index/IMG_5136.jpg"
import IMG8 from "../assets/images/index/IMG_5138.jpg"
import SOTA from "../assets/images/logo/SOTA.png"
import "./styles/index.css"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons"
import ContactUs from "../components/ContactUs/ContactUs"
import Reviews from "../components/Reviews/Reviews"

export default function Home() {
  return (
    <Layout title="SOTA Window Coverings - Window Coverings in Delray Beach Florida">
      <div className="row m-0 hero">
        <div className="col-lg-3 p-0">
          <div className="hero-logoBg">
            <img className="hero-logo" src={SOTA} />
            <div className="hero-info">
              <span>4624 Danson Way</span>
              <span>Delray Beach, FL 33445</span>
              <span>
                Phone: <a href="tel:5617054900" className="black-text">(561) 705-4900</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-9 p-0">
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src={IMG1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src={IMG2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src={IMG3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="row m-0">
        <div className="col-sm-12 consultations">
          <span className="consultations-title">
            FREE IN HOME CONSULTATIONS!
          </span>
          <Link to="/contact">
            <button className="button button-consultations">Contact Us</button>
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="row m-5">
          <div className="col-sm-12 text-center">
            <span className="about-title mt-2 mb-2">SOTA Window Coverings</span>
            <span className="about-location mt-2 mb-2">
              Located in Delray Beach, Florida
            </span>
            <span className="about-info mt-2 mb-2">
              A small family owned business providing professional Window
              Treatments to homes and businesses in the Delray Beach and
              surrounding areas for over 15 years. We are licensed and insured
              and specialize in Plantation Shutters in Wood and Poly, Solar
              Shades, Horizontal Shades, Verticals, and Motorization.
            </span>
            <Link to="/gallery">
              <button className="button button-black">See Gallery</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="row m-0">
        <div className="col-sm-3 p-0">
          <img className="banner-img" src={IMG5} />
        </div>
        <div className="col-sm-3 p-0">
          <img className="banner-img" src={IMG6} />
        </div>
        <div className="col-sm-3 p-0">
          <img className="banner-img" src={IMG7} />
        </div>
        <div className="col-sm-3 p-0">
          <img className="banner-img" src={IMG8} />
        </div>
      </div>
      <div className="container">
        <div className="section-header">Services</div>
        <div className="services">
          <div className="row">
            <div className="col-sm-12 services-img plantation-shutters">
              <Link to="/gallery/plantationshutters">
                <h3>Plantation Shutters</h3>
                <span>
                  Learn More <FontAwesomeIcon icon={faChevronCircleRight} />
                </span>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 services-img solar-shades">
              <Link to="/gallery/solarshades">
                <h3>Solar Shades</h3>
                <span>
                  Learn More <FontAwesomeIcon icon={faChevronCircleRight} />
                </span>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 services-img motorization">
              <Link to="/gallery/motorization">
                <h3>Motorization</h3>
                <span>
                  Learn More <FontAwesomeIcon icon={faChevronCircleRight} />
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
