import { about } from "@/constants/icons2";

function About() {
	return (
		<div className="section sm:grid grid-cols-[1.2fr_minmax(300px,_1fr)] gap-x-8 gap-y-5 flex-column justify-items-center">
			<div className="flex-column gap-1">
				<span className="text-foreground-variant font-semibold">About Us</span>

				<h3>We help build future innovators</h3>

				<p className="mt-3 mb-4 text-base leading-5 pr-1 max-w-2xl">
					St. Enda's College, Agbarho, is a subsidiary of the Warri Catholic
					Diocese. It was founded in the year 1964 by the Catholic Church and
					since then, it has played a crucial role in shaping the morals and
					academic excellence of hundreds of students who have passed through
					its halls. At St. Enda's College, our goal is to equip the child for
					life and to promote the child’s holistic development.
					<br /> <br />
					To achieve this goal, we aim to instil the spirit of creativity in our
					students. We teach our children both academic and socio-economic
					skills that will enable them to lead meaningful lives and contribute
					positively to society.
				</p>
			</div>

			<div className="max-w-xl mx-auto rounded-2xl sm:rounded-xl overflow-hidden">
				<img
					src={about}
					alt=""
					className="h-full object-cover object-center min-h-[300px] max-h-[360px] lg:min-h-[330px]"
				/>
			</div>
		</div>
	);
}

export default About;
