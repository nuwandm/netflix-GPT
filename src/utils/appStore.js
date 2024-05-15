import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const appStore = configureStore({
	reducer: {
		user: userSlice.reducer,
	},
});

appStore.subscribe(() => {
	console.log("Store updated:", appStore.getState());
});

export default appStore;
