import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validation";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { banner, Avatar } from "../utils/constants";

const Login = () => {
	const [isSignIn, setIsSignIn] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);
	const email = useRef(null);
	const password = useRef(null);
	const name = useRef(null);
	const dispatch = useDispatch();
	const toggleSignIn = () => {
		setIsSignIn(!isSignIn);
	};

	const handleButtonClick = () => {
		const errorMessage = checkValidateData(
			email.current.value,
			password.current.value
		);

		setErrorMessage(errorMessage);

		if (errorMessage) return;

		if (!isSignIn) {
			//signUp logic
			createUserWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed up
					const user = userCredential.user;
					updateProfile(auth.currentUser, {
						displayName: name.current.value,
						photoURL: Avatar,
					})
						.then(() => {
							// Profile updated!
							const { uid, email, displayName, photoURL } = auth.currentUser;
							dispatch(
								addUser({
									uid,
									email,
									displayName,
									photoURL,
								})
							);
						})
						.catch((error) => {
							// An error occurred
							// ...
						});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + "-" + errorMessage);
				});
		} else {
			//signIn logic
			signInWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + "-" + errorMessage);
				});
		}
	};

	return (
		<div>
			<Header />
			<img
				src={banner}
				alt="Netflix-Logo"
				className="absolute h-screen object-cover"
			/>
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
				className="absolute w-[90%] md:w-3/12 bg-black my-24 mx-auto right-0 left-0 text-white p-12 bg-opacity-80"
			>
				<h2 className=" py-4 m-4 font-bold text-3xl">
					{isSignIn ? "Sign In" : "Sign Up"}
				</h2>
				<input
					ref={email}
					type="text"
					placeholder="Email Address"
					className="p-4 my-4 w-full bg-gray-700 rounded-lg"
				/>
				{!isSignIn && (
					<input
						ref={name}
						type="text"
						placeholder="Name "
						className="p-4 my-4 w-full bg-gray-700 rounded-lg"
					/>
				)}
				<input
					ref={password}
					type="password"
					placeholder="Password"
					className="p-4 my-4 w-full bg-gray-700 rounded-lg"
				/>
				{!isSignIn && (
					<input
						type="password"
						placeholder="Confirm Password"
						className="p-4 my-4 w-full bg-gray-700 rounded-lg"
					/>
				)}
				<p className="text-red-700 font-bold text-lg p2">{errorMessage}</p>

				<button
					className="py-2 my-4 bg-red-700 text-xl w-full rounded-lg"
					onClick={handleButtonClick}
				>
					{isSignIn ? "Sign In" : "Sign Up"}
				</button>
				<p className="py-4 cursor-pointer" onClick={toggleSignIn}>
					{isSignIn
						? "New to Netflix? Sign UP Now"
						: "Already have an account? Sign In"}
				</p>
			</form>
		</div>
	);
};

export default Login;
