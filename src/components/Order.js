import React from 'react';
import { useState,useEffect } from 'react';
import { motion , AnimatePresence} from 'framer-motion';
const containerVariant = {
  hidden:{
    opacity:0,
    x:'100vw'
  },
  visible:{
    opacity:1,
    x:0,
    transition:{
      type:'spring', 
      mass:0.4,
      damping:8,
      when:"beforeChildren",
      staggerChildren:0.4
    }
  },
  exit:{
    x:'-100vw',
    transition: {ease:'easeInOut'}
  }
}
const variantChildren={
  hidden:{
    opacity: 0
  },
  visible:{
    opacity: 1
  }
}
const Order = ({ pizza,setShowModal }) => {
  useEffect(() => {
    setTimeout(()=>{
      setShowModal(true)
    },5000)
  })
  return (
    <motion.div className="container order"
      variants={containerVariant}
      initial='hidden'
      animate='visible'
      exit="exit"
    >
        <h2>Thank you for your order :)</h2>
      <motion.p variants={variantChildren}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={variantChildren}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}
  
export default Order;