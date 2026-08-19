import { technicalEvents, nonTechnicalEvents, specialEvents, type EventItem } from "@/lib/data";
import ScrollTransition from "@/components/ScrollTransition";

function EventCard({ item }: { item: EventItem }) {
  return (
    <div className="group relative overflow-hidden rounded-[10px] border border-line bg-gradient-to-br from-panel to-deep p-[28px_24px] transition-transform duration-300 hover:-translate-y-1.5 hover:border-violet">
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(circle at 30% 0%, rgba(124,92,255,.35), transparent 60%)" }}
      />
      <div className="font-serif-display text-[13px] tracking-[2px] text-text-dim">{item.num}</div>
      <div className="font-serif-display italic text-[26px] text-coat" style={{ margin: "10px 0 8px" }}>
        {item.name}
      </div>
      <div className="relative z-[2] text-[13px] leading-[1.6] text-text-dim">{item.desc}</div>
    </div>
  );
}

function Track({ label, items }: { label: string; items: EventItem[] }) {
  return (
    <div className="mb-16 last:mb-0">
      <div className="mb-5 text-[12px] font-semibold uppercase tracking-[3px] text-cyan">{label}</div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <EventCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function EventsSection() {
  return (
    <section id="events" className="px-[6vw] py-[110px]">
      <div className="mb-[18px] flex items-center gap-[14px]">
        <div className="h-px w-10 bg-cyan" />
        <span className="text-[12px] font-semibold uppercase tracking-[3px] text-cyan">What&apos;s On</span>
      </div>
      <h2 className="font-serif-display italic font-semibold text-coat" style={{ fontSize: "clamp(30px,4vw,48px)" }}>
        Trials of the Symposium
      </h2>
      <p className="mt-[14px] max-w-[560px] text-[15px] leading-[1.7] text-text-dim">
        Six events across three tracks — pick one and step in.
      </p>

      <div className="mt-[50px]">
        <ScrollTransition variant="left">
          <Track label="Technical Events" items={technicalEvents} />
        </ScrollTransition>

        <ScrollTransition variant="up">
          <Track label="Non-Technical Events" items={nonTechnicalEvents} />
        </ScrollTransition>

        <ScrollTransition variant="shutter">
          <Track label="Special Events — open to all, no registration needed" items={specialEvents} />
        </ScrollTransition>
      </div>
    </section>
  );
}
