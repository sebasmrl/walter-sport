import { Outlet, useParams } from "react-router-dom"
import { Cabecera, Navbar } from "../components"

export const CategoriaPage = () => {

  const { nomCategoria } = useParams();


  


  return (
    <>
        <Cabecera />
        <Navbar />

        <h2 className="text-center">Productos de { nomCategoria }</h2>
        

        <Outlet />
    </>
  )
}
