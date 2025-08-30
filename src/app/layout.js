import "./globals.css";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "My portfolio",
  favicon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
