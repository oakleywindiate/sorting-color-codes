import React, { useRef } from "react";
import ReactDom from "react-dom";
import './Modal.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { motion } from "framer-motion";

const Correct = ({ setShowCorrectModal, nextQuestion}) => {
  const modalRef = useRef();

  const correctPrompts = [
    "Great!",
    "Awesome!",
    "Good job!",
    "Correct!",
    "Nice!",
    "Excellent!"
  ]

  let randomCorrect = correctPrompts.sort(() => .5 - Math.random()).slice(0, 1);

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
    className="container-correct .modal-fade" ref={modalRef}>
      <div className="modal-correct">
        <div className="correct-left">
          <FontAwesomeIcon className="faCircleCheck icon" icon={faCircleCheck} />
          <div className="correct-text-div">
            <h2 className="correct-text">{randomCorrect}</h2>
          </div>
        </div>
        <div className="correct-right">
          <button className="next-button-correct" onClick={() => {
              setShowCorrectModal(false)
              nextQuestion()
            }
          }>NEXT</button>
        </div>
      </div>  
    </motion.div>,
    document.getElementById("portal")
  );
};

export default Correct;