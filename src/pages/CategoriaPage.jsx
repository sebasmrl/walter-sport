import { Outlet, useParams } from "react-router-dom"
import { Cabecera, Carousel, Navbar } from "../components"

export const CategoriaPage = () => {

  const { nomCategoria } = useParams();


  


  return (
    <>
        <Cabecera />
        <Navbar />

        <h2>Productos de { nomCategoria }</h2>


      <Carousel 
          img1="personas-jugando-al-voleibol"
          img2=""
          img3=""
        />
        

        <hr />
        <Outlet />
    </>
  )
}
