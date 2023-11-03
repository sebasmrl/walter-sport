import { useQuery } from "@tanstack/react-query";
import { Card } from "./Card"
import conn from "../connection/conn";



export const CardsContainer = () => {

    //simulacion de data traida mediante fetch de algun lado  (no sabe cuantos datos vienen
    //para renderizar de forma dinamica, pero esta info ya la tengo aqui en mi pc
    //const productos = ["youtube","producto2","producto3","producto4"]; 

    const productosQuery = useQuery({ 
        queryKey: ['productos'],
        queryFn: async() => {
          const rs = await conn.get(`products/${'futbol'}?from=0&to=3`);
          return rs.data;
        }
      })

    return (
        <section>
            <div className="container ">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    
                { 
                    productosQuery?.data?.data?.products.map( producto =>{
                    return <Card key={producto.uid} dataProduct={ producto} />
                    })
        
                }
                    
                </div>
            </div>
        </section>
    )
}
