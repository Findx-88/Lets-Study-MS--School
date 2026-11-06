import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Child's Learning Journey — Std 5 to 12 Pathway | Kolkata & Online",
  description:
    "Explore the 4-stage learning journey at Let's Study MS School Program: Foundation (Std 5–6), Building Blocks (Std 7–8), Board Prep (Std 9–10), and Specialization (Std 11–12) across CBSE, ICSE, WB & IB Boards.",
  alternates: {
    canonical: "/journey",
  },
};

export default function JourneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      {
        "@type": "ListItem",
        position: 2,
        name: "Learning Journey",
        item: "https://school.letsstudyms.com/journey",
      },
    ],
  };

  const learningPathSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Let's Study MS — 4-Stage School Learning Pathway (Class 5–12)",
    description: "Structured progressive learning pathway from primary foundation to board examination excellence and competitive readiness.",
    numberOfItems: 4,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Foundation Stage (Standards 5–6)",
        description: "Fear-free conceptual curiosity, basic algebra, number theory foundations, and mental arithmetic.",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Building Blocks Stage (Standards 7–8)",
        description: "Systematic problem solving, laboratory logic, introduction to proofs, and structured study habits.",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Board Prep Stage (Standards 9–10)",
        description: "CBSE, ICSE, and Madhyamik board syllabus mastery, regular timed mock exams, and answer writing precision.",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Specialization Stage (Standards 11–12)",
        description: "Advanced calculus, mechanics, reaction roadmaps, and competitive bridging for JEE, WBJEE, and Olympiads.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(learningPathSchema) }}
      />
      {children}
    </>
  );
}
