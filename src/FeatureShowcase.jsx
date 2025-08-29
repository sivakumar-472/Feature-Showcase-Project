import React, { useEffect, useRef, useState } from "react";
import FEATURES from "./Data";
import "./FeatureShowcase.css";

export default function FeatureShowcase() {
  const slidesRef = useRef([]);
  const [active, setActive] = useState(0);

  // IntersectionObserver to detect active slide
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-idx"));
            setActive(idx);
          }
        });
      },
      { threshold: 0.6 }
    );
    slidesRef.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (i) => {
    const el = slidesRef.current[i];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const prev = () => scrollTo(Math.max(0, active - 1));
  const next = () => scrollTo(Math.min(FEATURES.length - 1, active + 1));

  return (
    <section className="fs-root">
      <div className="fs-scroller">
        {FEATURES.map((f, idx) => (
          <article
            className="fs-slide"
            key={f.id}
            data-idx={idx}
            ref={(el) => (slidesRef.current[idx] = el)}
          >
            <div className="fs-slide-inner">
              {/* Phone Mockup */}
              <div className="fs-phone-mockup animate-in">
                <div className="fs-phone-carousel" style={{ transform: "translateX(0%)" }}>
                  {f.images.map((src, i) => (
                    <img key={i} src={src} alt={`${f.title} ${i + 1}`} className="fs-phone-img" />
                  ))}
                </div>
              </div>

              {/* Text Copy */}
              <div className="fs-copy">
                <h3 className="fade-up">{f.title}</h3>
                <p className="fade-up delay">{f.body}</p>

                <div className="fs-controls">
                  <button onClick={prev} className="ctrl">◀</button>
                  <div className="dots">
                    {FEATURES.map((_, d) => (
                      <button
                        key={d}
                        className={`dot ${d === idx ? "active" : ""}`}
                        onClick={() => scrollTo(d)}
                        aria-label={`Go to ${d + 1}`}
                      />
                    ))}
                  </div>
                  <button onClick={next} className="ctrl">▶</button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
