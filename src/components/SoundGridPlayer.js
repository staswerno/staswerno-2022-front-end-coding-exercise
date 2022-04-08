import SoundGridPlayerItem from "./SoundGridPlayerItem";
import { soundCategories as categories } from "../data";

export default function SoundGridPlayer() {
	return (
		<div className="grid grid-cols-3 max-w-5xl">
			{categories.map((element, index) => (
				<SoundGridPlayerItem key={index} element={element} index={index} />
			))}
		</div>
	);
}
