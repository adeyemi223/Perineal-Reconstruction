"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header id="Header">
        <Link href="/">
          <div className="logo">
            <img src="/logo.svg" alt="Logo" />
          </div>
        </Link>

        <nav className="navigations">
          <Link className="nav_links" href="/">
            About PNL
          </Link>
          <Link className="nav_links" href="/">
            Project
          </Link>
          <Link className="nav_links" href="/">
            Services
          </Link>
          <Link className="nav_links" href="/">
            Contact
          </Link>
        </nav>
      </header>
    </>
  );
}
