import { HeroSection } from "@/components/home/HeroSection";
import { StatsBar } from "@/components/home/StatsBar";
import { BoardStrip } from "@/components/home/BoardStrip";
import { JourneyPreview } from "@/components/home/JourneyPreview";
import { SubjectGrid } from "@/components/home/SubjectGrid";
import { TeamPreview } from "@/components/home/TeamPreview";
import { FeeSnapshot } from "@/components/home/FeeSnapshot";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { TESTIMONIALS } from "@/lib/constants";

// Build Review schema from real testimonials
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Let's Study MS — School Program",
  url: "https://school.letsstudyms.com",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    bestRating: "5",
    worstRating: "1",
    ratingCount: String(TESTIMONIALS.length),
    reviewCount: String(TESTIMONIALS.length),
  },
  review: TESTIMONIALS.map((t) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: t.studentName,
    },
    reviewBody: t.quote,
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    itemReviewed: {
      "@type": "EducationalOrganization",
      name: "Let's Study MS — School Program",
    },
    ...(t.school ? { description: `Student from ${t.school}` } : {}),
  })),
};

// FAQ Schema for AI Overview citability
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What boards does Let's Study MS cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover three major boards: CBSE (Central Board of Secondary Education), ICSE/ISC (Council for the Indian School Certificate Examinations), and WB Board (West Bengal Board of Secondary & Higher Secondary Education including Madhyamik and Uccha Madhyamik). Our curriculum tracks are tailored to each board's specific syllabus, evaluation patterns, and exam schedules.",
      },
    },
    {
      "@type": "Question",
      name: "What is the maximum batch size at Let's Study MS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We maintain strict micro-batches: pods of 3–4 students for Standards 5–6, and a maximum of 5 students per batch for Standards 7–12. This is a non-negotiable rule that ensures every student receives personal attention and has their doubts addressed individually.",
      },
    },
    {
      "@type": "Question",
      name: "What subjects are taught at Let's Study MS School Program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We teach five core subjects: Mathematics (from algebra to calculus), Physics (mechanics to modern physics), Chemistry (physical, organic, inorganic), Biology (cell biology, physiology, genetics, ecology), and English (language, literature, grammar). All subjects are available for Standards 5 through 12.",
      },
    },
    {
      "@type": "Question",
      name: "What are the fees at Let's Study MS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fees start from ₹1,500/month for once-a-week classes with Level 1 & 2 teachers (Class 5–10), ₹3,000/month for twice-a-week. Level 3 Senior Mentors charge ₹2,200–₹4,000/month. Level 4 Expert Teachers (Class 11–12) are ₹700/hour. There are no hidden registration fees or lock-in contracts.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Let's Study MS located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our center is located at 118/105, Rabindrapally, Khardaha, Kolkata, North 24 Parganas, West Bengal 700117, India. We serve students from Khardaha, Barrackpore, Sodepur, Belgharia, Madhyamgram, Barasat, Rahara, Dum Dum, and greater Kolkata. We also offer online classes for international students.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Let's Study MS different from other coaching centres?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Three things set us apart: (1) Strict micro-batches of 3–5 students (not mass coaching), (2) A unique 4-tier faculty hierarchy from near-peer college mentors to IISER/IIT-level expert teachers, and (3) Direct continuity to Let's Study MS — School of Mathematics for ISI, IIT JAM, and higher mathematics preparation. We are affiliated with Ramanujan School of Mathematics (RSM).",
      },
    },
  ],
};

// BreadcrumbList schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://school.letsstudyms.com",
    },
  ],
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 1. Hero Section (Split hero with student photography, badge pills, and floating stat cards) */}
      <HeroSection />

      {/* 2. Horizontal Stats Bar (Animated count-up style stats) */}
      <StatsBar />

      {/* 3. Board Logos Strip (CBSE / ICSE / WB Board alignment) */}
      <BoardStrip />

      {/* 4. "Your Child's Journey" Interactive Preview (Std 5→12 4-stage circular stepper) */}
      <JourneyPreview />

      {/* 5. Subjects Overview (Physics, Chemistry, Biology, Mathematics, English) */}
      <SubjectGrid />

      {/* 6. Teaching Team Preview (4 levels + Real Teachers: Pritha, Rudra, Deblina, Arpan, Moulisha, Annesha, Rahul) */}
      <TeamPreview />

      {/* 7. Fee Snapshot + Batch Size Explainer (Exact real fees) */}
      <FeeSnapshot />

      {/* 8. Parent & Student Testimonials */}
      <TestimonialsSection />

      {/* 9. Frequently Asked Questions (SEO + AI Overview citability) */}
      <FAQSection />
    </div>
  );
}
