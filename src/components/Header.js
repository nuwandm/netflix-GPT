import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
	const navigate = useNavigate();
	const user = useSelector((store) => store.user);
	const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
	const dispatch = useDispatch();

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleGPTSearchClick = () => {
		// Toggle GPT Search
		dispatch(toggleGPTSearchView());
	};

	// thanks firebase, we can dispatch all user action in one place  by using onAuthStateChanged API
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, dispatch an action to store
				const { uid, email, displayName, photoURL } = user;
				dispatch(
					addUser({
						uid,
						email,
						displayName,
						photoURL,
					})
				);
				navigate("/browse");
			} else {
				// User is signed out
				dispatch(removeUser());
				navigate("/");
			}
		});
		// Unsubscribe when component unmounts (this function will be called when component unmounts)
		return () => unsubscribe();
	}, []);

	const handleLanguageChange = (e) => {
		dispatch(changeLanguage(e.target.value));
	};

	return (
		<div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row md:justify-between">
			<img
				className="w-44 mx-auto md:mx-0 cursor-pointer"
				src={LOGO}
				alt="Logo"
			/>

			{user && (
				<div className="flex p-2 mx-auto md:mx-0">
					{showGPTSearch && (
						<select
							className=" p-2 m-2 bg-gray-900 text-white"
							onChange={handleLanguageChange}
						>
							{SUPPORTED_LANGUAGES.map((lang) => (
								<option key={lang.identifier} value={lang.identifier}>
									{lang.name}
								</option>
							))}
						</select>
					)}
					<button
						className="py-2 px-6 m-2 mx-4 bg-purple-800 text-white rounded-lg"
						onClick={handleGPTSearchClick}
					>
						{showGPTSearch ? "Home Page" : "GPT Search"}
					</button>
					<img
						className="hidden md:block w-12 h-12 "
						alt="userIcon"
						src={user?.photoURL}
					/>
					<button className="font-bold text-white" onClick={handleSignOut}>
						(Sign Out)
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
