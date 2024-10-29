import TextGenerateEffect from "@/components/anims/TextGenerateEffect";
import { Button } from "@/components/CustomButton";
import {
	bubble,
	bubbles,
	hero,
	HeroBubble,
	herotextBubble,
} from "@/constants/icons2";
import { Link } from "react-router-dom";

function Hero() {
	return (
		<div className="hero relative w-full pb-8 pt-14 lg:pt-[4%]">
			<div className="size-full flex-column gap-8 sm:row-flex !items-start">
				<div className="flex-1 px-[max(1.2em,_5%)]">
					<h1 className="relative max-sm:text-center">
						<span className="relative isolate text-white">
							Sha
							<HeroBubble className="object-contain -z-10 absolute -left-4 -top-1.5  max-sm:-top-4" />
							<img
								src={herotextBubble}
								alt="hero"
								className="object-contain -z-20 absolute left-0 -top-2 max-sm:hidden"
							/>
						</span>
						ping the{" "}
						<span className="text-secondary">leaders of tomorrow </span> is our
						top <br className="hidden xl:block" /> priority at {""}
						<span className="text-secondary">St. Endas College.</span>
					</h1>

					<TextGenerateEffect
						className="mt-6 max-w-[50ch] md:text-lg font-light max-sm:mx-auto max-sm:px-3 max-sm:text-center"
						words="Our commitment to academic excellence, and moral integrity ensures that every student is not only prepared for success but also empowered to make a positive impact on the world."
					/>

					<Link
						to="/dashboard/admission"
						className="mt-10 row-flex w-max max-sm:mx-auto"
					>
						<Button title="Register now" className="px-10 !py-6 text-lg" />
					</Link>

					<div className="min-h-[305px] sm:min-h-[350px] xl:min-h-[400px]">
						<div className="max-sm:mt-12 mx-auto sm:absolute overflow-hidden max-[390px]:h-[300px] h-[350px] bottom-[3%] md:bottom-[5%] right-[3%] -z-10 sm:h-[410px] min-[950px]:h-[450px] min-[1200px]:h-[500px] xl:min-h-[600px]">
							<img src={hero} alt="hero" className="object-contain size-full" />
						</div>
					</div>
				</div>

				<img
					src={bubbles}
					alt="hero"
					className="!object-contain absolute left-8 md:left-12 bottom-4"
				/>

				<img
					src={bubble}
					alt="hero"
					className="!object-contain absolute right-[8%] xl:right-[20%] top-4 xl:top-6"
				/>

				<img
					src={bubble}
					alt="hero"
					className="!object-contain hidden lg:block absolute left-[26%] xl:left-[22%] top-[70%]"
				/>
			</div>
		</div>
	);
}

export default Hero;
