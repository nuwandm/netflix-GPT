import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = ({ movieId }) => {
	const dispatch = useDispatch();

	const getMovieTrailer = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/" +
				movieId +
				"/videos?language=en-US",
			API_OPTIONS
		);

		const json = await data.json();

		const Trailers = json?.results.filter((video) => video.type === "Trailer");
		const Trailer = Trailers.length ? Trailers[0] : json.results[0];

		dispatch(addTrailerVideo(Trailer?.key));
	};

	useEffect(() => {
		getMovieTrailer();
	}, []);
};

export default useMovieTrailer;
