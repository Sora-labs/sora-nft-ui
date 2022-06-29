import { createSlice } from "@reduxjs/toolkit";

const nftSlice = createSlice({
    name: "nft",
    initialState: {
        isExpanded: false,
    },
    reducers: {
        setIsExpanded(state, action) {
            return {
                ...state,
                isExpanded: action.payload
            }
        }
    }
})

export const { setIsExpanded } = nftSlice.actions

export default nftSlice.reducer