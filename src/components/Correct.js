import React, { useRef } from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
import './Modal.css';

const Correct = ({ setShowCorrectModal, nextQuestion}) => {
  const modalRef = useRef();

  return ReactDom.createPortal(
    <div className="container-correct" ref={modalRef}>
      <div className="modal-correct">
        <h2>CORRECT</h2>
        <button className="next-button" onClick={() => {
            setShowCorrectModal(false)
            nextQuestion()
          }
        }>CONTINUE</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Correct;