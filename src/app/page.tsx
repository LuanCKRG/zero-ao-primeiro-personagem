import Image from "next/image"
import { ArrowRightIcon, Circle } from "lucide-react"

import { Vortex } from "@/components/vortex"
import { LINK_HOTMART } from "@/constants/links"
import { Card, CardHeader, CardAction, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { VideoSection } from "@/components/video-section"
import { AuthorCard } from "@/components/author-card"

const advantagesCardsArray = [
	{
		title: "Organização do Projeto",
		text: "Manter o fluxo do projeto é mais importante do que você imagina. Vamos ensinar todos os passos necessários para criar personagens e mostrar como respeitar o planejamento pode tornar seus projetos muito mais eficientes e profissionais.",
		src: "note"
	},
	{
		title: "Programas para Auxiliar",
		text: "Nem só de Photoshop vive o artista! Vamos explorar técnicas e recursos de outros programas e ferramentas que podem facilitar o seu processo criativo.",
		src: "settings"
	},
	{
		title: "Como Fugir do Genérico",
		text: "Você vai aprender as ferramentas necessárias para criar personagens que se destacam, com personalidades únicas e marcantes.",
		src: "face"
	},
	{
		title: "Fundamentos de Desenho",
		text: "Antes de criar personagens, é essencial revisar os conceitos básicos que auxiliam no desenvolvimento de qualquer tipo de arte visual. Esses famosos fundamentos serão abordados em nosso conteúdo.",
		src: "pencil"
	},
	{
		title: "Personagens",
		text: "Manter o fluxo do projeto é mais importante do que você imagina. Vamos ensinar todos os passos necessários para criar personagens e mostrar como seguir o planejamento pode elevar a qualidade dos seus projetos.",
		src: "light"
	}
]

const authorsCardsArray = [
	{
		title: "Filipe Emerson",
		subtitle: "Animador 2D e Artista ",
		text: "Com mais de 10 anos de experiência no setor criativo, atuando em projetos de destaque para clientes como Gaules, Esporte Clube Bahia, Zombie Studios, e Cúpula Rec, entre outros.",
		src: "filipe.jpg",
		href: "https://www.instagram.com/filipe.emerson/"
	},
	{
		title: "Gustavo Almeida",
		subtitle: "Artista e Gestor de Marketing",
		text: "Anos com experiência no mercado de games e publicidade. Atualmente atuando no setor de games, já contribuiu com empresas como Epopeia Games, Mito Games e TNT Sports Emma, Neon, Entre Outros",
		src: "gustavo.png",
		href: "https://www.instagram.com/gg2almeida/"
	}
]

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
	{ id: 3, title: "Criação de Personagem", steps: ["Criação de personagem do início ao fim", "Criação de personagem – parte 2"] },
	{ id: 4, title: "Personagem para Animação", steps: ["O que um personagem precisa para funcionar na animação + turnaround"] },
	{
		id: 5,
		title: "Personagem para Games",
		steps: ["Como pensar personagens para o mercado de games com Filpe Anslemé (Mad Boogie Creations)"]
	},
	{ id: 6, title: "Vamos Produzir", steps: ["Mão na massa: vamos criar personagens"] },
	{ id: 7, title: "Redes Sociais para Artistas", steps: ["Como postar, viralizar e vender", "Qual a melhor rede social para você ?"] }
]

