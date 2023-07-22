import { Link, Outlet } from "react-router-dom"

export const Home= ()=> {
  


  return (
    <>
      <h1>Home</h1>
      <Link to={ '/categoria'}>Categoria</Link>
      <hr />
      <Outlet />

    </>
  )
}



