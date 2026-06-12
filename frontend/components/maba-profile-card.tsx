import Image from "next/image";

import type { MabaProfile } from "../data/mock-maba-profiles";

export function MabaProfileCard({
  photoSrc,
  name,
  nrp,
  gugus,
}: MabaProfile) {
  return (
    <article className="w-full overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_26px_60px_rgba(37,99,235,0.16)] ring-1 ring-sky-100/80 transition-transform duration-200 hover:-translate-y-1">
      <div className="relative aspect-[4/5] overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#e0f2fe_58%,#f8fafc_100%)]">
        <Image
          src={photoSrc}
          alt={`Foto ${name}`}
          width={800}
          height={960}
          className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 scale-[1.14] object-cover object-center object-bottom origin-bottom"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
        />
      </div>

      <div className="grid gap-1.5 border-t border-slate-100 bg-slate-50/90 px-5 py-5 sm:px-6">
        <h2 className="text-[1.18rem] leading-[1.15] font-extrabold tracking-[-0.03em] text-slate-900 sm:text-[1.35rem]">
          {name}
        </h2>
        <p className="text-[0.92rem] leading-6 font-semibold text-sky-700 sm:text-[0.98rem]">
          NRP {nrp} • {gugus}
        </p>
      </div>
    </article>
  );
}
