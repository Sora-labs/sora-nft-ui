import { createSlice } from "@reduxjs/toolkit";

interface MenuState {
    isOpen: boolean | undefined
}

const initialState = {
    isOpen: false,
} as MenuState

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setIsOpen(state) {
            return {
                isOpen: state.isOpen === false ? true : false,
            }
        },
        setCloseMenu() {
            return {
                isOpen: undefined,
            }
        }
    }
})

export const { setIsOpen, setCloseMenu } = menuSlice.actions

export const menuReducer = menuSlice.reducer