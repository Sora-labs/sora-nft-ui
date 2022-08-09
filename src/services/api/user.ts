import instance from ".";
import { config } from "services/near";
import ProfileType from "types/profile";

// get current logged in user profile or create one if yet present
export const getOrCreateProfile = async(address: string) => {
    const { data } = await instance.get(`${config.apiUrl}/api/getOrCreateProfile/${address}`)
    
    if(!data.success) {
        return "failed to get profile: " + data.data.msg
    }
    return data.data.user
}

// get others profile
export const getProfile = async(address: string) => {
    const { data } = await instance.get(`${config.apiUrl}/api/profile/${address}`)

    if(!data.success) {
        return null
    }
    return data.data.user as ProfileType
}