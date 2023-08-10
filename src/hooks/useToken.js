

export const useGetToken = () => {

    const token = localStorage.getItem('waltersport-token');

    return (token)
        ? token
        : '';
}
