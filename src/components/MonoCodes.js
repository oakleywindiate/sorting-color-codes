import React from 'react'
import { useState, useEffect } from 'react'
import RandomColors from './RandomColors'

const MonoCodes = ({ monoCodesData }) => {
    const [randomizedMonoCodesObject, setRandomizedMonoCodesObject] = useState(null)
    const [randomizedMonoCodesColor, setRandomizedMonoCodesColor] = useState(null)
    const [randomColors, setRandomColors] = useState(null)

    const randomCodeGenerator = (data) => {
        let randomizeArray = data[Math.floor(Math.random() * data.length)];
        setRandomizedMonoCodesObject([randomizeArray])
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
    </section>
  )
}

export default MonoCodes;
