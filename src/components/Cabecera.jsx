
export const Cabecera = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <a className="navbar-brand" href="">
            <img src="src/assets/img/Logo.jpg" alt="logo" width="60px" height="60px" />
            Nombre Empresa</a>               
            <form className="d-flex margen" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
              <button className="btn btn-outline-primary " type="submit">Buscar</button>
            </form>            
        </div>    
        <div className="container ms-5" >
         <div></div>
          <div className="icono d-flex" >
            <a href="https://www.udemy.com/"><i className="bi bi-cart4  margenic" ></i></a>            
            <button type="submit" className="btn btn-outline-primary  me-2">Iniciar Seccion</button>
          </div>       
        </div>
      </nav>  
    </>
  )
}
