"use client";

import { GOOGLE_FORM_URL } from "@/lib/data";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-[100] flex items-center justify-between border-b border-line bg-void/70 px-[6vw] py-[18px] backdrop-blur-md">
      <div className="font-serif-display italic text-[22px] font-semibold tracking-[1px] text-coat">
        BIO<span className="not-italic text-cyan">NEXUS</span>
      </div>
      <ul className="hidden gap-[34px] md:flex">
        {[
          ["Events", "#events-page"],
          ["Schedule", "#schedule-page"],
          ["Coordinators", "#coordinators-page"],
          ["Venue & Food", "#venue-page"],
        ].map(([label, href]) => (
          <li key={href}>
            <a
              href={href}
              className="text-[13px] font-medium uppercase tracking-[1.5px] text-text-dim transition-colors hover:text-cyan"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href={GOOGLE_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-sm border border-violet px-5 py-[9px] text-[12px] uppercase tracking-[2px] text-coat transition-all hover:bg-violet hover:shadow-[0_0_24px_rgba(124,92,255,.5)]"
      >
        Register
      </a>
    </nav>
  );
}
