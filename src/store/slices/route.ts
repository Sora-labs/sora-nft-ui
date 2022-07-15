import { createSlice, current } from "@reduxjs/toolkit";

const routeSlice = createSlice({
    name: "route",
    initialState: {
        home: true,
        explore: false,
        create: false,
        auction: false,
    },
    reducers: {
        changeRoute(state, action) {
            let pathname: string = action.payload
            const routes = Object.keys(state)
            if (pathname === "/")
                pathname = "home"

            const matchedRoute = routes.filter(route => pathname.includes(route))
            const nonmatchedRoutes = routes.filter(route => route !== matchedRoute[0])
            const falsifiedNonmatches = nonmatchedRoutes.map(route => ({[route]: false}))


            if (matchedRoute.length === 0)
                return Object.assign({}, ...falsifiedNonmatches)

            return Object.assign(
                { [matchedRoute[0]]: true },
                ...falsifiedNonmatches,
            )
        }
    }
})

export const { changeRoute } = routeSlice.actions

export default routeSlice.reducer