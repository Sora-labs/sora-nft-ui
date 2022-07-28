import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name: "toploading",
    initialState: {
        loading: 0
    },
    reducers: {
        setLoading(state, action) {
            let loading = state.loading + action.payload 
            return {
                loading
            }
        }
    }
})

export const { setLoading } = loadingSlice.actions

export default loadingSlice.reducer