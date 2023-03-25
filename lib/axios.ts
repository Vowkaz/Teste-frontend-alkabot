import axios from "axios";

export const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export async function getUser() {
    await api.get('users')
        .then(
            resp => {
                return resp.data ?? null
            })
        .catch(() => {
            console.log("Lista de usuarios não foi recebida")
        })
}