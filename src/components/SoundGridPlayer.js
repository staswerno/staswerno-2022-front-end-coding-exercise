import SoundGridPlayerItem from "./SoundGridPlayerItem";
import { soundCategories as categories } from "../data";
import { useState, useEffect, useRef } from "react";

export default function SoundGridPlayer() {
	const [selectedSound, setSelectedSound] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);

	// audio functionality code block start
	//

	const { audioSrc } = categories[selectedSound];
	const audioRef = useRef(new Audio(audioSrc));
	const intervalRef = useRef();
	const isReady = useRef(false);

	useEffect(() => {
		if (isPlaying) {
			audioRef.current = new Audio(audioSrc);
			audioRef.current.play();
			startTimer();
		} else {
			audioRef.current.pause();
		}
	}, [isPlaying]);

	useEffect(() => {
		return () => {
			audioRef.current.pause();
		};
	}, []);

	useEffect(() => {
		audioRef.current.pause();
		audioRef.current = new Audio(audioSrc);
		if (isReady.current) {
			audioRef.current.play();
			setIsPlaying(true);
			startTimer();
		} else {
			isReady.current = true;
		}
	}, [selectedSound]);

	const startTimer = () => {
		clearInterval(intervalRef.current);

		intervalRef.current = setInterval(() => {
			if (audioRef.current.ended) {
				setIsPlaying(false);
			}
		}, [50]);
	};

	//
	// audio functionality code block end

	return (
		<div className="grid grid-cols-3 max-w-5xl">
			{categories.map((element, index) => {
				const playHandler = () => {
					if (!isPlaying || (isPlaying && selectedSound !== index)) {
						setSelectedSound(index);
						setIsPlaying(true);
					} else {
						setIsPlaying(false);
					}
				};

				return (
					<SoundGridPlayerItem
						key={index}
						element={element}
						index={index}
						playHandler={playHandler}
						selectedSound={selectedSound}
						isPlaying={isPlaying}
					/>
				);
			})}
		</div>
	);
}
