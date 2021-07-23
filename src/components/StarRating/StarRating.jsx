import React, { useState } from "react"
import "./StarRating.css"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const StarRating = ({settingRating, rating}) => {
  // const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => {
                settingRating(ratingValue)
              }}
            />
            {/* if the rating of the star is less than the rating set by the user, make all values less than the user rating gold */}
            <FontAwesomeIcon
              className="star"
              icon={faStar}
              size="2x"
              color={ratingValue <= (hover || rating) ? "gold" : "lightgrey"}
              onMouseEnter={() => {
                setHover(ratingValue)
              }}
              onMouseLeave={() => {
                setHover(null)
              }}
            />
          </label>
        )
      })}
    </div>
  )
}

export default StarRating
