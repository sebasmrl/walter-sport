import { Link, useNavigate } from "react-router-dom"
import {  useRef, useContext } from "react";
import conn from "../connection/conn";
//import { useQuery } from "@tanstack/react-query";
import { UserContext } from "../context/userContext";

export const LoginPage = () => {

  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  //const [email, setEmail] =  useState("");
  //const [password, setPassword] = useState("");

  /* const loginQuery = useQuery({
    queryKey:  ['login'],
    queryFn:  async()=> {
      const rs = await conn.post('/auth/login', { email, password}, {
        headers: {
            'Content-Type': 'application/json'
        }
      });
      localStorage.setItem('waltersport-token', rs.data.data?.token)
      return rs;
    }
  })    */

  const {setUser} = useContext(UserContext);
  

  return (
    <>
      <Link className="btn btn-primary" to="/">Ir a home</Link>

      <div className="container py-4 ">
        <div className="row justify-content-center ">

          <div className="col-10  col-sm-8  col-md-6  mt-5  border border-primary rounded-3">
            <h3 className="display-8  mb-0 p-2  text-primary">Walter Sport</h3>
            <hr className="bg-info  mt-0" />

            <div className="container">
              <form  onSubmit={   
                async(e)=>{
                  e.preventDefault();
                  e.stopPropagation();

                  const data = {
                    email:  emailRef.current.value,
                    password:  passwordRef.current.value
                  };

                  console.log("datos de login", data);
                
                  try {
                    const rs = await conn.post('/auth/login', data, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    localStorage.removeItem('waltersport-token');
                    localStorage.setItem('waltersport-token', rs.data.data?.token)
                     console.log(rs.data.data)
                     
                    const user = await conn.post('/users',{}, {
                      headers: {
                        'waltersport-token': rs.data.data?.token
                      }
                    });
                    setUser(user)
                    navigate("/", { state: { key: "value" } });



                } catch (e) {
                    window.alert( JSON.stringify( e.response?.data?.msg))
                    return {}
                }


              }
              }>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Correo Electronico</label>
                  <input type="email" className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp" ref={ emailRef } /* onChange={ (e)=> setEmail(e.target.value)} *//>

                    <div className="mb-3 mt-3">
                      <label htmlFor="exampleInputPassword1"
                        className="form-label">Contraseña</label>
                      <input type="password" className="form-control"
                        id="exampleInputPassword1" ref={ passwordRef }  /* onChange={ (e)=> setPassword(e.target.value)} *//>
                    </div>
                    <div className="mb-3">
                      <p>Aún no tiens una cuenta, registrate <Link to={ `${location.origin}/auth/register` }>aquí</Link></p>
                      <a href="#">Olvide mi contraseña</a>
                    </div>
                    <button type="submit" className="btn btn-primary  mb-3">Iniciar Sesión</button>

                </div>
              </form>
            </div>

          </div>

        </div>
      </div>

      </>

)}
