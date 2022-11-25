import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ data }) => {
    const [getStartedButton, setGetStartedButton] = useState(true)

  return (
    <div>
        <section>
            {getStartedButton ? 
            <Link to='/assesment'>
                <button onClick={() => setGetStartedButton(false)}>GET STARTED</button> 
                </Link>
                : null}
        </section>
        <section>
            {getStartedButton ? 
                null 
                : <div>
                    <Link to='/assesment'>
                        <button className="mono-codes button-link">MONO CODES</button>
                    </Link>
                    <Link to='/assesment'>
                        <button className="split-codes button-link">SPLIT CODES</button>
                    </Link>
                    <Link to='/assesment'>
                        <button className="can-codes button-link">CAN CODES</button>
                    </Link>
                    <Link to='/assesment'>
                        <button className="all-codes button-link">ALL CODES</button>
                    </Link>
                </div> }
        </section>
    </div>
  )
}

export default Home;
