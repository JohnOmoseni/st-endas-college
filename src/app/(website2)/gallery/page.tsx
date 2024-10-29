import BackArrow from "@/components/BackArrow";
import { galleries } from "@/constants/dashboard-index";

function Gallery() {
	return (
		<div>
			<div className="relative px-4 py-6 md:px-6 md:py-8">
				<BackArrow title="Snapshots of our Students and  life at St. Endas College!" />
			</div>

			<ul className="flex-column gap-6 w-full">
				{galleries?.map((item, idx) => {
					const {
						title,
						gallery: [gallery_1, gallery_2, gallery_3, gallery_4],
					} = item || {};
					return (
						<li
							key={idx}
							className="py-8 w-full text-secondary-foreground h-full px-5 md:px-10 bg-[#131623]
"
						>
							<h3>{title}</h3>

							<div className="mt-6 sm:mt-8 grid-cols-2 grid-rows-[150px_200px_300px] grid sm:grid-cols-[1fr_1fr_1.5fr] sm:grid-rows-[200px_250px] gap-x-2 gap-y-2.5">
								<img
									src={gallery_1}
									alt=""
									className="size-full object-cover"
								/>
								<img
									src={gallery_2}
									alt=""
									className="size-full object-cover"
								/>
								<img
									src={gallery_3}
									alt=""
									className="size-full col-span-2 sm:col-[1/3] object-cover"
								/>
								<img
									src={gallery_4}
									alt=""
									className="size-full col-span-2 sm:col-[3/3] sm:row-[1/3] object-cover"
								/>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Gallery;
