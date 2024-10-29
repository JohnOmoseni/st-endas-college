import { Button } from "@/components/CustomButton";
import { Success as SuccessIcon } from "@/constants/icons2";
import { Link } from "react-router-dom";
import SectionWrapper from "@/layouts/SectionWrapper";

function ApplicationSuccess() {
	return (
		<SectionWrapper containerStyles="!py-1">
			<div className="grid place-items-center mt-10">
				<div className="flex-column !items-center gap-6">
					<h3 className="text-2xl sm:text-3xl">Congratulations!</h3>

					<div className="relative my-4">
						<SuccessIcon className="h-fit min-w-72 w-full xl:w-fit" />
					</div>

					<div className="flex-column mb-4 max-w-xl">
						<p className="px-1 text-center text-bg leading-5">
							<span className="font-medium text-lg block">
								Your application has been received.
							</span>
							<span className="mb-2 inline-block">
								You are required to come for an entrance examination at the
								school premises on either of the following dates:
							</span>
							<span className="block font-semibold">
								Saturday 19th August 2023{" "}
							</span>
							<span className="block font-semibold">
								Saturday 2nd August 2023
							</span>
						</p>
					</div>

					<Link to="/dashboard/" className="">
						<Button title="Back to Home" className="!mt-auto !w-full" />
					</Link>
				</div>
			</div>
		</SectionWrapper>
	);
}

export default ApplicationSuccess;
