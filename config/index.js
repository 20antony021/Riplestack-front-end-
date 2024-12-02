import axios from "axios"

export const serverUrl = "http://127.0.0.1:8866"

export const axiosApi = axios.create({
    baseURL: serverUrl,
    headers: {
        'Content-Type': "application/json"
    }
})