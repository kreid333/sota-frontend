import React from "react"
import "./Reviews.css"
import { Link } from "gatsby"
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

let num = 0

const Reviews = () => {
  const clientReviews = [
    {
      text:
        "Steve and Sandy are delightful. They were professional, knowledgeable, and efficient.  I cannot image a more pleasant experience. I strongly recommend them.",
      name: "Pamela Maida",
    },
    {
      text:
        "I recently had Sota windows installed plantation shutters in my Home in Highland Beach. His job performance and professionalism was impeccable, I would certainly recommend him to my friends.",
      name: "Devon Bowie",
    },
    {
      text:
        "This was one of the most stress free experience of my life. Sota Window Coverings excelled from the measurements to installation...",
      name: "Monica Hunter",
    },
  ]

  return (
    <>
      <div className="section-header">Customer Reviews</div>
      <div className="row">
        {clientReviews.map(review => (
          <div className="col-lg-4 p-2">
            <div className="client-card">
              <q>
                <i>{review.text}</i>
              </q>
              <div>
                <span>- {review.name}</span>
              </div>
            </div>
          </div>
        ))}
        <div className="w-100 text-center mt-3 black-text">
          <Link to="/testimonials" className="reviews-link">
            See All Reviews <FontAwesomeIcon icon={faChevronCircleRight} />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Reviews
