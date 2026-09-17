import Link from "next/link";

const team = [
  {
    name: "Syarif Hidayatullah",
    role: "Advocate · Trustee & Administrator in Bankruptcy",
    email: "syarif.hidayatullah@hhilaw.co.id",
    bio: "Berpraktik sebagai advokat sejak 2004, Mr. Hidayat memiliki kualifikasi sebagai Trustee dan Administrator in Bankruptcy. Ia berpengalaman menangani transaksi lintas sektor, termasuk telekomunikasi, pertambangan, perkebunan, cloud computing, dan proyek IT, serta perkara ketenagakerjaan, persaingan usaha, dan kepailitan. Ia juga pernah mewakili perusahaan minyak dan gas dalam proses arbitrase di Singapura.",
    bars: "Indonesian Advocates Association (PERADI)",
    education: "S.H., University of Indonesia School of Law, 2003",
  },
  {
    name: "Yurike Hendiry",
    role: "Advocate · Foreign Investment, Banking & Finance",
    email: "yurike@hhilaw.co.id",
    bio: "Berpraktik sejak 2002, Ms. Yurike berfokus pada investasi asing, perbankan dan keuangan, project financing, serta merger dan akuisisi. Ia telah mewakili sponsor dan lender dalam berbagai transaksi pembiayaan, dengan pendekatan yang memadukan ketelitian hukum dan pemahaman atas aspek komersial. Klien mengenalnya sebagai counsel yang berdedikasi dan konsisten menyelesaikan pekerjaan tepat waktu.",
    bars: "Indonesian Advocates Association (PERADI)",
    education:
      "S.H., University of Indonesia School of Law, 2004; LL.M., University of Groningen School of Law, 2012",
  },
  {
    name: "R. Gees Indrawanita",
    role: "Advocate · Labour, Litigation & Dispute Resolution",
    email: "gees.indrawan@hhilaw.co.id",
    bio: "Berpraktik sejak 2001, Ms. Gees memiliki pengalaman dalam perkara ketenagakerjaan, litigasi komersial, penyelesaian sengketa, imigrasi, serta hukum korporasi dan komersial. Sebelum bergabung dengan HHI, ia menjadi partner di firma hukum Indonesia yang berfokus pada hukum ketenagakerjaan, tempat ia memperdalam praktik tersebut dan litigasi komersial selama lebih dari satu dekade. Ia merupakan advokat berlisensi dan anggota PERADI.",
    bars: "Indonesian Advocates Association (PERADI)",
    education:
      "S.H., Trisakti University School of Law, 2001; M.H., University of Indonesia School of Law, 2016",
  },
];

function ProfileCard({
  name,
  role,
  email,
  bio,
  bars,
  education,
}: (typeof team)[number]) {
  return (
    <article className="border border-[#cd0303]/30 bg-transparent">
      <div
        role="img"
        aria-label={`Placeholder foto ${name}`}
        className="aspect-[1.15] bg-[#cd0303]"
      />
      <div className="p-6 max-md:p-5">
        <h3 className="text-[30px] font-medium leading-tight text-[#cd0303] max-md:text-[26px]">
          {name}
        </h3>
        <p className="mt-3 text-[16px] font-medium uppercase leading-[1.35] tracking-[0.08em] text-[#cd0303]">
          {role}
        </p>
        {email ? (
          <Link
            href={`mailto:${email}`}
            className="mt-3 inline-block text-[16px] font-light text-[#797979] underline decoration-[#cd0303]/40 underline-offset-4 transition-colors hover:text-[#cd0303] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#cd0303]"
          >
            {email}
          </Link>
        ) : null}
        <p className="mt-6 text-[17px] font-light leading-[1.5] text-[#797979]">
          {bio}
        </p>

        <dl className="mt-8 space-y-5 border-t border-[#cd0303]/20 pt-5 text-[16px] leading-[1.45]">
          <div>
            <dt className="font-medium uppercase tracking-[0.1em] text-[#cd0303]">
              Bars
            </dt>
            <dd className="mt-1 font-light text-[#797979]">{bars}</dd>
          </div>
          <div>
            <dt className="font-medium uppercase tracking-[0.1em] text-[#cd0303]">
              Education
            </dt>
            <dd className="mt-1 font-light text-[#797979]">{education}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export function MeetOurTeamSection() {
  return (
    <section
      id="people"
      aria-labelledby="team-heading"
      className="bg-[#fff5f5] px-[61px] pb-[160px] pt-[180px] max-lg:px-8 max-md:px-6 max-md:pb-24 max-md:pt-28"
    >
      <div className="mx-auto max-w-[1218px]">
        <h2
          id="team-heading"
          className="max-w-[780px] text-[64px] font-normal leading-[1.05] tracking-[-0.02em] text-[#cd0303] max-md:text-[43px]"
        >
          Meet Our Team
        </h2>
        <p className="mt-7 max-w-[660px] text-[24px] font-light leading-[1.35] text-[#797979] max-md:text-[21px]">
          Pengalaman, ketelitian, dan sudut pandang komersial yang membantu Anda
          menghadapi keputusan hukum dengan lebih percaya diri.
        </p>

        <div className="mt-[96px] grid gap-8 lg:mt-[120px] lg:grid-cols-3">
          {team.map((person) => (
            <ProfileCard key={person.name} {...person} />
          ))}
        </div>
      </div>
    </section>
  );
}
