import React from "react"
import Layout from "../components/Layout"
import "./styles/about.css"
import ContactUs from "../components/ContactUs/ContactUs"
import Reviews from "../components/Reviews/Reviews"
import { StaticImage } from "gatsby-plugin-image"


const about = () => {
  return (
    <Layout title="About">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1 className="m-3" style={{ padding: "20px" }}>
              About Us
            </h1>
          </div>
        </div>
        <div>
          <div className="row">
            <div className="col-lg-8 my-auto about-text" style={{borderBottom: "1px solid lightgrey"}}>
              <p className="p-3">
                A small family owned business providing professional Window
                Treatments to homes and businesses in the Delray Beach and
                surrounding areas for over 15 years. We are licensed and insured and specialize in
                Plantation Shutters in Wood and Poly, Solar Shades, Horizontal
                Shades, Verticals, and Motorization.
              </p>
            </div>
            <div className="col-lg-4 text-center about-img">
              <StaticImage className="img-bubble p-3" src="../assets/images/about/IMG_5137.jpg" alt="Image of windows" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 text-center">
              <StaticImage className="img-bubble p-3" src="../assets/images/about/IMG_5161.jpg" alt="Image of windows" />
            </div>
            <div className="col-lg-8 my-auto" style={{borderBottom: "1px solid lightgrey"}}>
              <p className="p-3">
                Areas we currently serve include: Atlantis, Boca Del Mar, Boca
                Pointe, Boca Raton, Boynton Beach, Briny Breezes, Deerfield
                Beach, Delray Beach, Dunes Road, Golf, Gulf Stream, Hamptons at
                Boca Raton, Highland Beach, Hillsboro Pines, Hypoluxo, Kings
                Point, Lake Worth, Lantana, Manalapan, Mission Bay, Ocean Ridge,
                Seminole Manor, South Palm Beach, Villages of Oriole, Whisper
                Walk, Fort Lauderdale, and Miami.
              </p>
            </div>
          </div>
        </div>
        <Reviews />
        <ContactUs />
      </div>
    </Layout>
  )
}

export default about
