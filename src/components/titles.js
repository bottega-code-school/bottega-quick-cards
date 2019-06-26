import React from "react";
import AccreditorBullet from "./accreditor-bullet";

const Titles = () => {
  return (
    <div className="titles">
      <div>
        <img src="/assets/bottega-descriptive-logo.jpg" />
      </div>
      <div className="certification-list">
        <h3>Production ready engineers, Certified by:</h3>
        <div>
          <AccreditorBullet
            title="The American Council on Education (ACE)"
            logo="assets/ACE_logo.png"
          />
          <AccreditorBullet
            title="AdvancEd / Northwest Accreditation Commission (NWAC)"
            logo="/assets/AE_logo.jpg"
          />
          <AccreditorBullet
            title="Distance Education Accrediting Commission (DEAC) - DOE Approved"
            logo="/assets/DEAC_logo.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Titles;
