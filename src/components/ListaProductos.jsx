import { useParams } from "react-router-dom"
import { Card } from "./Card"
import '../App.css'
import { useQuery } from "@tanstack/react-query";
import conn from "../connection/conn";
import { Loader } from "./Loader";

export const ListaProductos = ( ) => {

    const { nomCategoria } = useParams();

    //fetch http://mibackend.com/categoria/{nomCategoria} (get) [arreglo de productos] 10
   // const productos = fetch(http://mibackend.com/categoria/{nomCategoria}); 
      
  const productosQuery = useQuery({ 
    queryKey: ['productos', nomCategoria],
    queryFn: async() => {
      const rs = await conn.get(`products/${nomCategoria}`);
      return rs.data;
    }
  })


  if(productosQuery.isLoading) return <Loader />
  if(productosQuery.isError) return<pre>{ productosQuery?.error?.response?.data?.msg }</pre> 

  if(productosQuery.isError) console.log(productosQuery.error)
  return (
    <>  
    <ol className="container lista-productos">
        { 
        
        (Object.keys(productosQuery?.data?.data?.products).length > 0)

        ? productosQuery?.data?.data?.products?.map( producto =>{

          return <Card key={producto?.uid} dataProduct={ producto} />
        })
        : <h4> No se encontraron productos registrados para esta categoria </h4>
        
        }
        
           
           

        </ol >
    </>
  )
}
