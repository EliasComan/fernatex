import './styles.css'

import Carousel from "../carrousel/Carrousel";
import Estampados from '../estampados';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../images/logo/logo remera fernatex-01.svg'
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
      <div className="flex mt-24  justify-between px-12 items-center  w-4/6 my-48 ">
      <Link  to={'/nosotros'}  className="card w-96 mx-10 h-96 shadow-lg shadow-primary/20">
        <div className='flex flex-col items-center justify-center h-4/6' >
            <h1 className='text-4xl'>Nosotros</h1>
           <div className=' flex items-center  h-0.5 bg-white w-32 '></div>
          </div>
          <div className=' card-actions  text-center  mx-4 justify-end text-sm '>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum possimus cupiditate quibusdam cumque laborum iusto, in consequatur culpa ducimus recusandae rem repudiandae eius eveniet. Exercitationem error quidem fugiat dolore voluptas?</p>
          </div>
        </Link>
        <Link to={'/estampados'}  className="card w-96 mx-10 h-96 shadow-lg shadow-primary/20">
        <div className='flex flex-col items-center justify-center h-4/6' >
            <h1 className='text-4xl'>Estampados</h1>
           <div className=' flex items-center  h-0.5 bg-white w-36 '></div>
          </div>
          <div className=' card-actions  text-center  mx-4 justify-end text-sm '>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum possimus cupiditate quibusdam cumque laborum iusto, in consequatur culpa ducimus recusandae rem repudiandae eius eveniet. Exercitationem error quidem fugiat dolore voluptas?</p>
          </div>
        </Link>
        <Link to={'/contacto'}  className="card w-96 h-96 mx-10 shadow-lg shadow-primary/20">
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
      <Estampados/>
      <Logo
        fill='#AADDAA'
        stroke='black'
        
        
        className='w-48 bg-red-600 '
      />
    </div>
  );
};

export default Home;
