import { createSlice } from "@reduxjs/toolkit";

let shoes = createSlice({
  name: "shoes",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 3 },
  ],

  reducers: {
    addShoes: (state, action) => {},
  },
});

export default shoes;
