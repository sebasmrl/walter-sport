import { NavLink, Outlet } from "react-router-dom"

export const CategoriaPage = () => {
  return (
    <>
        <h1>Categoria</h1>
        <NavLink to="futbol">Futbol</NavLink>
        <br />
        <NavLink to="natacion">Natacion</NavLink>
        <br />
        <NavLink to="tenis-de-mesa">Tenis de mesa</NavLink>

        <hr />
        
        <Outlet />
    </>
  )
}
