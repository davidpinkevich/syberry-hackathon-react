import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Film, FilmSearchResponse } from "../../types";
import service from "../../services/baseApi";

type TypeInitial = {
  randomFilm: Film | undefined;
  topFilms: Film[] | undefined;
  loadRandom: boolean;
};

const initialState: TypeInitial = {
  randomFilm: undefined,
  topFilms: undefined,
  loadRandom: true,
};

export const fetchRandom = createAsyncThunk("main/getRandom", async () => {
  return await service.getRandomFilm();
});

export const fetchTopFilms = createAsyncThunk("main/getTops", async () => {
  return await service.getTopFilms();
});

const searchSlice = createSlice({
  name: "main",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandom.pending, (state) => {
        state.loadRandom = true;
      })
      .addCase(
        fetchRandom.fulfilled,
        (state, action: PayloadAction<{ items: Film[] } | undefined>) => {
          state.loadRandom = false;
          if (action?.payload?.items)
            state.randomFilm =
              action.payload.items[Math.floor(Math.random() * 50)];
        }
      )
      .addCase(
        fetchTopFilms.fulfilled,
        (state, action: PayloadAction<FilmSearchResponse | undefined>) => {
          if (action?.payload?.items)
            state.topFilms = [...action.payload?.items];
        }
      );
  },
});

export default searchSlice.reducer;
