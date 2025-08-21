import "./globals.css";
import Link from "next/link";
import { Metadata } from "next";
import Navbar from "./components/Navbar";
import { Poppins, El_Messiri } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
  variable: "--font-poppins",
});

const elMessiri = El_Messiri({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // El Messiri supports these weights
  variable: "--font-el-messiri",
  display: "swap",
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
      <body className={`${poppins.variable} ${elMessiri.variable}`}>
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
                    About PNL
                  </Link>
                  <Link className="footer_link" href="/projects">
                    Projects
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
                  &copy; All rights reserved to PNL Constructions | Privacy |
                  Terms & conditions | Licenses
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
