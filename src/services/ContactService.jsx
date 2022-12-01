import axios from "axios";

const springBootUrl = "http://localhost:8080";

const baseUrl = springBootUrl;

export const saveContact = (contact) => {
    return axios.post(`${baseUrl}/contact`,contact)
}