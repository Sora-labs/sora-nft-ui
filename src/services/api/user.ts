import axios from "axios";
import { config } from "services/near";

export const getOrCreateProfile = async(address: string) => {
    const { data } = await axios.get(`${config.apiUrl}/api/getOrCreateProfile/${address}`)
    
    if(!data.success) {
        return "failed to get profile: " + data.data.msg
    }
    return data.data.user
}