import react from 'react'
import { motion } from 'framer-motion'
import image1 from '../../images/INICIO/2.(mira galeria de estampados) Conoce nuestra manera de trabajar/1 (2).jpg'
import image2 from '../../images/INICIO/2.(mira galeria de estampados) Conoce nuestra manera de trabajar/2 (2).jpg'
import image3 from '../../images/INICIO/2.(mira galeria de estampados) Conoce nuestra manera de trabajar/3 (2).jpg'
import image4 from '../../images/INICIO/2.(mira galeria de estampados) Conoce nuestra manera de trabajar/4 (2).jpg'
import image5 from '../../images/INICIO/2.(mira galeria de estampados) Conoce nuestra manera de trabajar/5 (2).jpg'
import image6 from '../../images/INICIO/2.(mira galeria de estampados) Conoce nuestra manera de trabajar/6.jpg'
import image7 from '../../images/INICIO/2.(mira galeria de estampados) Conoce nuestra manera de trabajar/7.jpg'


const EstampadosImagenes  = () => {
    return (
     <div className='grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-100 m-16  '>
        <div className='grid gap-4'>
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{scale:1.4}} viewport={{ once: true }}src={image1} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
        </div>
        <div>
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{scale:1.4}} viewport={{ once: true }}src={image7} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
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

export default EstampadosImagenes