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
        <h2>Are you sure you want to quit?</h2>
        <div>
          <button onClick={() => setShowExitModal(false)}>STAY</button>
        <Link to='/home'>
            <button>QUIT</button>
        </Link>
      </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default ExitModal;
