import postSlice from "./PostSlice";
// import productsReduser from "./Secondslice";

import { configureStore, createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isRequestSent: false,
  },
  reducers: {
    setRequestSent(state) {
      state.isRequestSent = true;
    },
  },
});

export const { setRequestSent } = appSlice.actions;

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

export default store;
