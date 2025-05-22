"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"

interface AuthorCardProps {
	title: string
	subtitle: string
	text: string
	src: string
	href: string
}

export const AuthorCard = (card: AuthorCardProps) => {
	return (
		<li className="group xs:w-[320px] xs:h-[480px] relative rounded-lg">
			{/* Efeito 3D - Quadrado roxo (correção) */}
			<div className="not-lg:hidden absolute inset-0 size-full bg-purple-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[5] overflow-hidden" />
			<motion.div
				className="lg:hidden absolute inset-0 size-full bg-purple-500 rounded-lg transition-opacity duration-300 z-[5] overflow-hidden"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1.2 }}
			/>

			{/* Container da imagem com overflow */}
			<div className="not-lg:contents size-full rounded-lg overflow-hidden relative z-10 group-hover:translate-x-1.5 group-hover:-translate-y-1.5">
				<motion.div
					className="lg:contents size-full rounded-lg overflow-hidden relative z-10"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1, x: 6, y: -6 }}
					transition={{ duration: 1.2 }}
				>
					<motion.div whileInView={{ scale: 1.05 }}>
						<Image
							className="size-full object-cover transition-all duration-300 group-hover:scale-105"
							width={900}
							height={1280}
							src={`/authors/${card.src}`}
							alt={card.title}
						/>
					</motion.div>
				</motion.div>
			</div>

			{/* Overlay/Card */}
			<div className="not-lg:hidden absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 z-20 rounded-lg group-hover:translate-x-1.5 group-hover:-translate-y-1.5">
				<div className="text-white text-center">
					<h3 className="text-2xl font-bold relative overflow-hidden inline-block p-1">
						<span className="relative z-10">{card.title}</span>
						<div className="absolute inset-y-0 left-0 w-0 bg-purple-500 transition-all duration-1500 group-hover:w-full" />
					</h3>

					<p className="mt-2 mb-1 text-lg relative z-10 underline decoration-2 decoration-purple-500">{card.subtitle}</p>

					<p className="text-sm relative z-10">{card.text}</p>

					<Link href={card.href}>
						<Image className="mx-auto mt-3" src="/icons/instagram-icon.svg" alt="Instagram" width={60} height={60} />
					</Link>
				</div>
			</div>

			<motion.div
				className="lg:hidden absolute inset-0 bg-black/60 transition-opacity duration-300 flex items-center justify-center p-4 z-20 rounded-lg"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, x: 6, y: -6 }}
				transition={{ duration: 1.2 }}
			>
				<div className="text-white text-center">
					<h3 className="text-2xl font-bold relative overflow-hidden inline-block p-1">
						<span className="relative z-10">{card.title}</span>
						<div className="absolute inset-y-0 left-0 w-0 bg-purple-500 transition-all duration-1500 group-hover:w-full" />
					</h3>

					<p className="mt-2 mb-1 text-lg relative z-10 underline decoration-2 decoration-purple-500">{card.subtitle}</p>

					<p className="text-sm relative z-10">{card.text}</p>

					<Link href={card.href}>
						<Image className="mx-auto mt-3" src="/icons/instagram-icon.svg" alt="Instagram" width={60} height={60} />
					</Link>
				</div>
			</motion.div>
		</li>
	)
}
