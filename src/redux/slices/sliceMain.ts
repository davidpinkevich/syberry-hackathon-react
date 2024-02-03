import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import service from "../../services/baseApi";

// interface TypesInitialState {
//   search: string;
//   typeSearch: string;
//   tooltip: boolean;
//   loading: boolean;
//   photos: Array<TypePhoto>;
// }

const initialState = {
  randomFilm: {},
};

export const fetchPhotos = createAsyncThunk("main/getRandom", async () => {
  return await service.getRandomFilm();
});

const searchSlice = createSlice({
  name: "main",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        // state.loading = true;
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        // state.loading = false;
        state.randomFilm = action.payload;
      })
      .addCase(fetchPhotos.rejected, (state) => {
        // state.loading = false;
      });
  },
});

// export const { hiddenTooltip, changeType } = searchSlice.actions;
export default searchSlice.reducer;
