"use client";

import Link from "next/link";
import {
  ArrowTopRightIcon,
  Cross1Icon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

const links = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "People", href: "#people" },
  { label: "News", href: "#news" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("home");

    if (!hero) {
      const fallbackReveal = globalThis.setTimeout(
        () => setIsPastHero(true),
        0,
      );

      return () => globalThis.clearTimeout(fallbackReveal);
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsPastHero(!entry.isIntersecting),
      { threshold: 0.01 },
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const showBackground = isPastHero || isMenuOpen;
  const logoColor = showBackground && !isMenuOpen ? "text-[#cd0303]" : "text-[#fff5f5]";
  const desktopLinkColor = showBackground && !isMenuOpen ? "text-[#4c4c4c]" : "text-[#fff5f5]";

  return (
    <>
      <nav
        aria-label="Primary navigation"
        className="sticky top-0 z-[110] isolate flex h-[85px] items-center justify-between bg-transparent px-[61px] max-lg:px-8 max-md:h-[72px] max-md:px-6"
      >
        <div
          aria-hidden="true"
          className={`absolute inset-0 z-0 origin-top transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none ${isMenuOpen ? "bg-[#cd0303] translate-y-0" : isPastHero ? "bg-[#fff5f5] translate-y-0" : "-translate-y-full"}`}
        />
        <Link
          href="/"
          onClick={closeMenu}
          className={`relative z-10 shrink-0 whitespace-nowrap text-[20px] font-normal leading-none transition-[color,opacity] duration-300 max-lg:text-[clamp(16px,4.4vw,20px)] ${isMenuOpen ? "pointer-events-none text-[#fff5f5] opacity-0 lg:pointer-events-auto lg:opacity-100" : logoColor}`}
        >
          Hidayat, Hendiry &amp; Indrawan
        </Link>

        <div className={`relative z-10 hidden items-center gap-[40px] text-[20px] font-normal leading-normal lg:flex ${desktopLinkColor}`}>
          {links.map((link) => (
            <Link
              key={link.href}
              className={`transition-colors hover:text-[#cd0303] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#cd0303] ${desktopLinkColor}`}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="flex h-[35px] w-[123px] items-center justify-center bg-[#cd0303] text-[20px] font-normal leading-normal text-white transition-colors hover:bg-[#a80202] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cd0303]"
          >
            Contact Us
          </Link>
        </div>

        <button
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          onClick={() => setIsMenuOpen((open) => !open)}
          className={`relative z-10 flex size-11 items-center justify-center lg:hidden ${isMenuOpen || !isPastHero ? "text-[#fff5f5]" : "text-[#cd0303]"} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current`}
        >
          {isMenuOpen ? (
            <Cross1Icon aria-hidden="true" width={24} height={24} />
          ) : (
            <HamburgerMenuIcon aria-hidden="true" width={26} height={26} />
          )}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        className={`fixed inset-0 z-[100] flex min-h-dvh flex-col bg-[#cd0303] text-[#fff5f5] transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none lg:hidden ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <nav
          aria-label="Mobile navigation"
          className="flex flex-1 flex-col px-6 pb-8 pt-[112px]"
        >
          <ul className="grid grid-cols-2 gap-x-5 gap-y-7">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  tabIndex={isMenuOpen ? 0 : -1}
                  className="block text-[clamp(28px,8vw,40px)] font-normal leading-none transition-opacity hover:opacity-65 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="col-span-2 mt-3 border-t border-white/40 pt-5">
              <Link
                href="#contact"
                onClick={closeMenu}
                tabIndex={isMenuOpen ? 0 : -1}
                className="flex items-center justify-between text-[clamp(28px,8vw,40px)] font-normal leading-none transition-opacity hover:opacity-65 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Contact Us
                <ArrowTopRightIcon aria-hidden="true" width={24} height={24} />
              </Link>
            </li>
          </ul>
        </nav>

        <div className="min-h-[280px] bg-[#990000] px-6 pb-8 pt-8 max-[360px]:min-h-[250px]">
          <p className="text-[clamp(48px,15vw,72px)] font-normal leading-[0.87] tracking-[-0.045em] text-[#fff5f5]">
            <span className="block">Hidayat,</span>
            <span className="block">Hendiry &amp;</span>
            <span className="block">Indrawan</span>
          </p>
          <div className="mt-6 flex flex-col gap-1 text-[14px] font-light leading-[1.35] text-white/75">
            <a
              href="mailto:syarif.hidayatullah@hhilaw.co.id"
              tabIndex={isMenuOpen ? 0 : -1}
              className="w-fit transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              syarif.hidayatullah@hhilaw.co.id
            </a>
            <a
              href="mailto:yurike@hhilaw.co.id"
              tabIndex={isMenuOpen ? 0 : -1}
              className="w-fit transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              yurike@hhilaw.co.id
            </a>
            <a
              href="mailto:gees.indrawan@hhilaw.co.id"
              tabIndex={isMenuOpen ? 0 : -1}
              className="w-fit transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              gees.indrawan@hhilaw.co.id
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
