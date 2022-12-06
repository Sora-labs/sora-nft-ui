import { createSlice } from "@reduxjs/toolkit";
import { toReadableNumber } from "../../utils/stringFormatter";

const userSlice = createSlice({
  name: "user",
  initialState: {
    balance: "0",
  },
  reducers: {
    getUser: (state) => {
      return {
        ...state,
        balance: state.balance,
      };
    },
    setUser: (state, action) => {
      const balance = action.payload;
      toReadableNumber(24, balance);
      return {
        ...state,
        balance: state.balance,
      };
    },
  },
});

export const { getUser, setUser } = userSlice.actions;

export default userSlice.reducer;
