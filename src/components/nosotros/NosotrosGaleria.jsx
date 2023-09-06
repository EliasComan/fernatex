import react from 'react'
import { motion } from 'framer-motion'
import image1 from '../../images/INICIO/1.(aprende mas de nosotros) Conoce Nuestro Staff/2.Administracion y Ventas.jpg'
import image2 from '../../images/INICIO/1.(aprende mas de nosotros) Conoce Nuestro Staff/3.Personal Fabrica y Produccion.jpg'
import image3 from '../../images/FOTOS DE NUESTRA HISTORIA (NOSOTROS)/1 foto nuestra historia.jpg'
import image4 from '../../images/FOTOS DE NUESTRA HISTORIA (NOSOTROS)/2 WhatsApp Image 2023-07-27 at 14.53.00 (1).jpg'
import image5 from '../../images/FOTOS DE NUESTRA HISTORIA (NOSOTROS)/3 WhatsApp Image 2023-07-27 at 14.53.00.jpg'
import image6 from '../../images/FOTOS DE NUESTRA HISTORIA (NOSOTROS)/FotosFernatexNosotros/image2.jpg'



const NosotrosGaleria = () => {
    
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 bg-gray-100 m-16  '>
            <div className='grid gap-4'>
                <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{scale:1.4}} viewport={{ once: true }}src={image1} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
            </div>
            <div>
                <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{scale:1.4}} viewport={{ once: true }}src={image2} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
            </div>
           
        
            
        
        </div>

    )
}



export default NosotrosGaleria