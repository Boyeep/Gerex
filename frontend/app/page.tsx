import { MabaProfileCard } from "../components/maba-profile-card";

const sampleMaba = {
  photoSrc: "/Professional-Photo.jpeg",
  name: "Raka Pradana",
  nrp: "5025241001",
  gugus: "Gugus Arunika",
};

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1100px] px-4 py-10 sm:px-6">
      <section className="flex justify-center">
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
