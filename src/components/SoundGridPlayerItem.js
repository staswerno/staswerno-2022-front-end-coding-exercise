export default function SoundGridPlayerItem({ element }) {
	return (
		<div
			className="aspect-square w-full"
			style={{
				backgroundImage: `url(${element.image})`,
				backgroundSize: "cover",
				overflow: "hidden",
			}}
		></div>
	);
}
