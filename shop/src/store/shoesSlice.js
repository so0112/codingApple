import { createSlice } from "@reduxjs/toolkit";

let shoes = createSlice({
  name: "shoes",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    addCount: (state, action) => {
      state[action.payload].count += 1;
    },
    minusCount: (state, action) => {
      state[action.payload].count -= 1;
    },
  },
});

let shoes2 = createSlice({
  name: "shoes",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    addCount: (state, action) => {
      state[action.payload].count += 1;
    },
    minusCount: (state, action) => {
      state[action.payload].count -= 1;
    },
  },
});

export const { addCount, minusCount } = shoes.actions;
export default shoes;
