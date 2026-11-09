import Link from "next/link";
import { Sparkles } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="brand-lockup">
            <span className="brand-mark"><Sparkles size={18}/></span>
            <span>creator<span className="brand-light">colab</span></span>
          </Link>
          <p className="footer-note">Good collaborations start with the right connection.</p>
        </div>
        <div>
          <b>Explore</b>
          <Link href="/creators">For creators</Link>
          <Link href="/brands">For brands</Link>
          <Link href="/how-it-works">How it works</Link>
        </div>
        <div>
          <b>CreatorColab</b>
          <Link href="/about">About us</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <div>
          <b>Get in touch</b>
          <a href="mailto:hello@creatorcolab.example">Contact us</a>
          <span>India · Built for everywhere</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 CreatorColab. All rights reserved.</span>
        <span>Privacy · Terms · Community guidelines</span>
      </div>
    </footer>
  );
}
