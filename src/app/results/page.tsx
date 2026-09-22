import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Student Results & Board Toppers",
  description:
    "View board exam results and topper achievements from Let's Study MS School Program students across CBSE, ICSE and WB Board.",
  alternates: {
    canonical: "/",
  },
};

export default function ResultsPage() {
  redirect("/#results");
}
