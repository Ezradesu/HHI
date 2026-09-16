import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-[1001px] overflow-hidden bg-[#fff5f5] max-lg:min-h-[790px] max-md:min-h-[700px]"
    >
      <video
        aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/hero-scaler.png"
        className="absolute inset-0 size-full object-cover"
      >
        <source
          src="/hero-video/video_sebuah_kelompok_orang_se.mp4"
          type="video/mp4"
        />
      </video>
      <div aria-hidden="true" className="absolute inset-0 bg-black/20" />

      <div className="absolute left-[54px] top-[542px] z-10 max-w-[844px] max-lg:left-6 max-lg:right-6 max-lg:top-[400px] max-md:top-[330px]">
        <h1
          id="hero-heading"
          className="max-w-[844px] text-[64px] font-medium leading-normal text-[#fff5f5] text-shadow-[0px_4px_21.9px_rgba(0,0,0,0.75)] max-lg:text-[clamp(42px,8vw,64px)] max-md:text-[42px]"
        >
          Ubah Risiko Hukum Menjadi Keputusan yang Terukur
        </h1>

        <div className="mt-[56px] flex gap-[19px] max-md:mt-7 max-md:flex-col max-md:gap-3">
          <Link
            href="#contact"
            className="flex h-[52px] w-[235px] items-center justify-center bg-[#cd0303] text-[24px] font-light leading-normal text-white transition-colors hover:bg-[#a80202] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cd0303] max-md:w-full"
          >
            Book Consultation
          </Link>
          <Link
            href="#services"
            className="flex h-[52px] w-[237px] items-center justify-center border border-[#cd0303] bg-white text-[24px] font-light leading-normal text-[#cd0303] transition-colors hover:bg-[#fff5f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cd0303] max-md:w-full"
          >
            Pelajari lebih lanjut
          </Link>
        </div>
      </div>
    </section>
  );
}
