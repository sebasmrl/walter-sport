import axios from 'axios';



const token = JSON.stringify(localStorage.getItem('waltersport-token')) || '';



const conn = axios.create({
    baseURL: 'http://localhost:4001/',
    timeout: 3000,
    headers: {'waltersport-token': token}
  });




  export default conn;