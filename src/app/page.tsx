import { Vortex } from "@/components/vortex"

const HomePage = () => {
	return (
		<>
			<div className="relative overflow-hidden px-16">
				<div className="fixed left-0 -top-40 size-full -z-20 overflow-hidden">
					<Vortex backgroundColor="transparent" className="flex size-full" rangeY={300} baseRadius={2} particleCount={50} rangeSpeed={1.5} baseHue={200} />
				</div>
			</div>
		</>
	)
}

export default HomePage
