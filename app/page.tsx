"use client";

import { useState } from "react";
import Intro from "@/components/Intro";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import EventsSection from "@/components/EventsSection";
import ScheduleSection from "@/components/ScheduleSection";
import VenueFoodSection from "@/components/VenueFoodSection";
import CoordinatorsSection from "@/components/CoordinatorsSection";
import RegisterSection from "@/components/RegisterSection";
import Footer from "@/components/Footer";
import ScrollTransition from "@/components/ScrollTransition";

export default function Home() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {!entered && <Intro onEnter={() => setEntered(true)} />}

      <div
        className={`transition-opacity duration-[1200ms] ease-in-out ${
          entered ? "opacity-100 delay-300" : "opacity-0"
        }`}
      >
        <Nav />

        {/* Each major section gets its own swipe / shutter transition. */}
        <ScrollTransition id="hero-page" variant="shutter">
          <Hero />
        </ScrollTransition>

        <ScrollTransition id="events-page" variant="left">
          <EventsSection />
        </ScrollTransition>

        <ScrollTransition id="schedule-page" variant="up">
          <ScheduleSection />
        </ScrollTransition>

        <ScrollTransition id="venue-page" variant="right">
          <VenueFoodSection />
        </ScrollTransition>

        <ScrollTransition id="coordinators-page" variant="left">
          <CoordinatorsSection />
        </ScrollTransition>

        <ScrollTransition id="register-page" variant="shutter">
          <RegisterSection />
        </ScrollTransition>

        <ScrollTransition id="footer-page" variant="up">
          <Footer />
        </ScrollTransition>
      </div>
    </>
  );
}
