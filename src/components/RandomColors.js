import React from 'react'
import { useState, useEffect } from 'react'
import Correct from './Correct'
import Incorrect from './Incorrect'

const RandomColors = ({ color, increaseStreaks, nextQuestion }) => {
    const [randomColors, setRandomColors] = useState(null)
    const [clickedColor, setClickedColor] = useState(null)
    const [correctAnswer, setCorrectAnswer] = useState(false)
    const [incorrectAnswer, setIncorrectAnswer] = useState(false)

    // MODAL STATE MANAGEMENT
    const [showCorrectModal, setShowCorrectModal] = useState(false);
    const [showIncorrectModal, setShowIncorrectModal] = useState(false);


    const randomColorGenerator = () => {
        const colors = [
            "GREY", 
            "TAN", 
            "ORANGE", 
            "PINK", 
            "BLUE", 
            "BROWN", 
            "PURPLE", 
            "YELLOW", 
            "GREEN", 
            "BLACK", 
            "RED", 
            "WHITE" ]

        let randomizeColorArray = colors.sort(() => .5 - Math.random()).slice(0, 3);
    
        compareColors(randomizeColorArray)
    }

    const compareColors = (array) => {
        let createArray = array.reduce((acc, item) => {
            if (item !== color) {
                acc.push(item)
            }
            return acc
        }, [])
        let combine = createArray.concat(color).sort((a,b) => 0.5 - Math.random());
        flattenArray(combine)
    }

    const flattenArray = (array) => {
        let formatColors = array.reduce((acc, item) => {
            acc.push(item)
            return acc
        }, [])

        setRandomColors(formatColors)
    }

    const checkCorrect = (event) => {
        let compareClickedColor = event.target.id
        if (compareClickedColor === color) {
            setClickedColor(compareClickedColor)
            setCorrectAnswer(true)
            increaseStreaks()
        } else {
            setClickedColor(compareClickedColor)
            setIncorrectAnswer(true)
        }
    }

    useEffect(() => {
        randomColorGenerator()
        setClickedColor(null)
        setCorrectAnswer(false)
        setIncorrectAnswer(false)
    }, [color])
    

  return (
    <section>
        <section className="random-color-wrapper">
            {randomColors && !clickedColor ?
                <section className="random-color">
                    {randomColors.map((item, index) => {
                    return <button className="color-button" id={item} key={index} onClick={checkCorrect}>{item}</button>
                    })}
                </section>
            : null}
            {randomColors && clickedColor ?
                <section className="random-color">
                    {randomColors.map((item, index) => {
                    return <button className="color-button" id={item} key={index} disabled={true}>{item}</button>
                    })}
                </section>
            : null}
        </section>
        <section>
            {correctAnswer ? <Correct setShowCorrectModal={setShowCorrectModal} nextQuestion={nextQuestion}/> : null}
            {incorrectAnswer ? <Incorrect setShowIncorrectModal={setShowIncorrectModal} nextQuestion={nextQuestion}/> : null}
        </section>
    </section>
  )
}

export default RandomColors;
