import Image from "next/image";

import type { MabaProfile } from "../data/mock-maba-profiles";

export function MabaProfileCard({
  photoSrc,
  name,
  nrp,
  gugus,
}: MabaProfile) {
  return (
    <article className="w-full overflow-hidden rounded-[2rem] border border-[#e6dccb] bg-[#fffaf2] shadow-[0_26px_50px_rgba(136,112,74,0.12)] ring-1 ring-[#f0e7d8] transition-transform duration-200 hover:-translate-y-1">
      <div className="relative aspect-[4/5] overflow-hidden bg-[linear-gradient(180deg,#fcf8f0_0%,#f5efe1_62%,#f7f1e4_100%)]">
        <Image
          src={photoSrc}
          alt={`Foto ${name}`}
          width={800}
          height={960}
          className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 scale-[1.14] object-cover object-center object-bottom origin-bottom"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
        />
      </div>

      <div className="grid gap-1.5 border-t border-[#d9c9a3] bg-[#f4e7bb] px-5 py-5 shadow-[8px_8px_0_rgba(160,139,96,0.08)] sm:px-6">
        <h2 className="text-[1.18rem] leading-[1.15] font-extrabold tracking-[-0.03em] text-[#2f2923] sm:text-[1.35rem]">
          {name}
        </h2>
        <p className="text-[0.92rem] leading-6 font-semibold text-[#5f5238] sm:text-[0.98rem]">
          NRP {nrp} • {gugus}
        </p>
      </div>
    </article>
  );
}
