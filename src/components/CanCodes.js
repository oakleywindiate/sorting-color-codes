import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ExitModal from './ExitModal'
import RandomColors from './RandomColors'

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
        <section>
            <div>
                <button onClick={openExitModal}>EXIT</button>
                    {showExitModal ? <ExitModal setShowExitModal={setShowExitModal} /> : null}
            </div>
            <div>
                <div>{updateStreaks}</div>
            </div>
            {randomizedCanCodesObject ? 
                <section>
                    <div>{randomizedCanCodesObject[0].state_postal}</div>
                    <div>{randomizedCanCodesObject[0].color}</div>
                    <div>{randomizedCanCodesObject[0].code}</div>
                    <RandomColors color={randomizedCanCodesObject[0].color} increaseStreaks={increaseStreaks} nextQuestion={nextQuestion}/>
                </section> 
            : <div>No</div> }
        </section>
    )
}

export default CanCodes;
