import { Card } from "./Card"



export const CardsContainer = () => {

    //simulacion de data traida mediante fetch

    const productos = ["producto1","producto2","producto3","producto4"]; 


    return (
        <section>
            <div className="container ">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    
                  { 
                    productos.map( (productoStr )=>{
                        return <Card key={productoStr} imgUrl={ productoStr } />
                    }) 
                  }  
                    
                </div>
            </div>
        </section>
    )
}
