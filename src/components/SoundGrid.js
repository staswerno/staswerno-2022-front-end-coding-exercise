import SoundGridPlayer from "./SoundGridPlayer";
import SoundGridText from "./SoundGridText";

export default function SoundGrid() {
	return (
		<>
			<div class="">
				<div>
					<SoundGridPlayer />
				</div>
				<div>
					<SoundGridText />
				</div>
			</div>
		</>
	);
}
