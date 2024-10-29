import { feature1, feature2, feature3 } from "@/constants/icons2";

function Features() {
	return (
		<div className="section bg-[#C3CFE0] flex-column gap-2">
			<span className="text-foreground-variant font-semibold">
				What we offer!
			</span>

			<h3>What do we have to show at St. Endas?</h3>

			<div className="mt-6 md:mt-12 mb-4 w-full">
				<div className="flex-column sm:features-md lg:features-lg xl:features-xl 2xl:features-2xl sm:grid gap-4">
					<img
						src={feature1}
						alt=""
						className="featureImage1 rounded-lg max-sm:max-h-[450px] w-full  object-cover"
					/>

					<div className="text1 flex-column self-center">
						<h4 className="font-semibold text-lg">Modern facilities</h4>

						<p className="text-base leading-5 pr-2 mt-2">
							St Endas boasts of state-of-the-art teaching and learning
							equipment across all classrooms and laboratories. Our science labs
							boasts of the latest equipment, enabling hands on exploration and
							scientific discovery.
						</p>
					</div>

					<img
						src={feature2}
						alt=""
						className="h-full rounded-lg max-sm:max-h-[300px] max-sm:w-full featureImage2 object-cover"
					/>

					<div className="text2">
						<h4 className="font-semibold text-lg">Day/Boarding</h4>

						<p className="text-base leading-5 pr-2 mt-3">
							We provide quality hostel accommodation and boarding services for
							students coming from far and near. While those who choose to, can
							access our campus daily and get quality education.
						</p>
					</div>

					<img
						src={feature3}
						alt=""
						className="featureImage3 rounded-lg h-full max-sm:max-h-[300px] max-sm:w-full object-cover"
					/>

					<div className="text3 flex-column">
						<h4 className="font-semibold text-lg">Skill acquisition</h4>

						<p className="text-base leading-5 pr-2 mt-3">
							Our students are aided and encouraged in the development of
							relevant skills across different sectors, such as tech, event
							planning, fashion design and more.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Features;

//  sm:grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-6 lg:grid-rows-[180px_auto_150px] lg:grid-cols-[350px_auto_auto]
