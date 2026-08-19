export default function VenueFoodSection() {
  return (
    <section id="venue" className="px-[6vw] py-[110px]">
      <div className="mb-[18px] flex items-center gap-[14px]">
        <div className="h-px w-10 bg-cyan" />
        <span className="text-[12px] font-semibold uppercase tracking-[3px] text-cyan">Practical Details</span>
      </div>
      <h2 className="font-serif-display italic font-semibold text-coat" style={{ fontSize: "clamp(30px,4vw,48px)" }}>
        Venue &amp; Food
      </h2>

      <div className="mt-[30px] grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="rounded-[10px] border border-line bg-panel p-[34px]">
          <div className="text-[12px] font-semibold uppercase tracking-[3px] text-cyan">Registration Fee</div>
          <div className="font-serif-display my-[10px] text-[46px] text-cyan">
            ₹250<span className="text-[16px] text-text-dim"> / head</span>
          </div>
          <p className="max-w-[560px] text-[15px] leading-[1.7] text-text-dim">
            Includes both veg and non-veg lunch options, event kit, and participation certificate.
          </p>
        </div>

        <div className="rounded-[10px] border border-line bg-panel p-[34px]">
          <div className="text-[12px] font-semibold uppercase tracking-[3px] text-cyan">Venue</div>
          <p className="mb-4 mt-[10px] text-[15px] leading-[1.7] text-text-dim">
            P.S.R. Engineering College, Sivakasi – 626140, Tamil Nadu, India.
          </p>
          <iframe
            title="PSR Engineering College map"
            loading="lazy"
            className="h-[280px] w-full rounded-[10px] border-0"
            style={{ filter: "grayscale(.3) invert(.92) contrast(.9)" }}
            src="https://maps.google.com/maps?q=PSR+Engineering+College+Sivakasi&t=&z=14&ie=UTF8&iwloc=&output=embed"
          />
        </div>
      </div>
    </section>
  );
}
