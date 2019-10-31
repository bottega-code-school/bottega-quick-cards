import React from "react"

const Skill = props => {
  return (
    <div className="skill-wrapper">
      <div
        className="skill-bar"
        style={{
          width: `${100 - props.width * 20}%`
        }}
      />
      <span
        className="skill"
        style={{
          width: `${props.width * 20 - 1}%`
        }}
      >
        {props.skill}
      </span>
    </div>
  )
}

export default Skill
