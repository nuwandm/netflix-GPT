import React from "react";

const VideoTitle = ({ title, overview }) => {
	return (
		<div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
			<h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
			<p className="hidden md:inline-block py-6 text-lg w-1/2"> {overview}</p>
			<div className="my-2 md:m-0">
				<button className="bg-white py-1 md:py-4 px-4 md:px-16 text-xl text-black  rounded-lg hover:bg-opacity-80">
					Play
				</button>
				<button className="mx-2 bg-slate-500 p-4 px-12 text-lg text-white rounded-lg hidden md:inline-block">
					More Info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
