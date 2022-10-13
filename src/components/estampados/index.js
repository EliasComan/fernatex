import React, { useEffect, useState } from "react";

import { estampadosSvg } from "./EstampadosObj";
import { motion } from "framer-motion";
import {useNavigate} from 'react-router-dom';

const Estampados = () => {
  const navigate = useNavigate()
  const [data, setData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postperPage = 12;
  const lastPostIndex = currentPage * postperPage;
  const firstPostIndex = lastPostIndex - postperPage;

  const handleImport = ( e,nombre) => {
    navigate(`/estampados/${nombre}`)
    
  };
  
  useEffect(() => {
    const estampadosSlice = estampadosSvg.slice(firstPostIndex, lastPostIndex);
    const estampados = estampadosSlice.map((item, index) => {
      return (
        <div className="mx-4">

        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          layout
          id={index + "svg"}
          key={item.svg + "data" + index}
          onClick={(e) => handleImport(e, item.nombre)}
          className="w-96 grid my-12  border-xl shadow-md"
          src={item.svg}
          alt="svg"
          />
          </div>
      );
    });
    setData(estampados);
  }, [currentPage, postperPage, lastPostIndex, firstPostIndex,]);

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
      <div className=" grid grid-cols-4 py-12 mx-12">

      {data}
      </div>

      <div></div>

      <div className="btn-group flex items-center justify-center my-20">
        <button className="btn btn-primary" onClick={() => onHandlePage("Anterior")}>
          «
        </button>
        <button className="btn btn-primary">Pagina {currentPage}</button>
        <button className="btn btn-primary" onClick={() => onHandlePage("Siguiente")}>
          »
        </button>
      </div>

   
    </div>
  );
};

export default Estampados;
