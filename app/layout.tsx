import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EasyApply",
  description: "EasyApply is an automatic job application tool.",
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
