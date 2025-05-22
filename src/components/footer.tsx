import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

const linksArray = [
	{ text: "Curso", href: "curso" },
	{ text: "O que você vai aprender?", href: "o-que-voce-vai-aprender" },
	{ text: "Trailer", href: "trailer" },
	{ text: "Quem Somos", href: "quem-somos" }
]

const instagramLinkArray = ["https://www.instagram.com/filipe.emerson/", "https://www.instagram.com/gg2almeida/"]

export const Footer = () => (
	<footer className="bg-[#8938C1] py-4 px-6 mt-8 md:mt-16">
		<div className="flex flex-col gap-y-2 md:grid grid-cols-8 md:items-center w-full max-w-[1280px] mx-auto">
			<Image
				src="/logo.svg"
				alt="Do zero ao primeiro personagem"
				className="filter invert brightness-500 contrast-100 saturate-0 mix-blend-lighten mx-auto col-span-3"
				width={200}
				height={100}
			/>

			<ul className="flex flex-col col-span-3">
				{linksArray.map((link) => (
					<li key={link.href}>
						<Button variant="link" className="text-white decoration-white" asChild>
							<Link href={`#${link.href}`}>{link.text}</Link>
						</Button>
					</li>
				))}
			</ul>

			<ul className="flex justify-center gap-3 col-span-2">
				{instagramLinkArray.map((link) => (
					<li key={link}>
						<a href={link}>
							<Image src="/icons/instagram-icon.svg" alt="" width={40} height={40} />
						</a>
					</li>
				))}
			</ul>
		</div>
	</footer>
)
