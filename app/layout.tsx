import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { CookieConsentProvider } from './contexts/CookieConsentContext'
import Script from 'next/script'
import * as Sentry from "@sentry/nextjs";
import { CookieConsent } from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MF Custom Speakers | Dzwięk na Twoich zasadach",
  description:
    "Specjalizujemy się w tworzeniu customowych obudów głośnikowych dla audiofilów i miłośników wysokiej jakości dźwięku. Oferujemy precyzyjne wykonanie, nowoczesny design oraz doskonałą akustykę dzięki wykorzystaniu maszyn CNC i projektów CAD. Nasze rozwiązania łączą technologię z pasją do muzyki, zapewniając wyjątkowe wrażenia dźwiękowe. Odkryj, jak indywidualnie zaprojektowana obudowa może odmienić brzmienie Twojego systemu audio!",
  keywords: [
    "obudowy głośnikowe",
    "customowe systemy audio",
    "obudowy diy",
    "system hifi",
    "audiofil",
    "obudowy kolumn",
    "obudowy głośników",
    "kolumny diy",
    "projektowanie głośników",
    "projektowanie kolumn",
    "projekt kolumn głośnikowych",
    "kolumny audio",
  ],
  authors: [{ name: "Filip Sojecki" }],
  creator: "Filip Sojecki",
  publisher: "Filip Sojecki",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "MF Custom Speakers | Dzwięk na Twoich zasadach",
    description:
      "Specjalizujemy się w tworzeniu customowych obudów głośnikowych dla audiofilów i miłośników wysokiej jakości dźwięku. Oferujemy precyzyjne wykonanie, nowoczesny design oraz doskonałą akustykę dzięki wykorzystaniu maszyn CNC i projektów CAD. Nasze rozwiązania łączą technologię z pasją do muzyki, zapewniając wyjątkowe wrażenia dźwiękowe. Odkryj, jak indywidualnie zaprojektowana obudowa może odmienić brzmienie Twojego systemu audio!",
    url: "https://mfcustoms.pl",
    siteName: "Mf Custom Speakers",
    images: [
      {
        url: "https://custom-speakers.vercel.app/images/1.jpg",
        width: 1200,
        height: 630,
        alt: "MF Custom Speakers = Dzwięk na Twoich zasadach",
      },
    ],
    locale: "pl",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MF Custom Speakers | Dzwięk na Twoich zasadach",
    description:
      "Tworzymy customowe obudowy głośnikowe dla audiofilów. Precyzyjne wykonanie, nowoczesny design i najwyższa jakość dźwięku. Sprawdź, jak możemy poprawić brzmienie Twojego systemu audio!",
    images: ["https://custom-speakers.vercel.app/images/1.jpg"],
    creator: "Filip_Sojecki",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  // You can add more metadata fields as needed
};

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
       <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
          `}
        </Script>
      </head>
      <body className={inter.className}>
         {/* Google Tag Manager (noscript) */}
         <noscript>
          <iframe 
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          ></iframe>
        </noscript>
        <CookieConsentProvider>
        {children}
        <CookieConsent/>
        </CookieConsentProvider>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#333",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}
