import React, { Suspense, useEffect, useState } from "react";

import { estampadosSvg } from "./EstampadosObj";
import { motion } from "framer-motion";
import {useNavigate} from 'react-router-dom';

const Estampados = () => {
  const navigate = useNavigate()
  const [data, setData] = useState("");
  const [color, setColor] = useState("#0F0211");
  const [bgColor, setBgColor] = useState();
  const [LogoImport, setlogoImort] = useState();
  const [fill, setFill] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const postperPage = 12;
  const lastPostIndex = currentPage * postperPage;
  const firstPostIndex = lastPostIndex - postperPage;

  const handleBgColor = () => {
    setColor("#D41C63");
    setFill("#AADDAA");
    setBgColor("bg-yellow-600");
  };
  const handleImport = (e, nombre) => {
   /* const importDinamico = React.lazy(
      async () => await import(`./dist/${nombre}`)
    );
    setlogoImort(importDinamico);
  */
 navigate(`/estampados/${nombre}`)
    
  };
  useEffect(() => {
    const estampadosSlice = estampadosSvg.slice(firstPostIndex, lastPostIndex);
    const estampados = estampadosSlice.map((item, index) => {
      return (
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          layout
          id={index + "svg"}
          key={item.svg + "data" + index}
          onClick={(e) => handleImport(e, item.nombre)}
          className="w-96"
          src={item.svg}
          alt="svg"
        />
      );
    });
    setData(estampados);
  }, [currentPage, postperPage, lastPostIndex, firstPostIndex]);

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
      <div className="h-auto">

      {data}
      </div>
      <button className="btn " onClick={() => handleBgColor()}>
        handlebackground
      </button>

      <div></div>

      <div className="btn-group">
        <button className="btn" onClick={() => onHandlePage("Anterior")}>
          «
        </button>
        <button className="btn">Page {currentPage}</button>
        <button className="btn" onClick={() => onHandlePage("Siguiente")}>
          »
        </button>
      </div>

      {LogoImport && (
        <Suspense fallback={<div>Loading...</div>}>
          <LogoImport
            className={`w-96 ${bgColor}`}
            stroke={color}
            fill={fill}
          />
        </Suspense>
      )}
    </div>
  );
};

export default Estampados;
