import {
	artGallery_4,
	blogImage2,
	blogImage4,
	blogImage6,
	blogImage7_1,
	blogImage7_2,
	blogImage7_3,
	blogImage7_4,
	blogImage_career_1,
	blogImage_career_2,
	blogImage_career_3,
	blogImage_excursion_1,
	blogImage_excursion_2,
	blogImage_excursion_3,
	blogImage_excursion_4,
	blogImage_fruitday_1,
	blogImage_fruitday_2,
	blogImage_fruitday_3,
	blogImage_fruitday_4,
	news_2,
	news_3,
} from "./icons2";

type SectionProps = {
	title?: string;
	post?: string;
	image?: string;
	image2?: string;
	images?: string[];
	style?: {
		img_dir?: "left" | "right";
		img2_dir?: string;
		align_items?: string;
	};
};

export type BlogProps = {
	id: number;
	banner: string;
	title: string;
	created_at?: string;
	introduction: string;
	sections?: SectionProps[];
	sectionType?: string;
};

export const blogs: BlogProps[] = [
	{
		id: 1,
		banner: blogImage_career_1,
		title: "Dream Big: Career day at St. Endas College.",
		created_at: "January 24th, 2024",
		introduction:
			"St. Endas College recently hosted its annual Dream Big! Career Day, a highly anticipated event designed to expose students to a diverse array of career paths and provide guidance as they plan their futures. The event featured an exciting lineup of professionals from a wide range of industries, including medicine, engineering, business, arts, law, and technology. Through interactive workshops, panel discussions, and personal presentations, students were encouraged to explore various career options and discover the skills, education, and personal attributes needed to succeed in each field. \n \n This year’s Dream Big! Career Day aimed to broaden students’ horizons and empower them to pursue their passions with confidence. Keynote speakers included industry leaders and alumni who shared their own career journeys, highlighting the challenges and rewards of different professions. The sessions allowed students to engage directly with professionals, ask questions, and gain invaluable insight into what it takes to thrive in their chosen careers. \n \n Among the highlights of the day was a panel discussion on the future of work, which featured experts in emerging fields such as artificial intelligence, green energy, and digital marketing. The panelists discussed the evolving job market, emphasizing the importance of adaptability and lifelong learning in a rapidly changing world. Students were inspired by the stories of professionals who had forged unconventional career paths, showcasing the many opportunities available to those willing to think outside the box. In addition to the career panels, the event included hands-on workshops where students could experience various professions firsthand.",
		sections: [
			{
				post: "The science and technology workshops allowed participants to experiment with robotics, coding, and digital design, while the business session featured a mock entrepreneurial pitch competition where students worked in teams to develop and present business ideas. These activities provided a dynamic, practical glimpse into the working world, sparking new interests and ambitions among students. \n \n The arts and creative industries were also well represented, with sessions led by writers, filmmakers, and visual artists who discussed the growing opportunities in media, entertainment, and design. A special session on careers in healthcare was particularly well-received, with doctors, nurses, and researchers offering guidance on pursuing careers in medicine, public health, and biomedical science. \n \n Principal, Father Taiwo emphasized the importance of the event in helping students envision their futures. “Dream Big! Career Day is one of the most important events on our calendar,” she said. “We want our students to understand that they are capable of achieving anything they set their minds to. By exposing them to a wide range of professions and showing them the different routes to success, we hope to inspire them to dream big and pursue their goals with confidence.”",
				image: blogImage_career_3,
				style: {
					img_dir: "left",
					align_items: "start",
				},
			},
			{
				post: "Students left the event feeling inspired and empowered. Many expressed gratitude for the opportunity to explore careers they hadn’t previously considered, while others said they felt more confident about their future academic and professional choices.“I always thought I’d become a doctor, but after hearing from some of the engineers and entrepreneurs, I’m excited to learn more about technology and startups,” said one student. “It opened my eyes to so many possibilities.” \n \n The event also strengthened St. Endas College’s commitment to fostering career readiness and personal development. Beyond academic achievement, the school aims to prepare students for the evolving demands of the modern workforce, equipping them with the skills and knowledge to succeed in their chosen paths. By exposing students to diverse careers and connecting them with mentors, Dream Big! Career Day helps build a foundation for lifelong success.",
				image: blogImage_career_2,
				style: {
					img_dir: "right",
				},
			},
			{
				post: "As the day came to a close, there was a palpable sense of excitement and motivation among the students, who left with a clearer vision of their future goals. St. Enda’s College hopes to continue expanding the event in the coming years, bringing in even more professionals and offering additional resources to support students in achieving their dreams. \n \n The Dream Big! Career Day was a resounding success, providing students with the inspiration and tools they need to take charge of their futures and pursue their ambitions with enthusiasm and determination.",
			},
		],
	},
	{
		id: 2,
		banner: blogImage2,
		title: "An Excursion to Bruce Onobrakpeya Art Gallery and MCIU",
		created_at: "October 28th, 2023",
		introduction:
			"St. Enda’s College students recently had the opportunity to participate in an enriching excursion to the Bruce Onobrakpeya Art Gallery and Michael and Cecilia Ibru University (MCIU), a visit that blended art, culture, and academic exploration. The trip, which was designed to broaden students' understanding of Nigerian art and higher education, provided a unique opportunity to engage with one of the country’s most esteemed artistic legacies, while also exploring opportunities for future academic growth. \n \n At the Bruce Onobrakpeya Art Gallery, students were introduced to the works of the renowned Nigerian artist, who is celebrated globally for his innovative techniques in printmaking, painting, and sculpture. The gallery tour showcased a vast collection of Onobrakpeya’s works, including his iconic prints and intricate metal sculptures, which reflect a deep connection to Nigerian culture, folklore, and history. Students were captivated by the richness of his art, which combines traditional themes with modern techniques, and were able to ask questions about his creative process and the inspiration behind his pieces.",
		sections: [
			{
				post: "The highlight of the gallery visit was a hands-on art session where students tried their hand at printmaking, inspired by Onobrakpeya’s unique style. Many students expressed newfound appreciation for the level of detail and craftsmanship involved in the artistic process, with some even considering pursuing art as a future career path. \n \n After the art gallery visit, the students proceeded to Michael and Cecilia Ibru University (MCIU) for an academic tour of the campus. Located in Agbarha-Otor, Delta State. MCIU is a fast-growing institution dedicated to providing high-quality education and fostering entrepreneurship. The university tour gave students a glimpse into university life, with stops at various departments, lecture halls, and research centers. They also had the opportunity to meet with faculty members who discussed the university's wide range of academic programs and initiatives.",
				image: blogImage_excursion_3,
				image2: blogImage_excursion_4,
				style: {
					img_dir: "right",
					img2_dir: "absolute",
				},
			},
			{
				post: 'During a Q&A session with MCIU staff, students learned about the university’s focus on entrepreneurship and innovation, with an emphasis on how MCIU prepares students for success in a rapidly evolving global workforce. The visit was particularly valuable for senior students as they start to consider their post-secondary education options, providing them with insight into a local institution that emphasizes practical skills, academic excellence, and personal development. \n \n Principal Father Taiwo praised the excursion for its dual focus on arts and academics, stating, "This trip was an excellent way for our students to explore both creative expression and academic opportunities. The Bruce Onobrakpeya Art Gallery exposed them to the richness of Nigerian culture, while the visit to MCIU opened their eyes to the possibilities of higher education and entrepreneurship." \n \n Students returned from the excursion inspired by both the artistic and academic experiences, with many expressing excitement about the paths they could explore in the future. The trip successfully combined cultural education and future planning, aligning with St. Endas College’s commitment to fostering well-rounded students who are both creatively and intellectually prepared for the future.',
			},
			{
				images: [blogImage_excursion_1, blogImage_excursion_2, artGallery_4],
			},
		],
	},
	{
		id: 3,
		banner: blogImage_fruitday_1,
		title: "Learning about nutrition, One fruit at a Time.",
		created_at: "August 15, 2024",
		introduction:
			'St. Endas College has launched an exciting new initiative titled “Learning About Nutrition, One Fruit at a Time,” aimed at educating students on the importance of healthy eating and the role of fruits in maintaining a balanced diet. The program is designed to promote nutritional awareness and encourage students to make healthier food choices in their daily lives. \n \n As part of the initiative, students participate in interactive workshops and hands-on activities that focus on the nutritional benefits of different fruits. Nutritionists and guest speakers provide informative sessions on topics such as the vitamins, minerals, and fiber found in fruits, and how these nutrients support overall health, boost immunity, and improve concentration. Students also learn about the environmental and economic benefits of locally grown fruits, fostering a greater appreciation for sustainable living. \n \n One of the highlights of the program is the daily "Fruit of the Day" feature, where a different fruit is spotlighted each day. Students are encouraged to try new fruits, learn about their origins, and understand their nutritional value. Additionally, the school has introduced “fruit breaks” during which students are provided with fresh fruits to enjoy as a healthy snack.',
		sections: [
			{
				post: "Principal Father Taiwo emphasized the importance of the initiative, saying, “We want our students to develop a lifelong appreciation for healthy eating. By introducing them to a variety of fruits and the benefits they offer, we’re helping them understand that nutrition plays a key role in their physical and mental well-being.”  \n \n Students have responded enthusiastically to the program, with many expressing newfound interest in trying fruits they had never tasted before. The initiative has not only enriched their understanding of nutrition but also sparked conversations about healthy living at home and among peers. \n With “Learning About Nutrition, One Fruit at a Time,” St. Endas College is taking a proactive approach to health education, equipping students with the knowledge to make better food choices and lead healthier lives.",
				images: [
					blogImage_fruitday_2,
					blogImage_fruitday_3,
					blogImage_fruitday_4,
				],
				style: {
					img_dir: "right",
				},
			},
		],
		sectionType: "grid",
	},
	{
		id: 4,
		banner: blogImage4,
		title: "St. Endas College Welcomes Our New principal",
		created_at: "January 25th, 2023.",
		introduction:
			"We are thrilled to announce the arrival of our dynamic new Principal, Rev Fr Samuel A. Taiwo, who brings a wealth of experience, passion, and dedication to our school community. With Rev Fr Samuel A. Taiwo at the helm, we are embarking on an exciting new chapter of educational excellence and innovation. \n \n A visionary leader, Rev Fr Samuel A. Taiwo has a deep understanding of the evolving landscape of education and is committed to providing a nurturing and inclusive environment where every student can thrive. With a focus on fostering critical thinking, creativity, and skill development,  Rev Fr Samuel A. Taiwo is dedicated to preparing our students for success in the 21st century. \n \n Rev Fr Samuel A. Taiwo’s leadership is characterized by a collaborative approach that empowers teachers, parents, and students to actively contribute to the growth and development of our school. Drawing upon their extensive experience, Rev Fr Samuel A. Taiwo will guide our talented team of educators to deliver an exceptional academic program that integrates innovation, technology, and personalized learning. \n \n As we embark on this exciting journey with Rev Fr Samuel A. Taiwo, we invite you to join us in shaping the future of our school. Together, we will continue to create an environment where each student can unlock their full potential and become confident, compassionate, and accomplished individuals. \n \n Please join us in extending a warm welcome to Rev Fr Samuel A. Taiwo as we embark on an extraordinary educational adventure together",
	},
	{
		id: 5,
		banner: blogImage6,
		title: "Starlink Device Purchase: Enhancing Digital Learning Experiences",
		introduction:
			"In an ambitious step towards improving the quality of education, St. Endas College School has purchased a Starlink satellite internet device, aiming to revolutionize its digital learning environment. Starlink, developed by SpaceX, provides high-speed, low-latency internet service by using a constellation of satellites in low Earth orbit, offering reliable connectivity even in remote or underserved areas. This investment comes at a critical time as the school seeks to enhance its technological infrastructure to better serve students and teachers in an increasingly digital world. \n \n The introduction of Starlink promises to transform St. Endas College digital learning infrastructure in multiple ways. The school plans to expand its use of interactive online content, such as video-based lessons, virtual field trips, and real-time collaboration with other schools around the world. Teachers will have access to a broader range of educational resources and can incorporate more dynamic content into their lessons, such as interactive simulations, virtual labs, and advanced educational software that relies on stable internet access. \n \n Additionally, the improved internet connection will enhance communication between students and teachers, enabling more frequent and effective use of digital tools like online portal, Zoom, and other digital platforms.\n \n By investing in this technology, St. Endas College is not only addressing current connectivity challenges but also preparing its students for the future. As the world becomes more interconnected and reliant on digital tools, having the skills to navigate and utilize technology effectively is crucial for academic and career success. The improved internet infrastructure will allow students to engage in coding, digital media creation, and access global academic databases, fostering critical 21st-century skills. \n \n The Starlink investment also aligns with the school’s broader vision of promoting innovation and embracing new technologies. By prioritizing high-speed internet, St. Endas College is creating an environment where students can explore, collaborate, and learn without the limitations posed by poor connectivity. \n \n Parents and students alike are excited about the school’s new direction, with many expressing optimism about how the improved internet will enhance learning and open up new opportunities for academic achievement. \n \n Looking Ahead, as St. Endas College rolls out its Starlink device, the administration plans to closely monitor its impact on the educational experience. The school is also exploring the possibility of expanding its digital offerings even further, potentially integrating more advanced technologies such as augmented and virtual reality in the classroom. These innovations would allow students to engage with immersive educational experiences, such as virtual historical tours or simulated scientific experiments. \n \n Ultimately, the investment in Starlink marks a pivotal moment for St. Endas College as it embraces the future of education. By leveraging cutting-edge technology, the school is ensuring that all students have the tools they need to succeed in an increasingly digital world, while also laying the foundation for further technological advancements in the years to come.",
		created_at: "September 25th, 2024.",
	},

	{
		id: 6,
		banner: news_2,
		title:
			"How a Catholic Education at St. Endas College Agbarho Shapes Future Leaders in Nigeria",
		created_at: "September 25th, 2024.",
		introduction:
			"In today’s fast-changing world, Nigeria needs leaders who not only excel academically but also possess a strong moral compass. St. Endas College Agbarho is renowned for cultivating young minds with a balanced blend of academic rigor, ethical values, and leadership skills. For parents looking to shape their children into future leaders, St. Endas College Agbarho offers a unique environment that fosters both intellectual growth and character development, setting students on a path toward success.",
		sections: [
			{
				post: "At the heart of St. Endas College Agbarho is a deep commitment to instilling strong moral values in students. From a young age, children are taught the importance of integrity, responsibility, respect, and compassion—qualities that are essential for effective leadership. In a country where ethical leadership is often in short supply, St. Endas College Agbarho provides students with a moral foundation that sets them apart from their peers. \n \n Teaching by Example: At St. Endas, we emphasize leading by example. Through daily interactions, our teachers and administrators model ethical behavior, guiding students to develop a strong sense of right and wrong that will serve them throughout their lives.",
				title: "A Focus on Values and Ethics",
			},
			{
				post: "At St. Endas College Agbarho, we believe in nurturing the whole child—mind, body, and spirit. Students are encouraged to explore their talents beyond academics, allowing them to grow into well-rounded individuals. This holistic approach is crucial for developing the kind of leaders Nigeria needs: individuals who are not only intellectually capable but also emotionally and socially intelligent. \n \n Character Building: Through service learning, extracurricular activities, and spiritual guidance, **St. Endas College Agbarho** teaches students the importance of self-discipline, empathy, and perseverance—all traits of successful leaders.",
				title: "Holistic Development",
			},

			{
				post: "St. Endas College Agbarho is known for its high academic standards, encouraging students to think critically and creatively—skills that are vital in today’s complex world. By fostering an environment that values both academic achievement and personal growth, we produce students who are not only knowledgeable but also capable of thinking independently and solving problems. \n \n Leadership in Action: At St. Endas, students are often encouraged to take on leadership roles, whether through student government, debate teams, or community service initiatives. These experiences give our students the confidence and experience needed to lead in their future careers and communities.",
				title: "Academic Excellence and Critical Thinking",
			},

			{
				post: "At St. Endas College Agbarho, leadership goes beyond academic success—it’s about serving others. Our students are taught that true leadership is grounded in humility, service, and a deep commitment to the greater good. The teachings of the Catholic faith provide a strong ethical framework that encourages students to use their talents to make a positive impact on society. \n \n Faith and Service: St. Endas emphasizes the importance of giving back to the community. Through organized service projects and volunteering opportunities, students develop a sense of responsibility toward their fellow citizens, preparing them to become leaders who prioritize the well-being of others.",
				title: "Spiritual Guidance and Ethical Leadership",
			},

			{
				post: "Leadership often involves facing challenges head-on, and St. Endas College Agbarho equips students with the resilience needed to navigate difficult situations. By fostering a supportive and disciplined environment, our students learn how to handle setbacks with grace and determination. This resilience is essential for leaders who must remain steadfast in the face of adversity. \n \n Discipline and Commitment: At St. Endas, we maintain high standards of discipline, encouraging our students to develop a strong work ethic, which sets the stage for future success.",
				title: "Resilience and Perseverance",
			},

			{
				post: "In an increasingly interconnected world, leaders need to have a global perspective. At St. Endas College Agbarho, we encourage students to think beyond their immediate surroundings. They are taught to appreciate diversity and understand global issues, preparing them to lead in a multicultural and dynamic world. \n \n Inclusivity and Respect for All: St. Endas promotes respect for different cultures, backgrounds, and perspectives. This broad-minded approach helps our students become adaptable and empathetic leaders who can thrive in diverse environments.",
				title: "Building a Global Perspective",
			},

			{
				post: "St. Endas College Agbarho has produced many notable leaders across various fields, from business and politics to education and social activism. Our alumni serve as powerful examples of how Catholic education fosters leadership potential. Their success stories inspire current students to aim high and strive for greatness in their chosen careers. \n \n Mentorship and Networking: At St. Endas, we maintain strong alumni networks, offering mentorship opportunities for current students. This connection to successful leaders provides valuable guidance and encouragement, further shaping our students into future leaders.",
				title: "Alumni Success Stories",
			},
			{
				post: "At St. Endas College Agbarho, we offer more than just academic success—we shape young people into the kind of leaders Nigeria needs. By fostering ethical values, critical thinking, resilience, and a global perspective, we equip our students with the skills and character necessary to lead with integrity and compassion. For parents seeking to provide their children with a solid foundation for the future, St. Endas College Agbarho is the perfect choice. \n \n As Nigeria continues to evolve, the next generation of leaders will need to navigate complex challenges while staying grounded in strong values. At St. Endas College Agbarho, we provide the tools and guidance necessary to shape these future leaders—leaders who will not only excel in their fields but also contribute meaningfully to society.",
				title: "Conclusion",
			},
		],
		sectionType: "list",
	},

	{
		id: 7,
		banner: news_3,
		title:
			"The Subtle Act of reading a Lot: Cultivating a lifelong Love for Books at St. Endas College",
		created_at: "August 15, 2024",
		introduction:
			"At St. Endas College, we believe in the power of books to transform lives, expand minds, and open up new worlds of understanding. But beyond being a mere academic requirement, reading is a subtle yet profound act that enriches every part of a student’s life. Whether it’s for study, personal growth, or relaxation, reading is a skill that grows quietly with practice and becomes a lifelong source of joy and knowledge. \n \n Our approach at St. Endas is to foster a culture where reading is not just an obligation, but a cherished part of daily life—one that subtly and steadily shapes students into more thoughtful, empathetic, and imaginative individuals.",
		sections: [
			{
				post: "Reading is often seen as a passive activity, but it’s anything but. Each page turned is an invitation to new ideas, perspectives, and emotional experiences. Books have the unique ability to take us out of our immediate surroundings and immerse us in distant worlds—whether we’re exploring ancient civilizations in history texts or experiencing magical adventures through fictional characters. In this way, reading quietly exercises the mind and imagination, making us more aware of the richness of life and the vastness of human experience. \n \n At St. Endas College, we see reading as more than just an academic tool. It’s a subtle act of growth that enhances students' abilities to think critically, solve problems creatively, and approach life with empathy and curiosity. Through reading, students develop language skills, expand their vocabulary, and enhance their comprehension, all of which lay the foundation for future success in both academics and personal life.",
				title: "The Quiet Power of Reading",
				image: blogImage7_1,
				style: {
					img_dir: "right",
					align_items: "center",
				},
			},
			{
				post: "So how do we nurture this love of reading at St. Endas College? It begins with creating an environment where books are valued, shared, and discussed. Our school library is at the heart of this mission, providing students with access to a wide range of genres and authors—from classic literature and modern novels to non-fiction books on science, history, and current events. The library isn’t just a place for study; it’s a sanctuary for exploration, where students can discover stories that resonate with them personally. \n We also encourage reading across the curriculum. In every subject, students are introduced to books and articles that not only complement their coursework but also inspire further independent reading. Teachers regularly recommend books that align with students’ interests, helping them make connections between what they’re learning in class and the wider world of literature and knowledge.",
				title: "Encouraging a Reading Culture at St. Endas College",
				image: blogImage7_2,
				style: {
					img_dir: "left",
					align_items: "center",
				},
			},
			{
				post: "While academics are important, we also emphasize reading for pleasure. There’s something deeply personal about the relationship between a reader and a book. At St. Endas College, we encourage students to find books that speak to their interests, whether that’s a gripping fantasy novel, a thought-provoking memoir, or an inspiring biography. \n Reading for pleasure isn’t just enjoyable—it’s essential for personal growth. Books allow students to see the world from different perspectives, introducing them to diverse cultures, ideas, and experiences. This exposure builds empathy, a key skill for navigating the complexities of modern life. By reading widely and often, students at St. Endas College develop a deeper understanding of the world and their place in it.",
				title: "Reading for Personal Growth and Fun",
				image: news_3,
				style: {
					img_dir: "right",
					align_items: "center",
				},
			},
			{
				post: "Perhaps the most subtle and rewarding aspect of reading is how it plants the seeds for lifelong learning. At St. Endas College, our goal is not just to get students to read for exams or assignments but to cultivate a habit of reading that continues throughout their lives. We believe that students who read regularly, for both knowledge and enjoyment, are better equipped to succeed not only academically but in all areas of life. \n \n In the fast-paced digital world we live in, where information is constantly at our fingertips, reading a book requires slowing down, focusing, and reflecting. This practice builds patience, concentration, and critical thinking—qualities that are more valuable than ever in today’s society. By teaching our students to love reading, we’re giving them a lifelong skill that will serve them in their careers, relationships, and personal development.",
				title: "Building Lifelong Readers",
				image: blogImage7_3,
				style: {
					img_dir: "left",
					align_items: "center",
				},
			},
			{
				post: "In a world where we are constantly bombarded with distractions, the simple act of sitting down with a book and reading can seem almost revolutionary. At St. Endas College, we understand the subtle power of this act and how, over time, it shapes our students into more knowledgeable, compassionate, and well-rounded individuals. \n \n As we continue to nurture a reading culture at St. Endas College, we are committed to ensuring that every student has the opportunity to discover the joys of reading, the thrill of learning new things, and the quiet satisfaction that comes from getting lost in a good book.\n So the next time you see a student with a book in hand, know that they are engaging in something much more than just reading words on a page—they’re embarking on a journey of lifelong learning, one chapter at a time.",
				title: "Conclusion: The Quiet Act that Makes a Big Difference",
				image: blogImage7_4,
				style: {
					img_dir: "right",
					align_items: "center",
				},
			},
		],
	},
];
