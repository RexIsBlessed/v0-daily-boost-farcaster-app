import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Daily Boost - Farcaster Mini App",
  description: "Earn rewards daily across multiple networks with Daily Boost",
  generator: "v0.app",
  metadataBase: new URL("https://v0-daily-boost-farcaster-app-rexisblesseds-projects.vercel.app"),
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Daily Boost",
    description: "Earn rewards daily across multiple networks with Daily Boost",
    url: "https://v0-daily-boost-farcaster-app-rexisblesseds-projects.vercel.app",
    siteName: "Daily Boost",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  other: {
    "fc:frame": "vNext",
    "of:version": "2024-01-15",
    "of:accepts:xmtp": "2024-02-01",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
