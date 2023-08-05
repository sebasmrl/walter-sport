import { Home } from "../Home.jsx";
import { createBrowserRouter } from "react-router-dom";
import { CategoriaPage } from "../pages/CategoriaPage.jsx";
import { ListaProductos } from "../components/ListaProductos.jsx";
import { ContactoPage } from "../pages/ContactoPage.jsx";


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
    },
    {
        path:'contacto',
        element: <ContactoPage />,
    }
]);