import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../appwrite/auth";

export const checkAuthStatus = createAsyncThunk(
  "auth/checkStatus",
  async () => {
    const user = await authService.getCurrentUser();
    return user ? { userData: user } : { userData: null };
  }
);

const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkAuthStatus.fulfilled, (state, action) => {
      state.status = !!action.payload.userData;
      state.userData = action.payload.userData;
    });
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;