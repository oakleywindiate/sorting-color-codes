import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import RandomColors from './RandomColors'

const MonoCodes = ({ monoCodesData }) => {
    const [randomizedMonoCodesObject, setRandomizedMonoCodesObject] = useState(null)

    const randomCodeGenerator = (data) => {
        let randomizeArray = data[Math.floor(Math.random() * data.length)];
        setRandomizedMonoCodesObject([randomizeArray])
    }

    const nextQuestion = () => {
        randomCodeGenerator(monoCodesData)
    }


    useEffect(() => {
        randomCodeGenerator(monoCodesData)
    }, [])
    

    return (
        <section>
            {randomizedMonoCodesObject ? 
            <section>
                <div>{randomizedMonoCodesObject[0].state_postal}</div>
                <div>{randomizedMonoCodesObject[0].color}</div>
                <RandomColors color={randomizedMonoCodesObject[0].color}/>
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

export default MonoCodes;
