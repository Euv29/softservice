import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const gilroy = localFont({
  src: [
    {
      path: "../../public/font/Radomir Tinkov - Gilroy-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/font/Radomir Tinkov - Gilroy-ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/font/Radomir Tinkov - Gilroy-UltraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/font/Radomir Tinkov - Gilroy-UltraLightItalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/font/Radomir Tinkov - Gilroy-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/font/Radomir Tinkov - Gilroy-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/font/Radomir Tinkov - Gilroy-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/Radomir Tinkov - Gilroy-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/font/Radomir Tinkov - Gilroy-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/Radomir Tinkov - Gilroy-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/font/Radomir Tinkov - Gilroy-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/font/Radomir Tinkov - Gilroy-SemiBoldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/font/Radomir Tinkov - Gilroy-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/Radomir Tinkov - Gilroy-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/font/Radomir Tinkov - Gilroy-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/font/Radomir Tinkov - Gilroy-ExtraBoldItalic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../public/font/Radomir Tinkov - Gilroy-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/font/Radomir Tinkov - Gilroy-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../../public/font/Radomir Tinkov - Gilroy-Heavy2.otf",
      weight: "950",
      style: "normal",
    },
    {
      path: "../../public/font/Radomir Tinkov - Gilroy-HeavyItalic.otf",
      weight: "950",
      style: "italic",
    },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SoftService Angola - Soluções Tecnológicas Empresariais",
    template: "%s | SoftService Angola",
  },
  description: "SoftService Angola é especializada em soluções tecnológicas empresariais: videovigilância, controlo biométrico, desenvolvimento web e sistema CACIMBO. Atuamos em Luanda, Benguela, Lubango, Huambo, Cuíto, Moxico, Cuanza Sul, Cuando Cubango e Saurimo.",
  keywords: [
    "SoftService Angola",
    "tecnologia empresarial Angola", 
    "videovigilância Angola",
    "controlo biométrico Angola",
    "desenvolvimento web Angola",
    "sistema gestão empresarial Angola",
    "CACIMBO sistema gestão",
    "câmeras segurança Angola",
    "ponto electrônico Angola",
    "software empresarial Angola",
    "Cuíto Bié Angola",
    "Luanda tecnologia",
    "Benguela tecnologia", 
    "Lubango tecnologia",
    "Huambo tecnologia",
    "Moxico tecnologia",
    "Cuanza Sul tecnologia",
    "Cuando Cubango tecnologia",
    "Saurimo tecnologia",
    "transformação digital Angola",
    "segurança empresarial Angola"
  ],
  authors: [{ name: "SoftService Angola" }],
  creator: "SoftService Angola",
  publisher: "SoftService Angola",
  metadataBase: new URL("https://softservice-ao.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_AO",
    url: "https://softservice-ao.com",
    siteName: "SoftService Angola",
    title: "SoftService Angola - Soluções Tecnológicas Empresariais",
    description: "Empresa angolana especializada em videovigilância, controlo biométrico, desenvolvimento web e sistema CACIMBO. Cobertura em Luanda, Benguela, Lubango, Huambo, Cuíto, Moxico, Cuanza Sul, Cuando Cubango e Saurimo.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SoftService Angola - Soluções Tecnológicas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftService Angola - Soluções Tecnológicas Empresariais",
    description: "Empresa angolana especializada em videovigilância, controlo biométrico, desenvolvimento web e sistema CACIMBO. Cobertura em Luanda, Benguela, Lubango, Huambo, Cuíto, Moxico, Cuanza Sul, Cuando Cubango e Saurimo.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-AO" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#01a0e2" />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Additional SEO meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="AO-BIE" />
        <meta name="geo.placename" content="Cuíto, Bié, Angola" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SoftService Angola",
              "description": "Empresa angolana de tecnologia especializada em soluções empresariais com cobertura em Luanda, Benguela, Lubango, Huambo, Cuíto, Moxico, Cuanza Sul, Cuando Cubango e Saurimo",
              "url": "https://softservice-ao.com",
              "logo": "https://softservice-ao.com/logo.png",
              "foundingDate": "2020",
              "foundingLocation": {
                "@type": "Place",
                "name": "Cuíto, Bié, Angola"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rua Góis Pinto",
                "addressLocality": "Cuíto",
                "addressRegion": "Bié",
                "addressCountry": "AO"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "telephone": "+244928990138",
                "email": "geral@softservice-ao.com",
                "areaServed": ["AO-LUA", "AO-BGU", "AO-HUI", "AO-HUA", "AO-BIE", "AO-MOX", "AO-CUS", "AO-CCU", "AO-LNO"]
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61577138932736",
                "https://www.instagram.com/softservice.ao/"
              ],
              "services": [
                "Sistemas de videovigilância",
                "Controlo biométrico de acessos",
                "Desenvolvimento de websites",
                "Sistema CACIMBO de gestão empresarial"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${gilroy.variable} font-gilroy antialiased min-h-screen bg-white text-gray-900`}
      >
        <div id="skip-nav">
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#01a0e2] text-white px-4 py-2 rounded-md z-50"
          >
            Ir para o conteúdo principal
          </a>
        </div>
        
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
