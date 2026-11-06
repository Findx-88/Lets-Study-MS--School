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
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Let's Study MS — School Program",
    description: "Admissions, micro-batch enquiries, and counseling for CBSE, ICSE & WB Board students (Std 5–12).",
    url: "https://school.letsstudyms.com/contact",
    mainEntity: {
      "@type": "ContactPoint",
      telephone: "+91-8481819726",
      contactType: "customer service",
      areaServed: ["IN", "Kolkata", "Barrackpore", "Khardaha", "Sodepur", "North 24 Parganas"],
      availableLanguage: ["English", "Bengali", "Hindi"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        opens: "08:00",
        closes: "21:00",
      },
    },
  };

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
        name: "Contact & Enquiry",
        item: "https://school.letsstudyms.com/contact",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
