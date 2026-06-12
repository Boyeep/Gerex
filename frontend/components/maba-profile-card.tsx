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
    <article className="profile-card">
      <div className="profile-card__photo-shell">
        <Image
          src={photoSrc}
          alt={`Foto ${name}`}
          width={180}
          height={180}
          className="profile-card__photo"
          priority
        />
      </div>

      <div className="profile-card__content">
        <span className="profile-card__badge">Maba 2026</span>
        <h2 className="profile-card__name">{name}</h2>

        <dl className="profile-card__meta">
          <div className="profile-card__meta-row">
            <dt>NRP</dt>
            <dd>{nrp}</dd>
          </div>
          <div className="profile-card__meta-row">
            <dt>Gugus</dt>
            <dd>{gugus}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
