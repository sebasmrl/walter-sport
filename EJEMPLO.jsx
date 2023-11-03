import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { esperar } from '../helpers/timer'


const POSTS = [
  { id: 1, title: 'Post 1' },
  { id: 2, title: 'Post 2' }
]




export const App = ()=> {

  const clienteDeConsulta = useQueryClient()

  const postQuery = useQuery({
    queryKey:  ['posts', 'nice'],
    queryFn:  ()=> esperar(1000).then( ()=> [ ...POSTS])   //Promise.reject('Mensaje de Error')
  })


  const nuevoMutacionPost = useMutation({
    mutationFn: ( title)=> {
      esperar(1000).then( ()=> POSTS.push( {id: Math.random(), title}))
    }, 
    onSuccess: ()=>{
      clienteDeConsulta.invalidateQueries(['posts', 'nice']);
      // clienteDeConsulta.setQueryData(['login'], data)
    }
  })



  if(postQuery.isLoading) return <h1>Loading...</h1>
  if(postQuery.isError) return <pre>{ JSON.stringify(postQuery.error) }</pre>


  return (
    <>
    <h1>TankStack Query</h1>
    {
      postQuery.data.map( (post)=>{
        return <div key={post.id}> {post.title} </div>
      } )
    }

    <button 
      disabled={ nuevoMutacionPost.isLoading}
      onClick={ ()=> nuevoMutacionPost.mutate("New Post") }
    >
        Añadir Nuevo
    </button>
    </>
  )
}


