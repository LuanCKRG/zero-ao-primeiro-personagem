"use client"

import { Circle } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const courseModulesCardsArray = [
	{
		id: 1,
		title: "Antes de Desenhar, o que você precisa fazer?",
		steps: ["Como usar referências nos seus personagens", "A linguagem dos shapes", "O que é uma boa silhueta?"]
	},
	{
		id: 2,
		title: "Vamos ao básico (fundamentos)",
		steps: ["Proporção", "Gestual para personagens", "Perspectiva", "Manual completo sobre mão e pé", "Aplicando feedbacks em artes antigas"]
	},
	{ id: 3, title: "Criação de Personagem", steps: ["Criação de personagem: do início ao fim", "Criação de personagem – parte 2"] },
	{
		id: 4,
		title: "Character design para animação (Model Sheet)",
		steps: []
	},
	{
		id: 5,
		title: "Personagem para Games",
		steps: [
			"O que faz um bom personagem para Games ? Felipe Anselmé (Mad Boogie Creations)",
			"Personagens para o mercado de games NA PRÁTICA com Felipe Anselmé"
		]
	},
	{ id: 6, title: "Vamos Produzir", steps: ["Mão na massa: vamos criar personagens"] },
	{ id: 7, title: "Redes Sociais para Artistas", steps: ["Como postar, viralizar e vender", "Qual a melhor rede social para você ?"] }
]

export const CourseModulesSection = () => {
	return (
		<Carousel
			className="w-full max-w-xl mx-auto"
			opts={{
				loop: true
			}}
			plugins={[
				Autoplay({
					delay: 2000
				})
			]}
		>
			<CarouselContent>
				{courseModulesCardsArray.map((courseModule, key) => (
					<CarouselItem key={courseModule.id} className="p-8 mx-auto">
						<div className="h-full bg-purple-400/0 backdrop-blur-xs isolate shadow-xl p-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-purple-300 hover:scale-105">
							<h3 className="text-center font-medium uppercase text-sm xs:text-base">Módulo {key + 1}</h3>

							<p className="text-center font-semibold mb-3 text-sm xs:text-base">{courseModule.title}</p>

							{courseModule.steps.map((step) => (
								<p key={step} className="text-xs xs:text-base">
									<span className="inline-flex items-center">
										<Circle className="fill-black inline size-2 mr-1" />
									</span>

									<span> {step}</span>
								</p>
							))}
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="hidden md:inline-flex border-purple-500 text-purple-500 hover:cursor-pointer size-10" />
			<CarouselNext className="hidden md:inline-flex border-purple-500 text-purple-500 hover:cursor-pointer size-10" />
		</Carousel>
	)
}
