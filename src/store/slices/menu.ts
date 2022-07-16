import { createSlice } from "@reduxjs/toolkit";

interface MenuState {
    isOpen: boolean
}

const initialState = {
    isOpen: false,
} as MenuState

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setIsOpen() {
            return {
                isOpen: true,
            }
        },
        setCloseMenu() {
            return {
                isOpen: false,
            }
        }
    }
})

export const { setIsOpen, setCloseMenu } = menuSlice.actions

export const menuReducer = menuSlice.reducer