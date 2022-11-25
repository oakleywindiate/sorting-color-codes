import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import RandomColors from './RandomColors'

const AllCodes = ({ canCodesData, monoCodesData, splitCodesData }) => {
    const [randomizedAllCodesObject, setRandomizedAllCodesObject] = useState(null)
    const [combinedData, setCombinedData] = useState(null)

    const randomCodeGenerator = (data) => {
        let randomizeArray = data[Math.floor(Math.random() * data.length)];
        console.log(randomizeArray)
        setRandomizedAllCodesObject([randomizeArray])
    }

    const nextQuestion = () => {
        randomCodeGenerator(combinedData)
    }


    useEffect(() => {
        let amalgamatedData = canCodesData.concat(monoCodesData, splitCodesData)
        randomCodeGenerator(amalgamatedData)
        setCombinedData(amalgamatedData)
    }, [])

    return (
        <section>
            {randomizedAllCodesObject ? 
                <section>
                    <div>{randomizedAllCodesObject[0].state_postal}</div>
                    <div>{randomizedAllCodesObject[0].color}</div>
                    <div>{randomizedAllCodesObject[0].code}</div>
                    <RandomColors color={randomizedAllCodesObject[0].color}/>
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

export default AllCodes;