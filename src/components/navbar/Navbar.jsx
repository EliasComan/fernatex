import './styles'

import { Link } from 'react-router-dom'
import React from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-48">
  <div className="flex-1">
    <Link to={'/'} className="md:w-28">
      <motion.img whileHover={{scale:1.1}} src={require('../../images/logo/fernatex_logo_final.png')} alt="" />
    </Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <motion.li whileHover={{scale:1.1}} to={'/'} className='text-black'><Link>Inicio</Link></motion.li>
      <motion.li whileHover={{scale:1.1}} to={'/nosotros'} className='text-black'><Link>Nosotros</Link></motion.li>
      <motion.li whileHover={{scale:1.1}} to={'/estampados'} className='text-black'><Link>Estampados</Link></motion.li>
      <motion.li whileHover={{scale:1.1}} to={'/contacto'} className='text-black'><Link>Contacto</Link></motion.li>
    </ul>
  </div>
</div>
  )
}

export default Navbar