import BackArrow from "@/components/BackArrow";
import SectionWrapper from "@/layouts/SectionWrapper";
import { calendarData } from "@/constants/dashboard-index";
import { cn } from "@/lib/utils";

function Calendar() {
	return (
		<SectionWrapper>
			<BackArrow />

			<div className="mt-2">
				<div className="flex-column w-full gap-0.5 !items-center">
					<h3 className="text-3xl">Calendar</h3>
					<p className="text-xl text-center font-semibold leading-6 max-w-[50ch]">
						See all our activities for the academic year
					</p>
					<span className="text-base leading-4 text-grey mt-1 max-w-[30ch] text-center fomt-medium">
						Note: Dates might be subject to change by management.
					</span>
				</div>

				<div className="mt-8 sm:mt-12 flex-column grid-cols-2 gap-x-5 mx-auto gap-y-4 sm:grid md:grid-cols-3">
					{calendarData?.map((card, idx) => (
						<div
							className={cn(
								"rounded-sm h-full shadow py-3.5 px-3 sm:px-4 flex-column w-full justify-between gap-2",
								`bg-${card.color}-200`
							)}
							key={idx}
						>
							<h4 className={cn("font-semibold", `text-${card.color}-600`)}>
								{card?.title}{" "}
							</h4>

							<p className="pr-1 sm:pr-2 text-base mb-2 leading-5">
								{card?.body}
							</p>

							<span className=" inline-block text-xs">{card?.created_at}</span>
						</div>
					))}
				</div>
			</div>
		</SectionWrapper>
	);
}

export default Calendar;
