import "./globals.css";
import Link from "next/link";
import { Metadata } from "next";
import Navbar from "./components/Navbar";
import { Lexend, Playfair_Display } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Perineal Reconstruction",
  description: "Professional building services and past projects.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lexend.className}>
       <Navbar/>
        <main>{children}</main>
        {/* <footer>
          <h1>footer</h1>
        </footer> */}
      </body>
    </html>
  );
}
