import react from 'react'
import  { motion} from 'framer-motion'
import image1 from '../../images/INICIO/3.Comunicate con nuestra Seccion/1 Equipo de Administracion - Diseño y Ventas.jpg'
import image2 from '../../images/INICIO/3.Comunicate con nuestra Seccion/Administracion - Finanzas.jpg'
import image3 from '../../images/INICIO/3.Comunicate con nuestra Seccion/Administracion- Contable.jpg'
import image4 from '../../images/INICIO/3.Comunicate con nuestra Seccion/Administracion- Gerencia.jpg'
import image5 from '../../images/INICIO/3.Comunicate con nuestra Seccion/Diseño y Produccion.jpg'
import image6 from '../../images/INICIO/3.Comunicate con nuestra Seccion/Diseño y produccion 1.jpg'


const ContactoImagenes = () => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 bg-gray-100 m-16  '>
        <div className='grid gap-4'>
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{scale:1.4}} viewport={{ once: true }}src={image1} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
        </div>
        <div>
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{scale:1.4}} viewport={{ once: true }}src={image4} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
        </div>
        
        <div>
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{scale:1.4}} viewport={{ once: true }}src={image3} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
        </div>
        <div>
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{scale:1.4}} viewport={{ once: true }}src={image2} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
        </div>
        <div>
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{scale:1.4}} viewport={{ once: true }}src={image6} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
        </div>
        <div>
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{scale:1.4}} viewport={{ once: true }}src={image5} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
        </div>
    </div>
    )
}

export default ContactoImagenes