import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"
import { Helmet } from "react-helmet"
import "./Header.css"

const Header = ({ pageTitle }) => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="SOTA Window Coverings Delray Beach Florida"
        ></meta>
        <title>{pageTitle}</title>
      </Helmet>
      <Navbar
        collapseOnSelect
        expand="xl"
        fixed="top"
        className="shadow-sm navigation"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav mx-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/testimonials" className="nav-link">
              Testimonials
            </Link>
            <Link to="/gallery" className="nav-link">
              Gallery
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
