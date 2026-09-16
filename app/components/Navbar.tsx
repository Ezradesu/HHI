import Link from "next/link";

const links = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "People", href: "#people" },
  { label: "News", href: "#news" },
];

export function Navbar() {
  return (
    <nav
      aria-label="Primary navigation"
      className="sticky top-0 z-50 flex h-[85px] items-center justify-between bg-[#fff5f5] px-[61px]"
    >
      <Link
        href="/"
        className="shrink-0 text-[20px] font-normal leading-normal text-[#cd0303]"
      >
        Hidayat, Hendiry &amp; Indrawan
      </Link>

      <div className="flex items-center gap-[40px] text-[20px] font-normal leading-normal">
        {links.map((link) => (
          <Link
            key={link.href}
            className="text-[#4c4c4c] transition-colors hover:text-[#cd0303] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#cd0303]"
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
    </nav>
  );
}
