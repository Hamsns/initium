import Link from "next/link";
import NewsletterSection from "@/components/NewsletterSection";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Top row: Newsletter (left) + Actions (right) */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: compact newsletter */}
          <div>
            <NewsletterSection variant="compact" />
          </div>

          {/* Right: submit/partner box */}
          <div className="rounded-2xl border border-slate-200 p-6 bg-white">
            <h4 className="text-lg font-semibold text-slate-900">Work with us</h4>
            <p className="mt-2 text-sm text-slate-600">
              Collaborate on youth-led research or bring our team into your policy work.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/contact?type=submit-paper"
                className="inline-flex items-center rounded-xl bg-[#3498DB] text-white px-4 py-2 font-medium hover:opacity-90"
              >
                Submit a research paper
              </Link>
              <Link
                href="/contact?type=partner"
                className="inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 font-medium hover:border-slate-400"
              >
                Partner with us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom row: logo • links • copyright */}
        <div className="mt-10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-[#2ECC71] to-[#3498DB]" />
            <span className="font-medium text-slate-800">Initium</span>
          </div>
          <div className="flex gap-6">
            <Link className="hover:underline" href="/contact">Contact</Link>
            <Link className="hover:underline" href="#">Privacy</Link>
            <Link className="hover:underline" href="#">Terms</Link>
          </div>
          <div>© {new Date().getFullYear()} Initium. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
