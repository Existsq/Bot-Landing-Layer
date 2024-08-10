import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tickets | Discord Ticket Bot",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
