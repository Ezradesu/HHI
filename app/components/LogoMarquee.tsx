import Image from "next/image";

const logos = [
  { name: "Sinarmas", src: "/logo/sinarmas.png", width: 196 },
  { name: "Pertamina", src: "/logo/pertamina.png", width: 190 },
  { name: "Indika", src: "/logo/indika.png", width: 75 },
  { name: "Astra", src: "/logo/astra.png", width: 156 },
  { name: "OCBC", src: "/logo/ocbc.png", width: 210 },
  { name: "Ciputra", src: "/logo/ciputra.png", width: 164 },
];

function LogoSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden}
      className="flex shrink-0 items-center gap-[72px] pr-[72px] max-md:gap-12 max-md:pr-12"
    >
      {logos.map((logo) => (
        <li key={logo.name} className="flex h-[44px] shrink-0 items-center">
          <Image
            src={logo.src}
            alt={hidden ? "" : logo.name}
            width={logo.width}
            height={44}
            className="h-[44px] w-auto object-contain"
          />
        </li>
      ))}
    </ul>
  );
}

export function LogoMarquee() {
  return (
    <section
      aria-label="Selected clients"
      className="relative mx-[61px] overflow-hidden py-[30px] max-md:mx-6"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#fff5f5] to-transparent max-md:w-20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#fff5f5] to-transparent max-md:w-20"
      />

      <div className="flex w-max shrink-0 transform-gpu animate-logo-marquee motion-reduce:animate-none">
        <LogoSet />
        <LogoSet hidden />
      </div>
    </section>
  );
}
