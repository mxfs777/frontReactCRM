import axios from "axios";

const springBootUrl = "http://localhost:8080";

const baseUrl = springBootUrl;

export const getAllOportunities = () => {
    return axios.get(`${baseUrl}/oportunity`)
}