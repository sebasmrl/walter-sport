import { Home } from "../Home.jsx";
import { Outlet, createBrowserRouter } from "react-router-dom";

import { 
    CategoriaPage, 
    ContactoPage, 
    LoginPage, 
    RegisterPage
} from '../pages'

import { ListaProductos } from '../components'

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
    },
    {
        path: 'auth',
        element: <Outlet /> ,
        children: [
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'register',
                element: <RegisterPage />
            }
        ]
            
        
    }
]);