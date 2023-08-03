import './styles.css'

import React, { Suspense, useEffect, useState } from "react";

import { estampadosSvg } from "./EstampadosObj";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Estampados = () => {
  const [data, setData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postperPage = 12;
  const lastPostIndex = currentPage * postperPage;
  const firstPostIndex = lastPostIndex - postperPage;

  const navigate = useNavigate();

  useEffect(() => {
    const handleImport = (e, nombre) => {
      navigate(`/estampados/${nombre}`);
    };
    const estampadosSlice = estampadosSvg.slice(firstPostIndex, lastPostIndex);
    const estampados = estampadosSlice.map((item, index) => {
      return (
        <div className="mx-4">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            exit={{ opacity: 0 }}
            layout
            key={`${item.svg}+${item.nombre}+data+${index}`}
            onClick={(e) => handleImport(e, item.nombre)}
            className="w-96 grid my-12  border-xl shadow-md  hover:shadow-xl hover:shadow-primary/20 hover:cursor-pointer hover:border"
            src={item.svg}
            alt="svg"
          />
        </div>
      );
    });
    setData(estampados);
  }, [currentPage, postperPage, lastPostIndex, firstPostIndex, navigate]);

  const onHandlePage = (pageCase) => {
    pageCase === "Siguiente"
      ? lastPostIndex > estampadosSvg.length
        ? setCurrentPage(currentPage)
        : setCurrentPage(currentPage + 1)
      : currentPage === 1
      ? setCurrentPage(1)
      : setCurrentPage(currentPage - 1);
  };
  return (
    <div>
       <div className='bannerEstampados w-full h-96 flex items-center justify-center'>
           <h1 className='text-6xl text-white'>Nuestros estampados</h1>
        </div>


      <Suspense fallback={<div>Cargando</div>}>
        <motion.div
          layout
          transition={{
            layout: { duration: 0.1 },
          }}
          className=" grid grid-cols-2 md:grid-cols-4 py-12 mx-12"
        >
          {data}
        </motion.div>
      </Suspense>

      <div className="btn-group flex items-center justify-center my-20">
        <button
          className="btn btn-primary"
          onClick={() => onHandlePage("Anterior")}
        >
          «
        </button>
        <button className="btn btn-primary">Pagina {currentPage}</button>
        <button
          className="btn btn-primary"
          onClick={() => onHandlePage("Siguiente")}
        >
          »
        </button>
      </div>
    </div>
  );
};

export default Estampados;
