//import { PropTypes } from 'prop-types';
import { BASE_UPLOADS } from "../connection/baseURL"
import '../styles/cards.css'

export const Card = ({ dataProduct }) => { //imgUrl es una propiedad del componente Card
    return (
        <>
            <div className=" col-sm-6 col-md-3 item">
                <div className="card card-custom">
                    <img src= { `${BASE_UPLOADS}/products/${dataProduct?.profile_img}` } className="card-img-top " alt="..." />
                    <div className="card-body">
                        <h5 className="card-title ">{ dataProduct?.name }</h5>
                        <p className="card-text">{dataProduct?.description}  </p>
                        <h5 className="card-text ">Stock: { dataProduct?.stock }</h5>

                        <h2>${dataProduct?.cost}</h2>
                        
                        <button type="button" className="btn btn-outline-success ">Comprar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

/* Card.propTypes = {
    dataProduct: PropTypes.Object.isRequired,
}   */

