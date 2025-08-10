import GradientHero from "@/components/GradientHero";
import NewsletterSection from "@/components/NewsletterSection";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="relative">
        <GradientHero />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-7">
              <h1 className="text-5xl font-bold tracking-tight">
                INITIUM<span className="text-brand-blue">.</span>
              </h1>
              <p className="mt-4 text-slate-600 max-w-xl">
                An interdisciplinary, youth-led hub translating ideas into policy
                impact across education, housing, and tech governance.
              </p>
              <div className="mt-6 flex gap-3">
                <Link
                  href="/research"
                  className="px-4 py-2 rounded-xl bg-brand-blue text-white font-medium"
                >
                  Explore research
                </Link>
                <Link
                  href="/contact"
                  className="px-4 py-2 rounded-xl border border-slate-300 font-medium"
                >
                  Partner with us
                </Link>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-2xl border border-slate-200 p-5 bg-white">
                <h3 className="font-semibold mb-2">Focus areas — 2025 cohort</h3>
                <ul className="text-slate-700 text-sm space-y-2">
                  <li>• Education access & quality</li>
                  <li>• Housing affordability</li>
                  <li>• AI governance</li>
                  <li>• Consumer & data rights</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold">Featured</h2>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {[0, 1, 2].map((i) => (
                <article key={i} className="group">
                  <div className="aspect-[16/10] w-full rounded-xl bg-slate-100 ring-1 ring-slate-200" />
                  <h3 className="mt-4 text-lg font-semibold group-hover:underline">
                    {i === 0 && "Women's Day March changed the game"}
                    {i === 1 && "Let's talk social reform"}
                    {i === 2 && "France prepares for Election Day"}
                  </h3>
                  <div className="mt-3 h-px bg-slate-200" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold">Latest research</h2>
            <p className="text-slate-600">
              Peer-reviewed methods. Plain-English summaries. Free to read.
            </p>
          </div>
          <Link
            href="/research"
            className="px-4 py-2 rounded-xl border border-slate-300"
          >
            View all
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 hover:shadow-sm transition"
            >
              <div className="p-5">
                <h3 className="text-base font-semibold">
                  Sample paper title #{i}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  One-sentence problem statement goes here to entice
                  policymakers and readers.
                </p>
                <div className="mt-4 text-sm text-slate-500">12-min read</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
