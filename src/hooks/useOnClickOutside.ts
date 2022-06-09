/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, useEffect, useRef } from "react"
 
const useOnClickOutSide = <T extends HTMLElement>(
    node: RefObject<T | undefined>, 
    handler: undefined | (() => void)
): any => {
    const handlerRef = useRef<undefined | (() => void)>(handler)

    useEffect(() => {
        handlerRef.current = handler
    }, [handler])

    useEffect(() => {
        const listener = (event: Event) => {
            if(node.current?.contains(event.target as Node) ?? false) {
                return
            }
            if(handlerRef.current) handlerRef.current()
        }

        document.addEventListener("pointerdown", listener)
        return () => {
            document.removeEventListener("pointerdown", listener)
        }
    }, [])
}
 
export default useOnClickOutSide;