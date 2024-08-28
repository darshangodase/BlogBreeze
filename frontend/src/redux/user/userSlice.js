import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isFetching: false,
    error: null,
  },
  reducers: {
    signInStart: (state) => {
      state.isFetching = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    updateStart: (state) => {
      state.isFetching = true;
      state.error = null;
    },
     updateSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = null;
    },
    updateFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    deleteUserStart: (state, action) => {
      state.isFetching = true;
      state.error = null;
    },
    deleteUserSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = null;
      state.error = null;
    } ,
    deleteUserFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;  
  },
}
});

export const { signInStart, signInSuccess, signInFailure, clearError,updateFailure,updateStart,updateSuccess,deleteUserStart,deleteUserSuccess,deleteUserFailure } = userSlice.actions;
export default userSlice.reducer;