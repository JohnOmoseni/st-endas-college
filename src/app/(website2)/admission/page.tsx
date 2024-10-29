import { useGetRequestId } from "@/hooks/useGetRequestId";
import { useEffect, useState } from "react";
import { Button } from "@/components/CustomButton";
import { cn } from "@/lib/utils";
import { bank_details } from "@/constants/dashboard-index";
import ApplicantForm from "@/components/forms/website-2/ApplicantForm";
import SectionWrapper from "@/layouts/SectionWrapper";
import MultiStepForm from "../_components/MultistepIndicator";
import ParentForm from "@/components/forms/website-2/ParentApplicationForm";
import DocumentForm from "@/components/forms/website-2/DocumentForm";
import ApplicationSuccess from "./success";

function ApplicationPage() {
	const [step, setStep] = useState(1);
	const [requestId, setRequestId] = useState<string | null>(
		localStorage.getItem("REQUEST_ID")
	);

	const { handleClick, isLoading } = useGetRequestId();

	// Effect to update requestId whenever it changes in localStorage
	useEffect(() => {
		const storedRequestId = localStorage.getItem("REQUEST_ID");
		setRequestId(storedRequestId);
	}, [localStorage.getItem("REQUEST_ID")]);

	const nextStep = () => {
		setStep((prev) => Math.min(4, prev + 1));
	};

	const prevStep = () => {
		setStep((prev) => Math.max(1, prev - 1));
	};

	return (
		<SectionWrapper>
			<MultiStepForm step={step} />

			<div className="">
				{step === 1 && (
					<>
						{!requestId && (
							<Button
								title="Retry Request ID"
								onClick={handleClick}
								disabled={isLoading}
								className={cn("!px-5 ml-auto mb-3")}
							/>
						)}

						<ApplicantForm
							requestId={requestId}
							step={step}
							nextStep={nextStep}
							prevStep={prevStep}
						/>
					</>
				)}
				{step === 2 && (
					<ParentForm
						step={step}
						requestId={requestId}
						nextStep={nextStep}
						prevStep={prevStep}
					/>
				)}
				{step === 3 && (
					<>
						<div className="w-max ml-auto min-[340px]:min-w-[280px]">
							<p className="text-base font-semibold text-secondary max-sm:text-end">
								Bank Details
							</p>

							<div className="mt-3 mb-6 rounded-md shadow-sm bg-[#A1CDFF] p-3  flex-column gap-2">
								{bank_details?.map(({ label, value }, idx) => (
									<p
										className="text-base row-flex-start gap-2 leading-5 whitespace-nowrap"
										key={idx}
									>
										<span className="font-semibold">{label}:</span>
										<span className="font-normal text-sm tracking-wide">
											{value}
										</span>
									</p>
								))}
							</div>
						</div>

						<DocumentForm
							step={step}
							requestId={requestId}
							nextStep={nextStep}
							prevStep={prevStep}
						/>
					</>
				)}
				{step === 4 && <ApplicationSuccess />}
			</div>
		</SectionWrapper>
	);
}

export default ApplicationPage;
