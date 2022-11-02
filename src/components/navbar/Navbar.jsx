import './styles'

import { Link } from 'react-router-dom'
import React from 'react'
import { motion } from 'framer-motion'
import svgMarcaComp from '../../images/logo/Logo Fernatex (Texto).svg'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-48">
  <div className="flex-1">
    <Link to={'/'} className="md:w-28">
      <motion.img whileHover={{scale:1.1}} src={svgMarcaComp} alt="" />
    </Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <motion.li whileHover={{scale:1.1}}  className='text-black'><Link to={'/'}>Inicio</Link></motion.li>
      <motion.li whileHover={{scale:1.1}}  className='text-black'><Link to={'/nosotros'}>Nosotros</Link></motion.li>
      <motion.li whileHover={{scale:1.1}}  className='text-black'><Link to={'/estampados'}>Estampados</Link></motion.li>
      <motion.li whileHover={{scale:1.1}}  className='text-black'><Link to={'/contacto'}>Contacto</Link></motion.li>
    </ul>
  </div>
</div>
  )
}

export default Navbar