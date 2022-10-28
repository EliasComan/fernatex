import './styles.css'

import { Link } from 'react-router-dom';
import Marcas from '../marcas/Marcas';
import React, {  } from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className='bannerInicio w-screen h-screen'>
        <div className=' flex flex-col h-screen items-center justify-center'>
            <h1 className='texto text-6xl text-white'>Somos fernatex</h1>
            <div className='w-72 h-0.5 bg-slate-200'></div>
            <h2 className='mt-2'>Pruebe nuestro simulador haciendo click <Link to={'/simulador/11047Aviones01'}><strong className=''>aqui</strong></Link> </h2>
        </div>

      </div>
      <div className=' my-24 bg-gray-100 w-5/6  border  rounded-xl'>
    <div className=" flex flex-col items-center mt-12 align-center">
        <h1 className="text-3xl  text-black font-semibold"> Aprenda mas acerca de nosotros.</h1>
        <div className="bg-primary/80 shadow-2xl shadow-secondary/50 w-72 h-0.5 mt-2"></div>
    </div>
      <div className="grid grid-cols-4 mt-4   border-t  gap-4 px-12   ">
      <Link  to={'/nosotros'}  className="card grid  w-full h-72 border  shadow-xl  my-12">
        <div className='flex flex-col items-center justify-center ' >
            <h1 className='text-4xl'>Nosotros</h1>
           <div className=' flex items-center  h-0.5 bg-white w-32 '></div>
          </div>
        </Link>
        <Link to={'/estampados'}  className="card grid border w-full h-72 shadow-xl  my-12">
        <div className='flex flex-col items-center justify-center ' >
            <h1 className='text-4xl'>Estampados</h1>
           <div className=' flex items-center  h-0.5 bg-white w-36 '></div>
          </div>
        </Link>
        <Link to={'/contacto'}  className="card grid  w-full border h-72 shadow-xl  my-12">
        <div className='flex flex-col items-center justify-center ' >
            <h1 className='text-4xl'>Contacto</h1>
           <div className=' flex items-center  h-0.5 bg-white w-32 '></div>
          </div>
        </Link>
        <Link to={'/simulador/11047Aviones01'}  className="card border w-full h-72 grid  shadow-xl  my-12">
        <div className='flex flex-col items-center justify-center ' >
            <h1 className='text-4xl'>Simulador</h1>
           <div className=' flex items-center  h-0.5 bg-white w-32 '></div>
          </div>
        </Link>
      </div>
      </div>
      <Marcas/>
     
    </div>
  );
};

export default Home;
