import type { Metadata } from "next";
import { IBM_Plex_Sans_KR, Playfair_Display } from "next/font/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "탐정케이 | 신뢰와 친밀함의 사설탐정",
  description: "신뢰로 시작해, 결과로 증명하는 탐정케이",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${plexSans.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
