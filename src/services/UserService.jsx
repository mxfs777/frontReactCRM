import axios from "axios";

const springBootUrl = "http://localhost:8080";

const baseUrl = springBootUrl;

export const login = ( credentials ) => {
    return axios.post(`${baseUrl}/login`, credentials)
}