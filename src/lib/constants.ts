// ─── Brand ───────────────────────────────────────────────
export const BRAND = {
  name: "Let's Study MS",
  tagline: "School Program",
  fullName: "Let's Study MS — School Program",
  parentName: "Let's Study MS — School of Mathematics",
  parentUrl: "https://letsstudyms.com",
  logoUrl: "/images/logo.png",
  logoIconUrl: "/images/logo.png",
  description:
    "West Bengal's premier academic coaching for Std 5–12 across Physics, Chemistry, Biology, Mathematics & English for CBSE, ICSE & WB Board students. Personalized small batches (3–5 students) with a direct continuity to IIT JAM / ISI higher academic prep.",
  foundingYear: 2022,
} as const;

// ─── Contact ─────────────────────────────────────────────
export const CONTACT = {
  phone: "+91 8481819726",
  phoneRaw: "918481819726",
  phoneSecondary: "+91 8777484102",
  phoneSecondaryRaw: "918777484102",
  email: "letsstudy2022bu@gmail.com",
  whatsappMessage:
    "Hello! I am interested in enrolling my child for Let's Study MS School Program (Std 5–12). Please share batch timings and admission details.",
  address: {
    street: "118/105, Rabindrapally, Khardaha",
    city: "Kolkata",
    district: "North 24 Parganas",
    state: "West Bengal",
    pincode: "700117",
    country: "India",
  },
  timing: "Monday – Sunday: 8:00 AM – 9:00 PM",
  sessionDuration: "1.5 – 2 Hours per Session",
  mapUrl: "https://maps.google.com/?q=118/105+Rabindrapally+Khardaha+Kolkata+700117",
  geo: { lat: 22.7214, lng: 88.3752 },
  social: {
    facebook: "https://www.facebook.com/people/Lets-Study/61584835031140/",
    instagram: "https://www.instagram.com/ls2m_maths?utm_source=qr",
    linkedin: "https://www.linkedin.com/in/let-s-study-school-of-mathematics-3443073a4/",
    youtube: "https://www.youtube.com/@letsstudysom",
    telegram: "https://t.me/LetsstudySOM",
    website: "https://letsstudyms.com",
  },
} as const;

export const getWhatsAppUrl = (message?: string) =>
  `https://wa.me/${CONTACT.phoneRaw}?text=${encodeURIComponent(
    message ?? CONTACT.whatsappMessage
  )}`;

// ─── Navigation ──────────────────────────────────────────
export const NAV_ITEMS = [
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Child's Journey", href: "/journey" },
  { label: "Team", href: "/team" },
  { label: "Batches", href: "/fees" },
  { label: "Contact", href: "/contact" },
] as const;

// ─── Subjects ────────────────────────────────────────────
export const SUBJECTS = [
  {
    id: "maths",
    name: "Mathematics",
    symbol: "∫",
    themeColor: "from-sky-500 to-blue-600",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    description: "From basic algebra & geometry to coordinate geometry, trigonometry, and calculus. Strong analytical problem-solving foundation.",
    boards: ["CBSE", "ICSE", "WB Board"],
    standards: "Std 5–12",
    highlights: ["NCERT / RS Aggarwal / RD Sharma / ML Aggarwal", "Previous 10 Years Board Papers", "Speed & Accuracy Drills", "Pathway to ISI & IIT Foundation"],
  },
  {
    id: "physics",
    name: "Physics",
    symbol: "⚛",
    themeColor: "from-amber-500 to-orange-600",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    description: "Mechanics, Optics, Electricity & Magnetism, Modern Physics. Concrete conceptual clarity with real-world numerical application.",
    boards: ["CBSE", "ICSE", "WB Board"],
    standards: "Std 5–12",
    highlights: ["Visual concept simulations", "Formula derivation mastery", "Step-by-step numerical solving", "Practical experiment insights"],
  },
  {
    id: "chemistry",
    name: "Chemistry",
    symbol: "🧪",
    themeColor: "from-emerald-500 to-teal-600",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    description: "Physical, Organic, and Inorganic Chemistry. Equation balancing, reaction mechanisms, periodic trends, and chemical bonding.",
    boards: ["CBSE", "ICSE", "WB Board"],
    standards: "Std 5–12",
    highlights: ["Memory maps for periodic table", "Organic reaction roadmaps", "Stoichiometry & mole concept drills", "Board-tailored notes"],
  },
  {
    id: "biology",
    name: "Biology",
    symbol: "🧬",
    themeColor: "from-purple-500 to-indigo-600",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    description: "Cell biology, Human Physiology, Genetics, Plant Sciences, and Ecology. High-scoring diagrammatic presentations and key scientific terminology.",
    boards: ["CBSE", "ICSE", "WB Board"],
    standards: "Std 5–12",
    highlights: ["Detailed labelled diagram practice", "Scientific term flashcards", "Case-based question banks", "Pre-medical alignment"],
  },
  {
    id: "english",
    name: "English",
    symbol: "✎",
    themeColor: "from-rose-500 to-pink-600",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    description: "Comprehensive English Language & Literature. Grammar precision, unseen passages, formal writing formats, and critical literary appreciation.",
    boards: ["CBSE", "ICSE", "WB Board"],
    standards: "Std 5–12",
    highlights: ["Grammar mastery without rote rules", "Creative & formal writing templates", "Textbook prose & poetry analysis", "Vocabulary enhancement"],
  },
] as const;

