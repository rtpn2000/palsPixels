
import { Camera, Images } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#09090f]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="rounded-xl bg-violet-600 p-2">
            <Camera size={22} className="text-white" />
          </div>

          <span className="text-xl font-extrabold tracking-tight">
            Pals<span className="text-violet-400">Pixels</span>
          </span>
        </a>

        {/* Navigation */}
        <a
          href="#albums"
          className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-sm font-medium transition hover:border-violet-400 hover:bg-white/5"
        >
          <Images size={17} />
          Albums
        </a>

      </nav>
    </header>
  );
}