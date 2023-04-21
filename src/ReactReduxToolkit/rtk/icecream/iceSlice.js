import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  number: 100,
};
const iceSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    decrease: (state) => {
      state.number--;
    },
    increse: (state) => {
      state.number++;
    },
  },
});

export default iceSlice.reducer;
export const { increse, decrease } = iceSlice.actions;
