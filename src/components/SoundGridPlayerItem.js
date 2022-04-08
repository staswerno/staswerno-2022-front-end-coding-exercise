import playicon from "../icons/play-icon.svg";
import pauseicon from "../icons/pause-icon.svg";

export default function SoundGridPlayerItem({
	element,
	index,
	playHandler,
	selectedSound,
}) {
	return (
		<div
			className="aspect-square w-full flex relative"
			style={{
				backgroundImage: `url(${element.image})`,
				backgroundSize: "cover",
			}}
		>
			<div className="hidden sm:block absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black"></div>
			<div className="self-end flex relative">
				<div className="h-[36px] w-[36px] bg-ableton-purple flex">
					<button className="m-auto" onClick={playHandler}>
						{selectedSound === index ? (
							<img src={pauseicon} alt="pause button" />
						) : (
							<img src={playicon} alt="play button" />
						)}
					</button>
				</div>
				<div className="hidden sm:block ml-3 font-book text-xs self-center text-white">
					{element.name}
				</div>
			</div>
		</div>
	);
}
