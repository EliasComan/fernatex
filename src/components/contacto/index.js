import { BiBuildingHouse } from 'react-icons/bi'
import { BsTelephone } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import React from 'react'

const Contacto = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="text-black flex flex-col items-center justify-center mt-10">
        <h1 className="text-4xl font-serif">
          <strong>Contactenos</strong>
        </h1>
        <p>Nuestro equipo se comunicara lo mas rapido posible</p>
      </div>
      <div className=" flex items-center justify-center h-screen w-screen mb-12">
        <div className="w-5/6 h-5/6 flex  bg-gray-200/75 mx-12 items-center   border-2 shadow rounded-xl  justify-around">
          <div className="w-full h-full flex flex-col pt-12">
            <div className="flex items-start ">
              <div className="flex justify-around w-full">
                <div className="form-control w-full mx-10 ">
                  <label className="label">
                    <span className="label-text text-black font-semibold">
                      Nombre
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="..."
                    className="input input-primary input-bordered w-96 max-w-md shadow-lg"
                    required
                  />
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text text-black font-semibold">
                      Nombre empresa
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="..."
                    className="input input-primary input-bordered  w-96 shadow-lg"
                    required
                  />
                </div>
              </div>
            </div>
            <div className=" flex items-start mx-10">
              <div className="flex justify-around w-full ">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text text-black font-semibold">
                      Email
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="..."
                    className="input input-primary input-bordered w-96 max-w-md shadow-lg"
                    required
                  />
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text text-black font-semibold">
                      Telefono
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="..."
                    className="input input-primary input-bordered w-96 max-w-md shadow-lg"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-control  flex mx-10">
              <label className="label text-start">
                <span className="label-text text-start text-black font-semibold">
                  ¿Con que rubro te sentis mas identificado?
                </span>
              </label>
              <select
                className="select select-bordered select-primary text-black w-5/6 shadow-lg "
                required
              >
                <option disabled selected>
                  Elegi uno
                </option>
                <option>Confeccionista</option>
                <option>Mayorista</option>
                <option>Marca</option>
              </select>
            </div>
            <div className="w-3/6 mx-10">
              <div className="form-control w-full  ">
                <label className="label">
                  <span className="label-text text-black font-semibold">
                    Subi tu propio estampado para que nosotros podamos verlo!
                  </span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered file-input-primary w-full shadow-lg "
                />
              </div>
              <div>
                <button className="btn btn-primary  my-8">Enviar</button>
              </div>
            </div>
          </div>
          <div className="h-full shadow w-0.5 bg-primary/20"></div>
          <div className="w-2/6 h-4/6 flex flex-col items-center justify-around">
            <div className="flex flex-col items-center justify-center">
              <div className="bg-gray-300 shadow border border-spacing-4 rounded-full p-4">
                <BsTelephone color="black" size={70} className="" />
              </div>
              <h2 className="text-black font-serif text-3xl">Llamenos</h2>
              <p className="text-black text-center">
                Comuniquese con un miembro de nuestro equipo
              </p>
              <p className="text-primary">123456789</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="bg-gray-300 shadow border border-spacing-4 rounded-full p-4">
                <HiOutlineLocationMarker size={70} color="black" />
              </div>
              <h2 className="text-black font-serif text-3xl">
                Nuestra ubicacion
              </h2>
              <p className="text-black text-center">
                {' '}
                Direccion fernatex, 12345
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="bg-gray-300 shadow border border-spacing-4 rounded-full p-4">
                <BiBuildingHouse color="black" size={70} />
              </div>
              <h2 className='text-black text-3xl'>Fernatex</h2>
              <p className='text-primary'>- Estamperia artesanal -</p>
              <p className='text-black'>email@fernatex.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto
