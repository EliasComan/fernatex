import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import image1 from '../../images/INICIO/1.(aprende mas de nosotros) Conoce Nuestro Staff/2.Administracion y Ventas.jpg'
import image3 from '../../images/INICIO/1.(aprende mas de nosotros) Conoce Nuestro Staff/3.Personal Fabrica y Produccion.jpg'
import image4 from '../../images/INICIO/2.(mira galeria de estampados) Conoce nuestra manera de trabajar/1 (2).jpg'
import image5 from '../../images/INICIO/2.(mira galeria de estampados) Conoce nuestra manera de trabajar/2 (2).jpg'
import image6 from '../../images/INICIO/2.(mira galeria de estampados) Conoce nuestra manera de trabajar/3 (2).jpg'
import image7 from '../../images/INICIO/2.(mira galeria de estampados) Conoce nuestra manera de trabajar/4 (2).jpg'
import image8 from '../../images/INICIO/2.(mira galeria de estampados) Conoce nuestra manera de trabajar/5 (2).jpg'
import image9 from '../../images/INICIO/2.(mira galeria de estampados) Conoce nuestra manera de trabajar/6.jpg'
import image10 from '../../images/INICIO/2.(mira galeria de estampados) Conoce nuestra manera de trabajar/7.jpg'
import image11 from '../../images/INICIO/3.Comunicate con nuestra Seccion/1 Equipo de Administracion - Diseño y Ventas.jpg'
import image12 from '../../images/INICIO/3.Comunicate con nuestra Seccion/Administracion - Finanzas.jpg'
import image13 from '../../images/INICIO/3.Comunicate con nuestra Seccion/Administracion- Contable.jpg'
import image14 from '../../images/INICIO/3.Comunicate con nuestra Seccion/Administracion- Gerencia.jpg'
import image15 from '../../images/INICIO/3.Comunicate con nuestra Seccion/Diseño y Produccion.jpg'
import image16 from '../../images/INICIO/3.Comunicate con nuestra Seccion/Diseño y produccion 1.jpg'


const Galeria = () => {

    return<div className='grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-100 m-16 '>
        <div className='grid gap-4'>

            <div>
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{scale:1.4}} viewport={{ once: true }}src={image1} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
            </div>
            <div>
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{scale:1.4}}  viewport={{ once: true }}src={image3} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
            </div>
            <div className='flex flex-col items-center justify-center h-72 w-full'>
          <h1 className='text-black text-xl md:text-3xl font-serif text-center'>Aprende mas acerca<hr></hr> de <strong><Link to={'/nosotros'}>nosotros.</Link></strong></h1>
          <h2 className='text-center text-black italic'>Haciendo click <strong><Link to={'/nosotros'}>aqui.</Link></strong></h2>
        </div>
            <div>
                <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} whileHover={{scale:1.4}}  src={image4} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow hover:scale' />
            </div>
            <div>
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} whileHover={{scale:1.4}} src={image5} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
            </div>
        </div>
        <div className='grid gap-4'>

            <div>
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} whileHover={{scale:1.4}} src={image6} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
            </div>
            <div>
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} whileHover={{scale:1.4}} src={image7} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
            </div>
            <div>
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{scale:1.4}} viewport={{ once: true }} src={image8} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
            </div>
            <div className='flex flex-col items-center h-72 justify-center'>
        <h1 className='text-black text-xl md:text-3xl font-serif text-center'>Mira nuestra galeria<hr></hr> de <strong><Link to={'/estampados'}>estampados.</Link></strong></h1>
          <h2 className='text-center text-black italic'>Haciendo click <strong><Link to={'/estampados'}>aqui.</Link></strong></h2>
        </div>
            <div>
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{scale:1.4}} viewport={{ once: true }} src={image9} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
            </div>
        </div>
        <div className='grid gap-4'>
        <div className='flex flex-col items-center justify-center h-72 '>
        <h1 className='text-black text-xl md:text-3xl font-serif text-center'>Comunicate con nosotros<hr></hr> en nuestra seccion de <strong><Link to={'/contacto'}>contacto.</Link></strong></h1>
          <h2 className='text-center text-black italic'>Haciendo click <strong><Link to={'/contacto'}>aqui.</Link></strong></h2>
       </div>
            <div>
                <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} whileHover={{scale:1.4}} src={image10} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
            </div>
            <div>
                <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} whileHover={{scale:1.4}} src={image11} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
            </div>
            <div>
                <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} whileHover={{scale:1.4}} src={image12} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
            </div>
            <div>
                <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} whileHover={{scale:1.4}} src={image13} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
            </div>


        </div>
        <div className='grid gap-4'>
        <div>
                <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} whileHover={{scale:1.4}} src={image14} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
            </div>
            <div className='flex h-72 flex-col items-center justify-center '>
       <h1 className='text-black text-xl md:text-3xl font-serif text-center'>Pone a prueba nuestros diseños<hr></hr> en nuestro  <strong><Link to={'/simulador/11047Aviones01'}>simulador.</Link></strong></h1>
          <h2 className='text-center text-black italic'>Haciendo click <strong><Link to={'/simulador/11047Aviones01'}>aqui.</Link></strong></h2>
        
        </div>
            <div>
                <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} whileHover={{scale:1.4}} src={image15} alt="" srcset="" className='h-auto w-full  max-w-full rounded-xl shadow' />
            </div>
            <div>
                <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} whileHover={{scale:1.4}} src={image16} alt="" srcset="" className='h-auto w-full max-w-full rounded-xl shadow' />
            </div>
            <div>
            </div>
           



        </div>




    </div>



}

export default Galeria