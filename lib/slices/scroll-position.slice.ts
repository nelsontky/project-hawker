import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "scroll-position",
  initialState: {
    value: 0,
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { set } = slice.actions;

export default slice.reducer;
