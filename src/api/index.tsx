import axios, { AxiosInstance } from "axios";

const ApiInstance: AxiosInstance = axios.create({
    baseURL: `https://www.googleapis.com/webfonts/v1`,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
})

export default ApiInstance