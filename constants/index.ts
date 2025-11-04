// icons
import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

/* =========================
   Top Skills (hero section)
   ========================= */
export const SKILL_DATA = [
  { skill_name: "HTML", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS", image: "css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 80, height: 80 },
  { skill_name: "React", image: "react.png", width: 80, height: 80 },
  { skill_name: "Redux", image: "redux.png", width: 80, height: 80 },
  { skill_name: "React Query", image: "reactquery.png", width: 80, height: 80 },
  { skill_name: "TypeScript", image: "ts.png", width: 80, height: 80 },
  { skill_name: "Next.js 14", image: "next.png", width: 80, height: 80 },
  { skill_name: "Framer Motion", image: "framer.png", width: 80, height: 80 },
  { skill_name: "Stripe", image: "stripe.png", width: 80, height: 80 },
  { skill_name: "Node.js", image: "node.png", width: 80, height: 80 },
  { skill_name: "MongoDB", image: "mongodb.png", width: 40, height: 40 },
] as const;

/* =========================
   Socials (header/footer)
   ========================= */
export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/rida-lagnaoui-834570238/",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com", // ← remplace par ton vrai GitHub si besoin
  },
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/rida_lagnaoui/",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/rida.lagnaoui.7",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com", // ou https://x.com/ton-handle
  },
] as const;

/* =========================
   Skills (grouped sections)
   ========================= */
export const FRONTEND_SKILL = [
  { skill_name: "LARAVEL", image: "laravel.png", width: 80, height: 80 },
  { skill_name: "Postman", image: "postman.png", width: 80, height: 80 }, // fixed label
  { skill_name: "ANDROID", image: "android.png", width: 65, height: 65 },
  { skill_name: "FLUTTER", image: "flutter.png", width: 80, height: 80 },
  { skill_name: "GITLAB", image: "gitlab.png", width: 80, height: 80 },
  { skill_name: "WORDPRESS", image: "wordpress.png", width: 80, height: 80 },
  { skill_name: "PYTHON", image: "python.png", width: 80, height: 80 },
  { skill_name: "ANGULAR", image: "angular.png", width: 80, height: 80 },
  { skill_name: "SPRING BOOT", image: "spring.png", width: 80, height: 80 },
  { skill_name: "KUBERNETES", image: "kubernetes.png", width: 80, height: 80 },
] as const;

export const BACKEND_SKILL = [
  { skill_name: "Jenkins", image: "jenkins.png", width: 80, height: 80 },
  { skill_name: ".NET Core", image: "dotnetcore.png", width: 80, height: 80 },
  { skill_name: "Selenium", image: "selenium.png", width: 40, height: 40 },
  { skill_name: "Firebase", image: "firebase.png", width: 55, height: 55 },
  { skill_name: "PostgreSQL", image: "postgresql.png", width: 70, height: 70 },
  { skill_name: "MySQL", image: "mysql.png", width: 70, height: 70 },
  { skill_name: "WooCommerce", image: "woocommerce.png", width: 70, height: 70 },
  { skill_name: "GraphQL", image: "graphql.png", width: 80, height: 80 },
] as const;

export const FULLSTACK_SKILL = [
  { skill_name: "React Native", image: "reactnative.png", width: 70, height: 70 },
  { skill_name: "Tauri", image: "tauri.png", width: 70, height: 70 },
  { skill_name: "Docker", image: "docker.png", width: 70, height: 70 },
  { skill_name: "Figma", image: "figma.png", width: 50, height: 50 },
] as const;

export const OTHER_SKILL = [
  { skill_name: "Go", image: "go.png", width: 60, height: 60 },
] as const;

/* =========================
   Projects
   ========================= */
