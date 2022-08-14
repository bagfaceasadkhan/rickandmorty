import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageNo: 1,
};
export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    increment: (state) => {
      state.pageNo += 1;
    },
    decrement: (state) => {
      state.pageNo -= 1;
    },
    firstPage: (state) => {
      state.pageNo = 1;
    },
  },
});

export const { increment, decrement, firstPage } = pageSlice.actions;
export default pageSlice.reducer;
