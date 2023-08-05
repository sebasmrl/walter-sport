import  { useEffect, useState } from 'react'


//custom hook -hook personalizado
export const useFetch = (url) => {

    //estado del customhook
    const [state, setState] = useState({ 
        data:null, 
        isLoading:true, 
        hasError:null 
    });
    
    //function
    const getFetch = async()=>{
        //reiniciar valores despues de la 1ra
        setState({
            ...state,
            isLoading: true, 
        });

        const resp = await fetch(url); //CTRL+ALT+L console.log
        const data = await resp.json(); //shif-ALT+D eliminar console.log

        setState({
            data,
            isLoading:false, 
            hasError:null
        });
    } 
    

    useEffect(() => {
        /* setState({data:null, loading:true, hasError:null});
        fetch( url )
            .then(resp => resp.json())
            .then( data =>{
                setState({
                    loading:false, 
                    error:null, 
                    data
                });
            }) */
        getFetch();  //eslint-disable-next-line
    }, [url]);  

    return {
        data:      state.data,
        isLoading: state.isLoading,
        hasError:  state.hasError
    };
} 