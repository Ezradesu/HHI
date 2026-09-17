import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[780px] overflow-hidden bg-[#3b0505] max-lg:min-h-[720px] max-md:min-h-[680px] lg:min-h-[calc(100svh-85px)]"
    >
      <video
        aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 size-full object-cover object-[center_42%]"
      >
        <source
          src="/hero-video/video_sebuah_kelompok_orang_se.mp4"
          type="video/mp4"
        />
      </video>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent"
      />

      <div className="relative z-10 flex min-h-[780px] items-end px-[61px] pb-[92px] max-lg:min-h-[720px] max-lg:px-8 max-lg:pb-16 max-md:min-h-[680px] max-md:px-6 max-md:pb-12">
        <div className="max-w-[844px]">
          <h1
            id="hero-heading"
            className="max-w-[820px] text-[clamp(44px,5.5vw,64px)] font-medium leading-[1.02] tracking-[-0.02em] text-[#fff5f5] text-shadow-[0px_4px_21.9px_rgba(0,0,0,0.75)] max-md:text-[42px]"
          >
            Ubah Risiko Hukum Menjadi Keputusan yang Terukur
          </h1>

          <div className="mt-10 flex gap-4 max-md:mt-7 max-md:flex-col max-md:gap-3">
            <Link
              href="#contact"
              className="inline-flex h-[52px] w-[235px] items-center justify-center gap-3 bg-[#cd0303] text-[18px] font-medium text-white transition-colors hover:bg-[#a80202] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cd0303] max-md:w-full"
            >
              Book Consultation
              <ArrowTopRightIcon aria-hidden="true" width={18} height={18} />
            </Link>
            <Link
              href="#services"
              className="inline-flex h-[52px] w-[237px] items-center justify-center border border-[#fff5f5] bg-[#fff5f5] text-[18px] font-medium text-[#cd0303] transition-colors hover:bg-transparent hover:text-[#fff5f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fff5f5] max-md:w-full"
            >
              Pelajari lebih lanjut
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