// ─── Boards ──────────────────────────────────────────────
export const BOARDS = [
  {
    id: "cbse",
    name: "CBSE",
    fullName: "Central Board of Secondary Education",
    tagline: "NCERT-aligned conceptual rigor & objective assessment mastery",
    features: ["Strict adherence to latest NCERT syllabus", "Competency-focused & case-study questions", "Continuous mock tests aligned to board marking schemes"],
  },
  {
    id: "icse",
    name: "ICSE / ISC",
    fullName: "Council for the Indian School Certificate Examinations",
    tagline: "In-depth syllabus coverage with comprehensive expressive clarity",
    features: ["Thorough chapter-by-chapter detailed notes", "Special emphasis on lab-oriented concepts & diagrams", "Application-based questioning & past 10 years solved papers"],
  },
  {
    id: "wb",
    name: "WB Board",
    fullName: "West Bengal Board of Secondary & Higher Secondary Education",
    tagline: "Madhyamik & Uccha Madhyamik benchmark curriculum excellence",
    features: ["Bilingual support (Bengali & English medium)", "Focus on Madhyamik & HS answer writing precision", "Extensive test paper solve"],
  },
] as const;

// ─── Teacher Profile Type ────────────────────────────────
export interface TeacherProfile {
  name: string;
  fullName: string;
  degree: string;
  experience: string;
  subjects: string;
  boards?: string;
  teachingPhilosophy: string;
  achievements?: string;
  studentAchievements?: string;
  offlineLocations?: string;
  tag: string;
  image?: string;
  imagePosition?: string;
}

