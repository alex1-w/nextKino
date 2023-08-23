import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios'
import cookies from 'js-cookie'


export const http = axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech/api',
    headers: {
        'X-API-KEY': '2c113531-0cea-40f6-ac9b-a5249af0f664',
        'Content-Type': 'application/json',
    }
})

export const updateHeaders = () => {
    // http.interceptors.request.use((config: AdaptAxiosRequestConfig) => {
    //     // const token = cookies.get('userToken')
    //     if (token) {
    //         config.headers!['Authorization'] = `Bearer ${token}`
    //     }
    //     return config
    // })
}

updateHeaders()

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
    headers: AxiosRequestHeaders;
}
