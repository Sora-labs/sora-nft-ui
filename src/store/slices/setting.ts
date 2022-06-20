import { createSlice } from "@reduxjs/toolkit";

const settingSlice = createSlice({
    name: "setting",
    initialState: {
        isOpen: false,
        isMenu: true,
        isSetting: false,
        isLang: false,
        isTheme: false,
    },
    reducers: {
        setIsOpen(state, action) {
            return {
                isLang: !action.payload,
                isSetting: !action.payload,
                isTheme: !action.payload,
                isMenu: action.payload,
                isOpen: action.payload,
            }
        },
        setIsMenu(state, action) {
            return {
                ...state,
                isLang: !action.payload,
                isSetting: !action.payload,
                isMenu: action.payload,
            }
        },
        setIsSetting(state, action) {
            return {
                ...state,
                isLang: !action.payload,
                isMenu: !action.payload,
                isTheme: !action.payload,
                isSetting: action.payload,
            }
        },
        setIsLang(state, action) {
            return {
                ...state,
                isSetting:  !action.payload,
                isMenu: !action.payload,
                isTheme: !action.payload,
                isLang: action.payload,
            }
        },
        setIsTheme(state, action) {
            return {
                ...state,
                isSetting: !action.payload,
                isMenu: !action.payload,
                isLang: !action.payload,
                isTheme: action.payload
            }
        }
    }
})

export const { 
    setIsOpen,
    setIsMenu,
    setIsSetting,
    setIsLang,
    setIsTheme,
} = settingSlice.actions

export const settingReducer = settingSlice.reducer