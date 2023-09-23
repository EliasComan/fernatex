import './styles.css'

import React from 'react'
import image1 from '../../images/FOTOS DE NUESTRA HISTORIA (NOSOTROS)/1 foto nuestra historia.jpg'
import image2 from '../../images/FOTOS DE NUESTRA HISTORIA (NOSOTROS)/2 WhatsApp Image 2023-07-27 at 14.53.00 (1).jpg'
import image3 from '../../images/FOTOS DE NUESTRA HISTORIA (NOSOTROS)/3 WhatsApp Image 2023-07-27 at 14.53.00.jpg'
import image4 from '../../images/FOTOS DE NUESTRA HISTORIA (NOSOTROS)/FotosFernatexNosotros/image2.jpg'
import image5 from '../../images/FOTOS DE NUESTRA HISTORIA (NOSOTROS)/WhatsApp Image 2023-09-21 at 23.34.05.jpeg'
import image6 from '../../images/FOTOS DE NUESTRA HISTORIA (NOSOTROS)/WhatsApp Image 2023-09-21 at 23.34.12.jpeg'
import image7 from '../../images/FOTOS DE NUESTRA HISTORIA (NOSOTROS)/WhatsApp Image 2023-09-21 at 23.34.15.jpeg'
import image8 from '../../images/FOTOS DE NUESTRA HISTORIA (NOSOTROS)/WhatsApp Image 2023-09-21 at 23.34.19.jpeg'
import image9 from '../../images/FOTOS DE NUESTRA HISTORIA (NOSOTROS)/WhatsApp Image 2023-09-21 at 23.34.22.jpeg'

import { motion } from 'framer-motion'


const Nosotros = () => {
  return (
    <div >
        <div className='banner w-screen h-96  flex items-center justify-center'>
           <h1 className='text-7xl text-white'>Nosotros</h1>
        </div>

       
         <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1 }}
         viewport={{ once: true }}
         exit={{ opacity: 0 }}
         className='flex  flex-col w-screen items-center justify-center'>
            <div className='flex my-24 flex flex-col w-screen items-center justify-center '>
                <div className='flex flex-col justify-center '>
                   
                     <h1 className='text-6xl font-bold font-sans mx-12 text-center text-black'>Fernatex</h1>
                    <p className=' text-2xl w-96 md:mx-12 my-4 text-black text-center'>La empresa, ubicada en Morón Provincia de Buenos Aires, cuenta con un gran grupo de personas que  trabaja para ampliar cada día nuestro campo de tendencias. Nuestro equipo de ventas y diseño trabajan en conjunto, apoyados por el Sector de Muestras y Producción, para brindar a nuestros clientes el mejor servicio personalizado adaptado a sus necesidades, haciendo que sus productos sean UNICOS</p>
                    
                      
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-100 m-16 w-screen w-4/5 '>
                    <div className='grid gap-4  '>
                        <div>
                            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{scale:1.4}} viewport={{ once: true }}src={image6} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
                        </div>
                        <div>
                            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{scale:1.4}} viewport={{ once: true }}src={image7} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
                        </div>
                        <div>
                            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{scale:1.4}} viewport={{ once: true }}src={image4} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
                        </div>
                        
                    </div>
                    <div className='grid gap-4  '>    
                        <div>
                            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{scale:1.4}} viewport={{ once: true }}src={image8} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
                        </div>
                        <div>
                            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{scale:1.4}} viewport={{ once: true }}src={image9} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
                        </div>
                        
                    
                    </div>    

                </div>
            </div>
          

        </motion.div>
        <motion.div initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            exit={{ opacity: 0 }} layout 
            className=''>
            <div className='flex my-24 flex flex-col-reverse w-screen items-center justify-center '>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-100 m-16 w-screen w-4/5'>
        <div className='grid gap-4'>

            <div>
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{scale:1.4}} viewport={{ once: true }}src={image1} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
            </div>
            <div>
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{scale:1.4}}  viewport={{ once: true }}src={image3} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
            </div>
         </div>
         <div className='grid gap-4'>  
           
            <div>
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} whileHover={{scale:1.4}} src={image2} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
            </div>
            <div>
                            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{scale:1.4}} viewport={{ once: true }}src={image5} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
                        </div>
           
            
        </div>
        </div>
                
                <div className='flex flex-col  justify-center '>
            <h1 className='text-6xl font-bold text-center font-sans mx-12 text-black'>Nuestra historia</h1>
                <div className='flex flex-col md:flex-row my-14 items-center justify-center'>

                    <p className='text-ellipsis text-3xl text-center w-96 md:mx-12 my-4 text-black'>La Empresa se funda en Septiembre de 1973, en manos de la familia Fernández. Su actividad, se avocaba  a la estampa artesanal con estampados manuales y automáticos.</p>
                     <p className='text-ellipsis w-96 text-3xl text-center md:mx-12 my-4 text-black'> En Marzo del 2008, la empresa se transforma. Adquirida  por la Familia Pazos le inyectan un nuevo aire comercial quienes incorporan nuevas  máquinas  para la producción de nuevos estampados en todos los rubros. </p>
                </div>
                       
                </div>
            </div>

                
          

        </motion.div >
    </div>
  )
}

export default Nosotros