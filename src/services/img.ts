// import axios from "axios"

export const getHolderImg = async(src: string) => {
    const response = await fetch(src).then(data => data)
    return response.url
} 