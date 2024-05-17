import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
	const navigate = useNavigate();
	const user = useSelector((store) => store.user);
	const dispatch = useDispatch();

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {})
			.catch((error) => {
				console.log(error);
			});
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

	return (
		<div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
			<img className="w-44" src={LOGO} alt="Logo" />
			{user && (
				<div className="flex p-2">
					<img className="w-12 h-12 " alt="userIcon" src={user?.photoURL} />
					<button className="font-bold text-white" onClick={handleSignOut}>
						(Sign Out)
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
