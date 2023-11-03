import { CardsContainer } from "./CardsContainer"

export const ProductosMasVendidos = () => {
    return (
        <>
            <div className="container my-5">
                <h3 className="display-5 text-center ">Productos mas vendidos.</h3>
                <p className=" lead text-center  text-primary  mb-3">Descubre los productos favoritos de nuestros clientes, que te permiten disfrutar al maximo sus actividades deportivas.
¿Por qué conformarte con menos cuando puedes elegir lo mejor?   </p>
            </div>

            <CardsContainer />
        </>
    )
}
