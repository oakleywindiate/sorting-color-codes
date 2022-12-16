import React, { useRef } from "react";
import ReactDom from "react-dom";
import './Modal.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { motion } from "framer-motion";

const Incorrect = ({ setShowIncorrectModal, nextQuestion, color }) => {
  const modalRef = useRef();

  return ReactDom.createPortal(
    <motion.div 
    initial={{
      opacity: 0
    }}
    animate={{
        opacity: 1
    }}
    transition={{
        duration: .5
    }}
    exit={{
        opacity: 0
    }}
    className="container-incorrect" ref={modalRef}>
      <div className="modal-incorrect">
        <div className="incorrect-left">
          <FontAwesomeIcon className="faCircleXmark icon" icon={faCircleXmark} />
          <div className="incorrect-text-div">
            <h2 className="incorrect-text">Correct Solution:</h2>
            <h3 className="incorrect-color">{color}</h3>
          </div>
        </div>
        <div className="incorrect-right">
          <button className="next-button-incorrect" onClick={() => {
              setShowIncorrectModal(false)
              nextQuestion()
            }
          }>NEXT</button>
        </div>
      </div>
    </motion.div>,
    document.getElementById("portal")
  );
};

export default Incorrect;
