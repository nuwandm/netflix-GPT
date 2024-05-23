import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import { banner } from "../utils/constants";

const GPTSearch = () => {
    
	return (
		<div>
			<img
				src={banner}
				alt="Netflix-Logo"
				className="absolute -z-10 opacity-80"
			/>

			<GPTSearchBar />
			<GPTMovieSuggestion />
		</div>
	);
};

export default GPTSearch;
