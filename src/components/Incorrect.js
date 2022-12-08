import React, { useRef } from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
import './Modal.css';

const Incorrect = ({ setShowIncorrectModal, nextQuestion}) => {
  const modalRef = useRef();

  return ReactDom.createPortal(
    <div className="container-incorrect" ref={modalRef}>
      <div className="modal-incorrect">
        <h2>INCORRECT</h2>
        <button className="next-button" onClick={() => {
            setShowIncorrectModal(false)
            nextQuestion()
          }
        }>CONTINUE</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Incorrect;
