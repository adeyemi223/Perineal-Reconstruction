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
            <h3>Pellentesque eu tincidunt</h3>
          </div>
          <div>
            <p className="home_p">
              Quis auctor elit sed vulputate. Ipsum dolor sit amet consectetur
              adipiscing. Consectetur adipiscing elit duis tristique. Ultricies
              leo integer malesuada nunc vel risus commodo.
            </p>
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
                  Massa tempor nec feugiat nisl. Nunc vel risus commodo viverra.
                  Vivamus at augue eget arcu. At quis risus sed vulputate odio
                  ut. Eu tincidunt tortor aliquam nulla facilisi cras fermentum
                  odio eu. Hac habitasse platea dictumst vestibulum. Venenatis
                  urna cursus eget nunc scelerisque viverra mauris. Non odio
                  euismod lacinia at quis risus. Vulputate dignissim suspendisse
                  in est.
                </p>
                <p>
                  Pharetra convallis posuere morbi leo. Nulla facilisi etiam
                  dignissim diam quis enim lobortis. Porta lorem mollis aliquam
                  ut porttitor. Sed risus ultricies tristique nulla aliquet
                  enim. Augue interdum velit euismod in. Nec dui nunc mattis
                  enim ut tellus elementum sagittis vitae.
                </p>
                <button className="button">Read More</button>
              </div>
            </div>

            <div className="story_image">
              <img src="/materials.svg" alt="" />
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
            <p>
              Sit amet nisl suscipit adipiscing bibendum est. In ornare quam
              viverra orci. Neque volutpat ac tincidunt vitae semper quis.
              Tellus in hac habitasse platea dictumst vestibulum rhoncus est
              pellentesque. Sem nulla pharetra diam sit amet nisl. Cursus mattis
              molestie a iaculis. Arcu cursus vitae congue mauris rhoncus aenean
              vel elit scelerisque. Vel pretium lectus quam id leo in. Massa
              tempor nec feugiat nisl. Nunc vel risus commodo viverra.
            </p>
          </div>

          <div className="why_us_flex_container">
            <div className="why_us_flex1">
              <div className="number_text">
                <span>99+</span>
                <div className="inner_why_text">
                  <h4>Complete Projects</h4>
                  <p>
                    Eu tincidunt tortor aliquam nulla facilisi cras fermentum
                    odio eu. Hac habitasse platea dictumst vestibulum.
                  </p>
                </div>
              </div>
            </div>

            <div className="why_us_flex1">
              <div className="number_text">
                <span>55+</span>
                <div className="inner_why_text">
                  <h4>Export Employees</h4>
                  <p>
                    Eu tincidunt tortor aliquam nulla facilisi cras fermentum
                    odio eu. Hac habitasse platea dictumst vestibulum.
                  </p>
                </div>
              </div>
            </div>

            <div className="why_us_flex1">
              <div className="number_text">
                <span>43</span>
                <div className="inner_why_text">
                  <h4>Running Projects</h4>
                  <p>
                    Eu tincidunt tortor aliquam nulla facilisi cras fermentum
                    odio eu. Hac habitasse platea dictumst vestibulum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="even_container">
          <div className="explore_grid">
            <div className="explore_flex">
              <h3>Explore Our Worked Sites</h3>
              <p>
                Sit amet nisl suscipit adipiscing bibendum est. In ornare quam
                viverra orci. Neque volutpat ac tincidunt vitae semper quis.
                Tellus in hac habitasse platea dictumst vestibulum rhoncus est
                pellentesque. Sem nulla pharetra diam sit amet nisl. Cursus
                mattis molestie a iaculis. Arcu cursus vitae congue mauris
                rhoncus aenean vel elit scelerisque. Vel pretium lectus quam id
                leo in. Massa tempor nec feugiat nisl. Nunc vel risus commodo
                viverra.
              </p>
              <Link href="/contact">
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
