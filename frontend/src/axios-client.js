import axios from "axios";

const AxiosClient = axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}/api`
})

AxiosClient.interceptors.request.use((config) => {
    //config.headers.Accept = `application/json`;
    return config;
})

AxiosClient.interceptors.response.use((response) => {
    return response
}, (error) => {
    throw error
})

export default AxiosClient