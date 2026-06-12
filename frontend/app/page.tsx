"use client";

import {
  startTransition,
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
} from "react";

import { MabaProfileCard, type MabaProfileCardProps } from "../components/maba-profile-card";

const mockMabaProfiles: MabaProfileCardProps[] = [
  {
    photoSrc: "/Professional-Photo.jpeg",
    name: "Boy Steven Benaya Aritonang",
    nrp: "5025251154",
    gugus: "Gugus Arunika",
  },
  {
    photoSrc: "/Professional-Photo.jpeg",
    name: "Nadia Putri Lestari",
    nrp: "5025251107",
    gugus: "Gugus Cakrawala",
  },
  {
    photoSrc: "/Professional-Photo.jpeg",
    name: "Raka Mahendra",
    nrp: "5025251121",
    gugus: "Gugus Samudra",
  },
  {
    photoSrc: "/Professional-Photo.jpeg",
    name: "Keisha Aurellia",
    nrp: "5025251133",
    gugus: "Gugus Bhaskara",
  },
  {
    photoSrc: "/Professional-Photo.jpeg",
    name: "Farras Althaf",
    nrp: "5025251148",
    gugus: "Gugus Arunika",
  },
  {
    photoSrc: "/Professional-Photo.jpeg",
    name: "Alya Rahmadini",
    nrp: "5025251160",
    gugus: "Gugus Cakrawala",
  },
  {
    photoSrc: "/Professional-Photo.jpeg",
    name: "Iqbal Ramadhan",
    nrp: "5025251172",
    gugus: "Gugus Bhaskara",
  },
  {
    photoSrc: "/Professional-Photo.jpeg",
    name: "Celine Maharani",
    nrp: "5025251185",
    gugus: "Gugus Samudra",
  },
  {
    photoSrc: "/Professional-Photo.jpeg",
    name: "Rizky Aditya",
    nrp: "5025251191",
    gugus: "Gugus Arunika",
  },
  {
    photoSrc: "/Professional-Photo.jpeg",
    name: "Annisa Rahma",
    nrp: "5025251194",
    gugus: "Gugus Cakrawala",
  },
  {
    photoSrc: "/Professional-Photo.jpeg",
    name: "Tegar Prasetyo",
    nrp: "5025251198",
    gugus: "Gugus Samudra",
  },
  {
    photoSrc: "/Professional-Photo.jpeg",
    name: "Michelle Valencia",
    nrp: "5025251202",
    gugus: "Gugus Bhaskara",
  },
  {
    photoSrc: "/Professional-Photo.jpeg",
    name: "Dion Wicaksono",
    nrp: "5025251208",
    gugus: "Gugus Arunika",
  },
  {
    photoSrc: "/Professional-Photo.jpeg",
    name: "Salsa Kirana",
    nrp: "5025251215",
    gugus: "Gugus Cakrawala",
  },
  {
    photoSrc: "/Professional-Photo.jpeg",
    name: "Galang Saputra",
    nrp: "5025251224",
    gugus: "Gugus Samudra",
  },
  {
    photoSrc: "/Professional-Photo.jpeg",
    name: "Clarissa Evangeline",
    nrp: "5025251230",
    gugus: "Gugus Bhaskara",
  },
  {
    photoSrc: "/Professional-Photo.jpeg",
    name: "Bagas Maulana",
    nrp: "5025251236",
    gugus: "Gugus Arunika",
  },
  {
    photoSrc: "/Professional-Photo.jpeg",
    name: "Naura Amanda",
    nrp: "5025251242",
    gugus: "Gugus Cakrawala",
  },
  {
    photoSrc: "/Professional-Photo.jpeg",
    name: "Hafiz Ma'ruf",
    nrp: "5025251249",
    gugus: "Gugus Samudra",
  },
  {
    photoSrc: "/Professional-Photo.jpeg",
    name: "Shania Olivia",
    nrp: "5025251255",
    gugus: "Gugus Bhaskara",
  },
  {
    photoSrc: "/Professional-Photo.jpeg",
    name: "Kevin Fernando",
    nrp: "5025251263",
    gugus: "Gugus Arunika",
  },
  {
    photoSrc: "/Professional-Photo.jpeg",
    name: "Aurel Natasha",
    nrp: "5025251268",
    gugus: "Gugus Cakrawala",
  },
  {
    photoSrc: "/Professional-Photo.jpeg",
    name: "Naufal Ibrahim",
    nrp: "5025251274",
    gugus: "Gugus Samudra",
  },
  {
    photoSrc: "/Professional-Photo.jpeg",
    name: "Felicia Putri",
    nrp: "5025251281",
    gugus: "Gugus Bhaskara",
  },
];

