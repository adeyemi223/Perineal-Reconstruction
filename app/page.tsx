import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Perineal Reconstruction",
  description:
    "Welcome to Client Construction — where innovation meets craftsmanship. We build residential, commercial, and institutional projects with precision and passion.",
};

export default function Home() {
  return (
    <>
      <section className="home">
        <div className="home_context">
          <h3>Pellentesque eu tincidunt</h3>
          <p>
            Quis auctor elit sed vulputate. Ipsum dolor sit amet consectetur
            adipiscing. Consectetur adipiscing elit duis tristique. Ultricies
            leo integer malesuada nunc vel risus commodo.
          </p>
        </div>
      </section>

      <section>
        <div className="even_container our_story">
          <h1>Our story</h1>
        </div>
      </section>
    </>
  );
}
