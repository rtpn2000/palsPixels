
import { Sparkles, Images } from "lucide-react";
import Navbar from "../components/navbar";
import AlbumCard from "../components/albumCard";
import { albums } from "../data/albums";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6">

        {/* Hero Section */}
        <section className="relative overflow-hidden py-24">

          <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-96 -translate-x-1/2 rounded-full bg-violet-600/15 blur-[110px]" />

          <div className="relative">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
              <Sparkles size={16} />
              Welcome to PalsPixels
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight sm:text-7xl">
              Every memory
              <br />
              has a <span className="text-violet-400">story.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              From spontaneous adventures to unforgettable celebrations.
              All our favorite moments, organized in one place.
            </p>
          </div>
        </section>

        {/* Albums Section */}
        <section id="albums" className="scroll-mt-28 pb-28">

          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
                The Collection
              </p>

              <h2 className="text-3xl font-bold sm:text-4xl">
                Our Albums
              </h2>

              <p className="mt-3 text-zinc-400">
                A collection of moments worth keeping.
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400">
              <Images size={16} />
              {albums.length} Albums
            </div>
          </div>

          {/* Album Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {albums.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </div>

        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-zinc-500">
        Made for the memories. © {new Date().getFullYear()} PalsPixels.
      </footer>
    </>
  );
}