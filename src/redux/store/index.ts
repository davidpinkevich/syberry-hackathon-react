import { configureStore } from "@reduxjs/toolkit";
import sliceMain from "../slices/sliceMain";
import sliceFavorites from "../slices/sliceFavorites";


const store = configureStore({
  reducer: { sliceMain, favorite: sliceFavorites},
 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
