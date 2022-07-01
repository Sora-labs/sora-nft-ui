import { useEffect } from "react"

export const useDisableRightClick = () => {
    
    useEffect(() => {
        document.addEventListener("contextmenu", e => e.preventDefault())
    }, [])

}