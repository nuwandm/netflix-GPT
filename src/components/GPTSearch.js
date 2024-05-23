import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import { banner } from "../utils/constants";

const GPTSearch = () => {
	return (
		<>
			<div>
				<img
					src={banner}
					alt="Netflix-Logo"
					className="absolute -z-10 opacity-80 h-screen object-cover md:w-full"
				/>
			</div>
			<div className="pt-[25%] md:pt-0">
				<GPTSearchBar />
				<GPTMovieSuggestion />
			</div>
		</>
	);
};

export default GPTSearch;
