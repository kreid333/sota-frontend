import React, { useEffect, useState } from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { Modal } from "react-bootstrap"
import { Button } from "react-bootstrap"
import StarRating from "../components/StarRating/StarRating"
import "./styles/testimonials.css"
import ReviewCard from "../components/ReviewCard/ReviewCard"
import ContactUs from "../components/ContactUs/ContactUs"
import userReviews from "../data/reviews.json"
import axios from "axios"

const Testimonials = () => {
  const [savedReviews, setSavedReviews] = useState([])
  const [show, setShow] = useState(false)
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [rating, setRating] = useState(null)
  const [review, setReview] = useState(null)

  useEffect(() => {
    axios
      .get("https://sota-api.herokuapp.com/api/getReviews")
      .then(response => {
        setSavedReviews(response.data)
      })
      .catch(err => {
        if (err) {
          throw err
        }
      })
  }, [])

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const data = {
    name,
    email,
    rating,
    review,
  }

  const handleSubmit = () => {
    if (name !== null && email !== null && rating !== null && review !== null) {
      axios
        .post("https://sota-api.herokuapp.com/api/sendReview", data)
        .then(response => {
          console.log(response)
          setName(null)
          setEmail(null)
          setRating(null)
          setReview(null)
          handleClose()
          window.location.reload()
        })
        .catch(err => {
          if (err) {
            throw err
          }
        })
    } else {
      alert("You are missing information! Please try again.")
    }
  }
  return (
    <Layout title="Testimonials">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Submit your review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <form>
              <div className="row">
                <div className="col-sm-12 mb-3">
                  <label className="d-block" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => {
                      setName(e.target.value)
                    }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 mb-3">
                  <label className="d-block" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={e => {
                      setEmail(e.target.value)
                    }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 mb-3">
                  <label className="d-block" htmlFor="rating">
                    Rating
                  </label>
                  <StarRating settingRating={setRating} rating={rating} />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 mb-3">
                  <label className="d-block" htmlFor="review">
                    Review
                  </label>
                  <textarea
                    name="review"
                    cols="30"
                    rows="5"
                    value={review}
                    onChange={e => {
                      setReview(e.target.value)
                    }}
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1 className="m-3" style={{ padding: "20px" }}>
              Testimonals
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 text-center">
            <StaticImage className="testimonials-logo" src="../assets/images/logo/SOTA.png" alt="SOTA Window Coverings"/>
          </div>
          <div className="col-sm-6 text-center my-auto pt-4 pb-4">
            {[...Array(5)].map(() => (
              <FontAwesomeIcon icon={faStar} size="4x" color="gold" />
            ))}
            <br />
            <br />
            <span className="rating d-block p-3 mx-auto">5/5</span>
          </div>
        </div>
        <br />
        <div className="row mb-5">
          <div className="col-sm-12 text-center">
            <button type="submit" className="button review-btn" onClick={handleShow}>Submit a review</button>
          </div>
        </div>
        <div>
          {/* MAPPING REVIEWS FROM JSON DATA  */}
          {userReviews.map(review => (
            <ReviewCard
              name={review.name}
              text={review.review}
              rating={review.rating}
            />
          ))}

          {/* MAPPING REVIEWS FROM DATABASE  */}
          {savedReviews.length > 0 &&
            savedReviews.map(review => (
              <ReviewCard
                rating={review.rating}
                text={review.review}
                name={review.name}
              />
            ))}
        </div>
        <ContactUs />
      </div>
    </Layout>
  )
}

export default Testimonials
