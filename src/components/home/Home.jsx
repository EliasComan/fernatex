import './styles.css'

import { Link } from 'react-router-dom'
import Marcas from '../marcas/Marcas'
import React from 'react'
import imageContacto from '../../images/ADMINISTRACION Y VENTAS 1.jpg'
import imageEstampados from '../../images/MUESTRAS 5.jpg'
import imageNosotros from '../../images/PERSONAL FABRICA 1.jpg'
import imageSimulador from '../../images/IMG_3118.jpg'

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bannerInicio w-screen h-screen">
        <div className=" flex flex-col h-screen items-center justify-center">
          <h1 className="texto text-6xl text-white">Somos fernatex</h1>
          <div className="w-72 h-0.5 bg-slate-200"></div>
          <h2 className="mt-2">
            Pruebe nuestro simulador haciendo click{' '}
            <Link to={'/simulador/11047Aviones01'}>
              <strong className="">aqui</strong>
            </Link>{' '}
          </h2>
        </div>
      </div>
      <div className=" my-24  grid grid-rows-4 grid-cols-2 w-5/6 border rounded ">
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-black text-3xl font-serif text-center'>Aprenda mas acerca<hr></hr> de <strong><Link to={'/nosotros'}>nosotros.</Link></strong></h1>
          <h2 className='text-center text-black'>Haciendo click <strong><Link to={'/nosotros'}>aqui.</Link></strong></h2>
        </div>
        <div>
          <img src={imageNosotros} className='w-full h-auto' alt="Imagen nostros" />
        </div>
        <div>
          <img src={imageEstampados} className='w-full h-auto' alt="Imagen Estampados" />
        </div>
        <div className='flex flex-col items-center justify-center'>
        <h1 className='text-black text-3xl font-serif text-center'>Vea nuestra galeria<hr></hr> de <strong><Link to={'/estampados'}>estampados.</Link></strong></h1>
          <h2 className='text-center text-black'>Haciendo click <strong><Link to={'/estampados'}>aqui.</Link></strong></h2>
        </div>
        <div className='flex flex-col items-center justify-center '>
        <h1 className='text-black text-3xl font-serif text-center'>Comuniquese con nosotros<hr></hr> en nuestra seccion de <strong><Link to={'/contacto'}>contacto.</Link></strong></h1>
          <h2 className='text-center text-black'>Haciendo click <strong><Link to={'/contacto'}>aqui.</Link></strong></h2>
       </div>
       <div>
        <img src={imageContacto}  className='w-full h-auto mt-24'alt="Imagen Contacto" />
       </div>
       <div>
        <img src={imageSimulador} className='w-full h-auto mt-16' alt='IMagen simulador' />
       </div>
       <div className='flex flex-col items-center justify-center '>
       <h1 className='text-black text-3xl font-serif text-center'>Ponga a prueba nuestros diseños<hr></hr> en nuestro  <strong><Link to={'/simulador/11047Aviones01'}>simulador.</Link></strong></h1>
          <h2 className='text-center text-black'>Haciendo click <strong><Link to={'/simulador/11047Aviones01'}>aqui.</Link></strong></h2>
        
        </div>
        
      </div>
      <Marcas />
    </div>
  )
}

export default Home