const cardsPerPage = 16;

export default function Home() {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const deferredQuery = useDeferredValue(query);

  const filteredProfiles = useMemo(() => {
    const normalizedQuery = deferredQuery.trim().toLowerCase();

    if (!normalizedQuery) {
      return mockMabaProfiles;
    }

    return mockMabaProfiles.filter((profile) =>
      [profile.name, profile.nrp, profile.gugus]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [deferredQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredProfiles.length / cardsPerPage));

  useEffect(() => {
    startTransition(() => {
      setCurrentPage(1);
    });
  }, [deferredQuery]);

  useEffect(() => {
    if (currentPage > totalPages) {
      startTransition(() => {
        setCurrentPage(totalPages);
      });
    }
  }, [currentPage, totalPages]);

  const visibleProfiles = useMemo(() => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    return filteredProfiles.slice(startIndex, startIndex + cardsPerPage);
  }, [currentPage, filteredProfiles]);

  const pageNumbers = useMemo(
    () => Array.from({ length: totalPages }, (_, index) => index + 1),
    [totalPages],
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.22),_transparent_24rem),linear-gradient(180deg,#eef6ff_0%,#dbeafe_100%)]">
      <section className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-4 py-10 sm:px-6 lg:px-8">
        <div className="absolute left-1/2 top-32 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-sky-200/45 blur-3xl sm:h-[30rem] sm:w-[30rem]" />

        <div className="relative space-y-6">
          <div className="space-y-4">
            <div className="space-y-1">
              <p className="text-sm font-semibold tracking-[0.18em] text-sky-700 uppercase">
                Mock Data
              </p>
              <h1 className="text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl">
                Direktori Kartu Profil Maba
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Contoh reuse komponen kartu profil dalam grid responsif dengan
                search bar di bagian atas.
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-[1.75rem] border border-white/80 bg-white/80 p-4 shadow-[0_20px_60px_rgba(37,99,235,0.12)] backdrop-blur sm:flex-row sm:items-center sm:justify-between">
              <label className="relative block w-full sm:max-w-xl">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-400">
                  Search
                </span>
                <input
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Cari nama, NRP, atau gugus"
                  className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-20 pr-4 text-sm font-medium text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                />
              </label>

              <div className="rounded-2xl bg-sky-50 px-4 py-3 text-sm font-semibold text-sky-700">
                {filteredProfiles.length} maba ditemukan
              </div>
            </div>
          </div>

          {filteredProfiles.length > 0 ? (
            <div className="space-y-6">
              <div className="flex flex-col gap-3 text-sm font-semibold text-slate-600 sm:flex-row sm:items-center sm:justify-between">
                <p>
                  Menampilkan {(currentPage - 1) * cardsPerPage + 1}-
                  {Math.min(currentPage * cardsPerPage, filteredProfiles.length)} dari{" "}
                  {filteredProfiles.length} data
                </p>
                <p>
                  Halaman {currentPage} dari {totalPages}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                {visibleProfiles.map((profile) => (
                  <MabaProfileCard
                    key={profile.nrp}
                    photoSrc={profile.photoSrc}
                    name={profile.name}
                    nrp={profile.nrp}
                    gugus={profile.gugus}
                  />
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    startTransition(() => {
                      setCurrentPage((page) => Math.max(1, page - 1));
                    })
                  }
                  disabled={currentPage === 1}
                  className="h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700 disabled:cursor-not-allowed disabled:opacity-45"
                >
                  Previous
                </button>

                {pageNumbers.map((pageNumber) => {
                  const isActive = pageNumber === currentPage;

                  return (
                    <button
                      key={pageNumber}
                      type="button"
                      onClick={() =>
                        startTransition(() => {
                          setCurrentPage(pageNumber);
                        })
                      }
                      className={`h-11 min-w-11 rounded-2xl px-4 text-sm font-bold transition ${
                        isActive
                          ? "bg-sky-600 text-white shadow-[0_12px_30px_rgba(2,132,199,0.28)]"
                          : "border border-slate-200 bg-white text-slate-700 hover:border-sky-300 hover:text-sky-700"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                })}

                <button
                  type="button"
                  onClick={() =>
                    startTransition(() => {
                      setCurrentPage((page) => Math.min(totalPages, page + 1));
                    })
                  }
                  disabled={currentPage === totalPages}
                  className="h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700 disabled:cursor-not-allowed disabled:opacity-45"
                >
                  Next
                </button>
              </div>
            </div>
          ) : (
            <div className="rounded-[2rem] border border-dashed border-sky-200 bg-white/70 px-6 py-16 text-center text-slate-600 backdrop-blur">
              Tidak ada data maba yang cocok dengan pencarianmu.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
