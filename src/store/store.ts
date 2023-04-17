import { configureStore } from "@reduxjs/toolkit";
import { menuReducer } from "./slices/menu";
import nftPage from "./slices/nftPage";
import settingReducer from "./slices/setting";
import userReducer from "./slices/user";
import loadingReducer from "./slices/toploading";
import profileReducer from "./slices/profile";
import { logger } from "redux-logger";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    user: userReducer,
    setting: settingReducer,
    nftPage: nftPage,
    toploading: loadingReducer,
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// sagaMiddleware.run()
