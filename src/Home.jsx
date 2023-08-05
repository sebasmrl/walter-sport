/* import { Cabecera } from "./components/Cabecera"
import { Carousel } from "./components/Carousel"
import { CarouselMinNosotros } from "./components/CarouselMinNosotros"
import { Navbar } from "./components/Navbar"
import { PresentacionNosotros } from "./components/PresentacionNosotros"
import { ProductosMasVendidos } from "./components/ProductosMasVendidos"
import { Footer } from "./components/Footer" */

//forma abreviada de importar
import { useEffect, useState } from 'react';
import {
  Cabecera, Carousel,
  CarouselMinNosotros,
  Navbar, Footer,
  PresentacionNosotros,
  ProductosMasVendidos
} from './components'
import { useFetch } from './hooks/useFetch';

export const Home = () => {

/*   const [ imgs, setImgs] = useState({});
  const [imgsIsLoading, setImgsIsLoading] = useState(true);

  useEffect( () => {

    setImgsIsLoading(true)
    fetch('/src/assets/db/assets.json')
      .then( data => data.json())
      .then( data => {
        setImgs({ ...data });
        setImgsIsLoading(false)
        console.log(data)
      });
  }, [])
  
  console.log(imgs) */

   const {data, isLoading, isError}  = useFetch('/src/assets/db/assets.json')
   
  

  return (
    <>
      <Cabecera />
      <Navbar />


     {/*  {
      ( !imgsIsLoading) 
        ? <Carousel  
          img1= {imgs?.carouselDeInicio[0]+'' || ''}
          img2= {imgs?.carouselDeInicio[1] || ''}
          img3= {imgs?.carouselDeInicio[2] || '' }/> 
        : <h1>Laoding...</h1>
        } */}

        {
          ( isLoading )
          ? <h1>Loading...</h1>
          :  <Carousel  
          img1= {data?.carouselDeInicio[0] || ''}
          img2= {data?.carouselDeInicio[1] || ''}
          img3= {data?.carouselDeInicio[2] || '' }/> 
        }


      <ProductosMasVendidos />

      <div className="container my-5">
        <div className="row justify-content-evenly">
          <PresentacionNosotros />
          <CarouselMinNosotros />
        </div>
      </div>

      <Footer />

    </>
  )
}



