import { createSlice } from "@reduxjs/toolkit";
// import { Film } from "../../types";

// const user = localStorage.getItem('user');
const favorites= localStorage.getItem('favorites');

const initialState = {
  favorites: favorites ? JSON.parse(favorites) : [],
  
}
export const sliceFavorites = createSlice({
  name: 'favorites',
  initialState,
  reducers:{
    getFavorites: () => { 
     
      // const isExist = state.favorites.find(item => item.id === payload.id)
      // if(!isExist)state.favorites.push(payload)
      // localStorage.setItem('favorites', JSON.stringify(state.favorites))
      
    },
    // removeFavorites: (state, actions) => { 
    //   state.favorites = state.favorites.filter(user => {
    //   if(user.id !== actions.payload.id) return user
    //   })
    //   localStorage.setItem('favorites', JSON.stringify(state.favorites))
    // }
  }
})

export const {getFavorites } =  sliceFavorites.actions
export default sliceFavorites.reducer