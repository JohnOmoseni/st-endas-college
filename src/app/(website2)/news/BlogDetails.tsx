import { cn } from "@/lib/utils";
import { BlogProps, blogs } from "@/constants/blogs";
import { useParams } from "react-router-dom";
import SectionWrapper from "@/layouts/SectionWrapper";
import BackArrow from "@/components/BackArrow";

function BlogDetails() {
	const { id: blogid } = useParams();

	const blogObject: BlogProps | undefined = blogs.find(
		(blog) => blog.id === Number(blogid)
	);

	const blog: BlogProps = blogObject ?? {
		id: 0,
		banner: "",
		title: "Default Title",
		introduction: "Default Introduction",
		sections: [],
	};

	return (
		<SectionWrapper>
			<div className="flex-column gap-4">
				<BackArrow title={blog?.title} />

				<div className="grid grid-cols-1 gap-4 my-2 overflow-hidden">
					<img
						src={blog?.banner}
						alt=""
						className="size-full max-h-[450px] max-w-[580px] max-sm:-mx-1"
					/>

					<div className="flex-column mt-4 sm:mt-6 pr-2 md:pr-4">
						{blog?.introduction
							.split("\n")
							.map((line, index) =>
								line.trim() !== "" ? (
									<p key={index}>{line}</p>
								) : (
									<br key={index} />
								)
							)}
					</div>

					{blog?.sections && (
						<div
							className={cn(
								"flex-column sm:mt-3",
								blog?.sectionType === "list" ? "gap-4" : "gap-6 sm:gap-8"
							)}
						>
							{blog.sections.map((section, idx) => {
								let content;
								switch (blog.sectionType) {
									case "list":
										content = (
											<div
												key={idx}
												className={cn("flex-column gap-2 sm:px-1")}
											>
												{blog.sections && (
													<h3 className="font-semibold row-flex-start gap-1.5 text-[1.1rem]">
														<span
															className={cn(
																"font-semibold ",
																idx === blog.sections?.length - 1
																	? "hidden"
																	: "inline-block"
															)}
														>
															{idx + 1}.
														</span>
														{section.title}
													</h3>
												)}

												{section?.post && (
													<p className={cn("flex-column pr-2")}>
														{section.post
															.split("\n")
															.map((line, index) =>
																line.trim() !== "" ? (
																	<p key={index}>{line}</p>
																) : (
																	<br key={index} className="" />
																)
															)}
													</p>
												)}
											</div>
										);
										break;
									case "grid":
										content = (
											<div
												key={idx}
												className={cn(
													"grid grid-cols-1 sm:grid-cols-2 min-[1100px]:grid-rows-[320px_70px_1fr] gap-6 min-h-[20vh] sm:px-1"
												)}
											>
												<p className={cn("flex-column pr-2 h-max")}>
													{section?.post
														?.split("\n")
														.map((line, index) =>
															line.trim() !== "" ? (
																<p key={index}>{line}</p>
															) : (
																<br key={index} />
															)
														)}
												</p>

												<img
													src={section?.images?.[0]}
													alt=""
													className={cn(
														"size-full object-cover max-sm:mx-auto min-h-[250px] max-h-[350px] lg:min-h-[350px] lg:max-h-[420px] md:min-w-[400px] sm:rounded-sm min-[1100px]:col-[2/3] min-[1100px]:row-span-2"
													)}
												/>

												<img
													src={section?.images?.[1]}
													alt=""
													className={cn(
														"max-sm:w-full ml-auto object-cover max-sm:mx-auto min-h-[250px] max-h-[350px] lg:min-h-[350px] lg:max-h-[420px] lg:min-w-[400px] sm:rounded-sm"
													)}
												/>

												<img
													src={section?.images?.[2]}
													alt=""
													className={cn(
														"size-full object-cover max-sm:mx-auto min-h-[250px] max-h-[350px] lg:min-h-[350px] lg:max-h-[420px] lg:min-w-[400px] sm:rounded-sm min-[1100px]:col-[2/3]"
													)}
												/>
											</div>
										);
										break;
									default:
										content = (
											<>
												{section?.post && (
													<div
														key={idx}
														className={cn(
															"grid-cols-1 sm:grid-cols-[1fr_minmax(auto,_1fr)] gap-6 sm:gap-12 min-h-[20vh] sm:px-1",
															section?.style?.align_items === "center"
																? "items-center"
																: "items-start",
															section?.style ? "grid sm:mt-5" : "flex-column"
														)}
													>
														<p
															className={cn(
																"flex-column pr-2 pt-2",
																section?.style?.img_dir === "left"
																	? "sm:order-1"
																	: "sm:order-2"
															)}
														>
															{section.post
																?.split("\n")
																.map((line, index) =>
																	line.trim() !== "" ? (
																		<p key={index}>{line}</p>
																	) : (
																		<br key={index} />
																	)
																)}
														</p>

														{typeof section?.image !== "undefined" && (
															<div
																className={cn(
																	"relative max-sm:order-1 ",
																	section?.style?.img_dir === "left"
																		? "sm:order-2"
																		: "sm:order-1",
																	section.image2 && "xl:mb-[24%]"
																)}
															>
																<img
																	src={section.image}
																	alt=""
																	className={cn(
																		"size-full object-cover max-sm:mx-auto min-h-[250px] max-h-[350px] lg:min-h-[350px] lg:max-h-[420px] md:min-w-[400px] sm:rounded-sm"
																	)}
																/>

																{section.image2 && (
																	<img
																		src={section.image2}
																		alt=""
																		className={cn(
																			"absolute w-[350px] -bottom-[38%] left-[65%] object-cover max-sm:mx-auto h-[280px] hidden xl:block"
																		)}
																	/>
																)}
															</div>
														)}
													</div>
												)}
												{section?.images && (
													<div className="grid w-full gap-4 grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] xl:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] overflow-hidden">
														{section.images?.map((image, idx) => (
															<img
																src={image}
																alt=""
																key={idx}
																className="size-full max-sm:max-h-[300px] object-cover rounded-sm"
															/>
														))}
													</div>
												)}
											</>
										);
								}

								return <>{content}</>;
							})}
						</div>
					)}
				</div>
			</div>
		</SectionWrapper>
	);
}

export default BlogDetails;
