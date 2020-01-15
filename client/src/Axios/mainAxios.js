import axios from "axios";

const mainUrl = "http://localhost:4000"
const mainAxios = axios.create({
    baseURL: `${mainUrl}/`
})

mainAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    if (token) {
        config.headers["token"] = token
    }
    return config
})




export default mainAxios