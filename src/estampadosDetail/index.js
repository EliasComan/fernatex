import React, { Suspense, useEffect, useState } from 'react'

import {useParams} from 'react-router-dom';

const EstampadosDetail = () => {
    const {name} = useParams()
    console.log(name)
    const [LogoImport, setLogoImport] = useState()

    useEffect(() => {
        const importDinamico = React.lazy(
            async () => await import(`../components/estampados/dist/${name}`)
          );
          setLogoImport(importDinamico);
    },[name])
  return (
    <div>{LogoImport && (
        <Suspense fallback={<div>Loading...</div>}>
          <LogoImport
            //className={`w-96 ${bgColor}`}
            //stroke={color}
            //fill={fill}
          />
        </Suspense>
      )}
      </div>
  )
}

export default EstampadosDetail