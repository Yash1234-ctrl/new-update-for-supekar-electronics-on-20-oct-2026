"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsideClick);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation" ref={headerRef}>
        <Link className="brand" href="/" aria-label="Supekar Electronics home">
          <Image
            src="/images/logo-brand.png"
            alt="Supekar Electronics logo"
            width={120}
            height={40}
            priority
            unoptimized
            style={{ height: "auto" }}
          />
          <span>Supekar Electronics</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-links"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <div id="primary-links" className={`header-actions${menuOpen ? " is-open" : ""}`}>
          <div className="nav-links">
            <Link href="/#about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/products" onClick={() => setMenuOpen(false)}>Products</Link>
            <Link href="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
