import chopAndSwingImage from "./images/chop-and-swing.jpg";
import coreLibraryImage from "./images/core-library.jpg";
import drumBoothImage from "./images/drum-booth.jpg";
import drumEssentialsImage from "./images/drum-essentials.jpg";
import electricKeyboardsImage from "./images/electric-keyboards.jpg";
import glitchAndWashImage from "./images/glitch-and-wash.jpg";
import punchAndTiltImage from "./images/punch-and-tilt.jpg";
import skitterAndStepImage from "./images/skitter-and-step.jpg";
import synthEssentialsImage from "./images/synth-essentials.jpg";

import chopAndSwingAudio from "./audio/chop-and-swing.mp3";
import coreLibraryAudio from "./audio/core-library.mp3";
import drumBoothAudio from "./audio/drum-booth.mp3";
import drumEssentialsAudio from "./audio/drum-essentials.mp3";
import electricKeyboardsAudio from "./audio/electric-keyboard.mp3";
import glitchAndWashAudio from "./audio/glitch-and-wash.mp3";
import punchAndTiltAudio from "./audio/punch-and-tilt.mp3";
import skitterAndStepAudio from "./audio/skitter-and-step.mp3";
import synthEssentialsAudio from "./audio/synth-essentials.mp3";

const soundCategories = [
	{
		name: "Drum Essentials",
		image: drumEssentialsImage,
		audioSrc: drumEssentialsAudio,
	},
	{
		name: "Glitch and Wash",
		image: glitchAndWashImage,
		audioSrc: glitchAndWashAudio,
	},
	{
		name: "Synth Essentials",
		image: synthEssentialsImage,
		audioSrc: synthEssentialsAudio,
	},
	{
		name: "Drum Booth",
		image: drumBoothImage,
		audioSrc: drumBoothAudio,
	},
	{
		name: "Punch and Tilt",
		image: punchAndTiltImage,
		audioSrc: punchAndTiltAudio,
	},
	{
		name: "Electric Keyboards",
		image: electricKeyboardsImage,
		audioSrc: electricKeyboardsAudio,
	},
	{
		name: "Skitter and Step",
		image: skitterAndStepImage,
		audioSrc: skitterAndStepAudio,
	},
	{
		name: "Chop and Swing",
		image: chopAndSwingImage,
		audioSrc: chopAndSwingAudio,
	},
	{
		name: "Core Library",
		image: coreLibraryImage,
		audioSrc: coreLibraryAudio,
	},
];

export { soundCategories };
