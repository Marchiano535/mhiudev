import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marchiano — Informatics Student & Developer",
  description:
    "Portfolio of Marchiano Faraitody — Informatics student at Telkom University, building web applications and exploring data-driven solutions.",
  keywords: ["Marchiano", "Portfolio", "Frontend Developer", "Telkom University", "Informatics"],
  openGraph: {
    title: "Marchiano — Informatics Student & Developer",
    description: "Portfolio of Marchiano Faraitody — Frontend Developer & Informatics Student",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
