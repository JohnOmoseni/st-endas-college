import { Facebook, Instagram, Youtube, TikTok } from "./icons";
import {
  about_mission,
  about_vision,
  news_1,
  news_2,
  news_3,
  review1,
  review2,
  review3,
  career_1,
  career_2,
  career_3,
  career_4,
  fruitday_1,
  fruitday_2,
  fruitday_3,
  fruitday_4,
  artGallery_1,
  artGallery_2,
  artGallery_3,
  artGallery_4,
} from "./icons2";

export const REQUEST_ID_ERROR = "RequestID is required";

export const navLinks = [
  {
    label: "Home",
    href: "/",
    tag: "home",
  },
  {
    label: "Admission",
    href: "/admission",
    tag: "admission",
  },
  {
    label: "News",
    href: "/news",
    tag: "news",
  },
  {
    label: "Gallery",
    href: "/gallery",
    tag: "gallery",
  },
  {
    label: "Calendar",
    href: "/calendar",
    tag: "calendar",
  },
  {
    label: "Contact",
    href: "/contact",
    tag: "contact",
  },
  {
    label: "About Us",
    href: "/about",
    tag: "about",
  },
];

export const dashboardFooterLinks = [
  {
    name: "School",
    dropdown: [
      {
        link: "Home",
        href: "/",
      },
      {
        link: "Admission",
        href: "/admission",
      },
      {
        link: "About us",
        href: "/about",
      },
      {
        link: "News",
        href: "/news",
      },
      {
        link: "Contact us",
        href: "/contact",
      },
    ],
  },
];

export const socials = [
  {
    label: Instagram,
    href: "https://www.instagram.com/st.endascollege/",
    tag: "instagram",
  },

  {
    label: Facebook,
    href: "https://web.facebook.com/Stendascollege",
    tag: "facebook",
  },
  {
    label: Youtube,
    href: "https://youtube.com/@stendascollege?si=eeNdksvFV_oQXQon",
    tag: "youtube",
  },
  {
    label: TikTok,
    href: "https://www.tiktok.com/@stendascollege",
    tag: "tiktok",
  },
];

export const calendarData = [
  {
    title: "Boarding Learners Resumption",
    body: "Resumption day for our boarding learners.",
    created_at: "18th September, 2024",
    color: "blue",
  },
  {
    title: "Day Learners Resumption",
    body: "Resumption for day learners.",
    created_at: "19th September, 2024",
    color: "red",
  },
  {
    title: "Visiting Day -  Optional",
    body: "A day for families to explore classrooms, engage with teachers, and spend time with their wards.",
    created_at: "30th September, 2024",
    color: "yellow",
  },
  {
    title: "Mid-Term-Break",
    body: "Learners vacate for the mid-term break. ",
    created_at: "25th October, 2024",
    color: "pink",
  },
  {
    title: "Student Return From Mid-Term",
    body: "Boarding learners resume from the mid-term break holidays.",
    created_at: "3rd November, 2024",
    color: "emerald",
  },
  {
    title: "Revision",
    body: "Learners begin revision for the term’s examination.",
    created_at: "18th November, 2024",
    color: "blue",
  },
  {
    title: "End of First Term Examination",
    body: "Conclusion of the term’s examinations.",
    created_at: "19th November, 2024",
    color: "yellow",
  },
  {
    title: "Visiting Day - Optional",
    body: "A day for families to explore classrooms, engage with teachers, and spend time with their wards.",
    created_at: "25th November, 2024",
    color: "blue",
  },
  {
    title: "Graduation/End of Year Party",
    body: "End of year party celebration and graduation ceremony for the outgoing senior students (2023/2024 academic session)",
    created_at: "6th December, 2024",
    color: "pink",
  },
];

export const about = [
  {
    img: about_mission,
    title: "Our Mission",
    body: "To prepare students for the future with a curriculum designed for the evolving world, fostering quality education, sound minds, moral rectitude, and holistic formation",
  },
  {
    img: about_vision,
    title: "Our Vision",
    body: "To be a beacon of academic excellence, where students graduate as well-rounded global citizens, equipped with the knowledge, skills, and moral compass to lead fulfilling lives and contribute meaningfully to a constantly changing world.",
  },
];

export const testimonials = [
  {
    img: review1,
    name: "Ambassador Phil Odjegbu iduku",
    tag: "Parent",
    body: "St. Endas College situated at Agbarho in Delta state is one of the best schools to bring your children. the school environment is warm and welcoming. We feel safe bringing our daughter there because it feels like we are part of the school's family. I am so happy with my daughter's progress at St. Endas College, her confidence has come a long way since she joined the school. I am very satisfied by seeing improvement and remarkable confidence level in my child's overall personality development. I love St. Endas College, my daughter is loved and well nurtured as well as academically enriched.",
  },
  {
    img: review2,
    name: "Kennedy A. Ebakata",
    tag: "Parent",
    body: "My love for catholic education was a strong influence in considering St. Endas College for my children. We transferred two of our kids from another Catholic school to St. Endas College in 2021 when it opened to day schooling and female students. Since then, we have had no cause to regret the decision. I want to specially commend the school management for providing the necessary infrastructure required by the students  to excel in their academics and social lives. This encouraged my family to bring in our 3rd and 4th children to the school, after their primary education, to enjoy the unique St. Endas experience. We are impressed with the ongoing transformation of the school landscape with its many buildings adorned with colourful murals. It is pleasing to know that the school is steadily  attaining prominence among Catholic schools in the Diocese. I enjoin the management to sustain the effort. ",
  },

  {
    img: review3,
    name: "Mrs. Adakre",
    tag: "Parent",
    body: "St Endas has constantly demonstrated strong academic performance with students showing significant improvement in external standardized test scores and the school's extra curricular programs are incredible. For our boys, attending this school has been transformative. They've shown significant academic growth, developing confidence in their abilities and critical thinking skills. Socially, they've formed strong friendships and developed essential life skills like teamwork and empathy. The school's focus on character development has also helped them become more self-aware, responsible, and compassionate individuals.",
  },
];

export const newsPost = [
  {
    id: 1,
    image: news_1,
    text: "Life at St. Endas College",
    videoUrl: "https://www.youtube.com/watch?v=lYIMTzl97hY",
  },
  {
    id: 2,
    image: news_2,
    text: "How a Catholic Education at St. Endas College Agbarho Shapes Future Leaders in Nigeria",
    link: "/news/6",
    read_time: "",
  },
  {
    id: 3,
    image: news_3,
    text: "The subtle act of reading a lot!",
    link: "/news/1",
  },
];

export const galleries = [
  {
    title: "Career Day",
    gallery: [career_1, career_2, career_3, career_4],
  },

  {
    title: "Fruit Day",
    gallery: [fruitday_1, fruitday_2, fruitday_3, fruitday_4],
  },

  {
    title: "Excursion to an Art Gallery",
    gallery: [artGallery_1, artGallery_2, artGallery_3, artGallery_4],
  },
];

export const bank_details = [
  {
    label: "Bank Name",
    value: "First Bank of Nigeria",
  },
  {
    label: "Account Number",
    value: "3086534567",
  },
  {
    label: "Account Name",
    value: "St. Endas college",
  },
];
