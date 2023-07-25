import React from 'react'
import { motion } from 'framer-motion'

const Contacto = () => {
  return (
    <div className='flex itemas-center justify-center mt-12 '>
      <div className=''>
        <div className="flex flex-col md:flex-row h-screen w-screen items-center md:px-20">
          <div className=' h-2/4 w-screen md:w-2/4'>
          <iframe title='MAPA' 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.579620110964!2d-58.62801343748407!3d-34.6653180285921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc740fee42409%3A0xfa735e1059054c0f!2sSta.%20Mar%C3%ADa%20265%2C%20B1708%20Mor%C3%B3n%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1689627221544!5m2!1ses!2sar" 
          loading='lazy'
          width='100%'
          height='100%'
          className='border rounded-md'
          referrerPolicy="no-referrer-when-downgrade"/>
          </div>
          <div className=' flex flex-col w-screen md:w-2/4 h-2/4 justify-around items-center  w-5/6 my-12 border-lg rounded-xl shadow z-10 '>
           
              <h2 className='text-black block font-semibold text-2xl text-center md:text-4xl  '>Comuniquese con nosotros</h2>
             <div className='flex md:w-full flex-col md:flex-row justify-center md:justify-around items-center'>
                <div className='flex flex-col items-start justify-center'>
                  <label className='text-black text-md'>Nombre completo.</label>
                  <input type='text'  className='w-72 border rounded-md shadow-md'/>
                </div>
                <div className='flex flex-col items-start justify-center'>
                  <label className='text-black text-md '>Email.</label>
                  <input type='text'  className='w-72 border rounded-md shadow-md'/>
                </div>
            </div>

              <div className='flex flex-col items-start md:w-full  justify-center md:px-20 '>
                <label className='text-black text-md'>Numero de telefono.</label>
                <input type='text'  className='w-72 md:w-content md:px-24  border  rounded-md shadow-md'/>
              </div>
              <div className='flex flex-col items-start justify-center md:w-full md:justify-start md:px-20'>
                <label className='text-black'>Deje un comentario</label>
                <textarea className='border rounded-xl w-72 md:w-full h-24 px-24 shadow-md'></textarea>
              </div>
              <div className='w-screen md:w-full flex items-center justify-center'>

              <motion.button whileHover={{scale:1.2}} onHoverStart={e => {}} onHoverEnd={e => {}}   whileTap={{ scale: 0.9 }} className='w-2/4 my-8 md:my-0 md:w-72 bg-primary h-12 border rounded-xl text-white shadow-md' type='button' >Enviar</motion.button>
            </div>


          </div>
        </div>
        <div>

        </div>
    </div>
  </div>
  
  )
}

export default Contacto
