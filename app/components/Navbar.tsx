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
          <Link className="nav_links" href="/about">
            About
          </Link>
          <Link className="nav_links" href="/projects">
            Project
          </Link>
          <Link className="nav_links" href="/services">
            Services
          </Link>
          <Link className="nav_links" href="/contact">
            Contact
          </Link>
        </nav>
      </header>
    </>
  );
}
