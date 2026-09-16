import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const steps = [
  {
    number: "01",
    title: "Pahami konteksnya",
    description:
      "Kami mulai dengan mendengarkan tujuan, tantangan, dan situasi bisnis yang sedang Anda hadapi.",
  },
  {
    number: "02",
    title: "Petakan risikonya",
    description:
      "Kami mengurai isu hukum yang relevan agar Anda memahami pilihan dan konsekuensi setiap langkah.",
  },
  {
    number: "03",
    title: "Susun strateginya",
    description:
      "Kami merancang pendekatan yang selaras dengan kebutuhan bisnis, prioritas, dan batasan yang ada.",
  },
  {
    number: "04",
    title: "Dampingi eksekusinya",
    description:
      "Kami membantu menerjemahkan strategi menjadi tindakan yang jelas dan keputusan yang lebih mantap.",
  },
];

export function HowWeWorkSection() {
  return (
    <section
      id="how-we-work"
      aria-labelledby="how-we-work-heading"
      className="bg-[#cd0303] px-[61px] py-[160px] text-[#fff5f5] max-lg:px-8 max-md:px-6 max-md:py-24"
    >
      <div className="mx-auto max-w-[1218px]">
        <div className="max-w-[780px]">
          <h2
            id="how-we-work-heading"
            className="text-[64px] font-normal leading-[1.05] tracking-[-0.02em] max-md:text-[43px]"
          >
            Dari persoalan hukum menuju langkah yang lebih pasti
          </h2>
          <p className="mt-7 max-w-[660px] text-[24px] font-light leading-[1.35] text-white/85 max-md:text-[21px]">
            Proses kami dibuat terstruktur agar Anda selalu tahu apa yang perlu
            dipahami, dipertimbangkan, dan dilakukan berikutnya.
          </p>
        </div>

        <ol className="mt-[96px] grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-[120px] lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.number}
              className="border-t border-white/45 pt-5 transition-colors duration-300 hover:border-white"
            >
              <div className="flex items-center justify-between text-white/70">
                <span className="text-[18px] font-medium tracking-[0.12em]">
                  {step.number}
                </span>
                <ArrowTopRightIcon aria-hidden="true" width={20} height={20} />
              </div>
              <h3 className="mt-8 text-[27px] font-medium leading-tight max-md:text-[24px]">
                {step.title}
              </h3>
              <p className="mt-4 text-[17px] font-light leading-[1.45] text-white/85">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
