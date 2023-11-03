import ReactDOM from 'react-dom/client'
import { router }  from './router/router.jsx'
import { RouterProvider } from 'react-router-dom'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import './index.css'
import { UserProvider } from './context/UserProvider.jsx'


 const queryClient = new QueryClient({
    defaultOptions:{
      queries:{
        staleTime: 1000*60,
        
      }
    }
  }); 
  

ReactDOM.createRoot(document.getElementById('root')).render( 
      <UserProvider>
        <QueryClientProvider client={queryClient} >
          <ReactQueryDevtools /> 
          <RouterProvider router={router} /> 
      </QueryClientProvider>
    </UserProvider>
)
