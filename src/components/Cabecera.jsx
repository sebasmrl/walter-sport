import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../context/userContext"

export const Cabecera = () => {

  
  const { user, setUser } = useContext(UserContext);
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <a className="navbar-brand" href="">
            <img src="./src\assets\img\logo.svg" alt="logo" width="60px" height="60px" />
            Walter Sport</a>               
            <form className="d-flex margen" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
              <button className="btn btn-outline-primary " type="submit">Buscar</button>
            </form>            
        </div>    
        <div className="container ms-5" >
         <div></div>
          <div className="icono d-flex" >

            {  
            (Object.keys(user).length >0 ) 
            ?  <>
                  <p className="me-2">{user?.data?.data?.name}</p>
                  <button className="btn btn-outline-danger"
                    onClick={ ()=> { 
                      localStorage.removeItem('waltersport-token');
                      setUser({})
                  }}
                  > Cerrar Session</button>
                </>
            :   <Link  className="btn btn-outline-primary  me-2" to={ `${location.origin}/auth/login` }>Iniciar Sesion</Link>  
            }          
            {/* <button type="submit" className="btn btn-outline-primary  me-2">Iniciar Seccion</button> */}
          </div>       
        </div>
      </nav>  
    </>
  )
}
