import React from "react";
import language from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
	const lanKey = useSelector((store) => store.config?.language);

	return (
		<div className="pt-[10%] flex justify-center ">
			<form className="w-1/2  bg-black bg-opacity-85  grid grid-cols-12 rounded-lg">
				<input
					type="text"
					className="p-4 m-4 col-span-9"
					placeholder={language[lanKey].gptSearchPlaceHolder}
				/>
				<button className="py-2 m-4 px-4 bg-red-700 text-white rounded-lg col-span-3">
					{language[lanKey].search}
				</button>
			</form>
		</div>
	);
};

export default GPTSearchBar;
