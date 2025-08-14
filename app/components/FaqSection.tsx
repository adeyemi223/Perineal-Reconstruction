"use client";

import { useState } from "react";

type FaqItem = {
  number: string;
  title: string;
  text: string;
};

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      number: "01",
      title: "Construction",
      text: "Massa tempor nec feugiat nisl. Nunc vel risus commodo viverra. Vivamus at augue eget arcu. At quis risus sed vulputate odio ut. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Hac habitasse platea dictumst vestibulum. Venenatis urna cursus eget nunc scelerisque viverra mauris. Non odio euismod lacinia at quis risus. Vulputate dignissim suspendisse in est.",
    },
    {
      number: "02",
      title: "Site Project Management",
      text: "Massa tempor nec feugiat nisl. Nunc vel risus commodo viverra. Vivamus at augue eget arcu. At quis risus sed vulputate odio ut. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Hac habitasse platea dictumst vestibulum. Venenatis urna cursus eget nunc scelerisque viverra mauris. Non odio euismod lacinia at quis risus. Vulputate dignissim suspendisse in est.",
    },
    {
      number: "03",
      title: "Renovation",
      text: "Massa tempor nec feugiat nisl. Nunc vel risus commodo viverra. Vivamus at augue eget arcu. At quis risus sed vulputate odio ut. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Hac habitasse platea dictumst vestibulum. Venenatis urna cursus eget nunc scelerisque viverra mauris. Non odio euismod lacinia at quis risus. Vulputate dignissim suspendisse in est.",
    },
    {
      number: "04",
      title: "Development",
      text: "Massa tempor nec feugiat nisl. Nunc vel risus commodo viverra. Vivamus at augue eget arcu. At quis risus sed vulputate odio ut. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Hac habitasse platea dictumst vestibulum. Venenatis urna cursus eget nunc scelerisque viverra mauris. Non odio euismod lacinia at quis risus. Vulputate dignissim suspendisse in est.",
    },
    {
      number: "05",
      title: "Sustainable Services",
      text: "Massa tempor nec feugiat nisl. Nunc vel risus commodo viverra. Vivamus at augue eget arcu. At quis risus sed vulputate odio ut. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Hac habitasse platea dictumst vestibulum. Venenatis urna cursus eget nunc scelerisque viverra mauris. Non odio euismod lacinia at quis risus. Vulputate dignissim suspendisse in est.",
    },
  ];

  return (
    <section className="services_bg_color">
      <div className="even_container">
        <div className="our_services">
          <h3>Our Services</h3>
          {faqs.map((faq, index) => (
            <div
              className={`faq ${openIndex === index ? "active" : ""}`}
              key={index}
            >
              <div
                className="question"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="question_number">
                  <span>{faq.number}</span>
                  <h4>{faq.title}</h4>
                </div>
                <div className="faq_arrow_icon">
                  <img src="/arrow.svg" alt="icon" />
                </div>
              </div>

              <div className="answer">
                <p>{faq.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
