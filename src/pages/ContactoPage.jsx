
import { Navbar } from "../components"

export const ContactoPage = () => {
  return (
    <>
        <Navbar />

        <h1 className="visually-hidden">Contactanos</h1>

  <div className="px-4 py-5 my-5 text-center">
    <img className="d-block mx-auto mb-4" src="src\assets\img\logo.svg" alt="" width="400" height="400"/>
    <h1 className="display-5 fw-bold text-body-emphasis">Contactanos</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Somos la tienda deportiva por excelencia de la ciudad de Cali, hacemos envios a todo el país, animate y disfruta de nuestros productos que perduraran por generaciones</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Enviar Mensaje</button>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Volver a Inicio</button>
      </div>
    </div>
  </div>

  <div className="b-example-divider"></div>
    </>
  )
}




/* 

const usuario = createContext( { nom: 'walter', foto: ':)'});



const UserProvider = ( { children }) => {
const [ user, setUser] = useState( {nom: 'walter', foto: ':)'});

  return (
    <usuario.Provider value={ {user, setUser} }>
      { children }
    </usuario.Provider>
  )
}










//funtinal component pagina
const MiEscritorioPage = ()=>{

  const user = useContext(usuario);
  return <>

    <h1>{ user?.nom}</h1>
    <img src={ user?.foto} alt="" />
  </>
}





//-- llamando en una ruta
<UserProvider>
  <MiEscritorioPage />
</UserProvider> */