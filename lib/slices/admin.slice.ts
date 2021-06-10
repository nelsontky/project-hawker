import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "admin",
  initialState: {
    token: "",
    authorized: false,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.authorized = true;
    },
  },
});

export const { setToken } = slice.actions;

export default slice.reducer;
