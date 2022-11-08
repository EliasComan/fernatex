import './styles.css'

import { Link } from 'react-router-dom'
import Marcas from '../marcas/Marcas'
import React from 'react'
import imageContacto from '../../images/ADMINISTRACION Y VENTAS 1.jpg'
import imageEstampados from '../../images/MUESTRAS 5.jpg'
import imageNosotros from '../../images/PERSONAL FABRICA 1 cambio.jpg'
import imageSimulador from '../../images/IMG_3118.jpg'
import svgMarca from '../../images/logo/Logo Fernatex (completo).svg'

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bannerInicio w-screen h-screen">
        <div className=" grid grid-cols-3 h-screen items-center justify-center content-center">
          
          <img src={svgMarca} className='w-max  grid col-start-2 justify-center content-center' alt="Svg marca fernatex" />
          
            
        </div>
      </div>
      <div className=" my-24  grid grid-rows-4 grid-cols-2 w-5/6 border rounded ">
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-black text-3xl font-serif text-center'>Aprende mas acerca<hr></hr> de <strong><Link to={'/nosotros'}>nosotros.</Link></strong></h1>
          <h2 className='text-center text-black'>Haciendo click <strong><Link to={'/nosotros'}>aqui.</Link></strong></h2>
        </div>
        <div>
          <img src={imageNosotros} className='w-full h-auto' alt="Imagen nostros" />
        </div>
        <div>
          <img src={imageEstampados} className='w-full h-auto' alt="Imagen Estampados" />
        </div>
        <div className='flex flex-col items-center justify-center'>
        <h1 className='text-black text-3xl font-serif text-center'>Mira nuestra galeria<hr></hr> de <strong><Link to={'/estampados'}>estampados.</Link></strong></h1>
          <h2 className='text-center text-black'>Haciendo click <strong><Link to={'/estampados'}>aqui.</Link></strong></h2>
        </div>
        <div className='flex flex-col items-center justify-center '>
        <h1 className='text-black text-3xl font-serif text-center'>Comunicate con nosotros<hr></hr> en nuestra seccion de <strong><Link to={'/contacto'}>contacto.</Link></strong></h1>
          <h2 className='text-center text-black'>Haciendo click <strong><Link to={'/contacto'}>aqui.</Link></strong></h2>
       </div>
       <div>
        <img src={imageContacto}  className='w-full h-auto mt-24'alt="Imagen Contacto" />
       </div>
       <div>
        <img src={imageSimulador} className='w-full h-auto mt-16' alt='IMagen simulador' />
       </div>
       <div className='flex flex-col items-center justify-center '>
       <h1 className='text-black text-3xl font-serif text-center'>Pone a prueba nuestros diseños<hr></hr> en nuestro  <strong><Link to={'/simulador/11047Aviones01'}>simulador.</Link></strong></h1>
          <h2 className='text-center text-black'>Haciendo click <strong><Link to={'/simulador/11047Aviones01'}>aqui.</Link></strong></h2>
        
        </div>
        
      </div>
      <Marcas />
    </div>
  )
}

export default Home
