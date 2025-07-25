import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "portfolio.exe",
  description: "author: vineet raj",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
        <link href="https://api.fontshare.com/v2/css?f[]=tabular@400,500,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className="font-[Tabular,monospace] antialiased"
      >
        {children}
      </body>
    </html>
  );
}
