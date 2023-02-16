import { configureStore } from "@reduxjs/toolkit";
import shoes from "./shoesSlice";

// configureStore 리듀서에 등록해줘야 사용가능
export default configureStore({
  reducer: {
    shoes: shoes.reducer,
  },
});
