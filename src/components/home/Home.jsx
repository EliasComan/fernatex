import './styles.css'

import Carousel from "../carrousel/Carrousel";
import { Link } from 'react-router-dom';
import Marcas from '../marcas/Marcas';
import React, {  } from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Carousel />
    <div className="mt-24 flex flex-col items-center align-center">
        <h1 className="text-3xl  text-black font-semibold"> Somos Fernatex.</h1>
        <div className="bg-primary/80 shadow-2xl shadow-secondary/50 w-48 h-0.5 mt-2"></div>
    </div>
      <div className="flex mt-24  justify-between px-12 items-center w-full my-48 ">
      <Link  to={'/Nosotros'} layout className="card w-96 h-96">
        <div className='flex flex-col items-center justify-center h-4/6' >
            <h1 className='text-4xl'>Nosotros</h1>
           <div className=' flex items-center  h-0.5 bg-white w-32 '></div>
          </div>
          <div className=' card-actions  text-center  mx-4 justify-end text-sm '>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum possimus cupiditate quibusdam cumque laborum iusto, in consequatur culpa ducimus recusandae rem repudiandae eius eveniet. Exercitationem error quidem fugiat dolore voluptas?</p>
          </div>
        </Link>
        <Link to={'/estampados'} layout className="card w-96 h-96">
        <div className='flex flex-col items-center justify-center h-4/6' >
            <h1 className='text-4xl'>Estampados</h1>
           <div className=' flex items-center  h-0.5 bg-white w-36 '></div>
          </div>
          <div className=' card-actions  text-center  mx-4 justify-end text-sm '>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum possimus cupiditate quibusdam cumque laborum iusto, in consequatur culpa ducimus recusandae rem repudiandae eius eveniet. Exercitationem error quidem fugiat dolore voluptas?</p>
          </div>
        </Link>
        <Link to={'/Contacto'} layout className="card w-96 h-96">
        <div className='flex flex-col items-center justify-center h-4/6' >
            <h1 className='text-4xl'>Contacto</h1>
           <div className=' flex items-center  h-0.5 bg-white w-32 '></div>
          </div>
          <div className=' card-actions  text-center  mx-4 justify-end text-sm '>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum possimus cupiditate quibusdam cumque laborum iusto, in consequatur culpa ducimus recusandae rem repudiandae eius eveniet. Exercitationem error quidem fugiat dolore voluptas?</p>
          </div>
        </Link>
      </div>
      <Marcas/>
    </div>
  );
};

export default Home;