// ─── Teaching Team Structure & Real Faculty ──────────────
export const FACULTY_LEVELS: readonly {
  level: string;
  title: string;
  description: string;
  standardsCovered: string;
  batchSize: string;
  teachers: readonly TeacherProfile[];
  feeStructure: any;
}[] = [
  {
    level: "Level 1",
    title: "College Student Teachers",
    description: "Enthusiastic near-peer mentors currently studying at top universities. They connect instantly with young students, remove intimidation, and give high individual attention.",
    standardsCovered: "Std 5–10",
    batchSize: "Pods of 3–4 (Std 5–6) or Batches of 5",
    teachers: [
      {
        name: "Pritha",
        fullName: "Pritha Shil",
        image: "/images/team/pritha.png",
        imagePosition: "object-[center_15%]",
        degree: "B.Sc. Mathematics",
        experience: "1.5 Years",
        subjects: "Mathematics, Science",
        boards: "CBSE, ICSE, WB Board",
        teachingPhilosophy: "A friendly and approachable teacher who believes in creating a comfortable and positive learning environment. Rather than following an overly strict teaching style, she understands each student's individual needs, learning pace, and difficulties, and tailors her approach accordingly.",
        tag: "Near-Peer Mentor",
      },
      {
        name: "Rudra",
        fullName: "Sampati Rudranarayan Rao",
        image: "/images/team/rudra.png",
        imagePosition: "object-[center_15%]",
        degree: "B.Sc. Mathematics Honours (Pursuing)",
        experience: "Nearly 2 Years",
        subjects: "Mathematics, Physics (up to Class 10)",
        teachingPhilosophy: "Specializes in exclusive relatable real-life \"LIVE EXAMPLES\" to make abstract concepts tangible and memorable for students.",
        tag: "Near-Peer Mentor",
      },
      {
        name: "Arghyadeep",
        fullName: "Arghadeep Ghosh",
        image: "/images/team/arghadeep.png",
        imagePosition: "object-top",
        degree: "B.Sc. Mathematics (Pursuing)",
        experience: "2 Years",
        subjects: "Mathematics (All Boards), Mathematics (Olympiad)",
        achievements: "IOQM Qualified (Base Level)",
        teachingPhilosophy: "Concept before formula. Reasoning over rote learning. Develops logical thinking and problem-solving ability through intuition paired with rigorous proof, showing how different mathematical ideas fit together.",
        studentAchievements: "NMTC Junior Level (Gauss Contest)",
        tag: "Near-Peer Mentor",
      },
      {
        name: "Ritoprova",
        fullName: "Ritoprova Roy",
        image: "/images/team/ritoprova.png",
        imagePosition: "object-[center_15%]",
        degree: "12th Pass",
        experience: "Since 2025",
        subjects: "Mathematics",
        achievements: "WBJEE Qualified",
        teachingPhilosophy: "Building strong foundational concepts through clear step-by-step guidance, personalized attention, and regular test-based preparation to ensure complete doubt resolution and exam success.",
        tag: "Near-Peer Mentor",
      },
      {
        name: "Sudeepta",
        fullName: "Sudiptha Bose",
        image: "/images/team/sudipta.jpg",
        imagePosition: "object-[center_20%]",
        degree: "Undergraduate (English Honours)",
        experience: "5 Years (Private Tutoring)",
        subjects: "English, Humanities",
        boards: "WB Board (all humanities), CBSE, ICSE & other boards (English)",
        teachingPhilosophy: "Currently pursuing English Honours, bringing a deep academic understanding of language and literature to her teaching approach.",
        tag: "Near-Peer Mentor",
      },
      {
        name: "Anusuya",
        fullName: "Anusuya Porel",
        image: "/images/team/anusuya.png",
        imagePosition: "object-[center_20%]",
        degree: "B.A. (Hons)",
        experience: "5 Years",
        subjects: "Arts group, English (up to Class 8)",
        boards: "All Boards",
        teachingPhilosophy: "Focuses not only on completing the syllabus but on making sure students genuinely understand the concepts. Adapts teaching according to each student's learning level and creates an environment where they feel comfortable asking questions.",
        tag: "Near-Peer Mentor",
      },
    ],
    feeStructure: {
      note: "Class 5–10",
      onceAWeek: "₹1,500 / month",
      twiceAWeek: "₹3,000 / month",
    },
  },
  {
    level: "Level 2",
    title: "Masters Teachers",
    description: "Postgraduate subject specialists with rigorous academic grounding. They build deep conceptual understanding and transition students into board-style questioning.",
    standardsCovered: "Std 5–10",
    batchSize: "Batches of 5",
    teachers: [
      {
        name: "Deblina",
        fullName: "Deblina Poddar",
        image: "/images/team/deblina.png",
        imagePosition: "object-[center_20%]",
        degree: "M.Sc.",
        experience: "10 Years",
        subjects: "Statistics, Mathematics (WB Board), Statistics & Data Science (Competitive Exams)",
        teachingPhilosophy: "Area of expertise is pedagogy and andragogy — the science and art of teaching learners at every stage.",
        tag: "Masters Specialist",
      },
    ],
    feeStructure: {
      note: "Class 5–10",
      onceAWeek: "₹1,500 / month",
      twiceAWeek: "₹3,000 / month",
    },
  },
  {
    level: "Level 3",
    title: "Mentors (5+ Years Experience)",
    description: "Seasoned education professionals with over five years of active coaching experience. Masters of board evaluation criteria, exam psychology, and syllabus completion.",
    standardsCovered: "Std 5–12",
    batchSize: "Batches of 5",
    teachers: [
      {
        name: "Arpan",
        fullName: "Arpan Roy",
        image: "/images/team/arpan.jpg",
        imagePosition: "object-[center_20%]",
        degree: "M.Sc.",
        experience: "6 Years",
        subjects: "Mathematics",
        boards: "CBSE, ICSE, WB Board",
        teachingPhilosophy: "Patience — dedicated to guiding every student step-by-step with calm, personalized attention until mathematical concepts are thoroughly understood.",
        tag: "Senior Mentor",
      },
      {
        name: "Moulisha",
        fullName: "Moulisha Sarkar",
        image: "/images/team/moulisha.png",
        imagePosition: "object-[center_15%]",
        degree: "M.Sc.",
        experience: "2015–2026 (11 Years)",
        subjects: "Physics, Chemistry, Biology",
        boards: "Cambridge (GCSE, IGCSE, AS & A Level), IB, ICSE, CBSE, State Board",
        achievements: "Project Associate at ZSI (Zoological Survey of India)",
        teachingPhilosophy: "Concept-based learning with pen tablet demonstrations, question pattern analysis, customised detailed study material, regular worksheets, dedicated doubt-clearing and Q&A sessions.",
        studentAchievements: "ISC AIR 1 (2022), Cambridge International Rankings (2024, 2025)",
        tag: "Senior Mentor",
      },
      {
        name: "Tiasha",
        fullName: "Tiasha Datta",
        image: "/images/team/tiasha.png",
        imagePosition: "object-[center_15%]",
        degree: "M.A., B.Ed in English",
        experience: "Senior Faculty",
        subjects: "English & English Honours",
        boards: "WBBSE, WBCHSE, CBSE & Honours",
        teachingPhilosophy: "Turning complex English grammar and literature into simple, engaging, and easy-to-understand concepts.",
        offlineLocations: "Madhyamgram",
        tag: "Senior Mentor",
      },
      {
        name: "Risha",
        fullName: "Risha Das",
        image: "/images/team/risha.jpg",
        imagePosition: "object-[center_18%]",
        degree: "B.A., M.A., B.Ed",
        experience: "4 Years",
        subjects: "English & English Honours (Class 5–12)",
        boards: "WBBSE, CBSE & Honours / General",
        teachingPhilosophy: "Personalized teaching to strengthen grammar, build vocabulary, enhance writing, and develop strong literature skills.",
        offlineLocations: "Madhyamgram",
        tag: "Senior Mentor",
      },
    ],
    feeStructure: {
      note: "Class 5–10 & Class 8–12",
      class5to10: {
        onceAWeek: "₹2,000 / month",
        twiceAWeek: "₹3,000 / month",
      },
      class8to12: {
        onceAWeek: "₹2,200 / month",
        twiceAWeek: "₹4,000 / month",
      },
    },
  },
  {
    level: "Level 4",
    title: "Expert Teachers",
    description: "Top-tier subject authorities who bridge senior secondary school syllabus with national competitive exam rigor (JEE/NEET foundation, Olympiads, and Let's Study MS's elite ISI / IIT JAM track).",
    standardsCovered: "Std 11–12 & Advanced Prep",
    batchSize: "Batches of 5 / 1-on-1 Mentorship",
    teachers: [
      {
        name: "Annesha",
        fullName: "Annesha Ghosh",
        image: "/images/team/annesha.png",
        imagePosition: "object-[center_20%]",
        degree: "M.Sc. in Mathematics, B.Ed",
        experience: "12 Years",
        achievements: "CTET Qualified",
        subjects: "Mathematics (Class 8–12)",
        boards: "CBSE, ICSE, WB Board & International",
        teachingPhilosophy: "Good communication skills, regular tests, ability to understand a student individually. Mentoring students from all across the world reflects a proven and widely trusted teaching approach.",
        studentAchievements: "Guided 98 percentile board toppers, successful candidates in JEE",
        tag: "Expert Faculty",
      },
      {
        name: "Rahul",
        fullName: "Rahul Mandal",
        image: "/images/team/rahul.png",
        imagePosition: "object-[center_25%]",
        degree: "Integrated BS-MS (IISER Kolkata)",
        experience: "2 Years",
        subjects: "Mathematics",
        boards: "CBSE, ICSE, WBBSE",
        teachingPhilosophy: "Making math visual, memorable and entirely achievable by teaching through empathy and unshakable belief in every student.",
        tag: "Expert Faculty",
      },
    ],
    feeStructure: {
      note: "Hourly Mentorship / Specialized Modules",
      rate: "₹700 / hour",
    },
  },
];

