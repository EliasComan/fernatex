import { Link, useNavigate, useParams } from "react-router-dom";
import React, { Suspense, useEffect, useState } from "react";

import { Orbit } from "@uiball/loaders";
import { estampadosSvg } from "../components/estampados/EstampadosObj";
import { motion } from "framer-motion";

const EstampadosDetail = () => {
  
  const navigate = useNavigate();
  const { name } = useParams();
  const [dataFromSvg, setDataFromSvg] = useState();
  const [image, setImage] = useState()
  
 
  const getrandomNumber = () => {
    const numbersGenerated = [];
    const dataRandmon = [];
    for (let index = 0; numbersGenerated.length <= 10; index++) {
      const randomNumber = Math.random() * 100 - 9;
      const randomFloor = Math.floor(randomNumber);
      numbersGenerated.push(randomFloor);
      dataRandmon.push(estampadosSvg.at(randomFloor));
    }

    return dataRandmon;
  };

  const handleNavigate = (e, nombre) => {
    navigate(`/estampados/${nombre}`);
  };
  useEffect(() => {
    setImage(estampadosSvg.filter(i => i.nombre === name )[0])
    setDataFromSvg(getrandomNumber());
  }, [name,image]);

  return (
    <div className="">
      <div className="flex justify-around mt-12 mb-2 border-2 py-8 px-2 rounded-xl mx-12 w-11/12">
        {image && (
          <Suspense
            fallback={
              <div className="h-screen flex items-center justify-center">
                <Orbit size={35} color="#231F20" />
              </div>
            }
          >
           
         
          
          <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className={`h-screen border shadow-xl rounded-xl `}
          src={image.svg}
          alt="svg"
        />
          
          
          </Suspense>
        )}
        <div className="flex flex-col items-center justify-around w-2/6 h-screen ">
          <div className="flex flex-col items-center justify-center  text-center h-2/6  text-black">
              <h2 className="text-4xl ">Podes consultar por este diseño y muchas mas  en nuestra seccion de <strong><Link to={'/contacto'}>contacto</Link></strong> <hr></hr></h2>
          </div>
          <div clasName="text-center  flex text-black flex-col items-center border h-2/6 border-t-2 justify-center">
              <h2 className="text-4xl text-center text-black">¿Te gustaria ver este diseño en otros colores? podes verlo en nuestro <strong><Link to={'/simulador/11047Aviones01'}>simulador. <hr></hr></Link></strong></h2>
          </div>
        </div>
       
      </div>
     
    
    
    
    
    
      <section className="bg-gray-100 border rounded-xl mx-6 my-20">
        <div className="mt-12 px-4 mb-2">
          <h2 className="text-2xl text-black font-semibold  border-b">Esto  tambien podria gustarte</h2>
        </div>
        <div
          className="flex  gap-5 mb-12 snap-mandatory overflow-x-auto max-w-screen p-4 mx-4 bg-white
        "
        >
          {dataFromSvg &&
            dataFromSvg.map((i, index) => {
             let img = <div></div>
              i === undefined ?
              img =  <div></div>
             :
             img = 
                <div className="shrink-0 rounded w-2/5  shadow-lg snap-center ">
                  <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    key={`${i.svg}+/data/+${index}`}
                    className=" aspect-video object-cover border-xl shadow-md rounded-lg"
                    src={i.svg}
                    alt="svg"
                    onClick={(e) => handleNavigate(e, i.nombre)}
                  />
                </div>
             
             return img
            })}
        </div>
      </section>
    </div>
  );
};

export default EstampadosDetail;
