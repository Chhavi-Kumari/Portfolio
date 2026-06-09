export type Mode = "professional" | "creative";

export type Experience = {
  slug: string;
  mode: Mode;
  role: string;
  company: string;
  dates: string;
  location?: string;
  summary: string;
  highlights: string[];
  responsibilities: string[];
  outcomes: string[];
  technologies: string[];
  metrics: string[];
  learnings: string[];
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

export const profile = {
  name: "Chhavi Kumari",
  title: "Technical Program Manager",
  tagline: "AI Platforms & Enterprise Systems",
  location: "Los Angeles, CA · Open to relocation",
  email: "chhavi.j269@gmail.com",
  linkedin: "https://www.linkedin.com/in/chhavikumari",
  github: "https://github.com/Chhavi-Kumari",
  resume: "/Chhavi-Kumari-LinkedIn-Profile.pdf",
  portfolio: "https://chhavikumari.framer.website/",
  headshot: "/assets/headshot-v2.png",
  minecraftAvatar: "/assets/minecraft-avatar-v2.png",
  summary:
    "AI and enterprise-systems focused Technical Program Manager with experience leading cross-functional delivery, SDLC execution, data reliability programs, and platform operations across education, research, energy, and nonprofit environments."
};

export const navigation = [
  { label: "Education", href: "/education" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Blogs", href: "/blogs" },
  { label: "LinkedIn", href: profile.linkedin, external: true },
  { label: "GitHub", href: profile.github, external: true }
];

export const education = [
  {
    school: "USC Viterbi School of Engineering",
    degree: "Master of Science, Engineering Management",
    dates: "January 2024 – December 2025"
  },
  {
    school: "USC Marshall School of Business",
    degree: "Master of Science, Engineering Management",
    dates: "January 2025 – December 2025"
  },
  {
    school: "Vishwakarma Institute of Technology",
    degree: "Bachelor of Engineering, Mechanical Engineering",
    dates: "2019 – 2023"
  }
];

export const professionalExperiences: Experience[] = [
  {
    slug: "usc-scale-technical-program-manager",
    mode: "professional",
    role: "Technical Program Manager (Systems Analyst)",
    company: "USC Viterbi K-12 STEM Center",
    dates: "February 2026 – Present",
    location: "Los Angeles, CA",
    summary:
      "Led end-to-end SDLC delivery for SCALE, a partner management platform serving 50+ K-12 schools and community organizations across Greater Los Angeles.",
    highlights: [
      "Cut development time by 70%+ with a Gemini API-powered usability chatbot.",
      "Improved partner data reliability by 35% using a SQL/Python standardization pipeline.",
      "Reduced deployment risk across 3 integration points through QA gates and bug triage."
    ],
    responsibilities: [
      "Defined roadmap, OKRs, execution strategy, and cross-functional delivery cadence.",
      "Coordinated engineers, program stakeholders, and non-technical users from inception to production.",
      "Delivered weekly KPI, risk, decision-log, and execution-status updates."
    ],
    outcomes: [
      "Launched AI-assisted validation workflows for non-technical users.",
      "Standardized 1,500+ partner documents across 50+ organizations.",
      "Created stronger release discipline through milestone-based QA."
    ],
    technologies: ["Gemini API", "SQL", "Python", "SDLC", "A/B testing", "QA workflows"],
    metrics: ["70%+ faster development cycles", "35% data reliability improvement", "50+ partners", "1,500+ documents"],
    learnings: [
      "AI platform work succeeds when usability validation is designed into the delivery lifecycle.",
      "Data reliability is a program-management problem as much as a technical one."
    ]
  },
  {
    slug: "usc-engineering-economics-course-producer",
    mode: "professional",
    role: "Course Producer (Program Coordinator)",
    company: "University of Southern California",
    dates: "August 2025 – December 2025",
    location: "Los Angeles, CA",
    summary:
      "Owned academic program delivery for Engineering Economics, coordinating faculty, TAs, and 35+ students across course operations and grading workflows.",
    highlights: [
      "Reduced grading turnaround by 30% with automated Excel templates.",
      "Eliminated calculation errors by standardizing formulas and submission workflows.",
      "Maintained structured stakeholder communication throughout the semester."
    ],
    responsibilities: [
      "Managed operational cadence across faculty, TAs, and students.",
      "Built repeatable templates for grading, validation, and performance tracking.",
      "Resolved process bottlenecks before they affected course delivery."
    ],
    outcomes: ["Faster grading operations.", "More reliable academic reporting.", "Clearer delivery rituals for the teaching team."],
    technologies: ["Excel", "Validation rules", "Workflow design", "Stakeholder communication"],
    metrics: ["30% faster grading turnaround", "35+ students supported"],
    learnings: ["Strong tooling matters most when it makes human coordination calmer and more predictable."]
  },
  {
    slug: "usc-rossier-graduate-assistant-program-manager",
    mode: "professional",
    role: "Graduate Assistant (Program Manager)",
    company: "University of Southern California",
    dates: "July 2024 – July 2025",
    location: "California, United States",
    summary:
      "Owned operational delivery across 3 programs, translating data and workflow observations into executive-level insights.",
    highlights: [
      "Improved operational efficiency by 20% across 3 programs.",
      "Accelerated director review time by 40% through executive briefs.",
      "De-risked 2 program deadlines by surfacing bottlenecks early."
    ],
    responsibilities: [
      "Redesigned 5 workflows and removed redundant operational steps.",
      "Built resource trackers to support earlier leadership decisions.",
      "Synthesized program data into concise briefs for directors and faculty."
    ],
    outcomes: ["More efficient program operations.", "Earlier escalation paths.", "Faster executive decision-making."],
    technologies: ["Excel", "Operations dashboards", "Workflow redesign", "Executive reporting"],
    metrics: ["20% efficiency gain", "40% faster review time", "3 programs", "5 workflows redesigned"],
    learnings: ["The best operating systems make risk visible early enough for leaders to act."]
  },
  {
    slug: "usc-social-work-lahsa-data-collection",
    mode: "professional",
    role: "Team Lead / Data Collector",
    company: "USC Suzanne Dworak-Peck School of Social Work",
    dates: "December 2024 – March 2025",
    summary:
      "Led data collection for a USC, UCLA, and LAHSA research initiative supporting governance recommendations for Los Angeles County's homelessness response.",
    highlights: [
      "Contributed primary data to a consensus report on LA's $800M+ homelessness response system.",
      "Coordinated cross-institutionally across USC and UCLA teams.",
      "Maintained data integrity and submission timelines."
    ],
    responsibilities: ["Led team data collection workflows.", "Aligned submission timing across research partners.", "Supported integrity checks."],
    outcomes: ["Data inputs supported landmark governance research.", "Cross-team coordination stayed on schedule."],
    technologies: ["Research operations", "Data collection", "Stakeholder coordination"],
    metrics: ["$800M+ system scope", "USC/UCLA/LAHSA collaboration"],
    learnings: ["Public-sector research operations require rigor, empathy, and careful handoffs."]
  },
  {
    slug: "freelance-project-management-associate",
    mode: "professional",
    role: "Project Management Associate",
    company: "Self Employed",
    dates: "June 2023 – December 2023",
    location: "Maharashtra, India",
    summary:
      "Independently owned end-to-end delivery for clients across energy manufacturing and nonprofit digital presence.",
    highlights: [
      "Secured manufacturing approval for a $7.8B energy plant through PRDs and procurement proposals.",
      "Shipped a redesigned nonprofit website in 2 months.",
      "Managed requirements gathering, stakeholder alignment, and delivery accountability."
    ],
    responsibilities: ["Created PRDs and procurement proposals.", "Owned client requirements and delivery timelines.", "Aligned stakeholders without senior oversight."],
    outcomes: ["Energy manufacturing approval secured.", "Nonprofit web presence improved.", "Delivery rituals created from scratch."],
    technologies: ["PRDs", "Procurement proposals", "Requirements gathering", "Web delivery"],
    metrics: ["$7.8B plant scope", "3 proposals", "2-month website delivery"],
    learnings: ["Standalone ownership sharpens prioritization, writing, and stakeholder trust."]
  },
  {
    slug: "enpro-new-business-development",
    mode: "professional",
    role: "New Business Development Intern",
    company: "Enpro Industries Pvt Ltd",
    dates: "August 2022 – January 2023",
    summary:
      "Supported renewable energy procurement and client development through vendor benchmarking and supplier evaluation.",
    highlights: [
      "Identified 15% cost savings by benchmarking 10+ vendors.",
      "Accelerated procurement cycle time by 20%.",
      "Supported 4 client engagements totaling $550K+ in contracts."
    ],
    responsibilities: ["Built supplier evaluation frameworks.", "Formalized vendor communication workflows.", "Coordinated requirements for client presentations."],
    outcomes: ["Lower procurement cost exposure.", "Faster supplier analysis.", "Improved vendor response cycles."],
    technologies: ["Vendor benchmarking", "Supplier analysis", "Procurement tracking", "Client presentations"],
    metrics: ["15% cost savings", "20% faster procurement cycles", "25% faster vendor response", "$550K+ contracts"],
    learnings: ["Procurement quality improves when vendor comparison becomes structured and visible."]
  }
];

export const creativeExperiences: Experience[] = [
  {
    slug: "daily-trojan-deia",
    mode: "creative",
    role: "DEIA Committee Member",
    company: "Daily Trojan",
    dates: "September 2025 – December 2025",
    location: "Los Angeles, CA",
    summary:
      "Supported inclusive student-media culture through diversity, equity, inclusion, and accessibility initiatives.",
    highlights: ["Participated in editorial community initiatives.", "Helped strengthen accessibility-minded student media practices."],
    responsibilities: ["Contributed to DEIA conversations and committee activities.", "Supported community-centered editorial culture."],
    outcomes: ["More intentional student-media participation and representation."],
    technologies: ["Community building", "Editorial collaboration", "Accessibility awareness"],
    metrics: ["Placeholder: add committee initiatives and outcomes."],
    learnings: ["Creative institutions need operating norms that make more voices feel possible."]
  },
  {
    slug: "aaroh-music-content",
    mode: "creative",
    role: "Marketing & Content Coordinator",
    company: "Aaroh Music Club",
    dates: "August 2020 – May 2021",
    location: "Pune City",
    summary:
      "Created and coordinated music-club content, helping shape event storytelling and audience engagement.",
    highlights: ["Built content for a student creative community.", "Supported music-event promotion and club identity."],
    responsibilities: ["Coordinated marketing materials.", "Helped communicate club activities to student audiences."],
    outcomes: ["Placeholder: add campaign reach, events, or creative assets."],
    technologies: ["Content strategy", "Social media", "Event storytelling"],
    metrics: ["Placeholder: add audience, event, or campaign metrics."],
    learnings: ["Creative communities grow when promotion feels like an invitation, not an announcement."]
  },
  {
    slug: "edc-content-curation",
    mode: "creative",
    role: "Content and Curation Coordinator",
    company: "Entrepreneurship Development Cell, VIT Pune",
    dates: "August 2020 – May 2021",
    location: "Pune District",
    summary:
      "Curated entrepreneurship-focused content and helped shape student-facing educational programming.",
    highlights: ["Blended storytelling with founder education.", "Supported student entrepreneurship initiatives."],
    responsibilities: ["Curated content themes.", "Coordinated student-facing materials and programming ideas."],
    outcomes: ["Placeholder: add event names, published pieces, or audience impact."],
    technologies: ["Curation", "Writing", "Entrepreneurship education"],
    metrics: ["Placeholder: add participation or engagement metrics."],
    learnings: ["Curation is product thinking for attention: sequencing, clarity, and emotional payoff."]
  },
  {
    slug: "student-council-aesthetics",
    mode: "creative",
    role: "Aesthetics Coordinator",
    company: "Student Council VIT Pune",
    dates: "August 2019 – May 2021",
    location: "Pune",
    summary:
      "Led and supported visual/aesthetic direction for student-council initiatives and campus experiences.",
    highlights: ["Progressed from Aesthetics Sub Coordinator to Coordinator.", "Contributed to student-event visual identity."],
    responsibilities: ["Supported design direction.", "Coordinated aesthetics for student-led initiatives."],
    outcomes: ["Placeholder: add events, design systems, posters, or installations."],
    technologies: ["Visual direction", "Event design", "Creative leadership"],
    metrics: ["Placeholder: add event scale or audience size."],
    learnings: ["Design leadership often starts with making shared spaces feel more intentional."]
  }
];

export const experiences = [...professionalExperiences, ...creativeExperiences];

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

export const certifications = [
  "IBM AI Product Manager",
  "AI for Project Management: Boosting Collaboration with Generative AI",
  "Data Analysis in Excel",
  "IBM Business Analyst",
  "McKinsey.org Forward Program"
];

export const projects: Project[] = [
  {
    slug: "scale-ai-partner-platform",
    mode: "professional",
    title: "SCALE AI Partner Platform",
    summary: "Partner-management platform for USC Viterbi K-12 STEM Center serving 50+ organizations.",
    overview: "SCALE standardizes partner data, program resources, and delivery workflows for Greater LA STEM partnerships.",
    problem: "Partner data and STEM resources were distributed across many files, creating reliability and prep-time friction.",
    solution: "Built a SQL/Python standardization pipeline and Gemini API chatbot to validate usability with non-technical users.",
    impact: "70%+ faster development cycles, 35% better data reliability, and clearer QA gates across 3 integrations.",
    technologies: ["Gemini API", "SQL", "Python", "A/B testing", "QA gates"],
    screenshots: [],
    links: []
  },
  {
    slug: "renewable-energy-procurement-benchmarking",
    mode: "professional",
    title: "Renewable Energy Procurement Benchmarking",
    summary: "Vendor evaluation and supplier-analysis system for renewable energy procurement.",
    overview: "Structured benchmarking across renewable energy vendors to support better procurement decisions.",
    problem: "Vendor evaluation lacked a centralized comparison framework, slowing procurement cycles.",
    solution: "Created evaluation criteria, tracking workflows, and supplier analysis for 10+ vendors.",
    impact: "Identified 15% cost savings and accelerated procurement cycle time by 20%.",
    technologies: ["Supplier evaluation", "Procurement analytics", "Tracking systems"],
    screenshots: [],
    links: []
  },
  {
    slug: "usc-housing-operations-analysis",
    mode: "professional",
    status: "placeholder",
    title: "USC Housing Operations Analysis",
    summary: "Placeholder project based on available assets; replace with final case-study details.",
    overview: "A structured analysis project for housing operations, service flows, or student experience.",
    problem: "Placeholder: describe the operational or user problem.",
    solution: "Placeholder: describe the analysis, model, dashboard, or recommendation.",
    impact: "Placeholder: add quantified outcome once available.",
    technologies: ["Operations analysis", "Excel", "Stakeholder research"],
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
    screenshots: ["/assets/minecraft-avatar.png"],
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
    screenshots: ["/assets/aaroh.jpg"],
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
