"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = { id: number; href: string; label: string };

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { id: 1, href: "/", label: " About PNL" },
    { id: 2, href: "/", label: "Projects" },
    { id: 3, href: "/", label: "Services" },
    { id: 4, href: "/", label: "Contact" },
  ];

  return (
    <>
      <header id="Header">
        <Link href="/">
          <div className="logo">
            <img src="/logo.svg" alt="Logo" />
          </div>
        </Link>

        <nav className="navigations">
          {links.map(({ id, href, label }) => (
            <Link
              key={id}
              href={href}
              className={`nav_links ${
                pathname === href ? "active_nav_links" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* <nav className="navigations">
          <Link className="nav_links" href="/">
            About PNL
          </Link>
          <Link className="nav_links" href="/">
            Projects
          </Link>
          <Link className="nav_links" href="/">
            Services
          </Link>
          <Link className="nav_links" href="/">
            Contact
          </Link>
        </nav> */}
      </header>
    </>
  );
}
