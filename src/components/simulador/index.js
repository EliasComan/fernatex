import React, { Suspense, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { estampadosSvg } from "../estampados/EstampadosObj";
import { motion } from "framer-motion";

const Simulador = () => {
  const bgColors = [
    "bg-white",
    "bg-gray-400",
    "bg-gray-500",
    "bg-gray-600",
    "bg-gray-700",
    "bg-gray-800",
    "bg-gray-900",
    "bg-black",
    "bg-red-200",
    "bg-red-300",
    "bg-red-400",
    "bg-red-500",
    "bg-red-600",
    "bg-red-700",
    "bg-red-800",
    "bg-red-900",
    "bg-yellow-200",
    "bg-yellow-300",
    "bg-yellow-400",
    "bg-yellow-500",
    "bg-yellow-600",
    "bg-yellow-700",
    "bg-yellow-800",
    "bg-yellow-900",
    "bg-green-200",
    "bg-green-300",
    "bg-green-400",
    "bg-green-500",
    "bg-green-600",
    "bg-green-700",
    "bg-green-800",
    "bg-green-900",
    "bg-blue-200",
    "bg-blue-300",
    "bg-blue-400",
    "bg-blue-500",
    "bg-blue-600",
    "bg-blue-700",
    "bg-blue-800",
    "bg-blue-900",
    "bg-indigo-200",
    "bg-indigo-300",
    "bg-indigo-400",
    "bg-indigo-500",
    "bg-indigo-600",
    "bg-indigo-700",
    "bg-indigo-800",
    "bg-indigo-900",
    "bg-purple-200",
    "bg-purple-300",
    "bg-purple-400",
    "bg-purple-500",
    "bg-purple-600",
    "bg-purple-700",
    "bg-purple-800",
    "bg-purple-900",
    "bg-pink-200",
    "bg-pink-300",
    "bg-pink-400",
    "bg-pink-500",
    "bg-pink-600",
    "bg-pink-700",
    "bg-pink-800",
    "bg-pink-900",
  ];
  const fillStrokeColors = [
    "#ffffff",
    "#D1D5DB",
    "#9CA3AF",
    "#6B7280",
    "#4B5563",
    "#374151",
    "#1F2937",
    "#111827",
    "#FECACA",
    "#FCA5A5",
    "#F87171",
    "#EF4444",
    "#DC2626",
    "#B91C1C",
    "#991B1B",
    "#7F1D1D",
    "#FDE68A",
    "#FCD34D",
    "#DBBF24",
    "#F59E0B",
    "#D97706",
    "#B45309",
    "#92400E",
    "#78350F",
    "#A7F3D0",
    "#6EE7B7",
    "#34D399",
    "#10B981",
    "#059669",
    "#047857",
    "#065F46",
    "#064E3B",
    "#BFDBFE",
    "#93C5FD",
    "#60A5FA",
    "#3B82F6",
    "#2563EB",
    "#1D4ED8",
    "#1E40AF",
    "#1E3A8A",
    "#C7D2FE",
    "#A5B4FC",
    "#818CF8",
    "#6366F1",
    "#4F46E5",
    "#4338CA",
    "#3730A3",
    "#312E81",
    "#DDD6FE",
    "#C4B5FD",
    "#A78BFA",
    "#8B5CF6",
    "#7C3AED",
    "#6D28D9",
    "#5B21B6",
    "#4C1D95",
    "#FBCFE8",
    "#F9A8D4",
    "#F472B6",
    "#EC4899",
    "#DB2777",
    "#B3185D",
    "#9D174D",
    "#831843",
  ];
  const { estampado } = useParams();
  const [fill, setFill] = useState();
  const [color, setColor] = useState();
  const [BgColor, setBgColor] = useState();
  const [EstampadoImport, setEstampadoImport] = useState();
  const navigation = useNavigate();

  const handleBgColor = (bgColor) => {
    setBgColor(bgColor);
    setFill(bgColor)
  };
  const handleFillColor = (fillColor) => {
    setFill(fillColor);
  };
  const handleStrokeColor = (strokeColor) => {
    setColor(strokeColor);
  };
  useEffect(() => {
    const importDinamico = React.lazy(
      async () => await import(`../estampados/dist/${estampado}`)
    );
    setEstampadoImport(importDinamico);
  }, [estampado]);
  return (
    <div> 
      <div className="flex flex-col items-center justify-center my-12 text-black ">
        <h1 className="text-black text-4xl font-serif my-4">Bienvenido a nuestro simulador interactivo</h1>
        <h2><strong>Paso 1.</strong></h2>
        <p>Elija un diseño que mas le guste</p>
        <h2><strong>Paso 2.</strong></h2>
        <p>Elija un color de fondo, de relleno y bordes</p>
        <h2><strong>Paso 3.</strong></h2>
        <p>Repita cuantas veces quiera</p>
        

      </div>
      <div className=" w-screen flex flex-col items-center justify-center">
      <div className="w-11/12  my-5 overflow-x-auto flex  border rounded-xl p-2">
          {estampadosSvg.slice(0,22).map((i, index) => {
            return (
              <div className=" shrink-0  mx-1 snap-center shadow-lg  ">
                <motion.img
                  src={i.svg}
                  className="w-32  border rounded-xl "
                  key={`${i.nombre}+svg+estamapdos+${index}`}
                  onClick={() => navigation(`/simulador/${i.nombre}`)}
                  alt="estamapdo"
                />
              </div>
            );
          })}
        </div>
        <div className="w-11/12  my-5 overflow-x-auto flex  border rounded-xl p-2">
          {estampadosSvg.slice(23,50).map((i, index) => {
            return (
              <div className=" shrink-0 rounded   mx-1 shadow-lg snap-center ">
                <motion.img
                  src={i.svg}
                  className="w-32  border rounded-xl gap-3"
                  key={`${i.nombre}+svg+estamapdos+${index}`}
                  onClick={() => navigation(`/simulador/${i.nombre}`)}
                  alt="estamapdo"
                />
              </div>
            );
          })}
        </div>
        <div className="w-11/12  my-5 overflow-x-auto flex  border rounded-xl p-2">
          {estampadosSvg.slice(50,75).map((i, index) => {
            return (
              <div className=" shrink-0 rounded   mx-1 shadow-lg snap-center ">
                <motion.img
                  src={i.svg}
                  className="w-32  border rounded-xl gap-3"
                  key={`${i.nombre}+svg+estamapdos+${index}`}
                  onClick={() => navigation(`/simulador/${i.nombre}`)}
                  alt="estamapdo"
                />
              </div>
            );
          })}
        </div>
    
        
      </div>
      
      <div className=" w-screen m-10">
        <div className=" flex justify-around items-center ">
          <Suspense fallback={<div>Cargando</div>}>
            {EstampadoImport && (
              <EstampadoImport
                className={`h-screen border-lg shadow-lg ${BgColor} border rounded-xl`}
                stroke={color}
                fill={fill}
                
              />
            )}
          </Suspense>

          <div className="border-2   rounded-xl border-spacing-6  max-h-screen overflow-y-auto   bg-gray-100 p-8">
            <div className="">
              <div>
                <h2 className="text-3xl text-center text-black">Color de fondo</h2>
              </div>
              <div className="grid grid-cols-8 border shadow-xl rounded-lg p-8 m-4 bg-gray-200">
                {bgColors.map((i, index) => {
                  return (
                    <div
                      key={`${i}+${i * index}+${index}+bgColor`}
                      onClick={() => handleBgColor(i)}
                      className={`w-10 h-10 ${i} grid border border-gray-200  shadow-xl  rounded-lg m-0.5`}
                    ></div>
                  );
                })}
              </div>
            </div>
            <div>
              <div>
                <div>
                  <h2 className="text-3xl text-center  text-black">Color de relleno</h2>
                </div>
                <div className="grid grid-cols-8 border shadow-xl bg-gray-200 rounded-lg p-8 m-4">
                  {fillStrokeColors.map((i, index) => {
                    return (
                      <div
                        key={`${i}+${i + index}+${index}+stroke`}
                        onClick={() => handleFillColor(i)}
                        style={{ backgroundColor: i }}
                        className={`w-10 h-10 shadow-xl border border-gray-200 grid rounded-lg m-0.5`}
                      ></div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <h2 className="text-3xl text-center text-black">Color bordes</h2>
                </div>
                <div className="grid grid-cols-8 border rounded-lg p-8 m-4 bg-gray-200 shadow-xl max-w-screen">
                  {fillStrokeColors.map((i, index) => {
                    return (
                      <div
                        key={`${i}+${index * 10}+strokecolorS`}
                        onClick={() => handleStrokeColor(i)}
                        style={{ backgroundColor: i }}
                        className={`w-10 h-10  grid shadow-xl border border-gray-200 rounded-lg m-0.5`}
                      ></div>
                    );
                  })}
                </div>
              </div>
            </div>
      </div>
        </div>

        
      
      </div>
    
    </div>
  );
};

export default Simulador;
