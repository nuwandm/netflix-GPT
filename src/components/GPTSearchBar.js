import React, { useRef } from "react";
import language from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openAi from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GPTSearchBar = () => {
	const lanKey = useSelector((store) => store.config?.language);
	const searchText = useRef(null);
	const dispatch = useDispatch();

	const searchMovieTMDB = async (movie) => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie?query=" +
				movie +
				"&include_adult=false&page=1",
			API_OPTIONS
		);
		const json = data.json();
		return json.results;
	};

	const handleGPTSearchClick = async () => {
		try {
			const gptQuery =
				"Act as a movie recommendation system and suggest some movies for the query :" +
				searchText.current.value +
				"only give me five movies only and it should be like this format ---> movie1,movie2,movie3,movie4,movie5";

			const gptResults = await openAi.chat.completions.create({
				messages: [{ role: "user", content: gptQuery }],
				model: "gpt-3.5-turbo",
			});

			if (!gptResults.choices) {
				console.log(" No Gpt Results"); // TODO- write an error handling
			}
			const gptMovies = gptResults.choices[0].message?.content.split(",");
			const data = gptMovies.map((movie) => searchMovieTMDB(movie)); // 🔴 since this is an async function it is return array of promises (JS not wait for none)
			const tmdbResults = await Promise.all(data); // this resolve the data array (array of promises)

			dispatch(
				addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbResults })
			);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="pt-[10%] flex justify-center ">
			<form
				className="w-[90%] md:w-1/2  bg-black bg-opacity-85  grid grid-cols-12 rounded-lg"
				onSubmit={(e) => e.preventDefault()}
			>
				<input
					ref={searchText}
					type="text"
					className="p-4 m-4 col-span-9"
					placeholder={language[lanKey].gptSearchPlaceHolder}
				/>
				<button
					className="py-2 m-4 px-4 bg-red-700 text-white rounded-lg col-span-3"
					// openai made this api paid so I had to comment this
					// onClick={handleGPTSearchClick}
				>
					{language[lanKey].search}
				</button>
			</form>
		</div>
	);
};

export default GPTSearchBar;
