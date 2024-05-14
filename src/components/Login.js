import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
	const [isSignIn, setIsSignIn] = useState(true);
	const toggleSignIn = () => {
		setIsSignIn(!isSignIn);
	};

	return (
		<div>
			<Header />
			<img
				src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/c48bf50e-ab17-45aa-8a65-e49a2e1a6f5d/LK-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"
				alt="Netflix-Logo"
				className="absolute "
			/>
			<form className="absolute w-3/12 bg-black my-24 mx-auto right-0 left-0 text-white p-12 bg-opacity-80">
				<h2 className=" py-4 m-4 font-bold text-3xl">
					{isSignIn ? "Sign In" : "Sign Up"}
				</h2>
				<input
					type="text"
					placeholder="Email Address"
					className="p-4 my-4 w-full bg-gray-700 rounded-lg"
				/>
				{!isSignIn && (
					<input
						type="password"
						placeholder="Name "
						className="p-4 my-4 w-full bg-gray-700 rounded-lg"
					/>
				)}
				<input
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

				<button className="py-2 my-4 bg-red-700 text-xl w-full rounded-lg">
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
