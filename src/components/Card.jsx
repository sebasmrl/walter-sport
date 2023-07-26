import { PropTypes } from 'prop-types';

export const Card = ({ imgUrl }) => { //imgUrl es una propiedad del componente Card
    return (
        <>
            <div className=" col-sm-6 col-md-3">
                <div className="card">
                    <img src= { `src/assets/img/${imgUrl}.jpg` } className="card-img-top " alt="..." />
                    <div className="card-body">
                        <h5 className="card-title ">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below  </p>
                        <button type="button" className="btn btn-outline-success ">Comprar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

Card.propTypes = {
    imgUrl: PropTypes.string,
} 

