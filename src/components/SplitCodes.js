import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ExitModal from './ExitModal'
import RandomColors from './RandomColors'

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
        <section>
            <div>
                <button onClick={openExitModal}>EXIT</button>
                    {showExitModal ? <ExitModal setShowExitModal={setShowExitModal} /> : null}
            </div>
            <div>
                <div>{updateStreaks}</div>
            </div>
            {randomizedSplitCodesObject ? 
                <section>
                    <div>{randomizedSplitCodesObject[0].state_postal}</div>
                    <div>{randomizedSplitCodesObject[0].color}</div>
                    <div>{randomizedSplitCodesObject[0].code}</div>
                    <RandomColors color={randomizedSplitCodesObject[0].color} increaseStreaks={increaseStreaks} nextQuestion={nextQuestion}/>
                </section> 
            : <div>No</div> }
        </section>
    )
}

export default SplitCodes;
