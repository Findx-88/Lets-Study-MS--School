import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL("https://school.letsstudyms.com"),
  title: {
    default: `${BRAND.fullName} | Expert Coaching Std 5–12 | West Bengal`,
    template: `%s | ${BRAND.fullName}`,
  },
  description: BRAND.description,
  keywords: [
    "school tuition Kolkata",
    "CBSE coaching West Bengal",
    "ICSE tuition Barasat",
    "WB Board coaching",
    "class 5 to 12 tuition",
    "physics chemistry biology maths english coaching",
    "best tuition centre Kolkata",
    "small batch coaching West Bengal",
    "Lets Study MS school program",
  ],
  authors: [{ name: BRAND.parentName }],
  openGraph: {
    title: `${BRAND.fullName} | Expert Coaching for Std 5–12`,
    description: BRAND.description,
    url: "https://school.letsstudyms.com",
    siteName: BRAND.fullName,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: BRAND.logoUrl,
        width: 800,
        height: 600,
        alt: BRAND.fullName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.fullName} | Expert Coaching for Std 5–12`,
    description: BRAND.description,
    images: [BRAND.logoUrl],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: BRAND.logoIconUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <meta name="geo.region" content="IN-WB" />
        <meta name="geo.placename" content="West Bengal, India" />
        <meta name="geo.position" content="22.5744;88.3629" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: BRAND.fullName,
              alternateName: BRAND.name,
              url: "https://school.letsstudyms.com",
              logo: BRAND.logoUrl,
              description: BRAND.description,
              parentOrganization: {
                "@type": "EducationalOrganization",
                name: BRAND.parentName,
                url: BRAND.parentUrl,
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "118/105, Rabindrapally, Khardaha",
                addressLocality: "Kolkata",
                addressRegion: "West Bengal",
                postalCode: "700117",
                addressCountry: "IN",
              },
              telephone: "+91-8777484102",
              email: "letsstudy2022bu@gmail.com",
              areaServed: ["West Bengal", "Kolkata", "India"],
              foundingDate: "2022",
            }),
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <AnnouncementBar />
        <Header />
        <main className="pb-16 md:pb-0">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <MobileStickyBar />
      </body>
    </html>
  );
}
