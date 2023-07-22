import { useParams } from "react-router-dom"

export const ListaProductos = ( ) => {

    const { nomCategoria } = useParams();
    
  return (
    <>
        
        <ol>
            <li>Producto de categoria:  {nomCategoria}</li>
            <li>Producto de categoria:  {nomCategoria}</li>
            <li>Producto de categoria:  {nomCategoria}</li>
            <li>Producto de categoria:  {nomCategoria}</li>
            <li>Producto de categoria:  {nomCategoria}</li>
            <li>Producto de categoria:  {nomCategoria}</li>
            <li>Producto de categoria:  {nomCategoria}</li>
              
        </ol>
    </>
  )
}
