import { configureStore } from "@reduxjs/toolkit";
import sliceMain from "../slices/sliceMain";

const store = configureStore({
  reducer: { sliceMain },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
