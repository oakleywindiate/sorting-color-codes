import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import RandomColors from './RandomColors'

const CanCodes = ({ canCodesData }) => {
    const [randomizedCanCodesObject, setRandomizedCanCodesObject] = useState(null)

    const randomCodeGenerator = (data) => {
        let randomizeArray = data[Math.floor(Math.random() * data.length)];
        setRandomizedCanCodesObject([randomizeArray])
    }

    const nextQuestion = () => {
        randomCodeGenerator(canCodesData)
    }


    useEffect(() => {
        randomCodeGenerator(canCodesData)
    }, [])

    return (
        <section>
            {randomizedCanCodesObject ? 
                <section>
                    <div>{randomizedCanCodesObject[0].state_postal}</div>
                    <div>{randomizedCanCodesObject[0].color}</div>
                    <div>{randomizedCanCodesObject[0].code}</div>
                    <RandomColors color={randomizedCanCodesObject[0].color}/>
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

export default CanCodes;
