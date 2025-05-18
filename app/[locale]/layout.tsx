import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { CookieConsentProvider } from "./contexts/CookieConsentContext";
import { CookieConsent } from "@/components/CookieConsent";
import { GoogleTagManager } from "@next/third-parties/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });


export async function generateMetadata(params: { locale: string }) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "MetaTags",
  });

  return {
    title: t("title"),
    description:
      t("desc"),
    keywords: [
      t('keywords.key1'),
      t('keywords.key2'),
      t('keywords.key3'),
      t('keywords.key4'),
      t('keywords.key5'),
      t('keywords.key6'),
      t('keywords.key7'),
      t('keywords.key8'),
      t('keywords.key9'),
      t('keywords.key10'),
      t('keywords.key11'),
      t('keywords.key12'),
      t('keywords.key13'),
      t('keywords.key14')
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
      title: t("openGraph.title"),
      description:
        t("openGraph.description"),
      url: t("canonical"),
      siteName: t("title"),
      images: [
        {
          url: "https://mfcustoms.pl/images/1.jpg",
          width: 1200,
          height: 630,
          alt: "MF Custom Speakers = Dzwięk na Twoich zasadach",
        },
      ],
      locale: t("locale"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitter.title"),
      description:
        t("twitter.description"),
      images: ["https://mfcustoms.pl/images/1.jpg"],
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
      canonical: t("canonical"),
    },
  };
}


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
        <NextIntlClientProvider>
          <CookieConsentProvider>
            {children}
            <CookieConsent />
          </CookieConsentProvider>
        </NextIntlClientProvider>
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
