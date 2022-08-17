import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://bloggy-api.herokuapp.com/',
  });
  
  export default axiosInstance;