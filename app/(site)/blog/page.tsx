export default function BlogPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
      <p className="mt-3 text-slate-600">
        Insights, explainers, and behind-the-scenes notes.
      </p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <article
            key={i}
            className="rounded-2xl border border-slate-200 bg-white"
          >
            <div className="aspect-[16/10] bg-slate-100 rounded-t-2xl" />
            <div className="p-5">
              <h3 className="text-lg font-semibold">Post Title #{i}</h3>
              <p className="mt-2 text-sm text-slate-600">
                Brief excerpt goes here to invite the click.
              </p>
              <div className="mt-3 text-sm text-slate-500">
                3 min read · 2025
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
