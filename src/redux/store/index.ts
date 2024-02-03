import { configureStore } from "@reduxjs/toolkit";
import sliceMain from "../slices/sliceMain";
import userSlice from "../slices/userSlice";

const store = configureStore({
  reducer: { sliceMain, userSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
