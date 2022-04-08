import SoundGridPlayer from "./SoundGridPlayer";
import SoundGridText from "./SoundGridText";

export default function SoundGrid() {
	return (
		<>
			<div className="grid grid-cols-12">
				<div className="md:col-span-7 col-span-12">
					<SoundGridPlayer />
				</div>
				<div className="col-span-12 md:col-span-5 grid grid-cols-12 md:grid-cols-5">
					<SoundGridText />
				</div>
			</div>
		</>
	);
}
