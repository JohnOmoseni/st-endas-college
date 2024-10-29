import Hero from "./Hero";
import About from "./About";
import Features from "./Features";
import Gallery from "./Gallery";
import Blogs from "./Blogs";
import Testimonials from "./Testimonials";

function Home() {
	return (
		<>
			<Hero />

			<div className="py-8 sm:py-10 px-8 bg-[var(--bg-black)] text-secondary-foreground w-full min-h-[10vh] grid place-items-center">
				<p className="text-center leading-6 max-w-[1000px] mx-auto">
					St. Endas Colege Agbarho has been a symbol of excellence in education
					over the years. Our mission is to continue to enhance the community by
					providing nurturing and innovative environment for our students
				</p>
			</div>

			<main>
				<About />

				<Features />

				<Gallery />

				<Blogs />

				<Testimonials />
			</main>
		</>
	);
}

export default Home;
