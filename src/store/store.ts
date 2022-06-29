import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import { menuReducer } from "./slices/menu"
import nftPage from "./slices/nftPage"
import { settingReducer } from "./slices/setting"
import { userReducer } from "./slices/user"

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        menu: menuReducer,
        user: userReducer,
        setting: settingReducer,
        nftPage: nftPage,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            thunk: false
        })
        .concat(sagaMiddleware)
})

export type RootState = ReturnType<typeof store.getState>

// sagaMiddleware.run()