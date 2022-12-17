// -------- REACT IMPORTS -------- //
import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';

// -------- COMPONENT IMPORTS -------- //
import Assesment from './components/Assessment';
import Error from './components/Error';
import Header from './components/Header';
import Home from './components/Home';
import AllCodes from './components/AllCodes';
import CanCodes from './components/CanCodes';
import MonoCodes from './components/MonoCodes';
import SplitCodes from './components/SplitCodes';


// -------- CSS IMPORTS -------- //
import { AnimatePresence } from 'framer-motion'
import './App.css';


// ======== BEGIN APP -------- //

function App() {
  const [monoCodes, setMonoCodes] = useState([])
  const [splitCodes, setSplitCodes] = useState([])
  const [canCodes, setCanCodes] = useState([])
  const [error, setError] = useState(null)


// -------- FETCH CALLS -------- //

  const getMonoCodes = async () => {
    const url = 'https://sorting-codes-api.netlify.app/.netlify/functions/api/mono-codes'
    setError(error)

    try {
      const response = await fetch(url)
      const loadCodes = await response.json()
      setMonoCodes(loadCodes)
    } catch (error) {
      setError(error)
    }
  }

  const getSplitCodes = async () => {
    const url = 'https://sorting-codes-api.netlify.app/.netlify/functions/api/split-codes'
    setError(error)

    try {
      const response = await fetch(url)
      const loadCodes = await response.json()
      setSplitCodes(loadCodes)
    } catch (error) {
      setError(error)
    }
  }

  const getCanCodes = async () => {
    const url = 'https://sorting-codes-api.netlify.app/.netlify/functions/api/can-codes'
    setError(error)

    try {
      const response = await fetch(url)
      const loadCodes = await response.json()
      setCanCodes(loadCodes)
    } catch (error) {
      setError(error)
    }
  }

 // -------- USE EFFECT -------- // 

  useEffect(() => {
    getMonoCodes()
    getSplitCodes()
    getCanCodes()
  }, [])

  // -------- RENDER -------- //

  return (
    <AnimatePresence mode='wait'>
      <div className="App">
        {/* <header className="App-header">
          <Header />
        </header> */}
        <main className="main-section">
          <Route exact path='/home' render={() => 
              <Home 
                monoCodesData={monoCodes}
                splitCodesData={splitCodes}
                canCodesData={canCodes}
              />
            } />
          <Route exact path='/assessment' render={() => 
            <Assesment 
              monoCodesData={monoCodes}
              splitCodesData={splitCodes}
              canCodesData={canCodes}            
              />
            } />  
          <Route exact path='/assessment-mono-codes' render={() => 
            <MonoCodes 
              monoCodesData={monoCodes}            
              /> 
            } />
          <Route exact path='/assessment-split-codes' render={() => 
            <SplitCodes 
              splitCodesData={splitCodes}            
              />
            } />  
          <Route exact path='/assessment-can-codes' render={() => 
            <CanCodes 
              canCodesData={canCodes}            
              />
            } />  
          <Route exact path='/assessment-all-codes' render={() => 
            <AllCodes 
              canCodesData={canCodes} 
              monoCodesData={monoCodes}    
              splitCodesData={splitCodes}          
              />
            } />  
            <div>    
            {error ? <Error error={error} /> : null }
            </div>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
