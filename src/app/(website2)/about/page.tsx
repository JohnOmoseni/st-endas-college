import BackArrow from "@/components/BackArrow";
import { about } from "@/constants/dashboard-index";
import SectionWrapper from "@/layouts/SectionWrapper";
import { cn } from "@/lib/utils";

function About() {
	return (
		<SectionWrapper>
			<div className="flex-column gap-4">
				<BackArrow title="About Us" />

				<ul className="flex-column gap-10 sm:gap-12 mt-4">
					{about?.map(({ title, img, body }, idx) => (
						<li
							key={idx}
							className="grid grid-cols-1 items-center sm:grid-cols-[1fr_minmax(auto,_1fr)] gap-6 sm:gap-12 min-h-[20vh] sm:px-1"
						>
							<div
								className={cn(
									"flex-column gap-4 max-sm:order-2",
									idx === 1 && " order-2"
								)}
							>
								<h4 className="text-foreground-variant font-semibold text-xl">
									{title}
								</h4>

								<p className="pr-1.5">{body}</p>
							</div>
							<img
								src={img}
								alt=""
								className={cn(
									"size-full object-cover max-sm:mx-auto sm:rounded-sm max-h-[350px]md:max-h-[460px] md:min-w-[400px] max-sm:order-1 max-sm:rounded-sm ",
									idx === 1 && " order-1"
								)}
							/>
						</li>
					))}
				</ul>
			</div>
		</SectionWrapper>
	);
}

export default About;
