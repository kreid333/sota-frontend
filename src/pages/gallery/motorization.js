import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"
import video from "../../assets/videos/IMG_7710.mp4"

const motorization = () => {
  return (
    <Layout title="Motorization">
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1 className="m-3" style={{ padding: "20px" }}>
              Motorization
            </h1>
          </div>
        </div>
        <video width="100%" height="100%" controls autoPlay>
          <source src={video} type="video/mp4"></source>
        </video>
        <Link to="/gallery">
          <button type="submit" className="global-btn m-5">
            Go back
          </button>
        </Link>
      </div>
    </Layout>
  )
}

export default motorization
