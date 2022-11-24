// -------- REACT IMPORTS -------- //
import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';

// -------- COMPONENT IMPORTS -------- //
import Assesment from './Components/Assesment';
import Error from './Components/Error';
import Home from './Components/Home';
import CanCodes from './Components/CanCodes';
import MonoCodes from './Components/MonoCodes';
import SplitCodes from './Components/SplitCodes';


// -------- CSS IMPORTS -------- //
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
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <Route exact path='/home' render={() => 
            <Home 
              monoCodesData={monoCodes}
              splitCodesData={splitCodes}
              canCodesData={canCodes}
            />
          } />
        <Route exact path='/assesment' render={() => 
          <Assesment 
            monoCodesData={monoCodes}
            splitCodesData={splitCodes}
            canCodesData={canCodes}            
            />
          } />
        <Route exact path='/assesment-mono-codes' render={() => 
          <MonoCodes 
            monoCodesData={monoCodes}            
            />
          } />
        <Route exact path='/assesment-split-codes' render={() => 
          <SplitCodes 
            splitCodesData={splitCodes}            
            />
          } />  
        <Route exact path='/assesment-can-codes' render={() => 
          <CanCodes 
            canCodesData={canCodes}            
            />
          } />  
          <div>
          {error ? <Error error={error} /> : null }
          </div>
      </main>
    </div>
  );
}

export default App;
