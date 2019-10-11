import React from "react"
import AccreditorBullet from "./accreditor-bullet"

const Titles = () => {
  return (
    <div className="titles">
      <div className="certification-list">
        <h2>Production ready engineers, Certified by:</h2>
        <div>
          <AccreditorBullet
            title="The American Council on Education (ACE)"
            logo="assets/ACE_logo.png"
          />
          <AccreditorBullet
            title="AdvancEd / Northwest Accreditation Commission (NWAC)"
            logo="/assets/AE_logo.jpg"
          />
        </div>
      </div>
    </div>
  )
}

export default Titles
