import { useEffect } from "react"

export const useCoverWholeApp = (state: boolean) => {
    useEffect(() => {
        state 
        ? document.body.style.overflowY = 'hidden'
        : document.body.style.overflowY = 'auto'
    }, [state]) 
}