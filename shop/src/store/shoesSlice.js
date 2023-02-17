import { createSlice } from "@reduxjs/toolkit";

let shoes = createSlice({
  name: "shoes",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    addCount: (state, action) => {
      const findIndex = state.findIndex((item) => item.id === action.payload);
      state[findIndex].count += 1;
    },
    minusCount: (state, action) => {
      const findIndex = state.findIndex((item) => item.id === action.payload);
      state[findIndex].count -= 1;
    },
    addItem: (state, action) => {
      const findIndex = state.findIndex((item) => item.id === action.payload.id);
      if (findIndex === -1) {
        state.push(action.payload);
      } else {
        state[findIndex].count += 1;
      }
    },
  },
});

export const { addCount, minusCount, addItem } = shoes.actions;
export default shoes;
