"use client";

import { useEffect, useState } from "react";

export type CountdownParts = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

const pad = (n: number) => String(Math.max(0, n)).padStart(2, "0");

export function useCountdown(targetIso: string): CountdownParts {
  const [parts, setParts] = useState<CountdownParts>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const target = new Date(targetIso).getTime();

    const tick = () => {
      let diff = Math.max(0, target - Date.now());
      const d = Math.floor(diff / 86400000);
      diff -= d * 86400000;
      const h = Math.floor(diff / 3600000);
      diff -= h * 3600000;
      const m = Math.floor(diff / 60000);
      diff -= m * 60000;
      const s = Math.floor(diff / 1000);
      setParts({ days: pad(d), hours: pad(h), minutes: pad(m), seconds: pad(s) });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetIso]);

  return parts;
}
