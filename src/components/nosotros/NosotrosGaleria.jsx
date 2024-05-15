import react from 'react'
import { motion } from 'framer-motion'
import image1 from '../../images/INICIO/1.(aprende mas de nosotros) Conoce Nuestro Staff/2.Administracion y Ventas.jpg'
import image2 from '../../images/INICIO/1.(aprende mas de nosotros) Conoce Nuestro Staff/3.Personal Fabrica y Produccion.jpg'
import image3 from '../../images/INICIO/1.(aprende mas de nosotros) Conoce Nuestro Staff/direccionyadm.jpg'


const NosotrosGaleria = () => {
    
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-100 m-16  '>
            <div className='grid gap-4'>
                <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{scale:1.4}} viewport={{ once: true }}src={image1} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
            </div>
            <div>
                <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{scale:1.4}} viewport={{ once: true }}src={image2} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
            </div>
            <div>
                <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{scale:1.4}} viewport={{ once: true }}src={image3} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
            </div>
           
        
            
        
        </div>

    )
}



export default NosotrosGaleria