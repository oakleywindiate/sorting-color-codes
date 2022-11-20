import React, { useEffect, useState } from 'react';
import Error from './components/Error';
import './App.css';

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
      {error ? <Error error={error} /> : null }
    </div>
  );
}

export default App;
