import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: "menu",
    initialState: {
        isOpen: false,
    },
    reducers: {
        setIsOpen(state, action) {
            return {
                ...state,
                isOpen: action.payload
            }
        }
    }
})

export const { setIsOpen } = menuSlice.actions

export const menuReducer = menuSlice.reducer