
import { Navbar } from "../components"

export const ContactoPage = () => {
  return (
    <>
        <Navbar />
        <h1>Contacto</h1>
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