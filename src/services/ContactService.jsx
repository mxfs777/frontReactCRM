import axios from "axios";

const springBootUrl = "http://localhost:8080";

const baseUrl = springBootUrl;

export const saveContact = (contact) => {
    return axios.post(`${baseUrl}/contact`,contact)
}

export const getAllContacts = () => {
    return axios.get(`${baseUrl}/contact`)
}

export const markResultAsSuccess = (id,result) => {
    return axios.patch(`${baseUrl}/contact/${id}`,{ result })
}

export const getAllCustomers = () => {
    return axios.get(`${baseUrl}/client`)
}
