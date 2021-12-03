import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
      delay:0.5
    }
  },
  exit:{
    x:'-100vw',
    transition: {ease:'easeInOut'}
  }
}
const nextVariant = {
  hidden:{
    x:'-100vw'
  },
  visible:{
    x:0,
    transition:{
      type:'spring', 
      stiffness:120
    }
  }
}
const buttonVariant={
  hover:{
    scale:1.2 , 
    textShadow:"0px 0px 8px rgb(255,255,255)",
    boxShadow:"0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity
    }
  }
}
const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];
  return (
    <motion.div className="base container"
    variants={containerVariant}
    initial='hidden'
    animate='visible'
    exit="exit"
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(Base => {
          let spanClass = pizza.base1 === Base ? 'active' : '';
          return (
            <motion.li key={Base} onClick={() => addBase(Base)}
              whileHover={{scale:1.3, originX:0, color:"#ae8121"}}
              transition={{type:'spring', stiffness:120}}>
              <span className={spanClass}>{ Base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base1 && (
        <motion.div className="next"
        variants={nextVariant}
        >
          <Link to="/toppings">
            <motion.button
              variants={buttonVariant}
              whileHover="hover">Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;