export const PROJECTS = [
 

    {
    title: "Sahara Experience Event",
    description:
      "Designed and developed a modern showcase website for Sahara Experience Event, a company specializing in event organization in Morocco. Implemented an elegant UI, automated contact system, and SEO optimization to enhance visibility.",
    image: "/projects/saharaexperienceevent.png",
    link: "https://sahara-experience-events.com",
  },
   {
    title: "Agafay Adventure",
    description:
      "Developed a modern, SEO-optimized website for Agafay Adventure, a tourism company offering desert experiences and outdoor activities in Morocco. Integrated an elegant design, booking system, and performance optimization.",
    image: "/projects/agafayadventure.png",
    link: "https://agafayadventure.com",
  },
  {
    title: "THE WHITE CAMEL",
    description:
      "Developed a modern, SEO-optimized website for THE WHITE CAMEL, a tourism company offering desert experiences and outdoor activities in Morocco. Integrated an elegant design, booking system, and performance optimization.",
    image: "/projects/thewhitecamel.png",
    link: "https://thewhitecamel.com",
  },
    {
    title: "KASBAH SAHARA SERVICES ",
    description:
      "Developed a modern, SEO-optimized website for THE WHITE CAMEL, a tourism company offering desert experiences and outdoor activities in Morocco. Integrated an elegant design, booking system, and performance optimization.",
    image: "/projects/kasbahsaharaservices.png",
    link: "https://kasbahsaharaservices.com/",
  },
   {
    title: "SAHARA SERVICES ",
    description:
      "Developed a modern, SEO-optimized website for SAHARA SERVICES, a tourism company offering desert experiences and outdoor activities in Morocco. Integrated an elegant design, booking system, and performance optimization.",
    image: "/projects/saharaservices.png",
    link: "https://saharaservices.info/",
  },
  
   {
    title: "GHAZALA CAMPS ",
    description:
      "Developed a modern, SEO-optimized website for GHAZALA CAMPS, a tourism company offering desert experiences and outdoor activities in Morocco. Integrated an elegant design, booking system, and performance optimization.",
    image: "/projects/ghazalacamp.png",
    link: "https://ghazalacamps.com/",
  },
  {
    title: "MORROCO LUXURY CAMPS ",
    description:
      "Developed a modern, SEO-optimized website for GHAZALA CAMPS, a tourism company offering desert experiences and outdoor activities in Morocco. Integrated an elegant design, booking system, and performance optimization.",
    image: "/projects/morocco-luxury-camps.png",
    link: "https://moroccoluxurycamps.com/",
  },
   {
    title: "SAHARA EXPERIENCE  ",
    description:
      "Developed a modern, SEO-optimized website for GHAZALA CAMPS, a tourism company offering desert experiences and outdoor activities in Morocco. Integrated an elegant design, booking system, and performance optimization.",
    image: "/projects/sahara-experience.png",
    link: "https://sahara-experience.com/",
  },
  {
    title: "Benvip Services  ",
    description:
      "Developed a modern, SEO-optimized website for GHAZALA CAMPS, a tourism company offering desert experiences and outdoor activities in Morocco. Integrated an elegant design, booking system, and performance optimization.",
    image: "/projects/benvipservices.png",
    link: "https://benvipservices.com/",
  },
   {
    title: "Morocco Luxury Experience",
    description:
      "Developed a modern, SEO-optimized website for GHAZALA CAMPS, a tourism company offering desert experiences and outdoor activities in Morocco. Integrated an elegant design, booking system, and performance optimization.",
    image: "/projects/moroccoluxuryexperience.png",
    link: "https://www.morocco-luxury-experience.com/",
  },
  {
    title: "Erg Chebbi Luxurycamps",
    description:
      "Developed a modern, SEO-optimized website for GHAZALA CAMPS, a tourism company offering desert experiences and outdoor activities in Morocco. Integrated an elegant design, booking system, and performance optimization.",
    image: "/projects/ergchebbiluxurycamps.png",
    link: "http://ergchebbiluxurycamps.com/",
  },
  {
    title: "aliya-luxury-appart",
    description:
      "Developed a modern, SEO-optimized website for GHAZALA CAMPS, a tourism company offering desert experiences and outdoor activities in Morocco. Integrated an elegant design, booking system, and performance optimization.",
    image: "/projects/aliya-luxury-appart.png",
    link: "https://www.aliya-luxury-appart.com/",
  },
  
] as const;

/* =========================
   NEW: Certifications
   ========================= */
