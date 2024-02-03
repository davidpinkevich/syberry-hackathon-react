import { createSlice } from "@reduxjs/toolkit";

type TypeInitial = {
    user: boolean;
};

const initialState: TypeInitial = {
    user: !!localStorage.getItem('user')
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
            state.user = !!null
            localStorage.removeItem('user')
        }
    },
});

export const { addUser, removeUser } = userSlice.actions
export default userSlice.reducer;

