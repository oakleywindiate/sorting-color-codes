// -------- REACT IMPORTS -------- //
import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';

// -------- COMPONENT IMPORTS -------- //
import Assesment from './Components/Assessment';
import Error from './Components/Error';
import Header from './Components/Header';
import Home from './Components/Home';
import AllCodes from './Components/AllCodes';
import CanCodes from './Components/CanCodes';
import MonoCodes from './Components/MonoCodes';
import SplitCodes from './Components/SplitCodes';


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
    const url = 'http://localhost:3001/mono-codes'
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
    const url = 'http://localhost:3001/split-codes'
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
    const url = 'http://localhost:3001/can-codes'
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
        <main>
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
