export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-600">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-brand-green to-brand-blue" />
            <span className="font-medium text-slate-800">Initium</span>
          </div>
          <div className="flex gap-6">
            <a className="hover:underline" href="/contact">
              Contact
            </a>
            <a className="hover:underline" href="#">
              Privacy
            </a>
            <a className="hover:underline" href="#">
              Terms
            </a>
          </div>
          <div>© {new Date().getFullYear()} Initium. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
