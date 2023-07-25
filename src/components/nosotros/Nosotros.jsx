import './styles.css'

import React from 'react'
import adminyventas from '../../images/ADMINISTRACION Y VENTAS 1.jpg'
import imgEdificio from '../../images/IMG_3087 (1).jpg'
import imgFabrica from '../../images/IMG_3049.jpg'
import imgPersonal from '../../images/PERSONAL FABRICA 1 cambio.jpg'
import { motion } from 'framer-motion'

const Nosotros = () => {
  return (
    <div >
        <div className='banner w-screen h-72 flex items-center justify-center'>
           <h1 className='text-7xl text-white'>Nosotros</h1>
        </div>
        <motion.div initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            exit={{ opacity: 0 }} layout 
            className='flex flex-col w-screen items-center justify-center'>
            <div className='flex my-24 flex flex-col-reverse md:flex-row'>
                <div className=' mt-20'>
                <motion.img layout initial={{opacity:0}}whileInView={{opacity:1}} transition={{duration:2}} viewport={{once:true}}   className='w-screen md:w-96 h-auto' src={imgEdificio} alt="" />
                <motion.img layout initial={{opacity:0}}whileInView={{opacity:1}} transition={{duration:2}} viewport={{once:true}}  className='w-screen md:w-96   h-auto mt-4' src={imgFabrica} alt=''/>

                </div>
                <div className='flex flex-col  justify-center '>
                    <h1 className='text-4xl font-bold font-sans mx-12 text-black'>Fernatex</h1>
                    <p className='text-ellipsis text-xl text-center w-96 md:mx-12 my-4 text-black'>La Empresa se funda en Septiembre de 1973, en manos de la familia Fernández. Su actividad, se avocaba  a la estampa artesanal con estampados manuales y automáticos.</p>
                     <p className='text-ellipsis w-96 text-xl text-center md:mx-12 my-4 text-black'> En Marzo del 2008, la empresa se transforma. Adquirida  por la Familia Pazos le inyectan un nuevo aire comercial quienes incorporan nuevas  máquinas  para la producción de nuevos estampados en todos los rubros. </p>
                       
                </div>
            </div>
          

        </motion.div >
         <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1 }}
         viewport={{ once: true }}
         exit={{ opacity: 0 }}
         className='flex  flex-col w-screen items-center justify-center'>
            <div className='flex flex-col md:flex-row my-24'>
                <div className='flex flex-col justify-center '>
                    <h1 className='text-4xl font-bold font-sans mx-12 text-black'>Nuestra historia</h1>
                    <p className='text-ellipsis text-xl w-96 md:mx-12 my-4 text-black text-center'>La empresa, ubicada en Morón Provincia de Buenos Aires, cuenta con un gran grupo de personas que  trabaja para ampliar cada día nuestro campo de tendencias. Nuestro equipo de ventas y diseño trabajan en conjunto, apoyados por el Sector de Muestras y Producción, para brindar a nuestros clientes el mejor servicio personalizado adaptado a sus necesidades, haciendo que sus productos sean UNICOS</p>
                    
                      
                </div>
                <div className=' mt-20'>
                    <motion.img layout initial={{opacity:0}}whileInView={{opacity:1}} transition={{duration:2}} viewport={{once:true}} className=' w-screen md:w-96  h-auto' src={adminyventas} alt="" />
                    <motion.img layout initial={{opacity:0}}whileInView={{opacity:1}} transition={{duration:2}} viewport={{once:true}} className='w-screen md:w-96    h-auto mt-4' src={imgPersonal} alt=''/>

                </div>
            </div>
          

        </motion.div>
    </div>
  )
}

export default Nosotros