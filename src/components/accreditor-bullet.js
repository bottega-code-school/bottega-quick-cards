import React from "react"

const AccreditorBullet = props => {
  return (
    <div className="accreditor-bullet">
      <img src={props.logo} />
      <p>{props.title}</p>
    </div>
  )
}

export default AccreditorBullet
