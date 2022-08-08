import axios from "axios"
import { config } from "services/near"

const instance = axios.create({
    baseURL: `${config.apiUrl}`,
    headers: {
        "Content-Type": "application/json",
    }
})

export default instance