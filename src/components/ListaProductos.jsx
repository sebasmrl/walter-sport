//import { useParams } from "react-router-dom"
import { Card } from "./Card"
import '../App.css'

export const ListaProductos = ( ) => {

    //const { nomCategoria } = useParams();

    //fetch http://mibackend.com/categoria/{nomCategoria} (get) [arreglo de productos] 10
   // const productos = fetch(http://mibackend.com/categoria/{nomCategoria}); 
      

  return (
    <>
        <ol className="container lista-productos">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

        </ol >
    </>
  )
}
