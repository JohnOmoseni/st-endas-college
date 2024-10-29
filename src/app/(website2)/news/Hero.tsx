import { news_hero } from "@/constants/icons2";

function Hero() {
	return (
		<div className="max-sm:min-h-[90vh] sm:h-[70vh] sm:max-h-[450px] bg-[#151318F0] max-sm:pb-20 max-sm:rounded-xl max-sm:m-3 overflow-hidden">
			<div className="flex-column items-center md:grid h-full grid-cols-[auto_1.5fr] ">
				<div className="size-full flex-column max-md:order-2 px-6 py-10 text-secondary-foreground md:px-[8%] md:pt-[15%] ">
					<div className="rounded-sm py-2.5 px-3.5 w-max text-xs mb-4 bg-secondary">
						September 25th, 2024
					</div>

					<h2 className="leading-10 md:whitespace-nowrap">
						Welcome back to school!
					</h2>

					<p className="mt-5 brightness-75 pr-2 leading-6 md:max-w-[60ch]">
						As we begin this new academic year, remember that every fresh start
						brings endless possibilities. Seize this opportunity to set new
						goals, make lasting connections, and unlock your full potential.
						Together, let's make this year unforgettable. Welcome back to St.
						Endas College!
					</p>
				</div>

				<div
					className="bg-cover bg-no-repeat bg-center max-md:h-[300px] size-full max-md:order-1"
					style={{ backgroundImage: `url(${news_hero})` }}
				/>
			</div>
		</div>
	);
}

export default Hero;
