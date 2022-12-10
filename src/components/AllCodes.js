import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ExitModal from './ExitModal'
import RandomColors from './RandomColors'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFire } from '@fortawesome/free-solid-svg-icons'
import './Codes.css';


const AllCodes = ({ canCodesData, monoCodesData, splitCodesData }) => {
    const [randomizedAllCodesObject, setRandomizedAllCodesObject] = useState(null)
    const [combinedData, setCombinedData] = useState(null)
    const [updateStreaks, setUpdateStreaks] = useState(0)
    const [previousColor, setPreviousColor] = useState(null)
    const [showExitModal, setShowExitModal] = useState(false);
    

    const randomCodeGenerator = (data) => {
        let randomizeArray = data[Math.floor(Math.random() * data.length)];
        if (randomizeArray['color'] !== previousColor) {
            setRandomizedAllCodesObject([randomizeArray])
            setPreviousColor(randomizeArray['color'])
        } else {
            nextQuestion()
        }
    }

    const nextQuestion = () => {
        randomCodeGenerator(combinedData)
    }

    const increaseStreaks = () => {
        setUpdateStreaks(updateStreaks + 1)
    }

    const openExitModal = () => {
        setShowExitModal(true);
      };

    useEffect(() => {
        let amalgamatedData = canCodesData.concat(monoCodesData, splitCodesData)
        randomCodeGenerator(amalgamatedData)
        setCombinedData(amalgamatedData)
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
            {randomizedAllCodesObject ? 
            <section className="testing-section">
                <section>
                <h3 className="question">Where would you place a package with this code?</h3>
                </section>
                <section className="code-section">
                    <div className="code">{randomizedAllCodesObject[0].state_postal}</div>
                    <div className="code">{randomizedAllCodesObject[0].code}</div>
                </section> 
                <section>
                    <RandomColors color={randomizedAllCodesObject[0].color} increaseStreaks={increaseStreaks} nextQuestion={nextQuestion}/>
                </section>
            </section>    
            : <div>No</div> }
        </section>
    )
}

export default AllCodes;