const HomePage = () => {
	return (
		<>
			<div className="relative overflow-hidden px-2 md:px-8 lg:px-16">
				<div className="fixed left-0 -top-40 size-full -z-20 overflow-hidden">
					<Vortex backgroundColor="transparent" className="flex size-full" rangeY={300} baseRadius={2} particleCount={50} rangeSpeed={1.5} baseHue={200} />
				</div>

				<div className="space-y-8 xl:space-y-20">
					<section id="curso" className="flex flex-col items-center">
						<div className="max-w-[705px] flex flex-col items-center">
							<Image className="w-full" alt="" src="/hero-image.jpeg" width={800} height={400} />

							<p className="w-full text-lg sm:text-2xl md:text-3xl text-start text-[#6A3E91] uppercase font-bold -translate-y-3 xs:-translate-y-8 ">
								Do zero ao primeiro <br /> personagem
							</p>
						</div>

						<Card className="flex flex-col lg:grid grid-cols-8 lg:justify-between p-4 lg:p-8 w-full mx-6 md:mx-0 gap-x-10 bg-purple-400/0 backdrop-blur-xs isolate shadow-lg ring-1 ring-black/5">
							<p className="text-lg sm:text-2xl col-span-4">
								Aprenda, passo a passo, a criar <span className="font-semibold underline">personagens marcantes e nada genéricos.</span>
							</p>

							<div className="col-span-3 col-start-6 flex flex-col justify-between gap-y-3">
								<CardHeader className="flex flex-col items-center w-full xs:gap-y-4 px-0">
									<p className="text-6xl leading-none font-bold flex">
										<span className="text-3xl self-end">R$</span> 120 <span className="text-3xl self-start">,00</span>
									</p>
								</CardHeader>

								<CardAction className="w-full">
									<Button className="w-full bg-[#6A3E91] hover:bg-[#6A3E91]/80 text-white hover:text-neutral-100 hover:cursor-pointer h-11" asChild>
										<a href={LINK_HOTMART}>Quero acesso Vitalício</a>
									</Button>
								</CardAction>
							</div>
						</Card>
					</section>

					<section id="o-que-voce-vai-aprender" className="relative flex items-center">
						<Image src={"/backgrounds/advantages.png"} alt="" className="w-full absolute -z-10 my-auto" width={1200} height={600} />

						<div className="flex flex-col gap-6 md:grid grid-cols-6 lg:gap-10 mx-4 md:mx-0">
							{advantagesCardsArray.map((card) => (
								<Card
									key={card.src}
									className="col-span-2 md:nth-4:translate-x-1/2 md:nth-5:translate-x-1/2 bg-purple-400/0 backdrop-blur-xs isolate shadow-lg"
								>
									<CardHeader className="gap-3">
										<div className="w-fit flex items-center justify-center bg-[#6A3E91] rounded-full p-4 mx-auto">
											<Image
												className="size-16 filter invert brightness-500 contrast-100 saturate-0 mix-blend-lighten"
												src={`/icons/${card.src}-icon.svg`}
												alt=""
												width={100}
												height={100}
											/>
										</div>

										<CardTitle className="text-center uppercase">{card.title}</CardTitle>
									</CardHeader>

									<CardContent className="md:max-lg:px-2">
										<p className="text-sm text-muted-foreground">{card.text}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</section>

					<section
						id="trailer"
						className="flex items-center justify-center p-4 sm:p-8 lg:p-20 rounded-lg bg-purple-400/5 backdrop-blur-xs isolate shadow-lg shadow-purple-500"
					>
						<VideoSection />
					</section>

					<section id="quem-somos" className="space-y-4 md:space-y-8">
						<h2 className="text-center text-[#8938C1] fonte-semibold text-2xl xs:text-3xl md:text-5xl">Conheça os seus instrutores:</h2>

						<ul className="flex flex-col md:flex-row justify-center items-center gap-6">
							{authorsCardsArray.map((card) => (
								<AuthorCard key={card.title} {...card} />
							))}
						</ul>
					</section>

					<section className="space-y-8">
						<h2 className="text-2xl md:text-5xl text-center text-[#8938C1]">Cronograma</h2>

						<ul className="flex flex-col md:grid grid-cols-6 gap-x-10 gap-6 py-3">
							{courseModulesCardsArray.map((courseModule, key) => (
								<li
									key={courseModule.id}
									className="col-span-2 nth-1:col-span-3 nth-2:col-span-3 md:nth-6:translate-x-1/2 md:nth-7:translate-x-1/2 bg-purple-400/0 backdrop-blur-xs isolate shadow-xl p-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-purple-300 hover:scale-105"
								>
									<h3 className="text-center font-medium uppercase text-sm xs:text-base">Módulo {key + 1}</h3>

									<p className="text-center font-semibold mb-3 text-sm xs:text-base">{courseModule.title}</p>

									{courseModule.steps.map((step, index) => (
										<p key={step} className="text-xs xs:text-base">
											<span className="inline-flex items-center">
												<Circle className="fill-black inline size-2 mr-1" />
											</span>

											<span> {step}</span>
										</p>
									))}
								</li>
							))}
						</ul>
					</section>
				</div>
			</div>
		</>
	)
}

export default HomePage
