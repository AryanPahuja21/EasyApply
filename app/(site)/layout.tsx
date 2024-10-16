import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

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
      <Providers>
        <body className="bg-black/90 text-white">{children}</body>
      </Providers>
    </html>
  );
}
