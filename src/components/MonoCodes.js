import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ExitModal from './ExitModal'
import RandomColors from './RandomColors'

const MonoCodes = ({ monoCodesData }) => {
    const [randomizedMonoCodesObject, setRandomizedMonoCodesObject] = useState(null)
    const [updateStreaks, setUpdateStreaks] = useState(0)
    const [previousColor, setPreviousColor] = useState(null)
    const [showExitModal, setShowExitModal] = useState(false);

    const randomCodeGenerator = (data) => {
        let randomizeArray = data[Math.floor(Math.random() * data.length)];
        if (randomizeArray['color'] !== previousColor) {
            setRandomizedMonoCodesObject([randomizeArray])
            setPreviousColor(randomizeArray['color'])
        } else {
            nextQuestion()
        }
    }

    const nextQuestion = () => {
        randomCodeGenerator(monoCodesData)
    }

    const increaseStreaks = () => {
        setUpdateStreaks(updateStreaks + 1)
    }

    const openExitModal = () => {
        setShowExitModal(true);
      };


    useEffect(() => {
        randomCodeGenerator(monoCodesData)
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
            {randomizedMonoCodesObject ? 
            <section>
                <div>{randomizedMonoCodesObject[0].state_postal}</div>
                <div>{randomizedMonoCodesObject[0].color}</div>
                <RandomColors color={randomizedMonoCodesObject[0].color} increaseStreaks={increaseStreaks} nextQuestion={nextQuestion}/>
            </section> 
            : <div>No</div> }
        </section>
    )
}

export default MonoCodes;
