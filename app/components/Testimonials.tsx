"use client";
import { useState } from "react";

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      id: 1,
      text: '“Sit amet nisl suscipit adipiscing bibendum est. In ornare quam viverra orci. Neque volutpat ac tincidunt vitae semper quis. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Sem nulla pharetra diam sit amet nisl. Cursus mattis molestie a iaculis. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Vel pretium lectus quam id leo in. Massa tempor nec feugiat nisl. Nunc vel risus commodo viverra."',
      owerId: "-Kriti Jonnas",
    },
    {
      id: 2,
      text: '“Sit amet nisl suscipit adipiscing bibendum est. In ornare quam viverra orci. Neque volutpat ac tincidunt vitae semper quis. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Sem nulla pharetra diam sit amet nisl. Cursus mattis molestie a iaculis. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Vel pretium lectus quam id leo in. Massa tempor nec feugiat nisl. Nunc vel risus commodo viverra."',
      owerId: "-Kriti Jonnas",
    },
    {
      id: 3,
      text: '“Sit amet nisl suscipit adipiscing bibendum est. In ornare quam viverra orci. Neque volutpat ac tincidunt vitae semper quis. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Sem nulla pharetra diam sit amet nisl. Cursus mattis molestie a iaculis. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Vel pretium lectus quam id leo in. Massa tempor nec feugiat nisl. Nunc vel risus commodo viverra."',
      owerId: "-Kriti Jonnas",
    },
  ];

  const showNext = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const showPrev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="">
      <div className="even_container testimonial_bg">
        <div
          className="testimonial-container"
          role="region"
          aria-label="Testimonials"
        >
          <h3>Testimonials</h3>
          <div className="testimonial-slides-wrapper">
            <div
              className="testimonial-slides"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {slides.map((slide) => (
                <div className="testimonial-slide" key={slide.id}>
                  <p className="testimonial-text">{slide.text}</p>
                  <p className="testimonial-author">{slide.owerId}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="testimonial-controls">
            <button
              type="button"
              className="prev next"
              onClick={showPrev}
              aria-label="Previous testimonial"
            >
              <img src="/left.svg" alt="icon" />
            </button>

            <div className="dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`dot ${i === index ? "dot-active" : ""}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              className="next"
              onClick={showNext}
              aria-label="Next testimonial"
            >
              <img src="/right.svg" alt="icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
