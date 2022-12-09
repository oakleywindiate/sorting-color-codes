import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Box from '../shippingBox.png'
import './Home.css'

const Home = ({ data }) => {
    const [getStartedButton, setGetStartedButton] = useState(true)

  return (
    <div>
        <section>
            {getStartedButton ? 
                <div className="home-page">
                    <div className="home-left">
                        <img className="box-home" src={Box}/>  
                    </div>  
                    <div className="home-right">
                        <div>
                            <div className="home-text">The fun and effective way to learn sorting codes!</div>
                            <Link to='/assessment'>
                                <button className="get-started-button" onClick={() => setGetStartedButton(false)}>GET STARTED</button> 
                            </Link>
                        </div>
                    </div> 
                </div>
            : null}
        </section>
    </div>
  )
}

export default Home;
