import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saulo Leão | Projetos Elétricos Seguros e Certificados",
  description: "Especialista em projetos elétricos residenciais, comerciais, laudos técnicos e regularização. Mais de 15 anos de experiência garantindo segurança e conformidade normativa.",
  keywords: [
    'projetos elétricos',
    'engenheiro eletricista',
    'laudo técnico elétrico',
    'regularização elétrica',
    'adequação NBR 5410',
    'consultoria elétrica',
    'Saulo Leão Engenharia',
    'projetos elétricos residenciais',
    'projetos elétricos comerciais',
    'engenheiro eletricista Brasília',
    'eficiência energética',
    'segurança elétrica',
  ],
  openGraph: {
    title: 'Saulo Leão | Projetos Elétricos Seguros e Certificados',
    description:
      'Projetos elétricos de alta qualidade, laudos e consultoria com foco em segurança e normas técnicas.',
    type: 'website',
    url: 'https://www.sauloengenheiro.com',
    siteName: 'Saulo Leão Engenharia',
    images: [
      {
        url: 'https://www.sauloengenheiro.com/og-image.jpg', // Placeholder para imagem de compartilhamento
        width: 1200,
        height: 630,
        alt: 'Saulo Leão Engenharia Elétrica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saulo Leão | Engenharia Elétrica',
    description:
      'Projetos elétricos, laudos e regularização com foco em segurança e conformidade.',
    images: ['https://www.sauloengenheiro.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.sauloengenheiro.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('https://www.sauloengenheiro.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Saulo Leão Engenharia Elétrica",
    "image": "https://www.sauloengenheiro.com/og-image.jpg",
    "description": "Especialista em projetos elétricos residenciais, comerciais e laudos técnicos em Brasília.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Brasília",
      "addressRegion": "DF",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -15.7942,
      "longitude": -47.8822
    },
    "url": "https://www.sauloengenheiro.com",
    "telephone": "+5561994211392",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ]
  };

  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
