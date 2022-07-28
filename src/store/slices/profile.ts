import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getOrCreateProfile } from "services/api/user";

interface Profile {
    loading: boolean,
    profile: {
        address: string | null,
        createdAt: string | null,
        name: string | null,
        username: string | null,
        twitterId: string | null,
        pixivId: string | null,
        avatar: string | null,
        background: string | null,    
    }
}

const initState = {
    loading: false,
    profile: {
        address: null,
        name: null,
        avatar: null,
        background: null,
        createdAt: null,
        pixivId: null,
        twitterId: null,
        username: null,
    }
} as Profile

export const fetchUserProfile = createAsyncThunk(
    'profile/fetchUserProfile',
    async(address: string) => {
        const response = await getOrCreateProfile(address)
        return response
    }
)

const profileSlice = createSlice({
    name: "profile",
    initialState: initState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserProfile.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
            state.loading = false
            state.profile = action.payload
        })
    },
})

export const {  } = profileSlice.actions

export default profileSlice.reducer
