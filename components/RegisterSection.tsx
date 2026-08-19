import { GOOGLE_FORM_URL } from "@/lib/data";

export default function RegisterSection() {
  return (
    <section id="register" className="bg-deep px-[6vw] py-[110px]">
      <div className="mb-[18px] flex items-center gap-[14px]">
        <div className="h-px w-10 bg-cyan" />
        <span className="text-[12px] font-semibold uppercase tracking-[3px] text-cyan">Join The Symposium</span>
      </div>
      <h2 className="font-serif-display italic font-semibold text-coat" style={{ fontSize: "clamp(30px,4vw,48px)" }}>
        Register Now
      </h2>
      <p className="mt-[14px] max-w-[560px] text-[15px] leading-[1.7] text-text-dim">
        Registration is handled through our official Google Form. Choose one technical or one
        non-technical event when you register — Fun Games and the Medical Camp are open to
        everyone with no sign-up needed.
      </p>

      <a
        href={GOOGLE_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block rounded-[3px] px-9 py-[15px] text-[13px] font-bold uppercase tracking-[2px] text-void"
        style={{ background: "linear-gradient(120deg,#2be8cf,#7c5cff)" }}
      >
        Open Registration Form
      </a>

      <div className="mt-4 max-w-[560px] text-[12px] text-text-dim">
        Opens the BioNexus 2K26 registration form in a new tab.
      </div>
    </section>
  );
}
