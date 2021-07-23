import { Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import SolarShades from "../../components/SolarShades/SolarShades"

const solarshades = () => {
  return (
    <Layout title="Solar Shades">
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1 className="m-3" style={{ padding: "20px" }}>
              Solar Shades
            </h1>
          </div>
        </div>
        <SolarShades />
        <Link to="/gallery">
          <button type="submit" className="global-btn m-5">
            Go back
          </button>
        </Link>
      </div>
    </Layout>
  )
}

export default solarshades
