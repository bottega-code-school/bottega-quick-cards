import React from "react"
import ReactModal from "react-modal"

const QuestionModal = props => {
  return (
    <ReactModal
      isOpen={props.modalIsOpen}
      onRequestClose={props.handleClose}
      style={customStyles}
    >
      <div className="modal">
        <h3>Supervised</h3>
        <div>Able to complete tasks with adequate supervision and help</div>
        <h3>Outcome Based</h3>
        <div>Able to complete difficult tasks when assigned and given time</div>
        <h3>Proactive</h3>
        <div>
          Able to actively look for difficult problems and tasks to complete
        </div>
      </div>
    </ReactModal>
  )
}

const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%",
    width: "300px",
    height: "300px",
    fontFamily: "Roboto Condensed, sans-serif"
  }
}

export default QuestionModal
