import type { Metadata } from "next";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { FinalCTASection } from "../components/FinalCTASection";
import { Navbar } from "../components/Navbar";
import { SiteFooter } from "../components/SiteFooter";
import { practiceAreas } from "../components/services-content";

export const metadata: Metadata = {
  title: "Services | Hidayat, Hendiry & Indrawan",
  description:
    "Explore HHI's principal values and areas of practice across corporate and litigation matters.",
};

const principalValues = [
  {
    title: "High integrity",
    detail: "and the best quality of work product",
  },
  { title: "Full dedication", detail: "" },
  { title: "Prompt response", detail: "" },
  { title: "Confidentiality", detail: "" },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#fff5f5]">
      <Navbar />

      <main>
        <section
          aria-labelledby="services-page-heading"
          className="bg-[#fff5f5] px-[61px] pb-[150px] pt-[172px] max-lg:px-8 max-md:px-6 max-md:pb-24 max-md:pt-28"
        >
          <div className="mx-auto max-w-[1218px]">
            <p className="text-[18px] font-medium uppercase tracking-[0.12em] text-[#cd0303]">
              Our services
            </p>
            <h1
              id="services-page-heading"
              className="mt-5 max-w-[980px] text-[clamp(56px,7vw,96px)] font-normal leading-[0.98] tracking-[-0.04em] text-[#cd0303] max-md:text-[52px]"
            >
              Legal counsel with clarity, depth, and commitment.
            </h1>
            <p className="mt-8 max-w-[720px] text-[24px] font-light leading-[1.35] text-[#797979] max-md:text-[21px]">
              HHI memberikan layanan hukum yang komprehensif, baik dalam
              corporate maupun litigation, dengan fokus pada solusi yang
              praktis dan kepentingan terbaik setiap klien.
            </p>
          </div>
        </section>

        <section
          id="principal-value"
          aria-labelledby="principal-value-heading"
          className="bg-[#cd0303] px-[61px] py-[150px] text-[#fff5f5] max-lg:px-8 max-md:px-6 max-md:py-24"
        >
          <div className="mx-auto max-w-[1218px]">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-[100px]">
              <div>
                <p className="text-[18px] font-medium uppercase tracking-[0.12em] text-[#fff5f5]/75">
                  Principal value
                </p>
                <h2
                  id="principal-value-heading"
                  className="mt-5 max-w-[430px] text-[clamp(42px,5vw,64px)] font-normal leading-[1.02] tracking-[-0.035em]"
                >
                  What guides our work.
                </h2>
              </div>

              <div className="max-w-[780px]">
                <p className="max-w-[690px] text-[24px] font-light leading-[1.4] text-[#fff5f5]/85 max-md:text-[21px]">
                  In order to maintain client satisfaction, HHI strives and
                  strictly adheres to the following principal values:
                </p>
                <div className="mt-12 grid gap-0 border-t border-[#fff5f5]/35 sm:grid-cols-2">
                  {principalValues.map((value) => (
                    <div
                      key={value.title}
                      className="border-b border-[#fff5f5]/35 py-6 pr-6 text-[24px] leading-[1.15] max-md:text-[21px] sm:min-h-[112px]"
                    >
                      <p className="font-medium">{value.title}</p>
                      {value.detail && (
                        <p className="mt-1 font-light">{value.detail}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="practice"
          aria-labelledby="practice-heading"
          className="bg-[#fff5f5] px-[61px] py-[160px] max-lg:px-8 max-md:px-6 max-md:py-24"
        >
          <div className="mx-auto max-w-[1218px]">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-[100px]">
              <div>
                <p className="text-[18px] font-medium uppercase tracking-[0.12em] text-[#cd0303]">
                  Practice
                </p>
                <h2
                  id="practice-heading"
                  className="mt-5 max-w-[440px] text-[clamp(42px,5vw,64px)] font-normal leading-[1.02] tracking-[-0.035em] text-[#cd0303]"
                >
                  Experience that moves with your business.
                </h2>
              </div>

              <div>
                <p className="max-w-[770px] text-[24px] font-light leading-[1.4] text-[#797979] max-md:text-[21px]">
                  The advocates at HHI have the depth of Indonesian legal
                  knowledge and experience to deliver efficient and high-quality
                  work product. We emphasize and focus our practice on the
                  following areas:
                </p>
                <div className="mt-12 grid border-t border-[#cd0303]/30 md:grid-cols-2 md:gap-x-10">
                  {practiceAreas.map((area, index) => (
                    <article
                      key={area.title}
                      className="border-b border-[#cd0303]/30 py-6"
                    >
                      <p className="text-[14px] font-medium uppercase tracking-[0.12em] text-[#cd0303]/65">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-3 text-[27px] font-medium leading-[1.05] text-[#cd0303] max-md:text-[24px]">
                        {area.title}
                      </h3>
                      <p className="mt-3 max-w-[330px] text-[17px] font-light leading-[1.4] text-[#797979]">
                        {area.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="advocates"
          aria-labelledby="advocates-heading"
          className="bg-[#990000] px-[61px] py-[150px] text-[#fff5f5] max-lg:px-8 max-md:px-6 max-md:py-24"
        >
          <div className="mx-auto max-w-[1218px]">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-[100px]">
              <div>
                <p className="text-[18px] font-medium uppercase tracking-[0.12em] text-[#fff5f5]/70">
                  Advocates
                </p>
                <h2
                  id="advocates-heading"
                  className="mt-5 max-w-[430px] text-[clamp(42px,5vw,64px)] font-normal leading-[1.02] tracking-[-0.035em]"
                >
                  The people behind the practice.
                </h2>
              </div>

              <div className="max-w-[780px]">
                <p className="text-[clamp(28px,3.5vw,46px)] font-light leading-[1.15] tracking-[-0.02em]">
                  HHI strives to develop the finest advocates. We take extra
                  steps to maximize the quality of{" "}
                  <strong className="font-medium">
                    integrity, intelligence, excellence, creativity,
                  </strong>{" "}
                  and <strong className="font-medium">commitment</strong> of each
                  advocate in our office.
                </p>
                <p className="mt-10 max-w-[700px] text-[22px] font-light leading-[1.45] text-[#fff5f5]/80 max-md:text-[19px]">
                  All advocates at HHI provide very practical legal solutions
                  with full integrity and commitment to serve our client&apos;s
                  best interest.
                </p>
                <Link
                  href="/#people"
                  className="mt-10 inline-flex items-center gap-3 border-b border-[#fff5f5] pb-2 text-[17px] font-medium transition-opacity hover:opacity-65 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fff5f5]"
                >
                  Kenal tim kami
                  <ArrowTopRightIcon aria-hidden="true" width={18} height={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FinalCTASection />
      </main>

      <SiteFooter />
    </div>
  );
}
