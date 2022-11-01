import { MarcasData } from './marcasData'
import React from 'react'
import { motion } from 'framer-motion'

const Marcas = () => {
const render = MarcasData.map((item, index )=> (
    <motion.div key={item.nombre+index} className='flex flex-col items-center justify-center'>
        <motion.img src={item.imagen} className='w-20 rounded-full shadow-xl' ></motion.img>
        {item.nombre}
    </motion.div>
)
  )
    return (
    <div className='flex items-center flex-col w-full border-t border-dotted border-spacing-9 pt-2'>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-3xl  font-semibold text-black'>Marcas con las que trabajamos</h1>
            <div className="bg-primary/80 shadow-2xl shadow-secondary/50 w-96 h-0.5 mt-2"></div>
        </div>
        <div className='flex w-full px-12 my-20 justify-between overflow-hidden'>
            {render}
        </div>
    </div>
  )
}

export default Marcas