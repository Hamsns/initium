// app/(site)/page.tsx
import Link from "next/link";
import NewsletterSection from "@/components/NewsletterSection";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{children}</h2>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <span className="inline-block text-xs font-medium px-2 py-1 rounded-full bg-blue-50 text-[#3498DB]">
      {text}
    </span>
  );
}

export default function HomePage() {
  // You can wire these to CMS later; for now, placeholders
  const featured = [
    {
      kind: "Research",
      title: "Policy pathways for equitable AI in schools",
      href: "/research",
      imgAlt: "Research cover",
    },
    {
      kind: "Blog",
      title: "Why minimum viable reforms work",
      href: "/blog",
      imgAlt: "Blog cover 1",
    },
    {
      kind: "Blog",
      title: "Designing student-led policy labs",
      href: "/blog",
      imgAlt: "Blog cover 2",
    },
  ];

  const research = Array.from({ length: 6 }).map((_, i) => ({
    title: `Paper Title #${i + 1}`,
    href: "/research",
  }));

  const blogs = Array.from({ length: 6 }).map((_, i) => ({
    title: `Post Title #${i + 1}`,
    href: "/blog",
  }));

  return (
    <>
      {/* Top ribbon like your reference */}
      <div className="bg-[#3498DB] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-11 flex items-center justify-center font-semibold">
          Feasible solutions by the youth
        </div>
      </div>

      {/* Wordmark / hero (light, clean) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-4">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <h1 className="text-[12vw] md:text-[7rem] leading-[0.85] font-black tracking-tight text-slate-900 select-none">
              INITIUM<span className="text-[#3498DB]">.</span>
            </h1>
          </div>
          <div className="md:col-span-4">
            <p className="text-lg md:text-xl font-semibold">
              Tomorrow through <span className="italic" style={{ color: "#2ECC71" }}>Today</span>
            </p>
          </div>
        </div>
      </section>

      {/* Featured: 1 Research + 2 Blogs */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <SectionHeading>Featured</SectionHeading>
        <div className="mt-6 grid md:grid-cols-3 gap-8">
          {featured.map((item, idx) => (
            <Link key={idx} href={item.href} className="group">
              <div className="aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-100 ring-1 ring-slate-200" />
              <div className="mt-4 flex items-center gap-3">
                <Tag text={item.kind} />
              </div>
              <h3 className="mt-3 text-xl font-semibold group-hover:underline">
                {item.title}
              </h3>
              <div className="mt-4 h-px bg-slate-200" />
            </Link>
          ))}
        </div>
      </section>

      {/* Research Papers */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-end justify-between">
          <div>
            <SectionHeading>Research Papers</SectionHeading>
            <p className="text-slate-600 mt-1">
              Peer-reviewed methods. Plain-English summaries. Free to read.
            </p>
          </div>
          <Link
            href="/research"
            className="px-4 py-2 rounded-xl border border-slate-300 hover:border-slate-400"
          >
            View all
          </Link>
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {research.map((r, i) => (
            <Link
              key={i}
              href={r.href}
              className="rounded-2xl border border-slate-200 bg-white hover:shadow-sm transition"
            >
              <div className="aspect-[16/10] bg-slate-100 rounded-t-2xl" />
              <div className="p-5">
                <div className="mb-2"><Tag text="Research" /></div>
                <h3 className="text-base font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Short abstract snippet goes here.
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-end justify-between">
          <SectionHeading>Blogs</SectionHeading>
          <Link
            href="/blog"
            className="px-4 py-2 rounded-xl border border-slate-300 hover:border-slate-400"
          >
            View all
          </Link>
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {blogs.map((b, i) => (
            <Link
              key={i}
              href={b.href}
              className="rounded-2xl border border-slate-200 bg-white hover:shadow-sm transition"
            >
              <div className="aspect-[16/10] bg-slate-100 rounded-t-2xl" />
              <div className="p-5">
                <div className="mb-2"><Tag text="Blog" /></div>
                <h3 className="text-base font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-slate-600">Brief excerpt goes here.</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter at the end */}
      <NewsletterSection />
    </>
  );
}
