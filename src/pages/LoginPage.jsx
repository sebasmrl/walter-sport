import { Link } from "react-router-dom"

export const LoginPage = () => {
  return (
    <>
      <div className="container py-4 ">
        <div className="row justify-content-center ">

          <div className="col-10  col-sm-8  col-md-6  mt-5  border border-primary rounded-3">
            <h3 className="display-8  mb-0 p-2  text-primary">Walter Sport</h3>
            <hr className="bg-info  mt-0" />

            <div className="container">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Correo Electronico</label>
                  <input type="email" className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp" />

                    <div className="mb-3 mt-3">
                      <label htmlFor="exampleInputPassword1"
                        className="form-label">Contraseña</label>
                      <input type="password" className="form-control"
                        id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                      <p>Aún no tiens una cuenta, registrate <Link to={ `${location.origin}/auth/register` }>aquí</Link></p>
                      <a href="#">Olvide mi contraseña</a>
                    </div>
                    <button type="submit" className="btn btn-primary  mb-3">Iniciar Sesión</button>

                </div>
              </form>
            </div>

          </div>

        </div>
      </div>

      </>

)}
