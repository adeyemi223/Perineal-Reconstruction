"use client";

import { useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const images = [
  { src: "/scrollImage1.jpg", caption: "Highway roads Developments" },
  { src: "/scrollImage2.jpg", caption: "Pineri Buildings" },
  { src: "/scrollImage3.jpg", caption: "Shopping center" },
  { src: "/scrollImage4.jpg", caption: "Recidencial Buildings" },
  { src: "/scrollImage5.jpg", caption: "Mining Works" },
  { src: "/scrollImage6.jpg", caption: "Forest House" },
  { src: "/scrollImage7.jpg", caption: "Mall Construction" },
  { src: "/scrollImage8.jpg", caption: "Maternity Departments" },
  { src: "/scrollImage9.jpg", caption: "AF Painthouse" },
  { src: "/scrollImage10.jpg", caption: "Development of Flyover" },
  { src: "/scrollImage11.jpg", caption: "Bridge Construction" },
  { src: "/scrollImage12.jpg", caption: "Re-Construction in old building" },
];

export default function HorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;

    const ctx = gsap.context(() => {
      const getDistance = () =>
        Math.max(0, container.scrollWidth - section.clientWidth);

      const tween = gsap.to(container, {
        x: () => `-${getDistance()}`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getDistance()}`, // ← backticks!
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      const onResize = () => ScrollTrigger.refresh();
      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
        tween.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const imgs = containerRef.current?.querySelectorAll("img") ?? [];
    let remaining = imgs.length;
    if (!remaining) return;
    const onLoad = () => {
      remaining -= 1;
      if (remaining === 0) ScrollTrigger.refresh();
    };
    imgs.forEach((img) => {
      if (img.complete) onLoad();
      else img.addEventListener("load", onLoad, { once: true });
    });
    return () => imgs.forEach((img) => img.removeEventListener("load", onLoad));
  }, []);

  return (
    <section className="section" ref={sectionRef}>
      <div className="container" ref={containerRef}>
        {images.map((image, i) => (
          <div className="item" key={i}>
            <img src={image.src} alt={image.caption} />
            <p>{image.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
