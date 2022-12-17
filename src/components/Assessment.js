import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

// -------- CSS IMPORTS -------- //
import DeliveryBoxOne from '../deliveryOne.png' 
import DeliveryBoxTwo from '../deliveryTwo.png' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './Assessment.css'
import { faArrowsSplitUpAndLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowTurnUp } from '@fortawesome/free-solid-svg-icons'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'


const Assesment = () => {
    const [startButton, setStartButton] = useState(true)
    const [selectCategory, setSelectCategory] = useState(true)
    const [monoSelect, setMonoSelect] = useState(false)
    const [splitSelect, setSplitSelect] = useState(false)
    const [canSelect, setCanSelect] = useState(false)
    const [allSelect, setAllSelect] = useState(false)

  return (
    <section>
        {selectCategory ?
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
            className="selection-section">
                <section className="all-assessment-section">
                    <div className="sort-text">I would like to study...</div>
                    <section className="link-section">
                        <Link to='/assessment'>
                            <button onClick={() => {
                                            setStartButton(false) 
                                            setSelectCategory(false)
                                            setMonoSelect(true)
                                        }
                                    } 
                                    className="mono-codes button-link">
                                <FontAwesomeIcon className="faArrowTurnUp icon" icon={faArrowTurnUp} />
                                <h3 className="button-font">Mono</h3>
                                </button>
                        </Link>
                        <Link to='/assessment'>
                            <button onClick={() => {
                                            setStartButton(false)
                                            setSelectCategory(false)
                                            setSplitSelect(true)
                                        }
                                    }
                                    className="split-codes button-link">
                                <FontAwesomeIcon className="faArrowsSplitUpAndLeft icon" icon={faArrowsSplitUpAndLeft} />
                                <h3 className="button-font">Split</h3>
                            </button>
                        </Link>
                        <Link to='/assessment'>
                            <button onClick={() => {
                                            setStartButton(false)
                                            setSelectCategory(false)
                                            setCanSelect(true)
                                        }
                                    } 
                                    className="can-codes button-link">
                                <FontAwesomeIcon className="faEarthAmericas icon" icon={faEarthAmericas} />
                                <h3 className="button-font">Canada</h3>    
                                </button>
                        </Link>
                        <Link to='/assessment'>
                            <button onClick={() => {
                                            setStartButton(false)
                                            setSelectCategory(false)
                                            setAllSelect(true)
                                        }
                                    } 
                                    className="all-codes button-link">
                                <FontAwesomeIcon className="faMailBulk icon" icon={faMailBulk} />
                                <h3 className="button-font">Combined</h3>       
                                </button>
                        </Link>
                    </section>    
                </section>
                <motion.div 
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    duration: 2
                }}
                exit={{
                    opacity: 0
                }}
                className="box-delivery-div">
                    <img className="box-delivery" src={DeliveryBoxOne} alt="pixel art of a person delivering mail"/> 
                </motion.div>
            </motion.section> 
        : null }
        <section className="start-button-section">
            {!startButton ? 
                <motion.section
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    duration: .75
                }}
                exit={{
                    opacity: 0
                }}>
                    <div className="sort-text">Press start to begin</div>
                </motion.section> : null} 

            {monoSelect ? 
                <Link to='/assessment-mono-codes'>
                    <button 
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    exit={{
                        opacity: 0
                    }}
                    className="start-test">START</button>  
                </Link> : null}
            {splitSelect ? 
                <Link to='/assessment-split-codes'>
                    <button 
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    exit={{
                        opacity: 0
                    }}
                    className="start-test">START</button>  
                </Link> : null}
            {canSelect ? 
                <Link to='/assessment-can-codes'>
                    <button 
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    exit={{
                        opacity: 0
                    }}
                    className="start-test">START</button>  
                </Link> : null}
            {allSelect ? 
                <Link to='/assessment-all-codes'>
                    <button 
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    exit={{
                        opacity: 0
                    }}
                    className="start-test">START</button>  
                </Link> : null}         
        </section>
        {!startButton ? 
        <motion.div 
        initial={{
            opacity: 0
        }}
        animate={{
            opacity: 1
        }}
        transition={{
            duration: 2
        }}
        exit={{
            opacity: 0
        }}className="box-delivery-div-two">
            <img className="box-delivery-two" src={DeliveryBoxTwo} alt="pixel art of a person carrying a box"/> 
        </motion.div> : null }
    </section>
  )
}

export default Assesment;
