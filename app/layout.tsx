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
        <Navbar />
        <main>{children}</main>
        <footer className="footer">
          <div className="footer_backgroud">
            <div className="footer_margin_aauto">
              <div className="footer_logo">
                <img src="/logo.svg" alt="" />
              </div>
              <div className="footer_navigation">
                <div className="footer_page_links">
                  <Link className="footer_link" href="/about">
                    About
                  </Link>
                  <Link className="footer_link" href="/projects">
                    Project
                  </Link>
                  <Link className="footer_link" href="/services">
                    Services
                  </Link>
                  <Link className="footer_link" href="/contact">
                    Contact
                  </Link>
                </div>
                <div className="footer_info">
                  <p>info@orionconstruct.com</p>
                  <p>+1 234 5678 999</p>
                  <p>North Zone, Colambia.</p>
                </div>
                <div className="footer_scocial_links">
                  <p>Facebook</p>
                  <p>Instagram</p>
                  <p>Pinterest</p>
                  <p>Youtube</p>
                </div>
              </div>
              <div className="copy_right">
                <p>
                  &copy; All rights reserved to Perineal Reconstruction |
                  Privacy | Terms & conditions | Licenses
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
