import { createSlice } from "@reduxjs/toolkit";

const nftSlice = createSlice({
  name: "nft",
  initialState: {
    isExpanded: false,
    isFullScreen: false,
  },
  reducers: {
    setIsExpanded(state, action) {
      return {
        ...state,
        isExpanded: action.payload,
      };
    },
    setIsFullScreen(state, action) {
      return {
        ...state,
        isFullScreen: action.payload,
      };
    },
  },
});

export const { setIsExpanded, setIsFullScreen } = nftSlice.actions;

export default nftSlice.reducer;
