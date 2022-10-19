import React, { Suspense, useEffect, useState } from "react";

import { Orbit } from "@uiball/loaders";
import { estampadosSvg } from "../components/estampados/EstampadosObj";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const EstampadosDetail = () => {
  
  const navigate = useNavigate();
  const { name } = useParams();
  const [LogoImport, setLogoImport] = useState();
  const [fill, setFill] = useState();
  const [color, setColor] = useState();
  const [BgColor, setBgColor] = useState();
  const [dataFromSvg, setDataFromSvg] = useState();
  const [selectForm, setselectForm] = useState();
  const [nombre, setNombre] = useState();
  const [nombreEmpresa, setNombreEmpresa] = useState();
  const [email, setEmail] = useState();
  const [telefono, setTelefono] = useState();
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
  const getrandomNumber = () => {
    const numbersGenerated = [];
    const dataRandmon = [];
    for (let index = 0; numbersGenerated.length <= 10; index++) {
      const randomNumber = Math.random() * 100 - 2;
      const randomFloor = Math.floor(randomNumber);
      numbersGenerated.push(randomFloor);
      dataRandmon.push(estampadosSvg.at(randomFloor));
    }

    return dataRandmon;
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
  const handleNavigate = (e, nombre) => {
    navigate(`/estampados/${nombre}`);
  };
  const handleForm = (e) => {
    e.preventDefault();
    console.log("form");
    console.log(selectForm, nombre, nombreEmpresa, telefono, email);
  };
  useEffect(() => {
    setDataFromSvg(getrandomNumber());
    const importDinamico = React.lazy(
      async () => await import(`../components/estampados/dist/${name}`)
    );
    setLogoImport(importDinamico);
  }, [name]);

  return (
    <div>
      <div className="flex justify-around mt-12 mb-2 border-2 py-8 px-2 rounded-xl mx-12">
        {LogoImport && (
          <Suspense
            fallback={
              <div className="h-screen flex items-center justify-center">
                <Orbit size={35} color="#231F20" />
              </div>
            }
          >
            <LogoImport
              className={`h-screen border-lg shadow-lg ${BgColor}`}
              stroke={color}
              fill={fill}
            />
          </Suspense>
        )}
        <div className="border-2 py-4 rounded-xl border-spacing-5 px-10  bg-gray-100">
          <div>
            <h2 className="text-3xl mb-2 text-black">Color de fondo</h2>
          </div>

          <div className="grid grid-cols-8 border rounded-lg p-2">
            {bgColors.map((i, index) => {
              return (
                <div
                  key={i + index + "bgColor"}
                  onClick={() => handleBgColor(i)}
                  className={`w-8 h-8 ${i} grid rounded-lg m-0.5`}
                ></div>
              );
            })}
          </div>
          <div>
            <div>
              <h2 className="text-3xl my-2 text-black">Color de relleno</h2>
            </div>
            <div className="grid grid-cols-8 border rounded-lg p-2">
              {fillStrokeColors.map((i, index) => {
                return (
                  <div
                    key={i + index + "stroke"}
                    onClick={() => handleFillColor(i)}
                    style={{ backgroundColor: i }}
                    className={`w-8 h-8  grid rounded-lg m-0.5`}
                  ></div>
                );
              })}
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-3xl my-2 text-black">Color bordes</h2>
            </div>
            <div className="grid grid-cols-8 border rounded-lg p-2">
              {fillStrokeColors.map((i, index) => {
                return (
                  <div
                    key={i + index + "strokecolor"}
                    onClick={() => handleStrokeColor(i)}
                    style={{ backgroundColor: i }}
                    className={`w-8 h-8  grid rounded-lg m-0.5`}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
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
              return (
                <div className="shrink-0 rounded w-2/5  shadow-lg snap-center ">
                  <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    key={i.svg + "/data/" + index}
                    className=" aspect-video object-cover border-xl shadow-md rounded-lg"
                    src={i.svg}
                    alt="svg"
                    onClick={(e) => handleNavigate(e, i.nombre)}
                  />
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
};

export default EstampadosDetail;
