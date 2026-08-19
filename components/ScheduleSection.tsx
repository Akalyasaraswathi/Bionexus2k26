import { timeline } from "@/lib/data";

export default function ScheduleSection() {
  return (
    <section id="schedule" className="px-[6vw] py-[110px]">
      <div className="mb-[18px] flex items-center gap-[14px]">
        <div className="h-px w-10 bg-cyan" />
        <span className="text-[12px] font-semibold uppercase tracking-[3px] text-cyan">Run of Show</span>
      </div>
      <h2 className="font-serif-display italic font-semibold text-coat" style={{ fontSize: "clamp(30px,4vw,48px)" }}>
        Event Day Timeline
      </h2>

      <div className="mt-5 flex flex-col">
        {timeline.map((row, i) => (
          <div
            key={row.title}
            className={`grid grid-cols-[110px_1fr] gap-6 py-[22px] sm:grid-cols-[140px_1fr] ${
              i !== timeline.length - 1 ? "border-b border-line" : ""
            }`}
          >
            <div className="font-serif-display text-[18px] text-cyan">{row.time}</div>
            <div>
              <div className="mb-1 text-[15px] font-semibold text-coat">{row.title}</div>
              <div className="text-[13px] text-text-dim">{row.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
