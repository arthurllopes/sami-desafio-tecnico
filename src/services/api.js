import axios from "axios";

export const api = axios.create({
    baseURL: `https://superheroapi.com/api/${process.env.ACCESS_TOKEN}/`
})