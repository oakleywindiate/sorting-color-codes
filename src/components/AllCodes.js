import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ExitModal from './ExitModal'
import RandomColors from './RandomColors'

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
        <section>
            <div>
                <button onClick={openExitModal}>EXIT</button>
                    {showExitModal ? <ExitModal setShowExitModal={setShowExitModal} /> : null}
            </div>
            <div>
                <div>{updateStreaks}</div>
            </div>
            {randomizedAllCodesObject ? 
                <section>
                    <div>{randomizedAllCodesObject[0].state_postal}</div>
                    <div>{randomizedAllCodesObject[0].color}</div>
                    <div>{randomizedAllCodesObject[0].code}</div>
                    <RandomColors color={randomizedAllCodesObject[0].color} increaseStreaks={increaseStreaks} nextQuestion={nextQuestion}/>
                </section> 
            : <div>No</div> }
        </section>
    )
}

export default AllCodes;