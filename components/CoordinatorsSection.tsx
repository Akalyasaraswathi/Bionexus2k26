import { coordinators } from "@/lib/data";

export default function CoordinatorsSection() {
  return (
    <section id="coordinators" className="px-[6vw] py-[110px]">
      <div className="mb-[18px] flex items-center gap-[14px]">
        <div className="h-px w-10 bg-cyan" />
        <span className="text-[12px] font-semibold uppercase tracking-[3px] text-cyan">Behind BioNexus</span>
      </div>
      <h2 className="font-serif-display italic font-semibold text-coat" style={{ fontSize: "clamp(30px,4vw,48px)" }}>
        Coordinators
      </h2>

      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {coordinators.map((c) => (
          <div key={c.name} className="border-l-2 border-violet pl-4">
            <div className="mb-1.5 text-[11px] uppercase tracking-[2px] text-text-dim">{c.role}</div>
            <div className="font-serif-display italic text-[19px] text-coat">{c.name}</div>
            <div className="text-[12px] text-text-dim">{c.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
