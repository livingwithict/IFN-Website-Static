import type { Metadata } from "next";
import { Poppins, Roboto_Slab, Chivo } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const chivo = Chivo({
  variable: "--font-chivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ICT Foundation Nepal",
  description:
    "Elevating Nepal: Pioneering Digital Progress Together. ICT Foundation Nepal advances digital literacy, research, and innovation.",
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${robotoSlab.variable} ${chivo.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col pt-[80px] font-sans" suppressHydrationWarning>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
