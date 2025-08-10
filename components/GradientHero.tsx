export default function GradientHero() {
  return (
    <section aria-label="Hero">
      <div
        className="w-full"
        style={{
          height: 420,
          background:
            "linear-gradient(90deg, #2ECC71 0%, #57D68C 35%, #6FC3F2 65%, #3498DB 100%)",
        }}
      >
        {/* The ONLY place the ribbon appears */}
        <div className="h-full flex items-center justify-center">
          <div
            className="bg-[#3498DB] text-white text-center font-semibold shadow-sm"
            style={{ height: 72, lineHeight: "72px", width: "86%" }}
          >
            Feasible solutions by the youth
          </div>
        </div>
      </div>
    </section>
  );
}
