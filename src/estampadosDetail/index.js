import React, { Suspense, useEffect, useState } from "react";

import { Orbit } from "@uiball/loaders";
import { estampadosSvg } from "../components/estampados/EstampadosObj";
import { motion } from "framer-motion";
import {useNavigate} from 'react-router-dom';
import { useParams } from "react-router-dom";

const EstampadosDetail = () => {
  const navigate = useNavigate()
  const { name } = useParams();
  const [LogoImport, setLogoImport] = useState();
  const [fill, setFill] = useState();
  const [color, setColor] = useState();
  const [BgColor, setBgColor] = useState();
  const [dataFromSvg, setDataFromSvg] = useState()
  const bgColors = [
    "bg-white",
    "bg-gray-200",
    "bg-gray-300",
    "bg-gray-400",
    "bg-gray-500",
    "bg-gray-600",
    "bg-gray-700",
    "bg-gray-800",
    "bg-gray-900",
    "bg-black",
    "bg-red-50",
    "bg-red-100",
    "bg-red-200",
    "bg-red-300",
    "bg-red-400",
    "bg-red-500",
    "bg-red-600",
    "bg-red-700",
    "bg-red-800",
    "bg-red-900",
    "bg-yellow-50",
    "bg-yellow-100",
    "bg-yellow-200",
    "bg-yellow-300",
    "bg-yellow-400",
    "bg-yellow-500",
    "bg-yellow-600",
    "bg-yellow-700",
    "bg-yellow-800",
    "bg-yellow-900",
    "bg-green-50",
    "bg-green-100",
    "bg-green-200",
    "bg-green-300",
    "bg-green-400",
    "bg-green-500",
    "bg-green-600",
    "bg-green-700",
    "bg-green-800",
    "bg-green-900",
    "bg-blue-50",
    "bg-blue-100",
    "bg-blue-200",
    "bg-blue-300",
    "bg-blue-400",
    "bg-blue-500",
    "bg-blue-600",
    "bg-blue-700",
    "bg-blue-800",
    "bg-blue-900",
    "bg-indigo-50",
    "bg-indigo-100",
    "bg-indigo-200",
    "bg-indigo-300",
    "bg-indigo-400",
    "bg-indigo-500",
    "bg-indigo-600",
    "bg-indigo-700",
    "bg-indigo-800",
    "bg-indigo-900",
    "bg-purple-50",
    "bg-purple-100",
    "bg-purple-200",
    "bg-purple-300",
    "bg-purple-400",
    "bg-purple-500",
    "bg-purple-600",
    "bg-purple-700",
    "bg-purple-800",
    "bg-purple-900",
    "bg-pink-50",
    "bg-pink-100",
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
    "#0000000",
    "#ffffff",
    "#E5E7EB",
    "#D1D5DB",
    "#9CA3AF",
    "#6B7280",
    "#4B5563",
    "#374151",
    "#1F2937",
    "#111827",
    "#FEF2F2",
    "#FEE2E2",
    "#FECACA",
    "#FCA5A5",
    "#F87171",
    "#EF4444",
    "#DC2626",
    "#B91C1C",
    "#991B1B",
    "#7F1D1D",
    "#FFFBEB",
    "#FEF3C7",
    "#FDE68A",
    "#FCD34D",
    "#DBBF24",
    "#F59E0B",
    "#D97706",
    "#B45309",
    "#92400E",
    "#78350F",
    "#ECFDF5",
    "#D1FAE5",
    "#A7F3D0",
    "#6EE7B7",
    "#34D399",
    "#10B981",
    "#059669",
    "#047857",
    "#065F46",
    "#064E3B",
    "#EFF6FF",
    "#DBEAFE",
    "#BFDBFE",
    "#93C5FD",
    "#60A5FA",
    "#3B82F6",
    "#2563EB",
    "#1D4ED8",
    "#1E40AF",
    "#1E3A8A",
    "#EEF2FF",
    "#E0E7FF",
    "#C7D2FE",
    "#A5B4FC",
    "#818CF8",
    "#6366F1",
    "#4F46E5",
    "#4338CA",
    "#3730A3",
    "#312E81",
    "#F5F3FF",
    "#EDE8FE",
    "#DDD6FE",
    "#C4B5FD",
    "#A78BFA",
    "#8B5CF6",
    "#7C3AED",
    "#6D28D9",
    "#5B21B6",
    "#4C1D95",
    "#FDF2F8",
    "#FCE7F3",
    "#FBCFE8",
    "#F9A8D4",
    "#F472B6",
    "#EC4899",
    "#DB2777",
    "#B3185D",
    "#9D174D",
    "#831843",
  ];
  const getrandomNumber = () => {
    const numbersGenerated = [];
    const dataRandmon = []
    for (let index = 0; numbersGenerated.length <= 10; index++) {
      const randomNumber = Math.random() * 100;
      const randomFloor = Math.floor(randomNumber);
      numbersGenerated.push(randomFloor);
      dataRandmon.push(estampadosSvg.at(randomFloor));
    }
    
    return dataRandmon
  };

  const handleBgColor = (bgColor) => {
    setBgColor(bgColor);
  };
  const handleFillColor = (fillColor) => {
    setFill(fillColor);
  };
  const handleStrokeColor = (strokeColor) => {
    setColor(strokeColor);
  };
  const handleNavigate  = (e,nombre) => {
    navigate(`/estampados/${nombre}`)
  }
  useEffect(() => {
   setDataFromSvg( getrandomNumber())
    const importDinamico = React.lazy(
      async () => await import(`../components/estampados/dist/${name}`)
    );
    setLogoImport(importDinamico);
  }, [name]);

  return (
    <div>
      <div className="flex justify-around">
        {LogoImport && (
          <Suspense fallback={<Orbit size={35} color="#231F20" />}>
            <LogoImport
              className={`h-screen ${BgColor}`}
              stroke={color}
              fill={fill}
            />
          </Suspense>
        )}
        <div className="">
          <div>
            <h2 className="text-3xl text-black">Color de fondo</h2>
          </div>

          <div className="grid grid-cols-10 w-96">
            {bgColors.map((i, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleBgColor(i)}
                  className={`w-8 h-8 ${i} grid`}
                ></div>
              );
            })}
          </div>
          <div>
            <div>
              <h2 className="text-3xl text-black">Color de relleno</h2>
            </div>
            <div className="grid grid-cols-10 w-96">
              {fillStrokeColors.map((i, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => handleFillColor(i)}
                    style={{ backgroundColor: i }}
                    className={`w-8 h-8  grid`}
                  ></div>
                );
              })}
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-3xl text-black">Color bordes</h2>
            </div>
            <div className="grid grid-cols-10 w-96">
              {fillStrokeColors.map((i, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => handleStrokeColor(i)}
                    style={{ backgroundColor: i }}
                    className={`w-8 h-8  grid`}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex
    "
      >
        { dataFromSvg &&
          dataFromSvg.map((i,index) => {
            return  <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              layout
              key={i.svg + "data" + index}
              className="w-96 grid my-12  border-xl shadow-md"
              src={i.svg}
              alt="svg"
              onClick={(e) =>handleNavigate(e,i.nombre)}
            />
        })}
      </div>
    </div>
  );
};

export default EstampadosDetail;
