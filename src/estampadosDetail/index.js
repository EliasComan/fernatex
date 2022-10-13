import React, { Suspense, useEffect, useState } from 'react'

import { Orbit } from '@uiball/loaders'
import {useParams} from 'react-router-dom';

const EstampadosDetail = () => {
    const {name} = useParams()
    console.log(name)
    const [LogoImport, setLogoImport] = useState()
    const [fill, setFill] = useState()
    const [color, setColor] = useState()
    const [BgColor, setBgColor] = useState()

    const handleBgColor = () => {
        setColor("#D41C63");
        setFill("#AADDAA");
        setBgColor("bg-yellow-600");
      };
    useEffect(() => {
        const importDinamico = React.lazy(
            async () => await import(`../components/estampados/dist/${name}`)
          );
          setLogoImport(importDinamico);
    },[name])


  return (
    <div>{LogoImport && (
        <Suspense fallback={<Orbit size={35} color="#231F20" />}>
          <LogoImport
            className={`w-96 ${BgColor}`}
            stroke={color}
            fill={fill}
          />
        </Suspense>
      )}
      <button className='btn btn-primary' onClick={handleBgColor}>Color</button>
      </div>
  )
}

export default EstampadosDetail