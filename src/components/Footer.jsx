
export const Footer = () => {
    return (
        <>
            <footer className=" bg-dark text-white p-5  text-center">

                <div className="row justify-content-around">
                    <div className="col-3">
                        <div>
                            <h4 className="text-warning text-start" >Sede Principal</h4>
                            <p className="text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, corrupti?</p>
                            <h4 className="text-warning text-start" >Sede Norte</h4>
                            <p className="text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, corrupti?</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <h4 className="text-warning text-start" >Categorias</h4>
                        <a href="#" className="text-decoration-none  text-white text-start"><p>Tenis de mesa</p></a>
                        <a href="#" className="text-decoration-none  text-white text-start"><p>Futbol</p></a>
                        <a href="#" className="text-decoration-none  text-white text-start"><p>Patinaje</p></a>
                    </div>
                    <div className="col-3">
                        <h4 className="text-warning text-start">Mas Informacion</h4>
                        <a href="#" className="text-decoration-none  text-white text-start" ><p>Metodo de entrega</p></a>
                        <a href="#" className="text-decoration-none  text-white text-start" ><p>Preguntas frecuentes</p></a>
                        <a href="#" className="text-decoration-none  text-white text-start" ><p>Tarjetas de regalo</p></a>
                    </div>
                </div>
                <hr />

                <div className="row justify-content-evenly">
                    <div className="col-4 ">
                        <h5 className="text-warning text-center">Metodos de pago</h5>

                    </div>
                    <div className="col-4 ">
                        <h5 className="text-warning text-center">Nuestras redes</h5>
                    </div>
                </div>

            </footer>
        </>
    )
}
