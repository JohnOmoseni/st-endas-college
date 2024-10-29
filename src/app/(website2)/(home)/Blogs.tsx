import { blogs } from "@/constants/blogs";
import { Link } from "react-router-dom";

function Blogs() {
	return (
		<div className="section">
			<h3 className="text-center">School news and Blog</h3>

			<ul className="mt-12 flex-column sm:grid grid-cols-2 gap-x-12 gap-y-5">
				{[1, 2, 3, 4]?.map((id, index) => {
					const blog = blogs.find((b) => b.id === id);
					return (
						<li
							key={index}
							className="lg:min-w-[410px] h-full row-flex-start gap-3.5 md:gap-5 !items-start group relative w-full overflow-hidden rounded-lg transition hover:shadow-sm max-sm:min-w-[300px]"
						>
							<div className="relative min-h-[180px] w-2/5 self-stretch">
								<img
									src={blog?.banner}
									height={1000}
									width={1000}
									alt=""
									className="object-cover size-full"
								/>
							</div>

							<div className="flex-column self-stretch flex-1 w-full gap-2 py-3 pr-1">
								<span className="text-xs text-foreground-variant font-semibold">
									{blog?.created_at}
								</span>

								<Link
									to={`/dashboard/news/${blog?.id}`}
									className="inline-flex"
								>
									<h3 className="line-clamp-2 capitalize ">{blog?.title}</h3>
								</Link>

								<p className="text-sm leading-5 my-1 max-sm:pr-3 pr-2 line-clamp-5">
									{blog?.introduction}
								</p>

								<Link
									to={`/dashboard/news/${blog?.id}`}
									className="text-xs mt-auto font-medium text-foreground-variant"
								>
									Read more &gt;&gt;&gt;
								</Link>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Blogs;
