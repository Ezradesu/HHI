import type { ElementType } from "react";
import {
  BarChartIcon,
  CheckCircledIcon,
  ChatBubbleIcon,
  TargetIcon,
} from "@radix-ui/react-icons";

const reasons: Array<{
  title: string;
  description: string;
  icon: ElementType;
}> = [
  {
    title: "Strategi yang Terukur",
    description:
      "Setiap langkah hukum dirancang dengan analisis risiko dan tujuan bisnis yang jelas.",
    icon: TargetIcon,
  },
  {
    title: "Pengalaman yang Relevan",
    description:
      "Pemahaman mendalam terhadap kebutuhan perusahaan di berbagai sektor industri.",
    icon: BarChartIcon,
  },
  {
    title: "Pendampingan Responsif",
    description:
      "Komunikasi yang terbuka dan respons cepat untuk membantu Anda mengambil keputusan.",
    icon: ChatBubbleIcon,
  },
  {
    title: "Berorientasi pada Solusi",
    description:
      "Nasihat praktis yang membantu menyelesaikan persoalan, bukan menambah kerumitan.",
    icon: CheckCircledIcon,
  },
];

function ReasonCard({
  title,
  description,
  icon: Icon,
}: (typeof reasons)[number]) {
  return (
    <article className="group min-h-[224px] border border-[#cd0303]/30 bg-transparent p-6 transition-colors duration-300 hover:border-[#cd0303] hover:bg-[#cd0303] max-md:min-h-0">
      <div className="flex items-start gap-4">
        <span className="flex size-10 shrink-0 items-center justify-center border border-[#cd0303] text-[#cd0303] transition-colors duration-300 group-hover:border-white group-hover:text-white">
          <Icon aria-hidden="true" width={20} height={20} />
        </span>
        <div>
          <h3 className="text-[24px] font-medium leading-tight text-[#cd0303] transition-colors duration-300 group-hover:text-white max-md:text-[21px]">
            {title}
          </h3>
          <p className="mt-3 max-w-[360px] text-[17px] font-light leading-[1.45] text-[#797979] transition-colors duration-300 group-hover:text-white/85">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

export function ReasonToChooseSection() {
  return (
    <section
      id="about"
      aria-labelledby="reason-heading"
      className="bg-[#fff5f5] px-[61px] pb-[160px] pt-[180px] max-lg:px-8 max-md:px-6 max-md:pb-24 max-md:pt-28"
    >
      <div className="mx-auto max-w-[1218px]">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-[100px]">
          <div
            role="img"
            aria-label="Placeholder gambar profil firma hukum"
            className="aspect-[1.03] w-full bg-[#cd0303]"
          />

          <div>
            <p className="text-[18px] font-medium uppercase tracking-[0.12em] text-[#cd0303]">
              Reason to choose
            </p>
            <h2
              id="reason-heading"
              className="mt-5 max-w-[620px] text-[64px] font-normal leading-[1.05] text-[#cd0303] max-md:text-[43px]"
            >
              Mitra Hukum yang Memahami Arah Bisnis Anda
            </h2>
            <p className="mt-7 max-w-[560px] text-[24px] font-light leading-[1.35] text-[#797979] max-md:text-[21px]">
              Kami berusaha memahami kesulitan yang Anda hadapi, menilai
              risikonya, dan menyusun langkah hukum terbaik.
            </p>
          </div>
        </div>

        <div className="mt-[112px] grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:mt-[132px] lg:grid-cols-4 lg:gap-8">
          {reasons.map((reason) => (
            <ReasonCard key={reason.title} {...reason} />
          ))}
        </div>
      </div>
    </section>
  );
}
