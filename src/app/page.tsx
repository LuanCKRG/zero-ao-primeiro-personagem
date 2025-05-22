import Image from "next/image"
import { ArrowRightIcon } from "lucide-react"

import { Vortex } from "@/components/vortex"
import { LINK_HOTMART } from "@/constants/links"
import { Card, CardHeader, CardAction } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const HomePage = () => {
	return (
		<>
			<div className="relative overflow-hidden px-16">
				<div className="fixed left-0 -top-40 size-full -z-20 overflow-hidden">
					<Vortex backgroundColor="transparent" className="flex size-full" rangeY={300} baseRadius={2} particleCount={50} rangeSpeed={1.5} baseHue={200} />
				</div>

				<div className="space-y-20">
					<section className="grid grid-cols-6 md:gap-10">
						<div className="col-span-3">
							<Image alt="" src="/hero-image.jpeg" width={800} height={400} />
						</div>

						<div className="col-span-3 flex flex-col gap-y-6 justify-center items-center">
							<a href={LINK_HOTMART} className="border bg-card border-input group inline-flex items-center rounded-lg px-3 py-1 text-sm font-medium">
								<span className="sm:hidden transition group-hover:scale-110 group-hover:text-[#8938C1]">Quero aprender</span>
								<span className="hidden sm:inline transition group-hover:scale-110 group-hover:text-[#8938C1]">Quero aprender</span>
								<ArrowRightIcon className="ml-1 size-4 group-hover:scale-110 transition group-hover:translate-x-1 group-hover:text-[#8938C1]" />
							</a>

							<Card className="flex justify-between p-16 w-full bg-purple-400/0 backdrop-blur-xs isolate aspect-video shadow-lg ring-1 ring-black/5">
								<CardHeader className="flex flex-col items-start w-full gap-y-4 px-0">
									<p className="text-5xl leading-none font-bold">R$ 120,00</p>
									<p className="text-3xl leading-none font-bold">Preço único</p>
								</CardHeader>

								<CardAction className="w-full">
									<Button className="w-full bg-[#8938C1] text-white hover:bg-[#8938C1]/80 hover:cursor-pointer h-11">Quero acesso Vitalício</Button>
								</CardAction>
							</Card>
						</div>
					</section>
				</div>
			</div>
		</>
	)
}

export default HomePage
