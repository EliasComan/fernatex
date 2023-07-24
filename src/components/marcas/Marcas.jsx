import { MarcasData } from './marcasData'
import React from 'react'
import { motion } from 'framer-motion'

const Marcas = () => {
const render = MarcasData.map((item, index )=> (
    <motion.div key={item.nombre+index} className='flex flex-col items-center justify-center'>
        <motion.img src={item.imagen} className='w-16 h-16 md:w-20 md:h-20 rounded-full shadow-xl' ></motion.img>
        {item.nombre}
    </motion.div>
)
  )
    return (
    <div className='flex items-center flex-col border-t border-dotted w-screen   '>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-3xl font-semibold text-black text-center '>Marcas con las que trabajamos</h1>
            <div className="bg-primary/80 left-0 shadow-2xl shadow-secondary/50 hidden md:block md:w-96 h-0.5 mt-2"></div>
        </div>
        <div className='grid grid-cols-3 md:grid-cols-12 content-center my-12'>
            {render}
        </div>
    </div>
  )
}

export default Marcas