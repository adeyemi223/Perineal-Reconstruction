import { Metadata } from "next";
import Link from "next/link";
import FaqSection from "./components/FaqSection";

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
        <div className="even_container">
          <div className="our_work">
            <h3>Our Work</h3>
            <Link href="/projects" className="project_link">
              VIEW ALL PROJECTS
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
