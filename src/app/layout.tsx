import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import dynamic from "next/dynamic";
import { Loader } from "@/components/Loader/Loader";
import "./globals.css";

const HeaderSection = dynamic(() => import("@/components/Header/Header"), {
  loading: () => <Loader />,
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Intoglo - Fast, Easy and Reliable Digital Freight forwarding",
  description:
    "We combine modern technology, robust processes, workflow automation and expert help to provide a friction-free experience.",
  icons: [
    {
      url: "/favicon.svg",
      sizes: "any",
      type: "image/svg+xml",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <HeaderSection />
        {children}
      </body>
    </html>
  );
}
