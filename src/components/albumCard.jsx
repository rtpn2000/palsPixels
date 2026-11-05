
import { ArrowUpRight, Images } from "lucide-react";

export default function AlbumCard({ album }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#16161f] transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/10">

      {/* Album Cover */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={album.cover}
          alt={album.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* Album Title */}
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white">
              {album.title}
            </h3>

            <p className="mt-1 text-sm text-zinc-300">
              {album.date}
            </p>
          </div>

          <div className="rounded-full bg-white/20 p-3 backdrop-blur-md transition group-hover:bg-violet-600">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="flex items-center gap-2 px-5 py-4 text-sm text-zinc-400">
        <Images size={16} />
        <span>{album.photoCount} Photos</span>
      </div>
    </article>
  );
}