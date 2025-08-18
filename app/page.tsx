import { Metadata } from "next";
import Link from "next/link";
import FaqSection from "./components/FaqSection";
import TestimonialSlider from "./components/Testimonials";
import HorizontalScroll from "./components/HorizontalScroll";

export const metadata: Metadata = {
  title: "Home | Perineal Reconstruction",
  description:
    "Welcome to Perineal Reconstruction — where innovation meets craftsmanship. We build residential, commercial, and institutional projects with precision and passion.",
};

export default function Home() {
  return (
    <>
      <section className="home">
        <div className="home_context">
          <div className="home_header">
            <h4>PNL Constructions</h4>
          </div>
          <div>
            <h3 className="home_h3">
              Building the Future with Innovation and Integrity{" "}
            </h3>
          </div>
        </div>
      </section>

      <section>
        <div className="story_even_container">
          <div className="Our_story_flex">
            <div className="story_text">
              <div className="story_content">
                <h3>Our Story</h3>
                <p>
                  At PNL Constructions, every structure we build tells a story —
                  one of innovation, integrity, and dedication. Founded with a
                  vision to redefine excellence in the construction industry,
                  we've grown into a trusted partner for complex projects across
                  both public and private sectors. Our journey is built on a
                  foundation of expertise, sustainability, and client-focused
                  service that continues to shape the communities we serve.
                </p>
                <button className="button">Read More</button>
              </div>
            </div>

            <div className="story_image">
              <img src="/side_story.svg" alt="building" />
            </div>
          </div>
        </div>
      </section>
      <FaqSection />

      <section>
        <div className="our_work_padding_block">
          <div className="our_work">
            <h3>Our Work</h3>
            <Link href="/" className="project_link">
              VIEW ALL PROJECTS
            </Link>
          </div>
        </div>
      </section>
      <HorizontalScroll />
      <section>
        <div className="even_container">
          <div className="why_us">
            <h3>Why Us ?</h3>
            <p className="why_us_fist_p">
              Experience, Trustworthiness, and Innovation The PNL Promise
            </p>
            <p className="why_us_second_p">
              Choosing PNL Constructions means partnering with a company that
              embodies professionalism, reliability, and forward-thinking
              construction expertise. Here's why clients trust PNL:
            </p>
          </div>

          <div className="why_grid_cards">
            <div className="grid_card">
              <img src="/icon1.svg" alt="icon" />
              <div className="grid_card_text">
                <h4>Proven Track Record</h4>
                <p>
                  Our portfolio features a diverse range of successful projects
                  in the public and private sectors, demonstrating our ability
                  to deliver complex developments on time and within budget.
                </p>
              </div>
            </div>
            <div className="grid_card">
              <img src="/icon2.svg" alt="icon" />
              <div className="grid_card_text">
                <h4>Industry Expertise and Capacity</h4>
                <p>
                  Equipped with advanced technology, skilled personnel, and
                  extensive knowledge, we handle large-scale projects that
                  demand precision, compliance, and creative problem-solving.
                </p>
              </div>
            </div>
            <div className="grid_card">
              <img src="/icon3.svg" alt="icon" />
              <div className="grid_card_text">
                <h4>Client-Centric Approach</h4>
                <p>
                  We prioritize understanding your goals and challenges,
                  providing customized solutions and maintaining transparent
                  communication throughout the project lifecycle.
                </p>
              </div>
            </div>
            <div className="grid_card">
              <img src="/icon4.svg" alt="icon" />
              <div className="grid_card_text">
                <h4>Commitment to Safety and Sustainability</h4>
                <p>
                  Our rigorous safety measures protect our workforce and
                  stakeholders, while our sustainable construction practices
                  minimize environmental impact.
                </p>
              </div>
            </div>
            <div className="grid_card">
              <img src="/icon5.svg" alt="icon" />
              <div className="grid_card_text">
                <h4>Quality You Can Count On</h4>
                <p>
                  PNL's quality assurance processes align with international
                  construction standards, ensuring structural integrity,
                  aesthetic excellence, and long-term durability.
                </p>
              </div>
            </div>
            <div className="grid_card">
              <img src="/icon6.svg" alt="icon" />
              <div className="grid_card_text">
                <h4>Comprehensive Support</h4>
                <p>
                  Beyond project completion, we offer ongoing maintenance
                  support and professional advice for your evolving construction
                  needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="even_container explore_padding">
          <div className="explore_grid">
            <div className="explore_flex">
              <h3>Explore Our Worked Sites</h3>
              <p>A Showcase of Excellence in Every Project</p>
              <p className="explore_second_p">
                Discover how PNL Constructions brings plans to life through our
                diverse portfolio of landmark projects. Each site reflects our
                dedication to quality, safety, and innovation.
              </p>
              <Link href="/">
                <button className="explore_btn">
                  Discuss New Project Now!
                </button>
              </Link>
            </div>
            <div className="explore_image_grid">
              <img
                src="/work_sample1.svg"
                alt="construction"
                className="first_image"
              />
              <img
                src="/work_sample2.svg"
                alt="construction"
                className="secound_image"
              />
              <img
                src="/work_sample3.svg"
                alt="construction"
                className="third_image"
              />
              <img
                src="/work_sample4.svg"
                alt="construction"
                className="forth_image"
              />
            </div>
          </div>
        </div>
      </section>

      <TestimonialSlider />
    </>
  );
}
