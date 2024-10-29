import SectionWrapper from "@/layouts/SectionWrapper";
import Hero from "./Hero";
import Posts from "./Posts";

function News() {
	return (
		<>
			<Hero />

			<SectionWrapper>
				<Posts />
			</SectionWrapper>
		</>
	);
}

export default News;
