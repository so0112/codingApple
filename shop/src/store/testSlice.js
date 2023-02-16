import { createSlice } from "@reduxjs/toolkit";

let testNum = createSlice({
  name: "test",
  initialState: { num: 0 },

  reducers: {
    addNum: (state, action) => {
      state.num += 1;
    },
    minusNum: (state, action) => {
      state.num -= 1;
    },
  },
});

export const { addNum, minusNum } = testNum.actions;
export default testNum;
