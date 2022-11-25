import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

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
            <section>
                <Link to='/assesment'>
                    <button onClick={() => {
                                    setStartButton(false) 
                                    setSelectCategory(false)
                                    setMonoSelect(true)
                                }
                            } 
                        className="mono-codes button-link">MONO CODES</button>
                </Link>
                <Link to='/assesment'>
                    <button onClick={() => {
                                    setStartButton(false)
                                    setSelectCategory(false)
                                    setSplitSelect(true)
                                }
                            } 
                        className="split-codes button-link">SPLIT CODES</button>
                </Link>
                <Link to='/assesment'>
                    <button onClick={() => {
                                    setStartButton(false)
                                    setSelectCategory(false)
                                    setCanSelect(true)
                                }
                            } 
                        className="can-codes button-link">CAN CODES</button>
                </Link>
                <Link to='/assesment'>
                    <button onClick={() => {
                                    setStartButton(false)
                                    setSelectCategory(false)
                                    setAllSelect(true)
                                }
                            } 
                        className="all-codes button-link">ALL CODES</button>
                </Link>
            </section> 
        : null }
        {!startButton ? 
            <section>
                <div>Let's get started</div>
            </section> : null} 

        {monoSelect ? 
            <Link to='/assesment-mono-codes'>
                <button>START THE TEST</button>  
            </Link> : null}
        {splitSelect ? 
            <Link to='/assesment-split-codes'>
                <button>START THE TEST</button>  
            </Link> : null}
        {canSelect ? 
            <Link to='/assesment-can-codes'>
                <button>START THE TEST</button>  
            </Link> : null}
        {allSelect ? 
            <Link to='/assesment-split-codes'>
                <button>START THE TEST</button>  
            </Link> : null}         
    </section>
  )
}

export default Assesment;
