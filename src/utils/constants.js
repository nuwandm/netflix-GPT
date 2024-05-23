export const LOGO =
	"https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const Avatar =
	"https://avatars.githubusercontent.com/u/56627412?s=400&u=460da17af2db465ea6d8a2ccc4c900ba021b37dd&v=4";

export const banner =
	"https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/c48bf50e-ab17-45aa-8a65-e49a2e1a6f5d/LK-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const API_OPTIONS = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
	},
};

export const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
	{ identifier: "en", name: "English" },
	{ identifier: "Sinhalese", name: "Sinhalese" },
	{ identifier: "Tamil", name: "Tamil" },
];

export const OPEN_AI_KEY = process.env.REACT_APP_OPENAI_KEY;
