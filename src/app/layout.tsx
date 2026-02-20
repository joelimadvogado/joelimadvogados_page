import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joel Lima Advocacia | Direito Civil e Previdenciário",
  description: "Escritório de advocacia especializado em Direito Civil e Previdenciário. Atendimento humanizado e estratégico para garantir seus direitos.",
  keywords: ["advogado civil", "advogado previdenciário", "aposentadoria", "indenização", "joel lima", "advocacia"],
  authors: [{ name: "Joel Lima" }],
  openGraph: {
    title: "Joel Lima Advocacia | Excelência Jurídica",
    description: "Recupere seus direitos com especialistas em Direito Civil e Previdenciário. Agende sua consulta.",
    url: "https://joellima.adv.br",
    siteName: "Joel Lima Advocacia",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joel Lima Advocacia",
    description: "Especialistas em Direito Previdenciário e Civil.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Joel Lima Advocacia",
  "image": "https://joellima.adv.br/images/joelazul.jpeg",
  "description": "Escritório de advocacia especializado em Direito Civil e Previdenciário.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Exemplo de Endereço, 123",
    "addressLocality": "Sua Cidade",
    "addressRegion": "UF",
    "postalCode": "00000-000",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -23.550520,
    "longitude": -46.633308
  },
  "url": "https://joellima.adv.br",
  "telephone": "+5587999615807",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <ScrollToTop />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
