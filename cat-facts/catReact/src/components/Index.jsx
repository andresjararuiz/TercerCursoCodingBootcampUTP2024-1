import React,{useEffect, useState} from 'react'
import { catFunction } from '../functions/funciones'
import { catImgFunction } from '../functions/funciones'

const GatosApp = () => {

  const [Cat, setCatFacts] = useState(null)
    useEffect(()=>{
    catFunction(setCatFacts)
  },[])

    const [CatImagen, setCatImagen] = useState(null)
      useEffect(()=>{
      catImgFunction(setCatImagen)
    },[])

    const handleClick = () => {
      catFactsFunction(setCatFacts)
      catImgFunction(setCatImagen)
    }

  return (
    <>
    <div className='container'>
      {Cat != null ? (
      <div>{Cat}</div>
    ) : ('NOT cats')}

    <br></br>

    {CatImagen != null ? (
      <img src={CatImg} alt="imagen.png" height="70%"/>
    ) : ('NOT cats img')}
    <br></br>
    <button type="button" onClick={handleClick}> Mas gatos
      </button>
      </div>
    </>    
  )
}

export default GatosApp