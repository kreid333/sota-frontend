import { Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import PlantationShutters from "../../components/PlantationShutters/PlantationShutters"

const plantationshutters = () => {
  return (
    <Layout title="Plantation Shutters">
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1 className="m-3" style={{ padding: "20px" }}>
              Plantation Shutters
            </h1>
          </div>
        </div>
        <PlantationShutters />
        <Link to="/gallery">
          <button type="submit" className="global-btn m-5">
            Go back
          </button>
        </Link>
      </div>
    </Layout>
  )
}

export default plantationshutters
