import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import RandomColors from './RandomColors'

const SplitCodes = ({ splitCodesData }) => {
    const [randomizedSplitCodesObject, setRandomizedSplitCodesObject] = useState(null)

    const randomCodeGenerator = (data) => {
        let randomizeArray = data[Math.floor(Math.random() * data.length)];
        setRandomizedSplitCodesObject([randomizeArray])
    }

    const nextQuestion = () => {
        randomCodeGenerator(splitCodesData)
    }


    useEffect(() => {
        randomCodeGenerator(splitCodesData)
    }, [])

    return (
        <section>
            {randomizedSplitCodesObject ? 
                <section>
                    <div>{randomizedSplitCodesObject[0].state_postal}</div>
                    <div>{randomizedSplitCodesObject[0].color}</div>
                    <div>{randomizedSplitCodesObject[0].code}</div>
                    <RandomColors color={randomizedSplitCodesObject[0].color}/>
                </section> 
            : <div>No</div> }
            <div>
                <button onClick={() => nextQuestion()}>NEXT</button>
            </div>
            <div>
                <Link to='/home'>
                    <button>EXIT</button>
                </Link>
            </div>
        </section>
    )
}

export default SplitCodes;
