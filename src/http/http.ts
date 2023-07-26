import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech/api',
    headers: {
        'X-API-KEY': '2c113531-0cea-40f6-ac9b-a5249af0f664',
        'Content-Type': 'application/json',
    }
})