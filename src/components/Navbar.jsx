import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-md  bg-primary sticky-top">
        <div className="container-fluid">


          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav    mx-auto  lead  mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <NavLink className="nav-link  fw-bold" to="/">Inicio</NavLink>
                {/* <a className="nav-link  active  fw-bold" aria-current="page" href="#">Inicio</a> */}
              </li>
              <li className="nav-item dropdown  mx-3">
                <a className="nav-link dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
                <ul className="dropdown-menu"> 
                  <li><Link className="dropdown-item" to="/categoria/futbol">Futbol</Link></li>
                  <li><Link className="dropdown-item" to="/categoria/natacion">Natacion</Link></li>
                  <li><Link className="dropdown-item" to="/categoria/tennis-de-mesa">Tennis de Mesa</Link></li>
                </ul>
              </li>
              <li className="nav-item mx-3">
                <NavLink className="nav-link   fw-bold" to="/contacto">Contacto</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
