// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyD6HRS0v8SpWbrZ7eA_p5-YlKvw49qDvZo",
	authDomain: "netflixgpt-88820.firebaseapp.com",
	projectId: "netflixgpt-88820",
	storageBucket: "netflixgpt-88820.appspot.com",
	messagingSenderId: "46163290892",
	appId: "1:46163290892:web:d3246b236c9dc6a589f729",
	measurementId: "G-SP84YKJT17",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
