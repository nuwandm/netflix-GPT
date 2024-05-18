import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
	console.log("HI");
	const dispatch = useDispatch();

	const getPopularMovies = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/top_rated?page=1",
			API_OPTIONS
		);

		const json = await data.json();
		console.log(json);
		dispatch(addTopRatedMovies(json.results));
		return json.results;
	};

	useEffect(() => {
		getPopularMovies();
	}, []);
};

export default useTopRatedMovies;