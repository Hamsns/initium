export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl font-bold tracking-tight">About Initium</h1>
      <p className="mt-4 text-slate-700 max-w-3xl">
        We’re a youth-led initiative building an on-ramp from student
        research to policy. Our method blends literature reviews,
        stakeholder interviews, and lightweight experiments to inform
        feasible recommendations.
      </p>
      <ul className="mt-6 list-disc pl-5 text-slate-700 space-y-2">
        <li>Interdisciplinary teams with mentor reviewers</li>
        <li>Plain-language briefs with technical appendices</li>
        <li>Open data where possible</li>
      </ul>
    </section>
  );
}
