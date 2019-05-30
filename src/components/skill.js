import React from "react";

const Skill = props => {
  return (
    <div className="skill-wrapper">
      <div className="skill-bar-wrapper">
        <div
          className="skill-bar"
          style={{
            width: `${props.width * 20}%`
          }}
        />
        <span className="skill">{props.skill}</span>
      </div>
    </div>
  );
};

export default Skill;
