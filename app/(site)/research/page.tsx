export default function ResearchPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl font-bold tracking-tight">Research Papers</h1>
      <p className="mt-3 text-slate-600">
        Peer-reviewed methods, plain-English summaries, open where possible.
      </p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <article
            key={i}
            className="rounded-2xl border border-slate-200 bg-white"
          >
            <div className="p-5">
              <h3 className="text-lg font-semibold">Paper Title #{i}</h3>
              <p className="mt-2 text-sm text-slate-600">
                Short abstract snippet goes here.
              </p>
              <div className="mt-3 text-sm text-slate-500">
                Category · 2025
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
