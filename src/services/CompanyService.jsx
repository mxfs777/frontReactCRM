import axios from "axios";

const springBootUrl = "http://localhost:8080";

const baseUrl = springBootUrl;

export const getAllCompanies = () => {
    return axios.get(`${baseUrl}/company`)
}