import React from 'react'
import { useState, useEffect } from 'react'
import Button from './Button'

const RandomColors = ({ color }) => {
    const [randomColors, setRandomColors] = useState(null)

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

        let randomizeColorArray = colors.sort(() => .5 - Math.random()).slice(0, 4);
    
        compareColors(randomizeColorArray)
    }

    const compareColors = (array) => {
        let createArray = array.reduce((acc, item) => {
            if (item !== color) {
                acc.push(item)
            }
            return acc
        }, [])
        let combine = createArray.concat(color)
        // setRandomColors([combine])

        flattenArray(combine)
    }

    const flattenArray = (array) => {
        let formatColors = array.reduce((acc, item) => {
            acc.push(item)
            return acc
        }, [])
        setRandomColors(formatColors)
    }

    useEffect(() => {
        randomColorGenerator()
    }, [])
    

  return (
    <section>
        {randomColors ? 
        <section>
        {randomColors.map((item, index) => {
            
            return <Button item={item} key={index} color={color}/>
            })
        }
    </section>
        : null } 
    </section>
  )
}

export default RandomColors;
