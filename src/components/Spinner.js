import React from 'react'
import './Spinner.css'
import { motion } from 'framer-motion'

export default function Spinner() {
  return (
    <motion.div 
    initial={{
      opacity: 0
    }}
    animate={{
        opacity: 1
    }}
    transition={{
        duration: .5
    }}
    exit={{
        opacity: 0
    }}
  id="preloader">
        <div id="loader"></div>
    </motion.div>
  )
}
