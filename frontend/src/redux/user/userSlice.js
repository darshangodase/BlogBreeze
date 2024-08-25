import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    loading: false,
    error: null
};  

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signInStart(state, action) {
            state.loading = true;
            state.error = null;
        },
        signInSuccess(state, action) {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure(state, action) {
            state.loading = false;
            state.error =action.payload;
        }
    }
});

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;
export default userSlice.reducer;