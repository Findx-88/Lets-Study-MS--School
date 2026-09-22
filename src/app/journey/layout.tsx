import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Child's Learning Journey — Std 5 to 12 Pathway",
  description:
    "Explore the 4-stage learning journey at Let's Study MS: Foundation (Std 5–6), Building Blocks (Std 7–8), Board Prep (Std 9–10), and Specialization (Std 11–12). Each stage tailored with the right faculty tier.",
  alternates: {
    canonical: "/journey",
  },
};

export default function JourneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
