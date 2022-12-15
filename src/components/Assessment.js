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
            <section className="selection-section">
                <section className="all-assessment-section">
                    <div className="sort-text">I want to learn...</div>
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
                                <h3>Mono</h3>
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
                                <h3>Split</h3>
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
                                <h3>Canada</h3>    
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
                                <h3>All Codes</h3>       
                                </button>
                        </Link>
                    </section>    
                </section>
                <div className="box-delivery-div">
                    <img className="box-delivery" src={DeliveryBoxOne}/> 
                </div>
            </section> 
        : null }
        <section className="start-button-section">
            {!startButton ? 
                <section>
                    <div className="sort-text">Let's get started</div>
                </section> : null} 

            {monoSelect ? 
                <Link to='/assessment-mono-codes'>
                    <button className="start-test">START THE TEST</button>  
                </Link> : null}
            {splitSelect ? 
                <Link to='/assessment-split-codes'>
                    <button className="start-test">START THE TEST</button>  
                </Link> : null}
            {canSelect ? 
                <Link to='/assessment-can-codes'>
                    <button className="start-test">START THE TEST</button>  
                </Link> : null}
            {allSelect ? 
                <Link to='/assessment-all-codes'>
                    <button className="start-test">START THE TEST</button>  
                </Link> : null}         
        </section>
        {!startButton ? 
        <div className="box-delivery-div-two">
            <img className="box-delivery-two" src={DeliveryBoxTwo}/> 
        </div> : null }
    </section>
  )
}

export default Assesment;
