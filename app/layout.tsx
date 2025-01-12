import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MF Custom Speakers | System audio dopasowany do Ciebie",
  description:
    "Elevate your sound experience with our custom speakers. We offer tailor-made audio solutions for audiophiles, studios, and venues.",
  keywords: [
    "custom speakers",
    "audio",
    "sound system",
    "high-end speakers",
    "audiophile",
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
    title: "Custom Speakers | Elevate Your Sound Experience",
    description:
      "Elevate your sound experience with our custom speakers. We offer tailor-made audio solutions for audiophiles, studios, and venues.",
    url: "https://www.customspeakers.com",
    siteName: "Custom Speakers",
    images: [
      {
        url: "https://www.customspeakers.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Speakers - Elevate Your Sound Experience",
      },
    ],
    locale: "pl",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Speakers | Elevate Your Sound Experience",
    description:
      "Elevate your sound experience with our custom speakers. We offer tailor-made audio solutions for audiophiles, studios, and venues.",
    images: ["https://www.customspeakers.com/twitter-image.jpg"],
    creator: "@customspeakers",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        {children}
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
