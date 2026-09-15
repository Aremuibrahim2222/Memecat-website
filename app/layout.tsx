import type { Metadata } from "next";
import { Anton, Space_Grotesk } from "next/font/google";
import "./globals.css";

const marquee = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marquee",
  display: "swap",
});

const body = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Memecat ($AMC) — Now Showing on Solana",
  description:
    "Memecat ($AMC) is a Solana-based memecoin starring a popcorn-loving artificial mini cat, blending AMC Entertainment's meme-stock legacy with Solana's cat-meme scene.",
  openGraph: {
    title: "Memecat ($AMC) — Now Showing on Solana",
    description:
      "A popcorn-loving artificial mini cat bringing meme-stock energy to Solana.",
    images: ["/memecat-pfp.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${marquee.variable} ${body.variable} font-body bg-marquee-ink text-marquee-paper`}
      >
        {children}
      </body>
    </html>
  );
}
