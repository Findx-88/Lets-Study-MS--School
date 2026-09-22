import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { BRAND, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL("https://school.letsstudyms.com"),
  title: {
    default: `${BRAND.fullName} | Expert Coaching Std 5–12 | Khardaha, Kolkata`,
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
    "tuition in Khardaha",
    "coaching near Barrackpore",
    "maths tuition Sodepur",
    "CBSE coaching Madhyamgram",
    "home tuition North 24 Parganas",
    "Ramanujan School of Mathematics",
  ],
  authors: [{ name: BRAND.parentName }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${BRAND.fullName} | Expert Coaching for Std 5–12 | Khardaha, Kolkata`,
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
    title: `${BRAND.fullName} | Expert Coaching for Std 5–12 | Khardaha, Kolkata`,
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
        <meta name="geo.placename" content="Khardaha, North 24 Parganas, West Bengal, India" />
        <meta name="geo.position" content="22.7214;88.3752" />
        <meta name="ICBM" content="22.7214, 88.3752" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["EducationalOrganization", "LocalBusiness"],
              name: BRAND.fullName,
              alternateName: [BRAND.name, "Let's Study School", "Ramanujan School of Mathematics School Division"],
              url: "https://school.letsstudyms.com",
              logo: "https://school.letsstudyms.com" + BRAND.logoUrl,
              image: "https://school.letsstudyms.com" + BRAND.logoUrl,
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
              geo: {
                "@type": "GeoCoordinates",
                latitude: 22.7214,
                longitude: 88.3752,
              },
              telephone: "+91-8481819726",
              email: "letsstudy2022bu@gmail.com",
              priceRange: "₹1,500 – ₹4,000/month",
              openingHours: "Mo-Su 08:00-21:00",
              areaServed: [
                "Khardaha", "Barrackpore", "Sodepur", "Belgharia",
                "Madhyamgram", "Barasat", "Rahara", "Dum Dum",
                "Bardhaman", "North 24 Parganas", "Kolkata", "West Bengal", "India",
              ],
              sameAs: [
                CONTACT.social.facebook,
                CONTACT.social.instagram,
                CONTACT.social.linkedin,
                CONTACT.social.youtube,
                CONTACT.social.telegram,
                BRAND.parentUrl,
              ],
              foundingDate: "2022",
              numberOfEmployees: {
                "@type": "QuantitativeValue",
                value: 14,
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Academic Coaching Programs",
                itemListElement: [
                  {
                    "@type": "OfferCatalog",
                    name: "Level 1 & 2 — Class 5–10",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Once-a-week coaching (Class 5–10)",
                        },
                        price: "1500",
                        priceCurrency: "INR",
                        priceSpecification: {
                          "@type": "UnitPriceSpecification",
                          price: "1500",
                          priceCurrency: "INR",
                          unitText: "month",
                        },
                      },
                    ],
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <AnnouncementBar />
        <Header />
        <main className="pb-0">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <MobileStickyBar />
      </body>
    </html>
  );
}
