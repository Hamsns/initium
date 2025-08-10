// app/(site)/page.tsx
import Link from "next/link";
import GradientHero from "@/components/GradientHero";
import NewsletterSection from "@/components/NewsletterSection";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-[28px] md:text-[32px] font-extrabold tracking-tight text-slate-900">{children}</h2>;
}
function Rule() { return <div className="h-px bg-slate-200" />; }
function Tag({ text }: { text: string }) {
  return <span className="inline-block text-xs font-medium px-2 py-1 rounded-full bg-blue-50 text-[#3498DB]">{text}</span>;
}

export default function HomePage() {
  // Featured: 1 Research + 2 Blog posts
  const featured = [
    { kind: "Research", title: "Policy pathways for equitable AI in schools", href: "/research" },
    { kind: "Blog", title: "Women’s Day March changed the game", href: "/blog" },
    { kind: "Blog", title: "France prepares for Election Day", href: "/blog" },
  ];

  const research = Array.from({ length: 6 }).map((_, i) => ({
    title: `Paper Title #${i + 1}`, href: "/research"
  }));
  const blogs = Array.from({ length: 6 }).map((_, i) => ({
    title: `Post Title #${i + 1}`, href: "/blog"
  }));

  return (
    <>
      {/* Top ribbon */}
      <div className="bg-[#3498DB] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-12 font-semibold flex items-center justify-center">
          Feasible solutions by the youth
        </div>
      </div>

      {/* INITIUM + divider + tagline (mirrors Wix) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <h1 className="text-[12vw] md:text-[7rem] leading-[0.85] font-black tracking-tight text-slate-900 select-none">
              INITIUM<span className="text-[#3498DB]">.</span>
            </h1>
          </div>

          {/* Vertical divider – same visual proportion as Wix; shows on md+ */}
          <div className="hidden md:flex md:col-span-1 items-end">
            <div
              className="w-[2px] bg-[#3498DB]"
              style={{ height: "72px", marginBottom: "8px" }}
              aria-hidden
            />
          </div>

          <div className="md:col-span-4 flex md:justify-start">
            <div className="md:pb-2">
              <div className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                Tomorrow through <span className="italic" style={{ color: "#2ECC71" }}>Today</span>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient banner (replaces Wix image, full width, square corners) */}
        <GradientHero />
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeading>Featured</SectionHeading>
        <div className="mt-8 grid md:grid-cols-3 gap-10">
          {featured.map((item, idx) => (
            <Link key={idx} href={item.href} className="group">
              <div className="aspect-[16/10] w-full bg-slate-100 ring-1 ring-slate-200" />
              <h3 className="mt-6 text-[26px] font-extrabold text-slate-900 group-hover:underline">
                {item.title}
              </h3>
              <Rule />
              <div className="mt-3"><Tag text={item.kind} /></div>
            </Link>
          ))}
        </div>
      </section>

      {/* Research Papers (before Blog, per your order) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex items-end justify-between">
          <SectionHeading>Research Papers</SectionHeading>
          <Link href="/research" className="px-4 py-2 rounded-xl border border-slate-300 hover:border-slate-400">View all</Link>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-10">
          {research.map((r, i) => (
            <Link key={i} href={r.href} className="group rounded-2xl border border-slate-200 bg-white hover:shadow-sm transition">
              <div className="aspect-[16/10] bg-slate-100 rounded-t-2xl" />
              <div className="p-5">
                <div className="mb-2"><Tag text="Research" /></div>
                <h3 className="text-base font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-slate-600">Short abstract snippet goes here.</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Blogs */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-end justify-between">
          <SectionHeading>Blogs</SectionHeading>
          <Link href="/blog" className="px-4 py-2 rounded-xl border border-slate-300 hover:border-slate-400">View all</Link>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-10">
          {blogs.map((b, i) => (
            <Link key={i} href={b.href} className="group rounded-2xl border border-slate-200 bg-white hover:shadow-sm transition">
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
