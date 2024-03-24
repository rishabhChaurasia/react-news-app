import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authUser: null,
  authLoading: false,
  authError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authUserStart: (state) => {
      state.authLoading = true;
      state.authError = null;
    },
    authUserSuccess: (state, action) => {
      state.authLoading = false;
      state.authUser = action.payload;
      state.authError = null;
    },
    authUserFailure: (state, action) => {
      state.authLoading = false;
      state.authError = action.payload;
    },
    authUserLogout: (state) => {
      state.authUser = null;
    },
  },
});

export const {
  authUserStart,
  authUserSuccess,
  authUserFailure,
  authUserLogout,
} = authSlice.actions;

export default authSlice.reducer;
