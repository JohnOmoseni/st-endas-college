import { cn } from "@/lib/utils";

const steps = [
	"Student Information",
	"Parent/Guardian Information",
	"Document Upoload",
	"Confirmation",
];

const MultiStepForm = ({ step }: { step: number }) => {
	return (
		<div className="max-sm:max-w-[500px] max-w-2xl mx-auto py-10 max-[390px]:-mx-5">
			{/* Step Indicator */}
			<div className="row-flex-btwn w-full mx-auto mb-8 progress-bar">
				{steps?.map((val, idx) => (
					<div
						key={idx}
						className={cn(
							"flex-1 text-center step flex-column !items-center",
							step >= 1 ? "text-foreground-variant" : "text-gray-400"
						)}
					>
						<div
							className={cn(
								"size-8 group bullet leading-none mx-auto relative rounded-full text-background-100 row-flex after:w-[100px] before:w-[100px] after:sm:w-[140px] before:sm:w-[140px] after:md:w-[160px] before:md:w-[160px] before:max-[390px]:w-[70px] after:max-[390px]:w-[70px] before:max-[460px]:w-[85px] after:max-[460px]:w-[85px]",
								step >= idx + 1 ? "bg-blue-600 active" : "bg-gray-300"
							)}
						>
							{step >= idx + 1 ? "\u2713" : idx + 1}
						</div>
						<p className="mt-2 leading-4 w-min min-h-8 max-[400px]:text-xs line-clamp-2">
							{val}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default MultiStepForm;
