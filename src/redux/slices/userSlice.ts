import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types";

type TypeInitial = {
    user: User | null;
};

const initialState: TypeInitial = {
    user: JSON.parse(localStorage.getItem('user')!) || null
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser(state, action) {
            state.user = action.payload.user
            localStorage.setItem('user', action.payload.user)
        },
        removeUser(state) {
            state.user = null
            localStorage.removeItem('user')
        }
    },
});

export const { addUser, removeUser } = userSlice.actions
export default userSlice.reducer;

