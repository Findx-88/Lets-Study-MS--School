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
  tag: string;
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
        degree: "B.Sc. Mathematics Honours (Pursuing)",
        experience: "Nearly 2 Years",
        subjects: "Mathematics, Physics (up to Class 10)",
        teachingPhilosophy: "Specializes in exclusive relatable real-life \"LIVE EXAMPLES\" to make abstract concepts tangible and memorable for students.",
        tag: "Near-Peer Mentor",
      },
      {
        name: "Arghyadeep",
        fullName: "Arghadeep Ghosh",
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
        degree: "M.Sc.",
        experience: "2015–2026 (11 Years)",
        subjects: "Physics, Chemistry, Biology",
        boards: "Cambridge (GCSE, IGCSE, AS & A Level), IB, ICSE, CBSE, State Board",
        achievements: "Project Associate at ZSI (Zoological Survey of India)",
        teachingPhilosophy: "Concept-based learning with pen tablet demonstrations, question pattern analysis, customised detailed study material, regular worksheets, dedicated doubt-clearing and Q&A sessions.",
        studentAchievements: "ISC AIR 1 (2022), Cambridge International Rankings (2024, 2025)",
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
        fullName: "Annesha",
        degree: "",
        experience: "",
        subjects: "",
        teachingPhilosophy: "",
        tag: "Expert Faculty",
      },
      {
        name: "Ritobrata",
        fullName: "Ritobrata",
        degree: "",
        experience: "",
        subjects: "",
        teachingPhilosophy: "",
        tag: "Expert Faculty",
      },
      {
        name: "Rahul",
        fullName: "Rahul",
        degree: "",
        experience: "",
        subjects: "",
        teachingPhilosophy: "",
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
export const STATS = [
  { label: "Dedicated Mentors", value: 10, suffix: "+" },
  { label: "Max Batch Size", value: 5, suffix: " Students" },
  { label: "CBSE, ICSE, WB", value: 3, suffix: " Boards" },
] as const;

// ─── Testimonials ────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    quote: "Finding a tuition center in North 24 Parganas that restricts batch size strictly to 5 students was a game changer for my son in Class 9 ICSE. His physics and maths marks jumped from 68% to 92%.",
    parentName: "Smt. Manidipa Banerjee",
    studentName: "Debjit Banerjee",
    standard: "Std 9",
    board: "ICSE",
    location: "Khardaha",
  },
  {
    id: 2,
    quote: "The near-peer mentors for Class 6 made my daughter look forward to mathematics! Earlier she was intimidated by fractions and word problems. Now she solves them before her school tests.",
    parentName: "Sri Anupam Ghosh",
    studentName: "Ananya Ghosh",
    standard: "Std 6",
    board: "CBSE",
    location: "Sodepur",
  },
  {
    id: 3,
    quote: "Knowing that Let's Study MS also trains students for IIT JAM and ISI gives us immense confidence. The academic rigor here in Class 11 & 12 is far superior to standard commercial coaching mills.",
    parentName: "Dr. K. S. Mukherjee",
    studentName: "Souradeep Mukherjee",
    standard: "Std 11",
    board: "WB Board (English Medium)",
    location: "Barrackpore",
  },
  {
    id: 4,
    quote: "Level 3 mentors with B.Ed qualification make a huge difference in board exam strategy. The feedback on how to write steps in Class 10 CBSE maths and science was extraordinarily helpful.",
    parentName: "Smt. Priyanka Roy",
    studentName: "Rohit Roy",
    standard: "Std 10",
    board: "CBSE",
    location: "Belgharia",
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
