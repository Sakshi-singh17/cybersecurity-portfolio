import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sakshi Singh | Cybersecurity Portfolio",
  description:
    "Cybersecurity portfolio of Sakshi Singh – aspiring Cybersecurity Analyst with a software engineering background, documenting hands-on labs, projects, and learning.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  manifest: "/site.webmanifest"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100">
        <div className="noise" />
        <div className="grid-overlay" />
        {children}
      </body>
    </html>
  );
}

