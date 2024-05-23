import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
	reducer: {
		user: useReducer,
		movies: moviesReducer,
		gpt: gptReducer,
		config: configReducer,
	},
});

// appStore.subscribe(() => {
// 	console.log("Store updated:", appStore.getState());
// });

export default appStore;
