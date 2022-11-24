import React from 'react'
import { useState, useEffect } from 'react'

import Correct from './Correct'
import Incorrect from './Incorrect'

const Button = ({ item, index, color }) => {
    const [clickedColor, setClickedColor] = useState(null)
    const [correctAnswer, setCorrectAnswer] = useState(false)
    const [incorrectAnswer, setIncorrectAnswer] = useState(false)

    const checkCorrect = () => {
        if (color === clickedColor && clickedColor) {
            setCorrectAnswer(true)
        }
    }

    const checkIncorrect = () => {
        if (color !== clickedColor && clickedColor) {
            setIncorrectAnswer(true)
        }
    }

    useEffect(() => {
      checkCorrect()
      checkIncorrect()
    }, [clickedColor])

    useEffect(() => {
        setClickedColor(null)
        setCorrectAnswer(null)
        setIncorrectAnswer(null)
        checkCorrect()
        checkIncorrect()
      }, [color])
    
    

  return (
    <section>
        <section>
            <div key={index}>
                <button className={item} onClick={() =>  {
                    setClickedColor(item)

                    }
                }>{item}</button>
            </div>
        </section>
        <div>
            {clickedColor && correctAnswer ? <Correct /> : null}
        </div>
        <div>
            {clickedColor && incorrectAnswer ? <Incorrect /> : null}
        </div>
    </section>
  )
}

export default Button;
