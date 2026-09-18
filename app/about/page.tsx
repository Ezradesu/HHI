import type { Metadata } from "next";
import { AboutLocationSection } from "../components/AboutLocationSection";
import { FinalCTASection } from "../components/FinalCTASection";
import { Navbar } from "../components/Navbar";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Who We Are | Hidayat, Hendiry & Indrawan",
  description:
    "Learn about Hidayat, Hendiry & Indrawan Advocate Office and its approach to corporate and litigation matters.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fff5f5]">
      <Navbar />

      <main>
        <section
          aria-labelledby="about-heading"
          className="bg-[#fff5f5] px-[61px] pb-[144px] pt-[172px] max-lg:px-8 max-md:px-6 max-md:pb-24 max-md:pt-28"
        >
          <div className="mx-auto max-w-[1218px]">
            <p className="text-[18px] font-medium uppercase tracking-[0.12em] text-[#cd0303]">
              Who we are
            </p>
            <h1
              id="about-heading"
              className="mt-5 max-w-[930px] text-[clamp(56px,7vw,96px)] font-normal leading-[0.98] tracking-[-0.04em] text-[#cd0303] max-md:text-[52px]"
            >
              Who We Are
            </h1>
            <p className="mt-8 max-w-[720px] text-[24px] font-light leading-[1.35] text-[#797979] max-md:text-[21px]">
              HHI hadir untuk mengubah persoalan hukum yang kompleks menjadi
              arah yang lebih jelas, terukur, dan dapat diterapkan.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="about-story-heading"
          className="bg-[#fff5f5] px-[61px] pb-[160px] max-lg:px-8 max-md:px-6 max-md:pb-24"
        >
          <div className="mx-auto max-w-[1218px] border-t border-[#cd0303]/30 pt-8">
            <p className="text-[18px] font-medium uppercase tracking-[0.12em] text-[#cd0303]">
              Kenal Lebih Dalam
            </p>
            <div className="mt-12 grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-[100px]">
              <h2
                id="about-story-heading"
                className="max-w-[440px] text-[clamp(38px,4.2vw,56px)] font-normal leading-[1.02] tracking-[-0.03em] text-[#cd0303]"
              >
                Memahami persoalan sebelum memberi arah hukum.
              </h2>

              <div className="max-w-[820px] space-y-7 text-[20px] font-light leading-[1.6] text-[#4c4c4c] max-md:text-[18px]">
                <p>
                  Initially founded in 2006 as a boutique Advocate Office,
                  Hidayat, Hendiry &amp; Indrawan Advocate Office, or HHI, provides
                  complete and comprehensive legal services in both corporate
                  and litigation matters.
                </p>
                <p>
                  HHI was established as a highly competent and dedicated
                  advocate office that understands each client&apos;s needs and
                  problems. From that understanding, we formulate an
                  appropriate and effective approach and solution. We always
                  aim to deliver a high-quality work product that answers the
                  real needs of our clients.
                </p>
                <p>
                  In serving our clients&apos; best interests, HHI brings together
                  qualified people who continuously follow the development of
                  laws and regulations. We are also fully aware that time is of
                  the essence, which is why we work with the deadlines expected
                  by our clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        <AboutLocationSection />

        <FinalCTASection />
      </main>

      <SiteFooter />
    </div>
  );
}
