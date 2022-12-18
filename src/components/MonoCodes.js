import React from 'react'
import { useState, useEffect } from 'react'
import ExitModal from './ExitModal'
import RandomColors from './RandomColors'
import Spinner from './Spinner'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const MonoCodes = ({ monoCodesData }) => {
    const [randomizedMonoCodesObject, setRandomizedMonoCodesObject] = useState(null)
    const [updateStreaks, setUpdateStreaks] = useState(0)
    const [previousColor, setPreviousColor] = useState(null)
    const [showExitModal, setShowExitModal] = useState(false);
    const [loading, setLoading] = useState(false)

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
        setLoading(true)
          setTimeout(() => {
            setLoading(false)
    
          }, 6000)
        randomCodeGenerator(monoCodesData)
    }, [])

    

    return (
        <section>
            <section className="codes-wrapper">
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
                }}
                  className="testing-section-wrapper">
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
                {randomizedMonoCodesObject ? 
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
                }}
                className="testing-section">
                    <section>
                        <h3 className="question">Where would you place a package with this code?</h3>
                    </section>
                    <section className="code-section">
                        <div className="code">{randomizedMonoCodesObject[0].state_postal}</div>
                        <div className="code">{randomizedMonoCodesObject[0].code}</div>
                    </section> 
                    <section>
                        <RandomColors color={randomizedMonoCodesObject[0].color} increaseStreaks={increaseStreaks} nextQuestion={nextQuestion}/>
            </section>
            </motion.section>
                : null }
            </motion.section>}
        </section>
    </section>
    )
}

export default MonoCodes;