// ─── 4-Stage Signature Journey ───────────────────────────
export const JOURNEY_STAGES = [
  {
    stageNumber: 1,
    title: "Foundation",
    standards: "Std 5–6",
    batchSize: "Pods of 3–4",
    batchBadge: "Ultra-small pod (3–4)",
    taughtBy: "College Student Teachers (Level 1)",
    focus: "Building comfort, curiosity, and eliminating subject fear",
    sessionDuration: "1.5 – 2 Hours",
    description:
      "Transitioning from primary to middle school can feel daunting. We keep batches tiny (only 3–4 students) so young learners receive immediate personal attention. Near-peer mentors make learning fun, engaging, and non-judgmental.",
    keyOutcomes: [
      "No fear of Mathematics or Science formulas",
      "Interactive learning with physical models and puzzles",
      "Building daily disciplined study habits",
      "Clarification of every single doubt without hesitation",
    ],
    accentColor: "sky",
    badgeBg: "bg-sky-100 text-sky-800 border-sky-300",
  },
  {
    stageNumber: 2,
    title: "Building Blocks",
    standards: "Std 7–8",
    batchSize: "Batches of 5",
    batchBadge: "Micro batch (Max 5)",
    taughtBy: "Masters Teachers & Mentors (Level 2 & 3)",
    focus: "Deepening concepts, first exposure to board-style question patterns",
    sessionDuration: "1.5 – 2 Hours",
    description:
      "In Std 7 and 8, subjects split into independent disciplines (Physics, Chemistry, Biology, Advanced Algebra & Geometry). Our postgraduate faculty instill structured logical thinking and start introducing board-style multi-step questions.",
    keyOutcomes: [
      "Mastery over abstract concepts (integers, equations, atomic models)",
      "Board-style step-marking answer writing practice",
      "Regular weekend chapter checkpoint quizzes",
      "Identification of student strengths and improvement zones",
    ],
    accentColor: "amber",
    badgeBg: "bg-amber-100 text-amber-800 border-amber-300",
  },
  {
    stageNumber: 3,
    title: "Board Prep",
    standards: "Std 9–10",
    batchSize: "Batches of 5",
    batchBadge: "Focused batch (Max 5)",
    taughtBy: "Experienced Mentors (Level 3 — 5+ yrs exp, B.Ed)",
    focus: "Board-specific (CBSE / ICSE / WB) exam strategy & syllabus mastery",
    sessionDuration: "1.5 – 2 Hours",
    description:
      "The critical board exam milestone. Led by certified B.Ed mentors with half a decade of board evaluation experience, this stage focuses on 100% syllabus mastery, timing strategy, high-speed calculation, and tackling tricky HOTS questions.",
    keyOutcomes: [
      "Full concept clearance",
      "Comprehensive solved 10-year question bank drills",
      "Time-pressured simulated board mock tests with grading",
      "Error analysis logbook maintained for each student",
    ],
    accentColor: "emerald",
    badgeBg: "bg-emerald-100 text-emerald-800 border-emerald-300",
  },
  {
    stageNumber: 4,
    title: "Specialization & Bridge",
    standards: "Std 11–12",
    batchSize: "Batches of 5",
    batchBadge: "Advanced batch (Max 5)",
    taughtBy: "Expert Teachers (Level 4)",
    focus: "Subject depth, board scoring + competitive-exam-adjacent rigor",
    sessionDuration: "1.5 – 2 Hours",
    description:
      "Senior secondary demands profound depth. Here, our expert faculty prepare students not only for top board scores but provide the natural bridge directly into Let's Study MS's premier ISI, IIT JAM, and national higher-mathematics prep tracks.",
    keyOutcomes: [
      "Advanced theory and rigorous problem sets",
      "Direct bridge to Let's Study MS higher mathematics & research faculty",
      "Board topper preparation with competitive edge",
      "Career counseling & scientific aptitude guidance",
    ],
    accentColor: "purple",
    badgeBg: "bg-purple-100 text-purple-800 border-purple-300",
  },
] as const;

