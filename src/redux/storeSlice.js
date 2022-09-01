import { createSlice } from "@reduxjs/toolkit";

const store = createSlice({
  name: "store",
  initialState: {},
  reducers: {
    logIn(state, action) {
      console.log(action.payload);
      return { ...action.payload };
      // console.log(state);
    },
    logOut(state, payload) {
      state = {};
    },
  },
});

export const { logIn, logOut } = store.actions;

export default store.reducer;
