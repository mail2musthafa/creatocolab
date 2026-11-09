"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Moon, Sun, Menu, X } from "lucide-react";

const audienceLinks = [
  { label: "Creators", href: "/creators" },
  { label: "Brands", href: "/brands" },
];

const mainLinks = [
  { label: "About us", href: "/about" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

export function SiteHeader() {
  const pathname = usePathname();

  const [signupOpen, setSignupOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("creatorcolab-theme");
    const isDark = savedTheme === "dark";

    setDarkMode(isDark);
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    setThemeLoaded(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = !darkMode;

    setDarkMode(nextTheme);
    document.documentElement.dataset.theme = nextTheme ? "dark" : "light";
    localStorage.setItem("creatorcolab-theme", nextTheme ? "dark" : "light");
  };

  const closeMenus = () => {
    setMobileOpen(false);
    setSignupOpen(false);
  };

  const audienceSelector = (mobile = false) => (
    <nav
      className={mobile ? "cc-audience cc-audience-mobile" : "cc-audience"}
      aria-label="Choose marketplace experience"
    >
      {audienceLinks.map((item) => {
        const active =
          pathname === item.href || pathname.startsWith(item.href + "/");

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={mobile ? closeMenus : undefined}
            aria-current={active ? "page" : undefined}
            className={`cc-audience-option ${active ? "selected" : ""}`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <header className="cc-header">
      <div className="cc-header-inner">

        {/* CREATORCOLAB BRAND */}
        <Link href="/" className="cc-brand" aria-label="CreatorColab home">
          <span className="cc-brand-mark">CC</span>
          <span className="cc-brand-name">
            Creator<span>Colab</span>
          </span>
        </Link>

        {/* CREATOR / BRAND SELECTOR */}
        {audienceSelector()}

        {/* MAIN NAVIGATION */}
        <nav className="cc-main-nav" aria-label="Main navigation">
          {mainLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "current" : ""}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="cc-actions">

          <button
            type="button"
            className="cc-theme-toggle"
            onClick={toggleTheme}
            aria-label={darkMode ? "Switch to day mode" : "Switch to night mode"}
            title={darkMode ? "Day mode" : "Night mode"}
          >
            {themeLoaded && (darkMode ? <Sun size={19} /> : <Moon size={19} />)}
          </button>

          <Link href="/login" className="cc-login">
            Sign in
          </Link>

          <div className="cc-signup-wrap">
            <button
              type="button"
              className="cc-signup-button"
              onClick={() => setSignupOpen(!signupOpen)}
              aria-expanded={signupOpen}
            >
              Get started
              <ChevronDown
                size={16}
                className={signupOpen ? "cc-chevron-open" : ""}
              />
            </button>

            {signupOpen && (
              <div className="cc-signup-dropdown">
                <Link href="/signup?type=creator" onClick={closeMenus}>
                  <strong>Join as a Creator</strong>
                  <span>Show your talent and find collaborations</span>
                </Link>

                <Link href="/signup?type=brand" onClick={closeMenus}>
                  <strong>Join as a Brand</strong>
                  <span>Discover creators and launch campaigns</span>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="cc-mobile-menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="cc-mobile-panel">

          {audienceSelector(true)}

          {mainLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenus}
            >
              {item.label}
            </Link>
          ))}

          <div className="cc-mobile-bottom">
            <button
              type="button"
              className="cc-theme-toggle"
              onClick={toggleTheme}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              {darkMode ? "Day mode" : "Night mode"}
            </button>

            <Link href="/login" onClick={closeMenus}>
              Sign in
            </Link>

            <Link
              href="/signup"
              className="cc-mobile-signup"
              onClick={closeMenus}
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
