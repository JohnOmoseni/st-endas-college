import { testimonials } from "@/constants/dashboard-index";
import { cn } from "@/lib/utils";
import { useState } from "react";

function Testimonials() {
	return (
		<div className="section lg:!px-[6%] !min-h-max">
			<div className="pt-4 relative">
				<div className="absolute bg-secondary w-[90px] rounded-full h-1 left-0 top-0" />
				<h3 className="">Testimonials</h3>
				<p className="text-base mt-1 leading-5">
					Hear what our esteemed Parents have to say about us!
				</p>

				<ul className="mt-10 gap-6 grid grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))]">
					{testimonials.map(({ img, name, tag, body }, idx) => {
						const [lineClamp, setLineClamp] = useState(true);
						return (
							<li
								key={idx}
								className="flex-column group min-h-32 flex-none gap-4 rounded-xl border-border bg-background-100 px-4 sm:px-6 pb-5 pt-3.5 shadow hover:shadow-md transition-all md:max-w-md"
							>
								<div className="w-full grid grid-cols-[max-content_1fr] gap-3  sm:min-h-[70px] sm:max-h-[80px]">
									<div className="relative size-12 overflow-hidden rounded-full border border-slate-300 border-opacity-30 p-px shadow-sm clip-circle self-start">
										<img
											src={img}
											alt=""
											className="object-contain size-full"
										/>
									</div>
									<div>
										<h3
											title={name}
											className="capitalize line-clamp-2 cursor-default "
										>
											{name}
										</h3>
										<p className="text-sm capitalize text-grey">{tag}</p>
									</div>
								</div>

								<p
									className={cn(
										"relative pr-0.5 leading-[1.35rem] tracking-tight",
										lineClamp
											? "line-clamp-6 md:line-clamp-[8] text-justify"
											: ""
									)}
								>
									{body}
									<span
										className={cn(
											"absolute bottom-0 w-2 h-[21px] -ml-[0.2rem] right-[0.4rem] whitespace-nowrap cursor-pointer z-50",
											lineClamp ? "inline-block " : "hidden"
										)}
										onClick={() => setLineClamp(!lineClamp)}
									>
										{/* ... */}
									</span>
								</p>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default Testimonials;
