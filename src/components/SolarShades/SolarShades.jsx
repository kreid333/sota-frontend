import React from "react"
import IMG from "../../assets/images/gallery/solarshades/IMG_5186.jpg"
import IMG1 from "../../assets/images/gallery/solarshades/IMG_5187.jpg"
import IMG3 from "../../assets/images/gallery/solarshades/IMG_5189.jpg"
import IMG4 from "../../assets/images/gallery/solarshades/IMG_5190.jpg"
import IMG5 from "../../assets/images/gallery/solarshades/IMG_5191.jpg"
import IMG6 from "../../assets/images/gallery/solarshades/IMG_5192.jpg"
import IMG7 from "../../assets/images/gallery/solarshades/IMG_5193.jpg"
import IMG8 from "../../assets/images/gallery/solarshades/IMG_5194.jpg"

const SolarShades = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-6 mb-3 img-div">
          <img className="w-100 h-100 gallery-img" src={IMG} alt="Solar Shades"/>
        </div>
        <div className="col-sm-6 mb-3 img-div">
          <img className="w-100 h-100 gallery-img" src={IMG1} alt="Solar Shades" />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 mb-3 img-div">
          <img className="w-100 h-100 gallery-img" src={IMG3} alt="Solar Shades" />
        </div>
        <div className="col-sm-6 mb-3 img-div">
          <img className="w-100 h-100 gallery-img" src={IMG4} alt="Solar Shades" />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 mb-3 img-div">
          <img className="w-100 h-100 gallery-img" src={IMG5} alt="Solar Shades" />
        </div>
        <div className="col-sm-6 mb-3 img-div">
          <img className="w-100 h-100 gallery-img" src={IMG6} alt="Solar Shades" />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 mb-3 img-div">
          <img className="w-100 h-100 gallery-img" src={IMG7} alt="Solar Shades" />
        </div>
        <div className="col-sm-6 mb-3 img-div">
          <img className="w-100 h-100 gallery-img" src={IMG8} alt="Solar Shades" />
        </div>
      </div>
    </>
  )
}

export default SolarShades
