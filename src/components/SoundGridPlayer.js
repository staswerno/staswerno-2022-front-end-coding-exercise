import SoundGridPlayerItem from "./SoundGridPlayerItem";
import { soundCategories as categories } from "../data";
import { useState } from "react";

export default function SoundGridPlayer() {
	const [selectedSound, setSelectedSound] = useState(null);
	return (
		<div className="grid grid-cols-3 max-w-5xl">
			{categories.map((element, index) => {
				const playHandler = () => {
					selectedSound !== index
						? setSelectedSound(index)
						: setSelectedSound(null);
				};
				return (
					<SoundGridPlayerItem
						key={index}
						element={element}
						index={index}
						playHandler={playHandler}
						selectedSound={selectedSound}
					/>
				);
			})}
		</div>
	);
}
