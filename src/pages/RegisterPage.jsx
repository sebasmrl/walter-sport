
export const RegisterPage = () => {
  return (
    <>
        <div className="container py-4 ">
            <div className="row justify-content-center ">
                <div className="col-10 col-md-8 col-lg-6  mt-5  border border-primary rounded-3    ">
                    <h3 className="display-8  mb-0 p-2  text-primary">Crear Cuenta</h3>
                    <hr className="bg-info  mt-0" />

                    
                    <div className="alert alert-primary d-none" id="mensajeExito">Mensaje
                        enviado con exito </div>
                    <div className="alert alert-danger  d-none" id="mensajeError">
                    </div>

                    

                    <form id="formulario" action method className="p-2">
                        <div className="row mb-3">
                            <div className="col-10 col-lg-6">
                                <label htmlFor="nombre" className="col-form-label ">Nombre</label>
                                <div className="col-12">
                                    <input type="text" name="nombre" defaultValue=""
                                        id="nombre" className="form-control"
                                        required />
                                </div>
                            </div>
                            <div className="col-10 col-lg-6">
                                <label htmlFor="apellido" className="col-form-label  ">Apellido</label>
                                <div className="col-12 ">
                                    <input type="text" name="nombre" defaultValue=""
                                        id="apellido" className="form-control"
                                        required />
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-10 col-lg-6">
                                <label htmlFor="email" className="col-form-label">Correo</label>
                                <div className="col-12">
                                    <input type="email" name="email" defaultValue=""
                                        id="email" className="form-control" required />
                                </div>
                            </div>
                            <div className="col-10 col-lg-6">
                                <label htmlFor="contrasena" className="col-form-label">Contraseña</label>
                                <div className="col-12">
                                    <input type="password" name="nombre" defaultValue=""
                                        id="contrasena" className="form-control"
                                        required />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input"
                                id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1"><p
                                    className="mb-0">Declaro que he leido y autorizo
                                    el uso de mis datos personales de acuedo a
                                    la autorizacion
                                    y acepto los teminos y condiciones.
                                </p> </label>
                        </div>

                        <p className="text-danger small   pt-0 mt-0 ">Todos los
                            campos son obligatorios</p>

                        <button type="submit" className="btn btn-primary mb-2 ">Registrarme</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}