export const CERTIFICATIONS = [
  {
    title: "Building Scalable Java Microservices with Spring Boot and Spring Cloud",
    issuer: "Google Cloud Security",
    date: "nov. 2023",
    link: "https://www.coursera.org/account/accomplishments/verify/T47R28YU7JB4",
    certId: "T47R28YU7JB4",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
  },
  {
    title: "Machine Learning with Python (avec mention)",
    issuer: "IBM",
    date: "nov. 2023",
    link: "https://www.coursera.org/account/accomplishments/verify/5QTEEG7HQNN9",
    certId: "5QTEEG7HQNN9",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    title: "Engineering Maintainable Android Apps",
    issuer: "Vanderbilt University",
    date: "mai 2023",
    link: "https://www.coursera.org/account/accomplishments/verify/CJATNDG7R7P3",
    certId: "CJATNDG7R7P3",
    logo: "/certs/vanderbilt.png",


  },
   {
    title: "Spécialisation Android App Development",
    issuer: "Vanderbilt University",
    date: "mai 2023",
    link: "https://www.coursera.org/account/accomplishments/specialization/KHEL5X7N264P",
    certId: "KHEL5X7N264P",
    logo: "/certs/vanderbilt.png",
  },
  {
    title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
    issuer: "The Hong Kong University of Science and Technology",
    date: "mars 2023",
    link: "https://www.coursera.org/account/accomplishments/verify/N7DAP9NE4UQT",
    certId: "N7DAP9NE4UQT",
    logo: "/certs/hkust.png",
  },
  {
    title: "Introduction to Agile Development and Scrum (avec mention)",
    issuer: "IBM",
    date: "mars 2023",
    link: "https://www.coursera.org/account/accomplishments/verify/AMF2F7XSTMP2",
    certId: "AMF2F7XSTMP2",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    title: "Introduction to DevOps",
    issuer: "IBM",
    date: "mars 2023",
    link: "https://www.coursera.org/account/accomplishments/verify/EHWG3FMBFK2B",
    certId: "EHWG3FMBFK2B",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    title: "DevOps, Cloud, and Agile Foundations",
    issuer: "IBM",
    date: "mars 2023",
    link: "https://www.coursera.org/account/accomplishments/specialization/APUDRCTQBB2V",
    certId: "APUDRCTQBB2V",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    title: "Developing Back-End Apps with Node.js and Express",
    issuer: "IBM",
    date: "mars 2023",
    link: "https://www.coursera.org/account/accomplishments/verify/72SU33PZVAJN",
    certId: "72SU33PZVAJN",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    title: "Data Collection and Processing with Python",
    issuer: "University of Michigan",
    date: "mai 2022",
    link: "https://www.coursera.org/account/accomplishments/verify/2CA6FQUCMS2C",
    certId: "2CA6FQUCMS2C",
    logo: "/certs/michigan.png",
    
  },
   {
    title: "Python Functions, Files, and Dictionaries",
    issuer: "University of Michigan",
    date: "mai 2022",
    link: "https://www.coursera.org/account/accomplishments/verify/JEV8ZMCN7WNK",
    certId: "JEV8ZMCN7WNK",
    logo: "/certs/michigan.png",
  },
  {
    title: "PHP et MySQL : la formation complète",
    issuer: "Udemy",
    date: "2025",
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-6bae29c4-93f2-4ad1-86a9-0c5717727daf.pdf",
    certId: "UC-6bae29c4-93f2-4ad1-86a9-0c5717727daf",
    logo: "/certs/udemy.png",
  },
  {
    title: "Laravel : Build Complete inventory Management systm A-Z",
    issuer: "Udemy",
    date: "2025",
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-9e5a812a-518f-47fd-a610-f6a124bba43b.pdf",
    certId: "UC-9e5a812a-518f-47fd-a610-f6a124bba43b",
    logo: "/certs/udemy.png",
  },
  {
    title: "Java Script : Formation Ultime",
    issuer: "Udemy",
    date: "2025",
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-d02dd1aa-69e1-4870-a8c4-157dbb7a7ddb.pdf",
    certId: "UC-d02dd1aa-69e1-4870-a8c4-157dbb7a7ddb",
    logo: "/certs/udemy.png",
  },
  {
    title: "DevOps Beginners to Advanced with Projects",
    issuer: "Udemy",
    date: "2025",
    link: "https://www.udemy.com/certificate/UC-6592f821-065c-4740-ba45-50a87ad2dae5/",
    certId: "UC-6592f821-065c-4740-ba45-50a87ad2dae5",
    logo: "/certs/udemy.png",
  },
    {
    title: "Wordpress 2025 - Créez votre site web professionnel de A à Z ",
    issuer: "Udemy",
    date: "2025",
    link: "https://www.udemy.com/certificate/UC-6a28eb09-88c4-4ddd-9558-3345c028ddac/",
    certId: "UC-6a28eb09-88c4-4ddd-9558-3345c028ddac",
    logo: "/certs/udemy.png",
  },
   {
    title: "Beginning C++ Programming - From Beginner to Beyond",
    issuer: "Udemy",
    date: "2025",
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-39ddecc0-f83a-4373-b85b-617770e52b3d.pdf",
    certId: "UC-39ddecc0-f83a-4373-b85b-617770e52b3d",
    logo: "/certs/udemy.png",
  },
     {
    title: "Zoho CRM and Zoho Creator Masterclass",
    issuer: "Udemy",
    date: "2025",
    link: "https://www.udemy.com/certificate/UC-4820a5ca-69ad-45cc-b7de-c1e28673f1fe/",
    certId: "UC-4820a5ca-69ad-45cc-b7de-c1e28673f1fe",
    logo: "/certs/udemy.png",
  },
];


/* =========================
   Footer
   ========================= */
export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      { name: "YouTube", icon: FaYoutube, link: "https://youtube.com" },
      { name: "GitHub", icon: RxGithubLogo, link: "https://github.com" },
      { name: "Discord", icon: RxDiscordLogo, link: "https://discord.com" },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/rida_lagnaoui/",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com", // ✅ corrigé (avant pointait vers LinkedIn)
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/rida-lagnaoui-834570238/",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://www.linkedin.com/in/rida-lagnaoui-834570238/",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://www.linkedin.com/in/rida-lagnaoui-834570238/",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:lagnaoui.rida.iir@gmail.com",
      },
    ],
  },
] as const;

/* =========================
   Nav links (add Certifications)
   ========================= */
export const NAV_LINKS = [
  { title: "About me", link: "#about-me" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
  { title: "Certifications", link: "#certifications" }, // ✅ new
] as const;

/* =========================
   Misc
   ========================= */
export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
} as const;
