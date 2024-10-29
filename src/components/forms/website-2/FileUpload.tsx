import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload as UploadIcon } from "@/constants/icons2";
import { cn } from "@/lib/utils";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "sonner";

type Props = {
	title: string;
	name?: string;
	accept?: string;
	type?: string;
	sizeLimit?: number;
	required?: boolean;
	fileObject?: File | null;
	onFileChange?: (file: File | null) => void; // Callback when file is selected
};

function FileUpload({
	title,
	name,
	accept = "image/*",
	type = "image",
	sizeLimit,
	required,
	onFileChange,
}: Props) {
	const [file, setFile] = useState<File | null>(null);
	const [isUploading, setIsUploading] = useState(false);

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const selectedFile = event.target.files?.[0];

		//console.log(selectedFile);
		if (selectedFile) {
			if (!selectedFile.type.startsWith(accept.split("/")[0])) {
				alert(`Please select a valid file type (${accept}).`);
				toast.warning(`Please select a valid file type (${accept}).`);
				return;
			}

			if (sizeLimit && selectedFile.size > sizeLimit * 1024 * 1024) {
				alert(`File size must be less than ${sizeLimit}MB.`);
				toast.warning(`File size must be less than ${sizeLimit}MB.`);
				return;
			}

			setIsUploading(true);
			setFile(selectedFile);
			onFileChange?.(selectedFile);
		}
	};

	useEffect(() => {
		if (isUploading && file) {
			setIsUploading(false);
		}
	}, [file, isUploading]);

	let acceptLabel;
	switch (type) {
		case "video":
			acceptLabel = ".mp4 .av4";
			break;
		case "image":
			acceptLabel = ".jpg .jpeg .png .gif";
			break;
		default:
			acceptLabel = ".jpg .jpeg .png .gif";
	}

	return (
		<div className="my-2 w-full">
			<div className="w-full">
				<div className="flex-column gap-2">
					<Label
						className={cn(
							"text-base sm:w-max relative font-medium after:absolute after:-right-2 after:text-red-500 after:-top-1 after:text-lg",
							required && "after:content-['*']"
						)}
					>
						{title}
					</Label>

					<div
						className={cn(
							"w-full flex-column items-center bg-background-300 p-1 justify-center gap-2 border border-border h-32 md:h-40 rounded-md overflow-hidden border-dashed"
						)}
					>
						<Input
							id={name}
							type="file"
							accept={accept}
							onChange={(event) => handleFileChange(event)}
							className="hidden"
						/>
						<Label htmlFor={name} className="w-full">
							{file ? (
								<div className="h-40">
									<img
										src={URL.createObjectURL(file)}
										alt={file.name}
										className="object-contain w-full h-full rounded-md"
									/>
								</div>
							) : (
								<div className="flex-column !items-center gap-2  p-4 ">
									<UploadIcon className="size-6" />

									<span className="text-base capitalize">
										{isUploading ? "Uploading..." : `Upload ${type}`}
									</span>
									<p className="text-sm text-center text-grey lowercase">
										Accepted formats: {acceptLabel} etc.
									</p>
								</div>
							)}
						</Label>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FileUpload;
