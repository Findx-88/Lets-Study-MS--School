import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Enquire About Admissions & Batches",
  description:
    "Get in touch with Let's Study MS School Program in Khardaha, Kolkata. Enquire about batch timings, subject availability, and admission for Std 5–12 across CBSE, ICSE & WB Board.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
