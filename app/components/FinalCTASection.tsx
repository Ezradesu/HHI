import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export function FinalCTASection() {
  return (
    <section
      id="contact"
      aria-labelledby="final-cta-heading"
      className="bg-[#fff5f5] px-[61px] pb-[160px] pt-[180px] max-lg:px-8 max-md:px-6 max-md:pb-24 max-md:pt-28"
    >
      <div className="mx-auto max-w-[1218px] border border-[#cd0303] p-10 lg:flex lg:items-end lg:justify-between lg:gap-16 lg:p-12 max-md:p-6">
        <div className="max-w-[760px]">
          <h2
            id="final-cta-heading"
            className="text-[64px] font-normal leading-[1.05] tracking-[-0.02em] text-[#cd0303] max-md:text-[43px]"
          >
            Ketika keputusan bisnis tidak bisa menunggu, pastikan langkah
            hukumnya tepat.
          </h2>
          <p className="mt-7 max-w-[660px] text-[24px] font-light leading-[1.35] text-[#797979] max-md:text-[21px]">
            Ceritakan tantangan yang sedang Anda hadapi. Kami membantu
            memetakan isu, menilai risiko, dan menentukan langkah berikutnya
            dengan lebih terarah.
          </p>
        </div>

        <a
          href="mailto:yurike@hhilaw.co.id"
          className="mt-10 inline-flex h-[56px] shrink-0 items-center justify-center gap-3 bg-[#cd0303] px-6 text-[18px] font-medium text-white transition-colors hover:bg-[#a80202] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#cd0303] lg:mt-0"
        >
          Jadwalkan Konsultasi
          <ArrowTopRightIcon aria-hidden="true" width={20} height={20} />
        </a>
      </div>
    </section>
  );
}