// ─── Real Fee Structure Matrix ───────────────────────────
export const FEE_TABLE = [
  {
    level: "Level 1 & Level 2",
    teacherType: "College Student Teachers / Masters Teachers",
    classes: "Class 5 – 10",
    frequencyOnce: "₹1,500 / month",
    frequencyTwice: "₹3,000 / month",
    hourlyRate: "—",
    sessionLength: "1.5 – 2 hours",
    batchSize: "Pods of 3–4 (Std 5–6) or Max 5 (Std 7–10)",
    bestFor: "Building rock-solid concepts, weekly homework support & personal mentorship",
  },
  {
    level: "Level 3 (Junior / Middle)",
    teacherType: "Senior Mentors (5+ yrs experience, B.Ed)",
    classes: "Class 5 – 10",
    frequencyOnce: "₹2,000 / month",
    frequencyTwice: "₹3,000 / month",
    hourlyRate: "—",
    sessionLength: "1.5 – 2 hours",
    batchSize: "Max 5 students",
    bestFor: "Pedagogically certified guidance, board pattern clarity & high scores",
  },
  {
    level: "Level 3 (Senior)",
    teacherType: "Senior Mentors (5+ yrs experience, B.Ed)",
    classes: "Class 8 – 12",
    frequencyOnce: "₹2,200 / month",
    frequencyTwice: "₹4,000 / month",
    hourlyRate: "—",
    sessionLength: "1.5 – 2 hours",
    batchSize: "Max 5 students",
    bestFor: "Critical board preparation (Class 10 & 12) with intensive answer-writing drills",
  },
  {
    level: "Level 4",
    teacherType: "Expert Teachers",
    classes: "Class 11 – 12 & Advanced Foundation",
    frequencyOnce: "Custom Plan",
    frequencyTwice: "Custom Plan",
    hourlyRate: "₹700 / hour",
    sessionLength: "1.5 – 2 hours per session",
    batchSize: "Micro batch / Personalized",
    bestFor: "Subject depth, competitive rigor & bridging to IIT JAM / ISI higher maths tracks",
  },
] as const;

