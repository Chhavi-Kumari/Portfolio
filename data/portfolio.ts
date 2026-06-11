import { assetPath } from "@/lib/assetPath";

export type Mode = "professional" | "creative";

export type Experience = {
  slug: string;
  mode: Mode;
  role: string;
  company: string;
  dates: string;
  bullets: string[];
};

export type Project = {
  slug: string;
  mode: Mode;
  title: string;
  status?: "placeholder" | "active";
  summary: string;
  overview: string;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  screenshots: string[];
  links: { label: string; href: string }[];
};

export type Certification = {
  slug: string;
  title: string;
};

export const profile = {
  name: "Chhavi Kumari",
  title: "Technical Program Manager",
  tagline: "AI Platforms & Enterprise Systems",
  location: "Los Angeles, CA · Open to relocation",
  email: "chhavi.j269@gmail.com",
  linkedin: "https://www.linkedin.com/in/chhavikumari",
  github: "https://github.com/Chhavi-Kumari",
  resume: assetPath("/Chhavi_Kumari-Resume.pdf"),
  headshot: assetPath("/assets/headshot-v2.png"),
  minecraftAvatar: assetPath("/assets/minecraft-avatar-v2.png"),
  summary:
    "AI and enterprise-systems focused Technical Program Manager with experience leading cross-functional delivery, SDLC execution, data reliability programs, and platform operations across education, research, energy, and nonprofit environments."
};

