import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
	name: "gpt",
	initialState: {
		showGPTSearch: false,
		gptMovies: null,
		movieNames: null,
	},
	reducers: {
		toggleGPTSearchView: (state, action) => {
			state.showGPTSearch = !state.showGPTSearch;
		},
		addGptMovieResults: (state, action) => {
			const { movieNames, movieResults } = action.payload;
			state.gptMovies = movieNames;
			state.movieNames = movieResults;
		},
	},
});

export const { toggleGPTSearchView, addGptMovieResults } = gptSlice.actions;

export default gptSlice.reducer;
