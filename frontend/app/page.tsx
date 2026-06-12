"use client";

import {
  startTransition,
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
} from "react";

import { MabaProfileCard } from "../components/maba-profile-card";
import { mockMabaProfiles } from "../data/mock-maba-profiles";

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

  const renderPagination = () => (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <button
        type="button"
        onClick={() =>
          startTransition(() => {
            setCurrentPage((page) => Math.max(1, page - 1));
          })
        }
        disabled={currentPage === 1}
        className="h-11 rounded-2xl border border-[#d8ccb8] bg-[#f6efdf] px-4 text-sm font-semibold text-[#5f5547] transition hover:border-[#bfa98b] hover:bg-[#f1e6cf] hover:text-[#3c342c] disabled:cursor-not-allowed disabled:opacity-45"
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
                ? "bg-[#d9c08b] text-[#2e271f] shadow-[0_12px_24px_rgba(166,136,74,0.22)]"
                : "border border-[#d8ccb8] bg-[#f6efdf] text-[#5f5547] hover:border-[#bfa98b] hover:bg-[#f1e6cf] hover:text-[#3c342c]"
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
        className="h-11 rounded-2xl border border-[#d8ccb8] bg-[#f6efdf] px-4 text-sm font-semibold text-[#5f5547] transition hover:border-[#bfa98b] hover:bg-[#f1e6cf] hover:text-[#3c342c] disabled:cursor-not-allowed disabled:opacity-45"
      >
        Next
      </button>
    </div>
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(228,212,166,0.35),_transparent_24rem),radial-gradient(circle_at_bottom_right,_rgba(214,197,156,0.22),_transparent_28rem),linear-gradient(180deg,#f6f0e4_0%,#efe5d1_100%)]">
      <section className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-4 py-10 sm:px-6 lg:px-8">
        <div className="absolute left-1/2 top-32 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[#ead9ab]/35 blur-3xl sm:h-[30rem] sm:w-[30rem]" />

        <div className="relative space-y-6">
          <div className="space-y-4">
            <div className="space-y-1">
              <p className="text-sm font-semibold tracking-[0.18em] text-[#8a775c] uppercase">
                Maba Finder
              </p>
              <h1 className="text-3xl font-black tracking-[-0.04em] text-[#2f2923] sm:text-4xl">
                Maba Profile Card
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-[#6f6557] sm:text-base">
                By: Boy Steven Benaya Aritonang (5025251154)
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-[1.75rem] border border-[#ddd1bc] bg-[#f8f2e7]/95 p-4 shadow-[0_20px_50px_rgba(130,110,76,0.12)] backdrop-blur sm:flex-row sm:items-center sm:justify-between">
              <label className="relative block w-full sm:max-w-xl">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-[#998b76]">
                  Search
                </span>
                <input
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Cari nama, NRP, atau gugus"
                  className="h-14 w-full rounded-2xl border border-[#ddd1bc] bg-[#fffaf0] pl-20 pr-4 text-sm font-medium text-[#302921] outline-none transition placeholder:text-[#a69780] focus:border-[#c8ad79] focus:bg-white focus:ring-4 focus:ring-[#ead9ab]/35"
                />
              </label>

              <div className="rounded-2xl border border-[#dcc791] bg-[#f4e7bb] px-4 py-3 text-sm font-semibold text-[#5f5238]">
                {filteredProfiles.length} maba ditemukan
              </div>
            </div>

            {filteredProfiles.length > 0 && renderPagination()}
          </div>

          {filteredProfiles.length > 0 ? (
            <div className="space-y-6">
              <div className="flex flex-col gap-3 text-sm font-semibold text-[#6f6557] sm:flex-row sm:items-center sm:justify-between">
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

              {renderPagination()}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-dashed border-[#d8ccb8] bg-[#fbf6eb]/90 px-6 py-16 text-center text-[#6f6557] backdrop-blur">
              Tidak ada data maba yang cocok dengan pencarianmu.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
