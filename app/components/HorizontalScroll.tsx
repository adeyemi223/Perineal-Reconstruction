"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import styles from "./HorizontalScroll.module.css";

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container) return;

    const totalScrollWidth = container.scrollWidth;
    const viewportWidth = window.innerWidth;

    gsap.to(container, {
      x: () => `-${totalScrollWidth - viewportWidth}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${totalScrollWidth - viewportWidth}`,
        pin: true,
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="section" ref={sectionRef}>
      <div className="container" ref={containerRef}>
        {images.map((image, index) => (
          <div className="item" key={index}>
            <img src={image.src} alt={image.caption} />
            <p>{image.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
