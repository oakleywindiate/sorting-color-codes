import React from 'react'
import { useState } from 'react'

const Assesment = () => {
    const [startButton, setStartButton] = useState(true)

  return (
    <section>
     {startButton ? 
     <section>
     <div>Let's get started</div>
    <button onClick={() => setStartButton(false)}>START THE TEST</button> 
    </section> 
    : null} 
    </section>
  )
}

export default Assesment;