// ─── Stats ───────────────────────────────────────────────
export const TOTAL_FACULTY_COUNT = FACULTY_LEVELS.reduce(
  (total, lvl) => total + lvl.teachers.length,
  0
);

export const STATS = [
  { label: "Dedicated Mentors", value: TOTAL_FACULTY_COUNT, suffix: "" },
  { label: "Max Batch Size", value: 5, suffix: " Students" },
  { label: "CBSE, ICSE, WB", value: 3, suffix: " Boards" },
];

// ─── Testimonials ────────────────────────────────────────
export interface TestimonialItem {
  id: number;
  studentName: string;
  parentName?: string;
  role: string;
  school: string;
  exam?: string;
  passingYear?: string;
  score?: string;
  tutorMentioned?: string;
  tutorLink?: string;
  quote: string;
  secondaryQuote?: string;
  standard?: string;
  board?: string;
  location?: string;
}

export const TESTIMONIALS: readonly TestimonialItem[] = [
  {
    id: 1,
    studentName: "Triparna Das",
    role: "Student",
    school: "RRKM Rahara / Sudhir Memorial",
    exam: "Madhyamik 2025 (Class 11)",
    passingYear: "2026",
    score: "90%",
    board: "WB Board",
    standard: "Class 11",
    tutorMentioned: "Faculty Team",
    tutorLink: "/team",
    quote: "Hardworking, appreciates the different types of approaches made by students instead of just sticking to textbook methods. Very systematic and doesn't rush to complete topics and instead focuses on clarity. In my case, your classes helped me a lot due to the variety of questions you made me practice... also my doubts and weak topics were nicely clarified by you.",
  },
  {
    id: 2,
    studentName: "Shreshtha Sen",
    role: "Student",
    school: "Bhavan's Gangabux Kanoria Vidyamandir (BGKV)",
    exam: "Secondary / Board Exam",
    passingYear: "2026",
    score: "85.64%",
    board: "CBSE",
    standard: "Secondary",
    tutorMentioned: "Annesha Ghosh Ma'am (Maths)",
    tutorLink: "/team#annesha",
    quote: "My maths tutor was Annesha Ghosh ma'am. Though I joined her class mid of the session, she understood all my problems and did the needful. She has not only implanted a quest for gaining the real knowledge in me but also provided me with a lot of emotional support during my tough times. Rather than a teacher, she has always been my elder sister and guided me like the same. I highly recommend her to all of my juniors who are actually interested in gaining the actual knowledge and enjoying the fun of mathematics.",
  },
  {
    id: 3,
    studentName: "Dibyaduti Chakraborty",
    role: "Student",
    school: "Army Public School Barrackpore (APS BKP)",
    exam: "10th Board Exam",
    passingYear: "2026",
    score: "97.2%",
    board: "CBSE",
    standard: "Class 10",
    location: "Barrackpore",
    tutorMentioned: "Mentorship Team",
    tutorLink: "/team",
    quote: "My tutor took many practice tests for me. My performance was improved largely because of this. My tutor solves my doubts to help me improve.",
  },
  {
    id: 4,
    studentName: "Sreejoni Charan",
    role: "Student",
    school: "Ram Mohan Mission High School",
    exam: "ICSE Class 10",
    passingYear: "2026",
    score: "90.2%",
    board: "ICSE",
    standard: "Class 10",
    tutorMentioned: "Moulisha Ma'am (Chemistry)",
    tutorLink: "/team#moulisha",
    quote: "Moulisha ma'am has helped me throughout the journey. She has been an amazing teacher who was there with me with anything and everything I needed. Honestly chemistry became my favourite subject because of her and I chose to take up science in class 11 because of her constant support.",
  },
  {
    id: 5,
    studentName: "Megh Ganguly",
    role: "Student",
    school: "Calcutta Public School, Bidhan Park",
    exam: "Annual Examination",
    passingYear: "2025-26",
    score: "88%",
    board: "ICSE / CBSE",
    standard: "High School",
    location: "Bidhan Park",
    tutorMentioned: "Faculty Team",
    tutorLink: "/team",
    quote: "One of the best tutors, she explains hard topics simply and has made my learning journey a breeze!",
  },
  {
    id: 6,
    studentName: "Pratyusha Karmakar",
    role: "Student",
    school: "Holy Child Girls' High School",
    exam: "Annual Examination (Class 5)",
    passingYear: "2025",
    score: "80%",
    board: "WB / Convent",
    standard: "Class 5",
    tutorMentioned: "Sudiptha Di",
    tutorLink: "/team#sudipta",
    quote: "Sudiptha Di is a very friendly and helpful tutor. She explains every topic clearly and makes learning enjoyable. She has helped me improve my grades a lot and always encourages me to do better. She is very patient, caring, and supportive. I am grateful to have such a wonderful tutor who makes studying easier and more interesting.",
  },
  {
    id: 7,
    studentName: "Shiv Jyoti Mitra",
    role: "Student",
    school: "Swami Vivekananda Academy (CBSE) / Prev: St. Paul's (ICSE)",
    exam: "Class 10th ICSE Boards",
    passingYear: "2025-26",
    score: "94.2% (97 in Maths)",
    board: "ICSE / CBSE",
    standard: "Class 10",
    location: "Bardhaman",
    tutorMentioned: "Annesha Mam",
    tutorLink: "/team#annesha",
    quote: "Annesha Mam is a very helpful teacher. She helped me in my Boards examinations a lot and even in School exams. She also arranges Doubt solving classes whenever I have problems and thus, helps me in my studies a lot... Annesha Mam explains every class extremely beautifully and clearly and she also gives us several questions to solve so that we can manifest the amount of our understandings. Tbh, Annesha Mam's credit in my studies can't be described in a few words.",
  },
  {
    id: 8,
    studentName: "Saanvi Das",
    parentName: "Guardian of Saanvi",
    role: "Student & Guardian Review",
    school: "Loreto Convent Entally",
    exam: "Currently in Class 9 (Class 8 Maths)",
    score: "Maths Improvement",
    board: "ICSE",
    standard: "Class 9",
    location: "Kolkata",
    tutorMentioned: "Faculty Mentor",
    tutorLink: "/team",
    quote: "She is such a kind and friendly person. She treats me like her own little sister and always gives me the best advice. She genuinely cares about my studies and future, patiently discussing everything from stream choices to future colleges. And if I don’t complete homework, she definitely gives me a good scolding!",
    secondaryQuote: "Guardian's Review: 'My daughter’s tutor is very kind, caring, and dedicated. She teaches Maths very well, patiently explains several times, and helps complete lessons. Because of her guidance, Saanvi has improved a lot in Maths and no longer feels afraid of it. We are truly grateful.'",
  },
  {
    id: 9,
    studentName: "Pranjal Gupta",
    role: "Student",
    school: "Radcliffe School",
    exam: "CBSE Board Exam Class 10",
    passingYear: "2025",
    score: "95.8% Overall (Maths: 93%)",
    board: "CBSE",
    standard: "Class 10",
    tutorMentioned: "Faculty Mentor (Maths)",
    tutorLink: "/team",
    quote: "She is an amazing Maths teacher who explains concepts really well and helped me improve my confidence and problem-solving skills. I’m really grateful for all her help and would definitely recommend her!",
  },
  {
    id: 10,
    studentName: "Sriyan Shaha",
    parentName: "Parent of Sriyan",
    role: "Parent Review",
    school: "St. Xavier's Collegiate School",
    exam: "IMO / AMC 8 & 10 Olympiads",
    score: "Olympiad Track",
    board: "ICSE / Olympiad",
    standard: "Olympiad Prep",
    location: "Kolkata",
    tutorMentioned: "Arghadeep (Mentor)",
    tutorLink: "/team#arghadeep",
    quote: "Arghadeep is very sincere and his knowledge on mathematical application is very keen. I've seen positive change in my son's performance in maths.",
  },
  {
    id: 11,
    studentName: "P. L. Srinidhi",
    role: "International Student",
    school: "Indian Language School, Lagos, Nigeria",
    exam: "10th Board Examination",
    passingYear: "2023-24",
    score: "71%",
    board: "CBSE International",
    standard: "Class 10",
    location: "Lagos, Nigeria",
    tutorMentioned: "Faculty Mentor",
    tutorLink: "/team",
    quote: "Ma’am’s classes have been very helpful in strengthening my understanding of the subject and improving my confidence. I’m truly grateful for her efforts and the encouragement she has given me throughout my preparation.",
  },
  {
    id: 12,
    studentName: "Khidash Ahmed",
    role: "International Student",
    school: "Indian Language School, Lagos, Nigeria",
    exam: "Board Exam",
    passingYear: "2025",
    score: "83%",
    board: "CBSE International",
    standard: "Class 10",
    location: "Lagos, Nigeria",
    tutorMentioned: "Faculty Mentor",
    tutorLink: "/team",
    quote: "Good explanation and helpful.",
  },
] as const;

