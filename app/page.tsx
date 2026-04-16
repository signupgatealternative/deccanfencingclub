import WhyChoose from "@/components/Whychoose";
import About from "../components/About";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
// import Register from "../components/Register";
// import Schedule from "../components/Schedule";
import Tournament from "../components/Tournament";
import Training from "../components/Training";
import ProgramsAndNews from "@/components/Programsandnews";
import ForParents from "@/components/Forparents";


export default function Home() {
  return (
    <main style={{ position: 'relative' }}>
      {/* <CursorController />
      <ProgressBar />
      <Navigation /> */}

      {/*
        #fence-wrap must be position:relative so that when Hero.tsx
        switches the fencer to position:absolute (Phase 2 — pinned
        inside About), the coordinates are relative to this wrapper.
      */}
      <div id="fence-wrap" style={{ position: 'relative',minHeight: '200vh', }}>
        <Hero />
        <Marquee />
        <About />

        {/*
          Desktop only (hidden on mobile via CSS in Hero.tsx).
          Phase 1: position:fixed — GSAP scrubs x/y to travel from
                   Hero right-side → About visual target.
          Phase 2: position:absolute inside #fence-wrap — scrolls
                   naturally with the page, stays visible throughout
                   About, exits when About scrolls away. No fade.
        */}
        <img
          id="hero-fencer"
          src="/images/fencer-hero.png"
          alt="Fencer"
          style={{
            position: 'fixed',
            right: '5%',
            top: '50%',
            height: '68vh',           /* JS overwrites per breakpoint */
            zIndex: 20,
            pointerEvents: 'none',
            willChange: 'transform',
          }}
        />
      </div>

      <Banner />
      {/* <Tournament /> */}
      <Training />
      <WhyChoose />
      <ProgramsAndNews />
      <ForParents />
      {/* <Schedule /> */}
      {/* <Register /> */}
      {/* <Footer /> */}
    </main>
  );
}