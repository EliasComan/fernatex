import './styles.css'

import { Link } from 'react-router-dom'
import Marcas from '../marcas/Marcas'
import React from 'react'
import imageContacto from '../../images/ADMINISTRACION Y VENTAS 1.jpg'
import imageEstampados from '../../images/MUESTRAS 5.jpg'
import imageNosotros from '../../images/PERSONAL FABRICA 1 cambio.jpg'
import imageSimulador from '../../images/INICIO/4.Pone a prueba nuestros diseños/WhatsApp Image 2023-07-27 at 18.10.41.jpeg'
import svgMarca from '../../images/logo/Logo Fernatex (completo).svg'
import { motion } from 'framer-motion'

import Galeria from './galeria'

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bannerInicio w-screen h-screen">
        <div className=" grid grid-cols-3 h-screen items-center justify-center content-center">
          
          <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          exit={{ opacity: 0 }} src={svgMarca} className='w-max  grid col-start-2 justify-center content-center' alt="Svg marca fernatex" />
          
            
        </div>
      </div>
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      exit={{ opacity: 0 }}
      className=" my-24  grid grid-rows-4 grid-cols-2 w-5/6 border w-screen overflow-x-hidden rounded ">
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-black text-xl md:text-3xl font-serif text-center'>Conoce nuestro  <strong><Link to={'/nosotros'}>Staff.</Link></strong> <hr></hr></h1>
          
          <h2 className='text-center text-black italic'>Haciendo click <strong><Link to={'/nosotros'}>aqui.</Link></strong></h2>
        </div>
        <div>
          <Link to={'/nosotros/galeria'}><img src={imageNosotros} className='w-full h-auto' alt="Imagen nostros" /></Link>
        </div>
        <div>
         <Link to={'/estampados/imagenes'}> <img src={imageEstampados} className='w-full h-auto' alt="Imagen Estampados" /></Link>
        </div>
        <div className='flex flex-col items-center justify-center'>
        <h1 className='text-black text-xl md:text-3xl font-serif text-center'>Conoce nuestra manera<hr></hr> de <strong><Link to={'/estampados'}>trabajar.</Link></strong></h1>
          <h2 className='text-center text-black italic'>Haciendo click <strong><Link to={'/estampados'}>aqui.</Link></strong></h2>
        </div>
        <div className='flex flex-col items-center justify-center '>
        <h1 className='text-black text-xl md:text-3xl font-serif text-center'>Comunicate nuestra seccion<hr></hr>  de <strong><Link to={'/contacto'}>contacto.</Link></strong></h1>
          <h2 className='text-center text-black italic'>Haciendo click <strong><Link to={'/contacto'}>aqui.</Link></strong></h2>
       </div>
       <div>
       <Link to={'/contacto/imagenes'}> <img src={imageContacto}  className='w-full h-auto mt-24'alt="Imagen Contacto" /></Link>
       </div>
       <div className='flex items-center justify-center'>
        <img src={imageSimulador} className='w-4/6 h-auto mt-16' alt='IMagen simulador' />
       </div>
       <div className='flex flex-col items-center justify-center '>
       <h1 className='text-black text-xl md:text-3xl font-serif text-center'>Pone a prueba nuestros diseños<hr></hr> en nuestro  <strong><Link to={'/simulador/11047Aviones01'}>simulador.</Link></strong></h1>
          <h2 className='text-center text-black italic'>Haciendo click <strong><Link to={'/simulador/11047Aviones01'}>aqui.</Link></strong></h2>
        
        </div>
        
      </motion.div>
      <Marcas />
    </div>
  )
}

export default Home
