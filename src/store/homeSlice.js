import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: {},
  genres: {},
};

export const homeslice = createSlice({
  name: "home",
  initialState,
  reducers: {
    getApiConfiguration: (state, action) => void (state.url = action.payload),
    getGenres: (state, action) => void (state.genres = action.payload),
  },
});

export const { getApiConfiguration, getGenres } = homeslice.actions;
export default homeslice.reducer;
