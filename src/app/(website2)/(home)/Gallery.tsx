import { gallery_1, gallery_2, gallery_3, gallery_4 } from "@/constants/icons2";

function Gallery() {
	return (
		<div className="py-6 px-3.5 md:px-[4%] text-secondary-foreground bg-[var(--bg-black)]">
			<div className="flex-column !items-center gap-1.5 px-1">
				<span className="text-base font-semibold sha text-blue-500 text-center">
					All work and no play...
				</span>
				<h3 className="text-center">
					Here are some of our extracurricular activities
				</h3>

				<p className="text-base brightness-75 tracking-wide text-center mt-1 leading-5 max-w-[85ch]">
					With a comprehensive curriculum, state-of-the-art facilities, and a
					wide range of sporting activities, St Endas College promises your ward
					an all round development.
				</p>
			</div>

			<div className="mt-12 grid-cols-2 grid-rows-[150px_220px_300px] grid sm:grid-cols-[1fr_1fr_1.5fr] sm:grid-rows-[200px_250px] gap-x-2.5 gap-y-2.5">
				<img src={gallery_1} alt="" className="size-full object-cover" />
				<img src={gallery_2} alt="" className="size-full object-cover" />
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
		</div>
	);
}

export default Gallery;
