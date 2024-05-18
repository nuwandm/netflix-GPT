import React from "react";
import { TMDB_IMAGE_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
	return (
		<div className="w-48 pr-4">
			<img src={TMDB_IMAGE_URL + posterPath} />
		</div>
	);
};

export default MovieCard;
