import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VERTEX CONSULTING LTD",
  description: "VERTEX CONSULTING",
  generator: "VERTEX CONSULTING LTD.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
