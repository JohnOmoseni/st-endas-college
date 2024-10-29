import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
	children: ReactNode;
	id?: string;
	containerStyles?: string;
};

const SectionWrapper = ({ children, containerStyles, id }: Props) => {
	return (
		<div
			id={id}
			className={cn(
				"relative isolate min-h-[70dvh] px-4 pt-6 sm:pb-4 sm:px-[4%] sm:pt-[3em]",
				containerStyles
			)}
		>
			{children}
		</div>
	);
};

export default SectionWrapper;
