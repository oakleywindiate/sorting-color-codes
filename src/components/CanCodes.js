import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ExitModal from './ExitModal'
import RandomColors from './RandomColors'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFire } from '@fortawesome/free-solid-svg-icons'
import './Codes.css';

const CanCodes = ({ canCodesData }) => {
    const [randomizedCanCodesObject, setRandomizedCanCodesObject] = useState(null)
    const [updateStreaks, setUpdateStreaks] = useState(0)
    const [previousColor, setPreviousColor] = useState(null)
    const [showExitModal, setShowExitModal] = useState(false);

    const randomCodeGenerator = (data) => {
        let randomizeArray = data[Math.floor(Math.random() * data.length)];
            if (randomizeArray['color'] !== previousColor) {
                setRandomizedCanCodesObject([randomizeArray])
                setPreviousColor(randomizeArray['color'])
            } else {
                nextQuestion()
            }
    }

    const nextQuestion = () => {
        randomCodeGenerator(canCodesData)
    }

    const increaseStreaks = () => {
        setUpdateStreaks(updateStreaks + 1)
    }

    const openExitModal = () => {
        setShowExitModal(true);
      };


    useEffect(() => {
        randomCodeGenerator(canCodesData)
    }, [])

    return (
        <section className="testing-section-wrapper">
            <div>
                <button onClick={openExitModal}>EXIT</button>
                    {showExitModal ? <ExitModal setShowExitModal={setShowExitModal} /> : null}
            </div>
            <div>
            <FontAwesomeIcon className="faFire icon" icon={faFire} />
                <div>{updateStreaks}</div>
            </div>
            {randomizedCanCodesObject ? 
            <section className="testing-section">
                <section>
                <h3 className="question">What color does this code belong to?</h3>
                </section>
                <section className="code-section">
                    <div className="code">{randomizedCanCodesObject[0].state_postal}</div>
                    <div className="code">{randomizedCanCodesObject[0].code}</div>
                </section> 
                <section>
                    <RandomColors color={randomizedCanCodesObject[0].color} increaseStreaks={increaseStreaks} nextQuestion={nextQuestion}/>
                </section>
            </section>    
            : <div>No</div> }
        </section>
    )
}

export default CanCodes;
