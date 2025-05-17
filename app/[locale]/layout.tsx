import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { CookieConsentProvider } from "./contexts/CookieConsentContext";
import { CookieConsent } from "@/components/CookieConsent";
import { GoogleTagManager } from "@next/third-parties/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MF Custom Speakers | Kolumny custom diy na zamówienie",
  description:
    "Specjalizujemy się w projektowaniu kolumn na zamówienie dla audiofilów i miłośników wysokiej jakości dźwięku. Oferujemy precyzyjne wykonanie, nowoczesny design oraz doskonałą akustykę dzięki wykorzystaniu maszyn CNC i projektów CAD. Nasze rozwiązania łączą technologię z pasją do muzyki, zapewniając wyjątkowe wrażenia dźwiękowe.",
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
    "obudowy kolumn na zamówienie",
    "kolumny na zamówienie",
    "kolumny na zamowienie",
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
    title: "MF Custom Speakers | Kolumny na zamówienie",
    description:
      "Kolumny na zamówienie dla Ciebie! Specjalizujemy się w tworzeniu obudów głośnikowych dla audiofilów i miłośników wysokiej jakości dźwięku. Oferujemy precyzyjne wykonanie, nowoczesny design oraz doskonałą akustykę dzięki wykorzystaniu maszyn CNC i projektów CAD. Nasze rozwiązania łączą technologię z pasją do muzyki, zapewniając wyjątkowe wrażenia dźwiękowe.",
    url: "https://www.mfcustoms.pl",
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
      "Tworzymy kolumny na zamówienie dla audiofilów i miłośników dobrego dzwięku. Precyzyjne wykonanie, nowoczesny design i najwyższa jakość dźwięku. Sprawdź, jak możemy poprawić brzmienie Twojego systemu audio!",
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
    shortcut: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://www.mfcustoms.pl",
  },
};

// Sentry.init({
//   dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
//   tracesSampleRate: 1.0,
// });

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID as string} />
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <CookieConsentProvider>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
          <CookieConsent />
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
