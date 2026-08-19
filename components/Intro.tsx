"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const IntroScene = dynamic(() => import("./IntroScene"), { ssr: false });

type Props = {
  onEnter: () => void;
};

export default function Intro({ onEnter }: Props) {
  const [leaving, setLeaving] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // simple simulated preloader — replace with real asset-load progress
  // if you add glTF models later
  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(id);
          setLoaded(true);
          return 100;
        }
        return Math.min(100, p + Math.random() * 18);
      });
    }, 120);
    return () => clearInterval(id);
  }, []);

  const handleEnter = () => {
    if (leaving) return;
    setLeaving(true);
    setTimeout(onEnter, 1100);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === "Space") handleEnter();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leaving]);

  return (
    <div
      onClick={handleEnter}
      className={`fixed inset-0 z-[200] flex items-center justify-center transition-all duration-[1100ms] ease-in-out
        bg-[radial-gradient(ellipse_at_50%_30%,_#14185a_0%,_#070819_70%)]
        ${leaving ? "opacity-0 scale-125 pointer-events-none" : "opacity-100 scale-100"}`}
    >
      <IntroScene active={!leaving} />

      <div className="relative z-[3] flex flex-col items-center gap-[18px] px-5 text-center">
        <div className="text-[11px] font-semibold uppercase tracking-[6px] text-cyan opacity-85">
          Dept. of Biomedical Engineering &middot; PSR Engineering College
        </div>

        <div
          className="font-serif-display italic font-semibold leading-[0.95] tracking-[1px]"
          style={{
            fontSize: "clamp(52px,11vw,128px)",
            background: "linear-gradient(180deg,#ffffff 0%, #b9aeff 55%, #7c5cff 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            filter: "drop-shadow(0 0 40px rgba(124,92,255,0.35))",
          }}
        >
          BIONEXUS 2K26
        </div>

        <div className="text-text-dim font-medium uppercase" style={{ fontSize: "clamp(12px,2vw,16px)", letterSpacing: "4px" }}>
          The Future of Biomedical Innovation
        </div>

        <div className="font-serif-display mt-1.5 border-y border-line px-[22px] py-2 text-[20px] tracking-[2px] text-coat">
          National Level Technical Symposium &nbsp;&middot;&nbsp; 22.09.2026
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleEnter();
          }}
          disabled={!loaded}
          className="relative mt-[22px] overflow-hidden rounded-sm border-none px-10 py-4 text-[13px] font-semibold uppercase tracking-[3px] text-void transition-transform duration-300 ease-out hover:-translate-y-[3px] disabled:opacity-40"
          style={{
            background: "linear-gradient(120deg,#2be8cf,#7c5cff)",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 20px 60px -10px rgba(124,92,255,0.6)",
          }}
        >
          {loaded ? "Enter BioNexus" : `Loading ${Math.floor(progress)}%`}
        </button>
      </div>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[3px] text-text-dim opacity-60">
        Click anywhere or press space to skip
      </div>
    </div>
  );
}
