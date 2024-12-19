import type { Metadata } from "next";
import { Teko } from "next/font/google";
import "./globals.css";

const teko = Teko({
  variable: "--teko",
  subsets: ["latin"],
  weight: ["400", "500", "600"]
});

export const metadata: Metadata = {
  title: "PokeSwipe",
  description: "Now choose your favourite pokemon characters and add them to your team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${teko.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
