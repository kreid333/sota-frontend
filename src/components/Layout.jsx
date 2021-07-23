import React from "react"
import Header from "./Header/Header"
import "bootstrap/dist/css/bootstrap.min.css"
import "@fontsource/montserrat"
import "../assets/styles/global.css"
import Footer from "./Footer/Footer"

const Layout = ({ children, title }) => {
  return (
    <>
      <Header pageTitle={title} />
      <div className="wrapper">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
