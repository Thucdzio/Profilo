import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
<link rel="icon" href="/profile.jpg" />;
export const metadata: Metadata = {
  title: "Le Tien Thuc - Portfolio",
  description:
    "Portfolio cá nhân của Lê Tiến Thực - IT, DevOps, Machine Learning, Research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Le Tien Thuc - Portfolio" />
        <meta
          property="og:description"
          content="Portfolio cá nhân của Lê Tiến Thực - IT, DevOps, Machine Learning, Research."
        />
        <meta property="og:image" content="https://ltthuc.id.vn/profile.jpg" />
        <meta property="og:url" content="https://ltthuc.id.vn" />
        <meta property="og:type" content="website" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
