import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Film } from "../../types";

const favorites = JSON.parse(localStorage.getItem('favorites')!);

type TypeInitial = {
  favorites: Film[];
};
const initialState: TypeInitial = {
  favorites: favorites || []
  
}
export const sliceFavorites = createSlice({
  name: 'favorites',
  initialState,
  reducers:{
    addToFavorites: (state, {payload}:PayloadAction<Film>) => { 
     
      const isExist = state.favorites.find(item => item.kinopoiskId === payload.kinopoiskId)
      if(!isExist)state.favorites.push(payload)
      localStorage.setItem('favorites', JSON.stringify(state.favorites))
      
    },
    // removeFromFavorites: (state, actions) => { 
    //   state.favorites = state.favorites.filter(user => {
    //   if(user.id !== actions.payload.id) return user
    //   })
    //   localStorage.setItem('favorites', JSON.stringify(state.favorites))
    // }
  }
})

export const {addToFavorites } =  sliceFavorites.actions
export default sliceFavorites.reducer