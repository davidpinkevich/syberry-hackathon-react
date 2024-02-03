import { configureStore } from "@reduxjs/toolkit";
import sliceMain from "../slices/sliceMain";
import userSlice from "../slices/userSlice";
import sliceFavorites from "../slices/sliceFavorites";

const store = configureStore({
  reducer: { sliceMain, userSlice, sliceFavorites },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
