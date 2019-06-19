import React from "react";

const Skill = props => {
  return (
    <div className="skill-wrapper">
      <div
        className="skill-bar"
        style={{
          width: `${100 - props.width * 20}%`
        }}
      />
      <span className="skill">{props.skill}</span>
    </div>
  );
};

export default Skill;
