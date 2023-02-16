import { configureStore } from "@reduxjs/toolkit";
import testNum from "./testSlice";
import shoes from "./shoesSlice";

export default configureStore({
  reducer: {
    testNum: testNum.reducer,
    shoes: shoes.reducer,
  },
});
