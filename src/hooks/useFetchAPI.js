import { useEffect, useState } from "react";
import conn from "../connection/conn";


export const useFetchAPI = async (url, data, method, headers) => {


    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    });

    //function
    const doFetch = async () => {

        setState({
            ...state,
            isLoading: true,
        });

        let rs;

        try {
            switch (method) {
                case 'GET':
                    rs = await conn.get(url);
                    break;
                case 'POST':
                    rs = await conn.post(url, data)
                    break;

                case 'PUT':
                    rs = await conn.put(url, data)
                    break;

                case 'DELETE':
                    rs = await conn.delete(url, data)
                    break;

                default:
                    break;
            }

        } catch (e) {
            setState({
                data: dataJSON,
                isLoading: false,
                hasError: true
            });
        }

        const dataJSON = await rs.json(); //shif-ALT+D eliminar console.log

        setState({
            data: dataJSON,
            isLoading: false,
            hasError: null
        });
    }


    useEffect(() => {
        
        doFetch();  //eslint-disable-next-line
    }, [url]);

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
}



