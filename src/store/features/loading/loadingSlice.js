import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: "loading",
  reducerPath: "loading",
  initialState: {
    loading: false,
  },
  reducers: {
    toggleLoading: (state) => {
      state.loading = !state.loading;
    },
  },
});

export const { toggleLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
