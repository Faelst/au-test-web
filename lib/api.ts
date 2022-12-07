import axios from "axios";

const api = axios.create({
    baseURL: "https://run.mocky.io/v3",
});

export const fetchProducts = () => {
    return api.get("/313060d6-9b78-4009-9453-9bff40c12d60");
}