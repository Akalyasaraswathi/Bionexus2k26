"use client";

import { EVENT_DATE } from "@/lib/data";
import { useCountdown } from "@/lib/useCountdown";
import "./Hero.css";

export default function Hero() {
  const { days, hours, minutes, seconds } = useCountdown(EVENT_DATE);

  const boxes = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  return (
    <section id="recap" className="bionexus-hero">
      <div className="bionexus-hero-glow" aria-hidden="true" />
      <div className="bionexus-hero-grid" aria-hidden="true" />

      {/* Left column: PSR logo + Biomedical Engineering Society logo */}
      <div className="hero-logo-column hero-logo-column-left">
        <img
          src="/logos/psr-logo.png"
          alt="P.S.R. Engineering College"
          className="hero-logo hero-psr-logo"
        />
        <img
          src="/logos/bme-society-logo.png"
          alt="Biomedical Engineering Society of India"
          className="hero-logo hero-bme-logo"
        />
      </div>

      {/* Right column: NAAC logo */}
      <img
        src="/logos/naac-logo.png"
        alt="NAAC A+ accredited"
        className="hero-logo hero-naac-logo"
      />

      {/* Exact center hierarchy requested */}
      <div className="hero-center-content">
        <h1 className="hero-college-name">P.S.R. ENGINEERING COLLEGE</h1>

        <div className="hero-department-label">Department of</div>

        <h2 className="hero-department-name">BIOMEDICAL ENGINEERING</h2>

        <div className="hero-event-lockup">
          <div className="hero-bionexus">BIONEXUS</div>
          <div className="hero-year">2K26</div>
        </div>

        <div className="hero-symposium">
          NATIONAL LEVEL TECHNICAL SYMPOSIUM
        </div>

        <div className="hero-event-meta">
          <span>22 SEPTEMBER 2026</span>
          <span className="hero-meta-dot">•</span>
          <span>PSR ENGINEERING COLLEGE, SIVAKASI</span>
          <span className="hero-meta-dot">•</span>
          <span>₹250 / HEAD INCL. LUNCH</span>
        </div>

        <div className="hero-countdown" aria-label="Countdown to BioNexus 2K26">
          {boxes.map((box) => (
            <div className="hero-countdown-box" key={box.label}>
              <div className="hero-countdown-value">{box.value}</div>
              <div className="hero-countdown-label">{box.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
