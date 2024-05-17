import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

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
		onAuthStateChanged(auth, (user) => {
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
	}, []);

	return (
		<div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
			<img
				className="w-44"
				src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
				alt="Logo"
			/>
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
