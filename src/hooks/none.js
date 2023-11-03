import { useMutation, useQueryClient } from "@tanstack/react-query";
import conn from "../connection/conn"



const useLogin = () => {


    const clienteDeConsulta = useQueryClient()

    let errorMsg = {}

    const loginMutation =  useMutation({
        mutationFn: async(data) => {

            try {
                const rs = await conn.post('/auth/login', data, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                //localStorage.setItem('waltersport-token', rs.data.data?.token)
                return rs.data.data
            } catch (e) {
                errorMsg = e.response.data;
                return {}
            }
        },
        onSuccess: (data) => {
            //clienteDeConsulta.invalidateQueries(['login']);
            clienteDeConsulta.setQueryData(['login'], data)
        }
    })


    return [loginMutation, errorMsg ]

}

const useRegister = async (data = {}) => {

    try {
        const rs = await conn.post('/auth/register', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        localStorage.setItem('waltersport-token', rs.data.data?.token)
        console.log(rs.data.data?.token)
    } catch (e) {
        window.alert('Error ' + e.response.data.msg);
    }
}





export {
    useLogin,
    useRegister
}