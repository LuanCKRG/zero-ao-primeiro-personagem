import Image from "next/image"

export const Header = () => (
	<header className="py-4 flex items-center justify-center">
		<Image alt="Do zero ao primeiro personagem" src="/logo.svg" width={200} height={50} />
	</header>
)
