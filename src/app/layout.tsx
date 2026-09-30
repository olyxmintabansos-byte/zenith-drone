import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pocket 8K Foldable Drone",
  description: "Aerospace-grade carbon fiber with 8K 60fps cinema lens. 23-minute flight time, sub-250g airframe....",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-light text-dark">{children}</body>
    </html>
  );
}
