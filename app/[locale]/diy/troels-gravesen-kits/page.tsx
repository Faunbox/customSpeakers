import TroelsContent from "./components/wholePage"
import { getTranslations } from "next-intl/server";

export async function generateMetadata({  params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const t = await getTranslations({
    
    locale: lang,
    namespace: "MetaTags_troels",
  });

  return {
    title: t("title"),
    description: t("desc"),
    keywords: [
      t("keywords.key1"),
      t("keywords.key2"),
      t("keywords.key3"),
      t("keywords.key4"),
      t("keywords.key5"),
      t("keywords.key6"),
      t("keywords.key7"),
      t("keywords.key8"),
      t("keywords.key9"),
      t("keywords.key10"),
      t("keywords.key11"),
      t("keywords.key12"),
      t("keywords.key13"),
      t("keywords.key14"),
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
      description: t("openGraph.description"),
      url: t("canonical"),
      siteName: t("title"),
      images: [
        {
          url: "https://mfcustoms.pl/images/12.webp",
          width: 1200,
          height: 630,
          alt: "MF Custom Speakers - obudowy kolumn na zamówienie",
        },
      ],
      locale: t("locale"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitter.title"),
      description: t("twitter.description"),
      images: ["https://mfcustoms.pl/images/11.webp"],
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

export default function TroelsKitsPage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
    
      <TroelsContent/>
    </main>
  )
}
