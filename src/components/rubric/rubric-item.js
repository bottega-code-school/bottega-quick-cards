import React from "react"

const RubricItem = props => {
  return (
    <li className="rubric-item">
      <span className="rubric-item-title">{props.title}</span>
      <span className="divider">-</span>
      <span>{props.description}</span>
    </li>
  )
}

export default RubricItem
