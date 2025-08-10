import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          <span className="text-xl">Initium</span>
          <span className="text-brand-blue">.</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/about" className="hover:text-slate-700">
            About
          </Link>
          <Link href="/research" className="hover:text-slate-700">
            Research
          </Link>
          <Link href="/blog" className="hover:text-slate-700">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-slate-700">
            Contact
          </Link>
        </nav>
      </div>
      <div className="bg-brand-blue text-white text-center text-sm py-2">
        Feasible solutions by the youth
      </div>
    </header>
  );
}
