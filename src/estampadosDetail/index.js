import React, { Suspense, useEffect, useState } from "react";

import { Orbit } from "@uiball/loaders";
import { estampadosSvg } from "../components/estampados/EstampadosObj";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const EstampadosDetail = () => {
  
  const navigate = useNavigate();
  const { name } = useParams();
  const [dataFromSvg, setDataFromSvg] = useState();
  const [selectForm, setselectForm] = useState();
  const [nombre, setNombre] = useState();
  const [nombreEmpresa, setNombreEmpresa] = useState();
  const [email, setEmail] = useState();
  const [telefono, setTelefono] = useState();
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
  const handleForm = (e) => {
    e.preventDefault();
    console.log(selectForm, nombre, nombreEmpresa, telefono, email);
  };
  useEffect(() => {
    setImage(estampadosSvg.filter(i => i.nombre === name )[0])
    setDataFromSvg(getrandomNumber());
  }, [name,image]);

  return (
    <div>
      <div className="flex justify-around mt-12 mb-2 border-2 py-8 px-2 rounded-xl mx-12">
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
          className={`h-screen border-lg shadow-lg `}
          src={image.svg}
          alt="svg"
        />
          
          
          </Suspense>
        )}
       
      </div>
      <div className=" mx-12 mt-20 flex    rounded-xl">
        <div className="w-4/6 flex flex-col items-start justify-start p-12 border-y-2 rounded-xl shadow bg-gray-100">
          <h2 className="text-3xl text-black">
            Consulta acerca de nuestros servicios.
          </h2>
          <form className="w-full  mt-6  " onSubmit={(e) => handleForm(e)}>
            <div className="flex justify-between items-center w-full ">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-black">Nombre</span>
                </label>
                <input
                  type="text"
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="..."
                  className="input input-bordered w-full max-w-xs text-black"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-black">Nombre empresa</span>
                </label>
                <input
                  onChange={(e) => setNombreEmpresa(e.target.value)}
                  type="text"
                  placeholder="..."
                  className="input input-bordered w-full max-w-xs text-black"
                />
              </div>
            </div>
            <div className="w-full my-10 flex flex-col  justify-center   rounded-md">
              <h2 className="text-black text-xl">
                ¿Con cual rubro te identificas mas?
              </h2>
              <select
                onChange={(e) => setselectForm(e.target.value)}
                defaultValue={"Marca"}
                className="select w-full text-black"
              >
                <option disabled>¿Con cual rubro te identificas mas?</option>
                <option className="text-black" value={"Marca"}>
                  Marca
                </option>
                <option className="text-black" value={"Mayorista"}>
                  Mayorista
                </option>
                <option className="text-black" value={"confeccionista"}>
                  Confeccionista
                </option>
              </select>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="..."
                  className="input input-bordered w-full max-w-xs text-black"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-black">
                    Numero de telefono
                  </span>
                </label>
                <input
                  type="text"
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="..."
                  className="input input-bordered  text-black"
                />
              </div>
            </div>
            <div className="flex items-center justify-end mt-8">
              <button className="btn btn-primary" onClick={() => handleForm()}>
                
                Consultar.
              </button>
            </div>
          </form>
        </div>
        <div className="w-2/6 flex items-center justify-around flex-col p-4 border rounded-xl  shadow ">
                <h2 className="text-5xl text-black text-center">¿Sabias que ademas podes subir tu propio diseño y realizar tu consulta a partir del mismo?</h2>
                <button onClick={ () =>navigate('/contacto')} className="btn btn-primary mt-28">Consultar.</button>
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
