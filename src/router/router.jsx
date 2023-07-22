import { Home } from "../Home.jsx";
import { createBrowserRouter } from "react-router-dom";
import { CategoriaPage } from "../pages/CategoriaPage.jsx";
import { ListaProductos } from "../components/ListaProductos.jsx";


export  const router = createBrowserRouter([
    {
        path:'/*',
        element: <Home />,
        errorElement: <></>,
        children:[
        ]
    },
    {
        path:'categoria',
        element: <CategoriaPage />,
        children:[
            {
                path:':nomCategoria',
                element: <ListaProductos /> 
            } 
        ]
    }
]);