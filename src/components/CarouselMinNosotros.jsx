
export const CarouselMinNosotros = () => {
    return (
        <>
            <div className="col-4">
                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src="src/assets/img/Camiseta_3.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src="src/assets/img/Guayos_4.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="text-danger">Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="src/assets/img/balon_6.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="text-white">Third slide label</h5>
                                <p className="text-white">Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}
