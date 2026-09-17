"use client";

import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { useEffect, useRef, useState } from "react";

const footerLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "People", href: "#people" },
];

export function SiteFooter() {
  const footerRef = useRef<HTMLElement>(null);
  const [motionReady, setMotionReady] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) return;

    setMotionReady(true);

    if (!("IntersectionObserver" in window)) {
      const fallbackReveal = globalThis.setTimeout(
        () => setIsRevealed(true),
        0,
      );

      return () => globalThis.clearTimeout(fallbackReveal);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setIsRevealed(true);
        observer.disconnect();
      },
      { threshold: 0.18 },
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  // Keep the server-rendered footer visible; motion only takes control after hydration.
  const reveal = !motionReady || isRevealed;

  return (
    <footer ref={footerRef} className="bg-[#cd0303] text-[#fff5f5]">
      <div className="overflow-hidden bg-[#fff5f5] px-[61px] py-5 max-lg:px-8 max-md:px-6 max-md:py-4">
        <p
          aria-label="Hidayat, Hendiry & Indrawan"
          className={`whitespace-nowrap text-[clamp(40px,6vw,84px)] font-normal leading-[0.95] tracking-[-0.045em] text-[#cd0303] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:translate-y-0 motion-reduce:transition-none ${reveal ? "translate-y-0" : "translate-y-[110%]"}`}
        >
          Hidayat, Hendiry &amp; Indrawan
        </p>
      </div>

      <div className="mx-auto max-w-[1218px] px-[61px] pb-10 pt-[76px] max-lg:px-8 max-md:px-6 max-md:pb-8 max-md:pt-12">
        <div
          className={`grid gap-12 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none md:grid-cols-[1.4fr_0.7fr_1fr] md:gap-8 ${reveal ? "translate-y-0 opacity-100 delay-150" : "translate-y-6 opacity-0"}`}
        >
          <div>
            <p className="max-w-[400px] text-[32px] font-normal leading-[1.08] tracking-[-0.02em]">
              Hukum yang jelas untuk langkah bisnis yang lebih pasti.
            </p>
            <Link
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 text-[18px] font-medium underline decoration-white/60 underline-offset-8 transition-colors hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Mulai percakapan
              <ArrowTopRightIcon aria-hidden="true" width={18} height={18} />
            </Link>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-[16px] font-medium uppercase tracking-[0.12em] text-white/70">
              Explore
            </p>
            <ul className="mt-5 space-y-3 text-[18px] font-light">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white/70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[16px] font-medium uppercase tracking-[0.12em] text-white/70">
              Contact
            </p>
            <div className="mt-5 space-y-3 text-[18px] font-light leading-[1.4]">
              <Link
                href="mailto:syarif.hidayatullah@hhilaw.co.id"
                className="block transition-colors hover:text-white/70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                syarif.hidayatullah@hhilaw.co.id
              </Link>
              <Link
                href="mailto:yurike@hhilaw.co.id"
                className="block transition-colors hover:text-white/70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                yurike@hhilaw.co.id
              </Link>
              <Link
                href="mailto:gees.indrawan@hhilaw.co.id"
                className="block transition-colors hover:text-white/70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                gees.indrawan@hhilaw.co.id
              </Link>
            </div>
          </div>
        </div>

        <div
          className={`mt-[88px] flex flex-col gap-3 border-t border-white/30 pt-5 text-[15px] font-light text-white/70 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none sm:flex-row sm:items-center sm:justify-between ${reveal ? "translate-y-0 opacity-100 delay-300" : "translate-y-6 opacity-0"}`}
        >
          <p>© 2026 Hidayat, Hendiry &amp; Indrawan</p>
          <p>Advocates &amp; Legal Counsel</p>
        </div>
      </div>
    </footer>
  );
}
