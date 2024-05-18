import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = (movieId) => {
	useMovieTrailer(movieId);

	const trailerId = useSelector((store) => store.movies?.trailerVideo);

	return (
		<div>
			<iframe
				className="w-screen aspect-video"
				// once we create uncomment this for autoPlay the banner
				// src={
				// 	"https://www.youtube.com/embed/" + trailerId + "?&autoplay=1&mute=1"
				// }
				src={"https://www.youtube.com/embed/" + trailerId}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

				// referrerpolicy="strict-origin-when-cross-origin"
			></iframe>
		</div>
	);
};

export default VideoBackground;