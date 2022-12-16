import React from 'react'
import { useState, useEffect } from 'react'
import ExitModal from './ExitModal'
import RandomColors from './RandomColors'
import Spinner from './Spinner'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const SplitCodes = ({ splitCodesData }) => {
    const [randomizedSplitCodesObject, setRandomizedSplitCodesObject] = useState(null)
    const [updateStreaks, setUpdateStreaks] = useState(0)
    const [previousColor, setPreviousColor] = useState(null)
    const [showExitModal, setShowExitModal] = useState(false)
    const [loading, setLoading] = useState(false)

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
    }

    useEffect(() => {
        setLoading(true)
          setTimeout(() => {
            setLoading(false)
    
          }, 6000)
        randomCodeGenerator(splitCodesData)
    }, [])

    return (
        <section>
            <section>
                {loading ? <Spinner /> : 
                <motion.section 
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
                }} className="testing-section-wrapper">
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
                <motion.section 
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
                }} className="testing-section">
                    <section>
                        <h3 className="question">Where would you place a package with this code?</h3>
                    </section>
                    <section className="code-section">
                        <div className="code one">{randomizedSplitCodesObject[0].state_postal}</div>
                        <div className="code">{randomizedSplitCodesObject[0].code}</div>
                    </section> 
                    <section>
                        <RandomColors color={randomizedSplitCodesObject[0].color} increaseStreaks={increaseStreaks} nextQuestion={nextQuestion}/>
                </section>
            </motion.section>
                : null }
            </motion.section>}
            </section>
    </section>
    )
}

export default SplitCodes;
