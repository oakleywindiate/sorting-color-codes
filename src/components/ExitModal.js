import React, { useRef } from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
import './Modal.css';

const ExitModal = ({ setShowExitModal }) => {
  const modalRef = useRef();
  
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowExitModal(false);
    }
  }
  
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <h2 className="exit-modal-question">Are you sure you want to quit?</h2>
        <div className="exit-modal-buttons">
          <button className="exit-modal-stay" onClick={() => setShowExitModal(false)}>STAY</button>
          <Link to='/home'>
              <button className="exit-modal-go">QUIT</button>
          </Link>
      </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default ExitModal;