// ─── USPs / Why Us ───────────────────────────────────────
export const WHY_US = [
  {
    title: "Strict Micro-Batches (3–5 Students)",
    description: "Unlike mass coaching factories with 40–80 students where quiet children get lost, our batch cap is strictly 3–4 for Std 5–6, and 5 for Std 7–12. Every student is heard and guided.",
    icon: "users",
    color: "blue",
  },
  {
    title: "4-Tier Qualified Faculty System",
    description: "From relatable near-peer college toppers to B.Ed certified mentors and premier expert faculty — every academic phase receives the exact pedagogical fit required.",
    icon: "graduation-cap",
    color: "emerald",
  },
  {
    title: "Direct Continuity to ISI & IIT JAM",
    description: "Backed by Let's Study MS — West Bengal's celebrated institute for higher mathematics with AIR 37 and IIT/ISI faculty. Your child's learning ladder continues seamlessly from school to university.",
    icon: "award",
    color: "amber",
  },
  {
    title: "1.5 to 2-Hour Intensive Sessions",
    description: "Generous class timings ensure that students do not just passively listen, but actively solve board questions, clear individual doubts, and practice handwritten numerical steps.",
    icon: "clock",
    color: "purple",
  },
  {
    title: "Comprehensive Tri-Board Syllabus",
    description: "Dedicated curriculum tracks for CBSE, ICSE, and West Bengal Board (English & Bengali medium), aligning with textbook sequences and board exam schedules.",
    icon: "book-open",
    color: "rose",
  },
  {
    title: "Transparent, Value-Focused Fees",
    description: "Starting from just ₹1,500/month for once-a-week or ₹3,000/month for twice-a-week high-attention coaching. No hidden registration fees or lock-in contracts.",
    icon: "check-circle-2",
    color: "teal",
  },
] as const;
