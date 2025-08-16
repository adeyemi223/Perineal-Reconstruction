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
      title: "Road Construction",
      text: "From urban highways to rural access roads, our road construction division specializes in delivering durable, safe, and efficient transportation infrastructure. Leveraging modern engineering techniques, we ensure roadways are constructed to withstand environmental conditions and heavy usage while meeting government regulations.",
    },
    {
      number: "02",
      title: "Building Construction",
      text: "Our building construction services span residential, commercial, and industrial sectors. We excel in managing all phases—from groundwork and structural frameworks to finishing touches and interior outfitting. Every building project is executed with precision, on schedule, and within budget.",
    },
    {
      number: "03",
      title: "Project Consulting & Management",
      text: "We provide expert consultation to help shape project design, feasibility studies, and compliance planning. Our project management team oversees timelines, resource allocation, and quality controls to guarantee smooth delivery from start to finish.",
    },
    {
      number: "04",
      title: "Sustainability & Safety Compliance",
      text: "With strict adherence to health, safety, and environmental standards, we ensure every project site operates with full HSE-compliant protocols. Our commitment to sustainability reflects in our use of eco-friendly materials and waste minimization strategies.",
    },
    {
      number: "05",
      title: "Custom Construction Solutions",
      text: "Understanding that every client's needs are unique, we tailor construction plans to align with specific requirements, including bespoke designs, innovative material use, and adaptive project scopes.",
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
