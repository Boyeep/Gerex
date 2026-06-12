import { MabaProfileCard } from "../components/maba-profile-card";

const sampleMaba = {
  photoSrc: "/maba-photo.svg",
  name: "Raka Pradana",
  nrp: "5025241001",
  gugus: "Gugus Arunika",
};

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero__copy">
          <p className="eyebrow">Frontend Demo</p>
          <h1>Kartu Profil Maba</h1>
          <p className="hero__description">
            Komponen dibuat ringkas, rapi, dan responsif agar informasi utama
            mahasiswa baru tetap mudah dibaca di berbagai ukuran layar.
          </p>
        </div>

        <MabaProfileCard
          photoSrc={sampleMaba.photoSrc}
          name={sampleMaba.name}
          nrp={sampleMaba.nrp}
          gugus={sampleMaba.gugus}
        />
      </section>
    </main>
  );
}
