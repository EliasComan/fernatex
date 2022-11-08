import './styles.css'

import React from 'react'
import adminyventas from '../../images/ADMINISTRACION Y VENTAS 1.jpg'
import imgEdificio from '../../images/IMG_3087 (1).jpg'
import imgFabrica from '../../images/IMG_3049.jpg'
import imgPersonal from '../../images/PERSONAL FABRICA 1 cambio.jpg'
import { motion } from 'framer-motion'

const Nosotros = () => {
  return (
    <div>
        <div className='banner w-full h-72 flex items-center justify-center'>
           <h1 className='text-3xl text-white'>Nosotros</h1>
        </div>
        <div className='flex flex-col w-full items-center justify-center'>
            <div className='flex my-24'>
                <div className=' mt-20'>
                <motion.img layout initial={{opacity:0}}whileInView={{opacity:1}} transition={{duration:2}} viewport={{once:true}}  className='w-96 h-auto' src={imgEdificio} alt="" />
                <motion.img layout initial={{opacity:0}}whileInView={{opacity:1}} transition={{duration:2}} viewport={{once:true}}  className='w-96   h-auto mt-4' src={imgFabrica} alt=''/>

                </div>
                <div className='flex flex-col  '>
                    <h1 className='text-3xl font-bold font-sans mx-12 text-black'>Fernatex</h1>
                    <div className='bg-primary h-0.5 w-24 mx-12'></div>
                    <p className='text-ellipsis w-96 mx-12 my-4 text-black'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Vero, porro quam, alias voluptatibus rerum eaque voluptate dicta cupiditate quidem architecto similique ad? Mollitia hic laboriosam dolor, 
                     non odio voluptatem placeat!</p>
                     <p className='text-ellipsis w-96 mx-12 my-4 text-black'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aut, assumenda 
                        voluptatum omnis vel officia sequi quaerat veniam laboriosam quisquam voluptas repudiandae ea 
                        iure earum quasi hic obcaecati in! Nam.</p>
                        <p className='text-ellipsis w-96 mx-12 my-4 text-black'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum necessitatibus, sequi, similique eum voluptatibus quos provident 
                            asperiores dolorum exercitationem non maxime illo natus omnis. Et ducimus nemo quidem quaerat excepturi.
                        </p>
                </div>
            </div>
          

        </div>
         <div className='flex flex-col w-full items-center justify-center'>
            <div className='flex my-24'>
                <div className='flex flex-col  '>
                    <h1 className='text-3xl font-bold font-sans mx-12 text-black'>Nuestra historia</h1>
                    <div className='bg-primary h-0.5 w-24 mx-12'></div>
                    <p className='text-ellipsis w-96 mx-12 my-4 text-black'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Vero, porro quam, alias voluptatibus rerum eaque voluptate dicta cupiditate quidem architecto similique ad? Mollitia hic laboriosam dolor, 
                     non odio voluptatem placeat!</p>
                     <p className='text-ellipsis w-96 mx-12 my-4 text-black'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aut, assumenda 
                        voluptatum omnis vel officia sequi quaerat veniam laboriosam quisquam voluptas repudiandae ea 
                        iure earum quasi hic obcaecati in! Nam.</p>
                        <p className='text-ellipsis w-96 mx-12 my-4 text-black'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum necessitatibus, sequi, similique eum voluptatibus quos provident 
                            asperiores dolorum exercitationem non maxime illo natus omnis. Et ducimus nemo quidem quaerat excepturi.
                        </p>
                </div>
                <div className=' mt-20'>
                    <motion.img layout initial={{opacity:0}}whileInView={{opacity:1}} transition={{duration:2}} viewport={{once:true}} className='w-96 h-auto' src={adminyventas} alt="" />
                    <motion.img layout initial={{opacity:0}}whileInView={{opacity:1}} transition={{duration:2}} viewport={{once:true}} className='w-96   h-auto mt-4' src={imgPersonal} alt=''/>

                </div>
            </div>
          

        </div>
    </div>
  )
}

export default Nosotros