import { createSlice } from "@reduxjs/toolkit";

const settingSlice = createSlice({
  name: "setting",
  initialState: {
    isMenu: true,
    isSetting: false,
    isLang: false,
    isTheme: false,
  },
  reducers: {
    setIsMenu(state, action) {
      return {
        isTheme: !action.payload,
        isLang: !action.payload,
        isSetting: !action.payload,
        isMenu: action.payload,
      };
    },
    setIsSetting(state, action) {
      return {
        isLang: !action.payload,
        isMenu: !action.payload,
        isTheme: !action.payload,
        isSetting: action.payload,
      };
    },
    setIsLang(state, action) {
      return {
        isSetting: !action.payload,
        isMenu: !action.payload,
        isTheme: !action.payload,
        isLang: action.payload,
      };
    },
    setIsTheme(state, action) {
      return {
        isSetting: !action.payload,
        isMenu: !action.payload,
        isLang: !action.payload,
        isTheme: action.payload,
      };
    },
  },
});

export const { setIsMenu, setIsSetting, setIsLang, setIsTheme } =
  settingSlice.actions;

export default settingSlice.reducer;
