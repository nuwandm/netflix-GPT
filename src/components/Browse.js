import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMoviesList";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMoviess";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
	const showGPTSearch = useSelector((store) => store.gpt?.showGPTSearch);

	useNowPlayingMovies();
	usePopularMovies();
	useTopRatedMovies();

	return (
		<div>
			<Header />
			{showGPTSearch ? (
				<GPTSearch />
			) : (
				<>
					<MainContainer />
					<SecondaryContainer />
				</>
			)}
		</div>
	);
};

export default Browse;
