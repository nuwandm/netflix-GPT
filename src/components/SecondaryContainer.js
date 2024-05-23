import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
	const { nowPlayingMovies } = useSelector((store) => store.movies);
	const { popularMovies } = useSelector((store) => store.movies);
	const { topRatedMovies } = useSelector((store) => store.movies);
	if (
		nowPlayingMovies === null ||
		popularMovies === null ||
		topRatedMovies === null
	)
		return;

	return (
		<div className="bg-black">
			<div className="mt-0 md:-mt-48 pl-4 md:pl-12 relative z-20">
				<MovieList title={"Now Playing Movies"} movies={nowPlayingMovies} />
				<MovieList title={"Populer Movies"} movies={popularMovies} />
				<MovieList title={"Top Rated"} movies={topRatedMovies} />
			</div>
		</div>
	);
};

export default SecondaryContainer;
