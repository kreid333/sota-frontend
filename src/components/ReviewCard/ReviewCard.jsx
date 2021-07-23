import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import "./ReviewCard.css"

const ReviewCard = ({ rating, text, name }) => {
  return (
    <div className="mb-4 w-100">
      <div className="review-card shadow">
        <div className="text-center p-2">
          {/* MAPPING AMOUNT OF STARS THAT THE USER SPECIFIES FOR THE REVIEW */}
          {[...Array(rating)].map(() => (
            <FontAwesomeIcon icon={faStar} size="2x" color="gold" />
          ))}
        </div>
        <q className="m-2 text-center"><i>{text}</i></q>
        <div className="text-right">
          <span>- {name}</span>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
