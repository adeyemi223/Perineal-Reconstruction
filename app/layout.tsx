import "./globals.css";
import Link from "next/link";
import { Metadata } from "next";
import { Lexend, Playfair_Display } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-playfair",
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
        <header id="Header">
          <Link href="/">
            <div className="logo">
              <img src="/logo.svg" alt="Logo" />
            </div>
          </Link>

          <nav className="navigations">
            <Link className="nav_links" href="/about">
              About
            </Link>
            <Link className="nav_links" href="/projects">
              Project
            </Link>
            <Link className="nav_links" href="/services">
              Services
            </Link>
            <Link className="nav_links" href="/careers">
              Careers
            </Link>
            <Link className="nav_links" href="/blog">
              Blog
            </Link>
            <Link className="nav_links" href="/contact">
              Contact
            </Link>
          </nav>
        </header>
        <main>{children}</main>
        {/* <footer>
          <h1>footer</h1>
        </footer> */}
      </body>
    </html>
  );
}
