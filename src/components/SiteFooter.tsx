import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { siteContact } from "../config/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <Link className="footer-brand" href="/">Supekar Electronics</Link>
          <p>Registered Micro Enterprise · Udyam: UDYAM-MH-30-0182149</p>
          <p>Satara, Maharashtra, India</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <div className="footer-socials" aria-label="Social media">
          <a href={siteContact.instagram} aria-label="Instagram" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href={siteContact.linkedIn} aria-label="LinkedIn" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
      </div>
      <p className="copyright">© 2026 Supekar Electronics. All rights reserved.</p>
    </footer>
  );
}
