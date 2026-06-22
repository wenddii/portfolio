import { useEffect, useMemo, useRef } from "react";
import { visualStory } from "../data/portfolioContent";
import "./StoryPhotosSection.css";

function StoryPhotosSection({ shouldReduceMotion }) {
  const scrollerRef = useRef(null);
  const trackRef = useRef(null);

  // Duplicate items for seamless loop
  const items = useMemo(() => {
    const base = visualStory ?? [];
    return [...base, ...base];
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const scroller = scrollerRef.current;
    const track = trackRef.current;
    if (!scroller || !track) return;

    let rafId = 0;
    let lastTs = 0;
    let offset = 0;

    const speedPxPerSec = 60; // adjust for taste

    const tick = (ts) => {
      if (!lastTs) lastTs = ts;
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;

      // Only move when not paused (hover)
      const isPaused = scroller.getAttribute("data-paused") === "true";
      if (!isPaused) {
        offset += speedPxPerSec * dt;
        // Once we've moved by half of the duplicated content width, wrap
        const halfWidth = track.scrollWidth / 2;
        if (halfWidth > 0 && offset >= halfWidth) offset -= halfWidth;

        track.style.transform = `translate3d(${-offset}px, 0, 0)`;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [shouldReduceMotion]);

  return (
    <section id="story-photos" className="story-section">
      <div className="section-head">
        <p className="eyebrow">Story in Photos</p>
        <p>These photos show the parts of my life that shaped the way I think, build, and show up.</p>
      </div>

      <div
        ref={scrollerRef}
        className="story-marquee scroller"
        data-paused="false"
        onMouseEnter={() => scrollerRef.current?.setAttribute("data-paused", "true")}
        onMouseLeave={() => scrollerRef.current?.setAttribute("data-paused", "false")}
      >
        <div ref={trackRef} className="story-marquee-track">
          {items.map((item, idx) => (
            <article key={`${item.title}-${idx}`} className="story-photo-card">
              {item.link ? (
                <a href={item.link} target="_blank" rel="noreferrer" className="story-photo-link">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </a>
              ) : (
                <div className="story-photo-link">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
              )}

              <p className="story-photo-description">{item.caption}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StoryPhotosSection;

