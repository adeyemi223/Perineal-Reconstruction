"use client";
import { useRef, useEffect, useState } from "react";

export default function HorizontalScroll() {
  const articleRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollLength, setScrollLength] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

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

  // Get scroll length and viewport height after mount
  useEffect(() => {
    const contentWidth = contentRef.current?.scrollWidth || 0;
    setViewportHeight(window.innerHeight);
    setScrollLength(contentWidth - window.innerWidth);
  }, []);

  // Handle horizontal scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const article = articleRef.current;
      const content = contentRef.current;
      if (!article || !content) return;

      const articleTop = article.offsetTop;
      const progress = window.scrollY - articleTop;

      if (progress >= 0 && progress <= scrollLength) {
        content.style.transform = `translateX(-${progress}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollLength]);

  return (
    <article
      ref={articleRef}
      className="horizontal-section"
      style={{ height: `${scrollLength + viewportHeight}px` }}
    >
      <div className="horizontal-inner" ref={contentRef}>
        {images.map((image, index) => (
          <div className="horizontal-item" key={index}>
            <img src={image.src} alt={image.caption} />
            <p>{image.caption}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
