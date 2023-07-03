import './styles'

import { Link } from 'react-router-dom'
import React,{useState} from 'react'
import { motion } from 'framer-motion'
import svgMarcaComp from '../../images/logo/Logo Fernatex (Texto).svg'

const Navbar = () => {
  let Links =[
    {name:"Inicio",link:"/"},
    {name:"Nosotros",link:"/nosotros"},
    {name:"Estampados",link:"/estampados"},
    {name:"Contacto",link:"/contacto"},
  ];
  let [open,setOpen]=useState(false);
return (
  <div className='shadow-md w-full fixed top-0 left-0'>
    <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
    <div className='font-bold text-2xl cursor-pointer flex items-center  text-gray-800'>
      <Link to={'/'}><img src={svgMarcaComp} className='w-3/12 md:6/12'/></Link>
    </div>
    
    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
    <ion-icon name={open ? 'close':'menu'}></ion-icon>
    </div>

    <ul className={`md:flex md:items-center m-0 p-0 md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12 ':'top-[-490px]'}`}>
      {
        Links.map((link)=>(
          <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
            <Link to={link.link} onClick={()=>setOpen(!open)} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</Link>
          </li>
        ))
      }
    </ul>
    </div>
  </div>
)
}

export default Navbar