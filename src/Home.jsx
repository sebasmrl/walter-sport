/* import { Cabecera } from "./components/Cabecera"
import { Carousel } from "./components/Carousel"
import { CarouselMinNosotros } from "./components/CarouselMinNosotros"
import { Navbar } from "./components/Navbar"
import { PresentacionNosotros } from "./components/PresentacionNosotros"
import { ProductosMasVendidos } from "./components/ProductosMasVendidos"
import { Footer } from "./components/Footer" */

//forma abreviada de importar
import {
  Cabecera, Carousel,
  CarouselMinNosotros,
  Navbar, Footer,
  PresentacionNosotros,
  ProductosMasVendidos
} from './components'

export const Home = () => {

  return (
    <>
      <Cabecera />
      <Navbar />
      <Carousel />

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



