import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ExitModal from './ExitModal'
import RandomColors from './RandomColors'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFire } from '@fortawesome/free-solid-svg-icons'

const SplitCodes = ({ splitCodesData }) => {
    const [randomizedSplitCodesObject, setRandomizedSplitCodesObject] = useState(null)
    const [updateStreaks, setUpdateStreaks] = useState(0)
    const [previousColor, setPreviousColor] = useState(null)
    const [showExitModal, setShowExitModal] = useState(false);

    const randomCodeGenerator = (data) => {
        let randomizeArray = data[Math.floor(Math.random() * data.length)];
        if (randomizeArray['color'] !== previousColor) {
            setRandomizedSplitCodesObject([randomizeArray])
            setPreviousColor(randomizeArray['color'])
        } else {
            nextQuestion()
        }
    }

    const nextQuestion = () => {
        randomCodeGenerator(splitCodesData)
    }

    const increaseStreaks = () => {
        setUpdateStreaks(updateStreaks + 1)
    }

    const openExitModal = () => {
        setShowExitModal(true);
      };


    useEffect(() => {
        randomCodeGenerator(splitCodesData)
    }, [])

    return (
        <section className="testing-section-wrapper">
            <div className="top-div">
                <div>
                    <button className="exit-button-assessment" onClick={openExitModal}>X</button>
                        {showExitModal ? <ExitModal setShowExitModal={setShowExitModal} /> : null}
                </div>
            <div className="streaks-div">
                <FontAwesomeIcon className="faFire icon" icon={faFire} />
                <div clasName="streaks-number">{updateStreaks}</div>
            </div>    
            </div>
            {randomizedSplitCodesObject ? 
            <section className="testing-section">
                <section>
                    <h3 className="question">Where would you place a package with this code?</h3>
                </section>
                <section className="code-section">
                    <div className="code">{randomizedSplitCodesObject[0].state_postal}</div>
                    <div className="code">{randomizedSplitCodesObject[0].code}</div>
                </section> 
                <section>
                    <RandomColors color={randomizedSplitCodesObject[0].color} increaseStreaks={increaseStreaks} nextQuestion={nextQuestion}/>
            </section>
        </section>
            : <div>No</div> }
        </section>
    )
}

export default SplitCodes;
