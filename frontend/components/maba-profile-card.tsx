import Image from "next/image";

type MabaProfileCardProps = {
  photoSrc: string;
  name: string;
  nrp: string;
  gugus: string;
};

export function MabaProfileCard({
  photoSrc,
  name,
  nrp,
  gugus,
}: MabaProfileCardProps) {
  return (
    <article className="w-full max-w-[430px] overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_24px_60px_rgba(20,33,61,0.14)]">
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-sky-50 to-slate-50">
        <Image
          src={photoSrc}
          alt={`Foto ${name}`}
          width={800}
          height={960}
          className="h-full w-full object-contain object-center object-bottom"
          sizes="(max-width: 768px) 100vw, 430px"
          priority
        />
      </div>

      <div className="grid gap-1.5 px-5 py-5 sm:px-6">
        <h2 className="text-[1.65rem] leading-[1.15] font-extrabold tracking-[-0.03em] text-slate-900 sm:text-[1.9rem]">
          {name}
        </h2>
        <p className="text-base leading-7 font-semibold text-emerald-600 sm:text-[1.05rem]">
          NRP {nrp} • {gugus}
        </p>
      </div>
    </article>
  );
}
