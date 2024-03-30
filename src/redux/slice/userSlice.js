import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },

    toggleUserLogin: (state) => {
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
      };
    },

    resetUserData: () => {
      return initialState;
    },
  },
});

export const { updateUserData, resetUserData, toggleUserLogin } =
  userSlice.actions;
export default userSlice.reducer;
