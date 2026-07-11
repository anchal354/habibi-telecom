import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

const siteTitle =
  "Habibi Telecom & Electrical | Mobile & Electronics Store in Hayaghat";

const siteDescription =
  "Shop mobile phones, accessories, electrical products, CCTV cameras, inverters and home appliances at Habibi Telecom & Electrical, Bansdih Chowk, Hayaghat, Bihar.";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s | Habibi Telecom & Electrical",
  },

  description: siteDescription,

  applicationName: "Habibi Telecom & Electrical",

  keywords: [
    "Habibi Telecom and Electrical",
    "mobile shop in Hayaghat",
    "mobile shop in Darbhanga",
    "electrical shop in Hayaghat",
    "mobile phones in Hayaghat",
    "mobile accessories in Hayaghat",
    "electronics shop in Darbhanga",
    "CCTV camera shop",
    "inverter battery shop",
    "home appliances shop",
    "Bansdih Chowk mobile shop",
    "Habibi Telecom Bihar",
  ],

  authors: [
    {
      name: "Habibi Telecom & Electrical",
    },
  ],

  creator: "Habibi Telecom & Electrical",
  publisher: "Habibi Telecom & Electrical",

  category: "Electronics and Electrical Store",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Habibi Telecom & Electrical",
    title: siteTitle,
    description: siteDescription,
  },

  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },

  icons: {
    icon: [
      {
        url: "/images/logo.png",
        type: "image/png",
      },
    ],
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}