import { configureStore, createSlice } from "@reduxjs/toolkit";

let testSlice = createSlice({ name: "testSlice", initialState: "초기값" });
let stock = createSlice({ name: "stock", initialState: [10, 11, 12] });
let shoes = createSlice({
  name: "shoes",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 1, name: "Red Knit", count: 1 },
    { id: 2, name: "Grey Yordan", count: 3 },
  ],
});

// configureStore 리듀서에 등록해줘야 사용가능
export default configureStore({
  reducer: {
    테스트용: testSlice.reducer,
    stock: stock.reducer,
    shoes: shoes.reducer,
  },
});
