import React, { Suspense, useEffect, useState } from "react";

import { estampadosSvg } from "./EstampadosObj";

const Estampados = () => {
  
  const [data, setData] = useState("");
  const [color, setColor] = useState("#0F0211")
  const [LogoImport, setlogoImort] = useState()
  const [fill, setFill] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const postperPage =12


  const handleBgColor = () => {
    setColor("#D41C63")
    setFill('#AADDAA')


  };
  const handleImport =  (e , nombre) => {
   const importDinamico = React.lazy( async () => await import(`./dist/${nombre}`))
   setlogoImort(importDinamico)
  }
  useEffect(() => {
    const lastPostIndex = currentPage * postperPage;
    const firstPostIndex = lastPostIndex -postperPage

    const estampadosSlice =estampadosSvg.slice(firstPostIndex,lastPostIndex)
    const estampados = estampadosSlice.map((item, index) => {
      return <img  id ={index+'svg'} key={item.svg + "data" + index} onClick={ (e)=>handleImport(e, item.nombre)} className='w-96 bg-white-200' style={{fill:'red'}} src={item.svg} alt="svg" /> 
    });
    setData(estampados);
  }, [  currentPage, postperPage]);

  const onHandlePage =(pageCase) => {
    pageCase === 'Siguiente' ?
    setCurrentPage(currentPage+1) 
    :
    currentPage ===1?
      setCurrentPage(1)
      :
      setCurrentPage(currentPage-1)
  }
  return (
    <div>

      {data}
      <button className="btn " onClick={ () => handleBgColor()}>handlebackground</button>
  
      <div></div>
      <button className="btn btn-primary" onClick={() =>onHandlePage('Siguiente')}>Siguiente</button>
      <button className="btn btn-primary" onClick={() =>onHandlePage('Anterior')}>Anterior</button>
      
    { LogoImport&&
    <Suspense fallback={<div>Loading...</div>}>

      <LogoImport stroke={color} fill={fill}/>
    </Suspense>
    }
    </div>
  );
};

export default Estampados;
