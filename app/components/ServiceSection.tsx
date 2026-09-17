import Image from "next/image";

const services = [
  {
    title: "Corporate Law",
    description: "Pendirian, restrukturisasi, governance.",
  },
  {
    title: "Litigation",
    description: "Civil & Commercial disputes.",
  },
  {
    title: "Contract Review",
    description: "Drafting & negotiation",
  },
  {
    title: "Compliance",
    description: "Regulatory advisory.",
  },
  {
    title: "Corporate Advisory",
    description: "Legal opinion.",
  },
  {
    title: "Retainer",
    description: "On going legal support.",
  },
];

function HeadlineHandles() {
  return (
    <div className="relative max-w-[916px]">
      <h2
        id="services-heading"
        className="max-w-[840px]  text-left text-[64px] font-normal leading-[1.05] text-[#cd0303] max-md:px-4 max-md:text-[43px]"
      >
        Solusi Hukum untuk Bisnis yang Terus Berkembang
      </h2>
    </div>
  );
}

function ServiceCard({ title, description }: (typeof services)[number]) {
  return (
    <article className="relative aspect-[344/374] overflow-hidden border border-[#cd0303]/15 bg-[#cd0303] xl:h-[374px] xl:aspect-auto">
      <Image
        src="/service/service holder.png"
        alt=""
        fill
        priority
        sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1279px) calc(50vw - 48px), 344px"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[153px] bg-gradient-to-t from-[#cd0303] from-[61.111%] to-transparent"
      />
      <div className="absolute inset-x-0 bottom-0 px-5 pb-[42px] text-white">
        <h3 className="text-[28px] font-medium leading-tight max-md:text-[24px]">
          {title}
        </h3>
        <p className="mt-3 text-[17px] font-light leading-[1.45]">
          {description}
        </p>
      </div>
    </article>
  );
}

export function ServiceSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-[#fff5f5] px-[61px] pb-[160px] pt-[180px] max-lg:px-8 max-md:px-6 max-md:pb-24 max-md:pt-28"
    >
      <div className="mx-auto max-w-[1218px]">
        <p className="text-[18px] font-medium uppercase tracking-[0.12em] text-[#cd0303]">
          Our services
        </p>
        <div className="mt-5">
          <HeadlineHandles />
        </div>
        <p className="mt-7 max-w-[720px] text-[24px] font-light leading-[1.35] text-[#797979] max-md:text-[21px]">
          Apakah risiko hukum, kontrak yang belum jelas, atau sengketa yang
          berlarut sedang menghambat langkah bisnis Anda? Kami membantu
          memetakan persoalan, menilai risikonya, dan menyusun langkah hukum
          yang lebih terarah.
        </p>
        <div className="mt-[84px] grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