export const navigation = [
  { label: "Education", href: "/education" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  //{ label: "Blogs", href: "/blogs" },
  { label: "Resume", href: assetPath("/Chhavi_Kumari-Resume.pdf"), external: true },
  { label: "LinkedIn", href: profile.linkedin, external: true },
  { label: "GitHub", href: profile.github, external: true }
];

export const education = [
  {
    school: "USC Viterbi School of Engineering",
    degree: "Master of Science, Engineering Management",
    dates: "January 2024 – December 2025",
    coursework: [
      "Engineering Project Management",
      "Economic Analysis of Engineering Projects",
      "Leading & Managing Engineering Teams",
      "Technology Development & Innovation",
      "Statistics",
      "Industrial Ecology"
    ]
  },
  {
    school: "USC Marshall School of Business",
    degree: "Master of Science, Engineering Management",
    dates: "January 2025 – December 2025",
    coursework: [
      "Business Analytics",
      "Global Operations Management",
      "Sustainable Supply Chain"
    ]
  },
  {
    school: "Vishwakarma Institute of Technology",
    degree: "Bachelor of Engineering, Mechanical Engineering",
    dates: "August 2019 – May 2023",
    coursework: [
      "Data Science",
      "Object-Oriented Programming",
      "Mechatronics & Robotics",
      "Applied Electronics",
      "Machine Design",
      "Fluid Engineering",
      "Thermodynamics",
      "Electric & Hybrid Vehicles",
      "Computer Integrated Manufacturing",
      "Marketing Management"
    ]
  }
];

export const professionalExperiences: Experience[] = [
  {
    slug: "usc-scale-technical-program-manager",
    mode: "professional",
    role: "Technical Program Manager (Systems Analyst)",
    company: "USC Viterbi K-12 STEM Center",
    dates: "February 2026 – Present",
    bullets: [
      "Launched a partner engagement platform (SCALE) supporting 50+ organizations (~3K+ users) by leading end-to-end SDLC execution, defining roadmap and OKRs, and coordinating a team of 4 engineers across 7 Agile sprints ",
      "Improved stakeholder alignment and execution visibility by consolidating KPIs, risks, decisions, and program status into weekly updates for cross-functional leadership",
      "Cut development effort by 70%+ by launching a Gemini-powered chatbot and validating usability through A/B testing with non-technical users ",
      "Reduced deployment risk across 3 system integrations by triaging bugs in Jira and enforcing QA milestone gates across 5 releases",
      "Increased partner data reliability by ~35% by building a SQL/Python pipeline and standardizing 1500+ documents across 50+ partners"
    ]
  },
  {
    slug: "usc-engineering-economics-course-producer",
    mode: "professional",
    role: "Course Producer - Economics",
    company: "University of Southern California",
    dates: "August 2025 – December 2025",
    bullets: [
      "Reduced grading turnaround time by 30% by building automated Excel templates with validation rules and performance trackers",
      "Eliminated calculation errors by standardizing grading formulas and submission workflows across 35+ students",
      "Managed cross-functional coordination between faculty, TAs, and students to maintain structured communication and on-time delivery throughout the semester"
    ]
  },
  {
    slug: "usc-rossier-graduate-assistant-program-manager",
    mode: "professional",
    role: "Program Manager (Graduate Assistant) | Global Ed. D. Program",
    company: "USC Rossier School of Education",
    dates: "July 2024 – July 2025",
    bullets: [
      "Increased operational efficiency by ~20% across 3 educational programs by redesigning 5 workflows and eliminating process bottlenecks",
      "Accelerated leadership decision-making by ~40% by developing executive dashboards and reports in Excel that transformed operational data into actionable program insights ",
      "Streamlined order management by tracking material/supply orders & processing vendor requests across programs to ensure on-time delivery",
      "Reduced delivery risk across 2 strategic programs by implementing resource planning mechanisms in Monday.com that surfaced risks early"
    ]
  },
  {
    slug: "usc-teacher-assistant",
    mode: "professional",
    role: "Discover Engineering Teacher Assistant & STEM Curriculum Coordinator and Archivist",
    company: "USC Viterbi K-12 STEM Center",
    dates: "May 2025 – July 2025",
    bullets: [
      "Standardized 800+ STEM lesson plans across 50+ partners in Greater Los Angeles, reducing teacher prep time by 60%",
      "Supervised and mentored 30+ students as TA for USC's Discover Engineering pre-college program, facilitating hands-on projects in robotics, coding, and 3D printing",
      "Coordinated 2 STEM programs (SoCalGas x USC and Discover Engineering) serving 100+ students by managing cross-functional collaboration between engineers and faculty"
    ]
  },
  {
    slug: "freelance-project-management-associate",
    mode: "professional",
    role: "Project Management Associate | Infrastructure & Digital Transformation Program ",
    company: "Self Employed",
    dates: "June 2023 – December 2023",
    bullets: [
      "Secured approval for 3 procurement proposals supporting a $7.8B energy project by developing PRDs, defining resource requirements, and translating technical process diagrams into executable project plans ",
      "Mitigated procurement planning risk by coordinating RFQ/RFP cycles across 15+ suppliers, managing vendor communications, and maintaining cost visibility throughout project milestones",
      "Delivered a nonprofit website 1 month ahead of schedule by aligning 3 stakeholders to digitize donor outreach, campaigns, and operational workflows, reducing manual coordination effort by ~60%"
    ]
  },
  {
    slug: "enpro-new-business-development",
    mode: "professional",
    role: "Project Management Intern | Renewables Department",
    company: "Enpro Industries Pvt Ltd",
    dates: "August 2022 – January 2023",
    bullets: [
      "Secured $550K+ in contracts by executing RFQ/RFP cycles across 4 clients, and managing internal and external stakeholders ",
      "Identified 15% cost savings for renewable energy products by benchmarking 10+ suppliers and recommending NPI sourcing strategies",
      "Reduced procurement cycle times by 20% by building a supplier evaluation framework and optimizing sourcing workflows in SAP ERP",
      "Improved vendor responsiveness by 25% by establishing centralized reporting mechanisms & standardizing supplier communication process"
    ]
  },

];

export const creativeExperiences: Experience[] = [
  {
    slug: "daily-trojan-deia",
    mode: "creative",
    role: "DEIA Committee Member",
    company: "Daily Trojan",
    dates: "September 2025 – December 2025",
    bullets: [
      "Placeholder: add a DEIA committee initiative.",
      "Placeholder: add an accessibility or inclusion contribution.",
      "Placeholder: add a student-media community outcome."
    ]
  },
  {
    slug: "usc-social-work-lahsa-data-collection",
    mode: "creative",
    role: "Team Lead / Data Collector",
    company: "USC Suzanne Dworak-Peck School of Social Work",
    dates: "December 2024 – March 2025",
    bullets: [
      "LA's lead public agency coordinating homelessness housing and services across Los Angeles County.",
      "Led field data collection for LAHSA across 15+ sites, conducting 250+ surveys with a 4-person team, reducing data-cleaning effort by 35% ",
    ]
  },
  {
    slug: "mentor-usc",
    mode: "creative",
    role: "Mentor",
    company: "USC Graduate Student Mentorship Program",
    dates: "August 2024 – December 2025",
    bullets: [
      "Placeholder: add a DEIA committee initiative.",
      "Placeholder: add an accessibility or inclusion contribution.",
      "Placeholder: add a student-media community outcome."
    ]
  },
  {
    slug: "aaroh-music-content",
    mode: "creative",
    role: "Marketing & Content Coordinator",
    company: "Aaroh Music Club",
    dates: "August 2020 – May 2021",
    bullets: [
      "Placeholder: add a music-event campaign or content responsibility.",
      "Placeholder: add an audience reach or engagement result.",
      "Placeholder: add a storytelling or community-building highlight."
    ]
  },
  {
    slug: "edc-content-curation",
    mode: "creative",
    role: "Content and Curation Coordinator",
    company: "Entrepreneurship Development Cell, VIT Pune",
    dates: "August 2020 – May 2021",
    bullets: [
      "Placeholder: add a content-curation or programming responsibility.",
      "Placeholder: add an event, publication, or participation result.",
      "Placeholder: add an entrepreneurship education highlight."
    ]
  },
  {
    slug: "student-council-aesthetics",
    mode: "creative",
    role: "Aesthetics Coordinator",
    company: "Student Council VIT Pune",
    dates: "August 2019 – May 2021",
    bullets: [
      "Placeholder: add a visual-direction or event-design responsibility.",
      "Placeholder: add an event scale or audience result.",
      "Placeholder: add a creative leadership or installation highlight."
    ]
  }
];

export const skills = {
  professional: [
    "Technical Program Management",
    "Agile Delivery",
    "SDLC",
    "Stakeholder Management",
    "Jira",
    "MS Project",
    "SQL",
    "Python",
    "Gemini API",
    "SAP ERP",
    "Trello",
    "Excel Analytics",
    "Vendor Benchmarking",
    "Executive Reporting",
    "Cross-functional Collaboration"
  ],
  creative: [
    "Storytelling",
    "Content Strategy",
    "Community Building",
    "Creative Direction",
    "Student Media",
    "Music Community Marketing",
    "Entrepreneurship Curation",
    "Visual Aesthetics",
    "Educational Content",
    "Minecraft-inspired Worldbuilding"
  ]
};

export const certifications: Certification[] = [
  {
    slug: "ibm-ai-product-manager",
    title: "IBM AI Product Manager"
  },
  {
    slug: "ai-project-management-generative-ai",
    title: "AI for Project Management: Boosting Collaboration with Generative AI"
  },
  {
    slug: "data-analysis-in-excel",
    title: "Data Analysis in Excel"
  },
  {
    slug: "ibm-business-analyst",
    title: "IBM Business Analyst"
  },
  {
    slug: "mckinsey-forward-program",
    title: "McKinsey.org Forward Program"
  }
];

export const projects: Project[] = [
  {
    slug: "ai-driven-supply-chain-forecasting",
    mode: "professional",
    title: "AI-Driven Forecasting in Supply Chains",
    summary: "Research study evaluating AI-powered forecasting against traditional demand planning methods.",
    overview: "Investigated how machine learning and predictive analytics improve supply chain resilience, forecasting accuracy, and sustainability in volatile business environments.",
    problem: "Traditional forecasting methods struggle to handle nonlinear demand patterns, market volatility, and modern supply chain complexity.",
    solution: "Conducted literature review, comparative evaluation, and forecasting analysis using AI/ML approaches including Random Forest, Gradient Boosting, and LSTM models.",
    impact: "Demonstrated that AI-based forecasting approaches can reduce forecast errors by 20–50% compared to traditional methods while improving operational efficiency and resilience.",
    technologies: ["Machine Learning", "Predictive Analytics", "Supply Chain", "Google Colab", "Tableau"],
    screenshots: [],
    links: []
  },
  {
    slug: "hydrogen-production-lca",
    mode: "professional",
    title: "Life Cycle Assessment of Hydrogen Production",
    summary: "Comparative sustainability analysis of Alkaline Water Electrolysis and Biomass Gasification.",
    overview: "Conducted a cradle-to-gate Life Cycle Assessment (LCA) to evaluate environmental impacts, resource consumption, and sustainability trade-offs between two hydrogen production pathways.",
    problem: "Organizations lack clear sustainability benchmarks when selecting hydrogen production technologies due to varying environmental impacts and resource requirements.",
    solution: "Developed LCA models, defined system boundaries, analyzed environmental impact categories, and performed sensitivity analysis on renewable energy integration and biomass sourcing.",
    impact: "Identified renewable-powered electrolysis as the most environmentally favorable pathway while highlighting optimization opportunities for biomass gasification and catalyst selection.",
    technologies: ["Life Cycle Assessment", "Sustainability Analysis", "Environmental Modeling", "Industrial Ecology", "Data Analysis"],
    screenshots: [],
    links: []
  },
  {
    slug: "usc-housing-mobile-app",
    mode: "professional",
    title: "USC Housing Mobile Application",
    summary: "Mobile platform helping USC students find housing, roommates, and second-hand goods.",
    overview: "Designed a centralized student marketplace combining housing reviews, roommate matching, and buying/selling features to simplify off-campus living.",
    problem: "USC students relied on fragmented Facebook groups, spreadsheets, and external websites to find housing, roommates, and affordable household items.",
    solution: "Defined product requirements, conducted stakeholder interviews, developed project scope, created a work breakdown structure, and designed platform features including housing reviews, roommate matching, secure messaging, and student verification.",
    impact: "Created a scalable product concept addressing three major student pain points while improving trust, transparency, and community engagement through verified reviews and student authentication.",
    technologies: ["Product Management", "Requirements Gathering", "WBS", "UI/UX Planning", "Stakeholder Analysis"],
    screenshots: [],
    links: []
  },
  {
    slug: "linkedin-learning-course-completion-analysis",
    mode: "professional",
    title: "LinkedIn Learning Course Completion Analysis",
    summary: "Business analytics study identifying factors that influence online course completion rates.",
    overview: "Analyzed 10,000 online courses to determine which course design and engagement factors significantly impact learner completion rates.",
    problem: "Online learning platforms face low completion rates, leading to reduced user retention, weaker platform value perception, and potential revenue loss.",
    solution: "Performed dataset cleaning, regression analysis, A/B testing, and statistical evaluation to identify relationships between completion rates and variables such as duration, enrollment, ratings, pricing, and category.",
    impact: "Generated data-driven recommendations to improve course design, user engagement, and completion outcomes while supporting business growth objectives.",
    technologies: ["Business Analytics", "Regression Analysis", "A/B Testing", "Statistical Modeling", "Data Visualization"],
    screenshots: [],
    links: []
  },
  {
    slug: "puesto-team-performance-consulting",
    mode: "professional",
    title: "Puesto Team Performance Consulting",
    summary: "Organizational effectiveness and team performance assessment for a restaurant leadership team.",
    overview: "Evaluated communication, leadership styles, creativity, and collective intelligence within Puesto's menu-change initiative to identify opportunities for improving team performance.",
    problem: "Leadership communication and coordination challenges during menu changes created opportunities for process improvement and stronger team alignment.",
    solution: "Designed surveys and interviews, collected performance data, analyzed team dynamics, developed RACI assessments, and provided recommendations for improving collaboration and decision-making.",
    impact: "Delivered actionable recommendations to strengthen communication, leadership effectiveness, and operational coordination across multiple stakeholder groups.",
    technologies: ["Survey Design", "Organizational Analysis", "RACI Framework", "Data Collection", "Performance Assessment"],
    screenshots: [],
    links: []
  },
  {
    slug: "splitshare-subscription-sharing-platform",
    mode: "professional",
    title: "SplitShare",
    summary: "Subscription-sharing platform designed to help college students reduce streaming costs.",
    overview: "Developed a product concept that enables verified university students to form trusted groups, manage subscription payments, and access premium streaming services at lower costs.",
    problem: "Students struggle to afford multiple streaming subscriptions and often face trust, payment coordination, and account-sharing challenges.",
    solution: "Designed a secure, university-verified platform with automated payment management, group matching, subscription insights, and premium account-sharing features.",
    impact: "Created a scalable marketplace concept targeting university communities with opportunities for nationwide expansion and recurring revenue through premium features and partnerships.",
    technologies: ["Product Strategy", "Marketplace Design", "Business Model Development", "User Research", "Go-to-Market Planning"],
    screenshots: [],
    links: []
  },
  {
    slug: "engineering-economic-life-plan-analysis",
    mode: "professional",
    title: "20-Year Financial Planning & NPV Analysis",
    summary: "Engineering economics project evaluating long-term financial decisions through Net Present Value analysis.",
    overview: "Built a 20-year financial model evaluating career progression, investments, housing purchases, retirement planning, and major life decisions using engineering economics principles.",
    problem: "Long-term personal financial decisions often lack structured evaluation methods that account for inflation, taxes, investments, and changing life circumstances.",
    solution: "Developed detailed cash-flow projections, NPV calculations, loan analyses, investment assumptions, and financial scenarios to evaluate long-term financial sustainability.",
    impact: "Demonstrated the feasibility of achieving major life and career milestones while maintaining positive long-term financial outcomes through disciplined planning.",
    technologies: ["Engineering Economics", "NPV Analysis", "Financial Modeling", "Investment Planning", "Risk Assessment"],
    screenshots: [],
    links: []
  },
  {
    slug: "creative-minecraft-portfolio-world",
    mode: "creative",
    status: "active",
    title: "Creative Minecraft Portfolio World",
    summary: "An immersive portfolio mode that reframes creative work as explorable world-building.",
    overview: "Creative Mode turns portfolio navigation into a pixel-inspired overworld with quests, builds, and story fragments.",
    problem: "Traditional resumes flatten creative identity into bullet points.",
    solution: "Separate creative content from corporate experience and render it as an exploratory, Minecraft-inspired system.",
    impact: "Creates a distinct home for storytelling, community, visual direction, and experiments.",
    technologies: ["Next.js", "React", "CSS 3D", "Tailwind CSS", "Static export"],
    screenshots: [assetPath("/assets/minecraft-avatar.png")],
    links: []
  },
  {
    slug: "aaroh-music-storytelling",
    mode: "creative",
    status: "placeholder",
    title: "Aaroh Music Storytelling",
    summary: "Placeholder for music-club campaigns, event stories, and creative content.",
    overview: "A future case study for event storytelling and student music community engagement.",
    problem: "Placeholder: describe the audience or event-awareness challenge.",
    solution: "Placeholder: add campaign formats, posts, visuals, and coordination details.",
    impact: "Placeholder: add event reach, attendance, or engagement metrics.",
    technologies: ["Content strategy", "Community marketing", "Event storytelling"],
    screenshots: [assetPath("/assets/aaroh.jpg")],
    links: []
  },
  {
    slug: "visual-aesthetics-student-council",
    mode: "creative",
    status: "placeholder",
    title: "Student Council Visual Aesthetics",
    summary: "Placeholder for campus-event design, aesthetics coordination, and creative direction.",
    overview: "A future gallery for student council visual work and creative leadership.",
    problem: "Placeholder: describe the visual or event-experience challenge.",
    solution: "Placeholder: add design direction, assets, or installation details.",
    impact: "Placeholder: add event scale, audience, or feedback.",
    technologies: ["Creative direction", "Event design", "Visual systems"],
    screenshots: [],
    links: []
  }
];

export const blogs = [
  {
    title: "Building AI Platforms Users Can Actually Trust",
    status: "Placeholder",
    summary: "Draft idea: lessons from data reliability, usability validation, and stakeholder alignment."
  },
  {
    title: "What Minecraft Teaches About Portfolio Design",
    status: "Placeholder",
    summary: "Draft idea: world-building as a better metaphor for multidisciplinary identity."
  }
];
