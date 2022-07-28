import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { changeRoute } from "store/slices/route"
import { RootState } from "store/store"

function useChangeRoute() {
    const dispatch = useDispatch()
    const routes = useSelector((state: RootState) => state.route)
    const { pathname } = useLocation()
    
    useEffect(() => {
        dispatch(changeRoute(pathname))
    }, [pathname])

    return routes
}

export default useChangeRoute;