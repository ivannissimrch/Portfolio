import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";
import { TECHNOLOGIES_ICONS } from "./TechnologiesIcons";
import { PROJECTS_INFO } from "./projects_info";

export default function Home() {
  return (
    <main className="mobile-container flex  bg-accent padding-top-72 ">
      <section className=" grid hero-container">
        <h1 id="title" className="ff-sans-normal h2 hero-intro">
          <div>Hi, I’m Ivan.</div>
          <div className="text-blue">A front-end developer.</div>
        </h1>
        <section className="flex text-gray hero-icons">
          <span className="flex">
            <Link href={"https://maps.app.goo.gl/r4A29nCyUihTkDEq9"}>
              <Image
                src="/images/location.svg"
                alt="location icon"
                width={20}
                height={21}
              />
            </Link>

            <span className="ff-sans-normal fs-200">Tucker, Georgia</span>
          </span>
          <Link href="https://github.com/ivannissimrch">
            {" "}
            <Image
              src="/images/githubIcon.svg"
              alt="location icon"
              width={27}
              height={27}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/ivan-rebolledo-012b17244/">
            {" "}
            <Image
              src="/images/LinkIcon.svg"
              alt="location icon"
              width={27}
              height={27}
            />
          </Link>
        </section>
        <Image
          src="/images/mobileImageCover.png"
          width={405}
          height={313}
          layout="responsive"
          className="hero-image"
          alt="temp cover"
        />

        {/* <p className="bg-white hero-p fs-200 ff-sans-normal text-gray">
          I enjoy learning about coding and developing web applications with
          <span> JavaScript, </span>
          <span> React,</span> <span> and Next.js.</span>
        </p> */}
        <p className="bg-white hero-p fs-200 ff-sans-normal text-gray">
          I'm a self-taught front-end developer passionate about creating web
          applications. I'm particularly interested in projects related to
          education accessibility, as I personally experienced barriers to
          higher education. I believe technology can play a crucial role in
          making education more accessible to everyone.
        </p>
      </section>
      <section id="projects">
        <h4 className="fs-400 projects-title ff-sans-normal">
          What I have been working on.
          <span className="text-blue">
            {" "}
            Projects that challenge me and inspired me.
          </span>
        </h4>
        {PROJECTS_INFO.map((project, idx) => (
          <Card key={project.title} project={project} />
        ))}
      </section>

      <section className="">
        <h3
          className="fs-400 flex ff-sans-normal technologies-title "
          style={{ gap: "0.5rem" }}
        >
          Technologies I work with.
          <span className="text-blue">As a developer</span>
        </h3>
        <section className="flex technologies-container">
          {TECHNOLOGIES_ICONS.map((icon, idx) => {
            return (
              <section key={idx} className="technologies-icon-container">
                <Image src={icon} width={35.1} height={35.1} alt="icon" />
              </section>
            );
          })}
        </section>
      </section>
      <section className="bg-dark text-white working-together-container flex">
        <div>
          <h2 className="fs-400 ff-sans-normal working-together-title ">
            Interested in working together?
          </h2>
          <h3 className=" fs-200 text-light-gray ff-sans-normal">
            Send a message to my email
          </h3>
        </div>
        <div className="bg-blue flex email-container">
          <p>ivannissimrch@gmail.com</p>
        </div>
      </section>
      <footer className="flex footer">
        <div>
          <p> &copy; 2025 Ivan Rebolledo</p>
        </div>
        <div className="footer-links flex">
          <Link href="https://github.com/ivannissimrch">GitHub</Link>
          <Link href="https://www.linkedin.com/in/ivan-rebolledo-012b17244/">
            {" "}
            Linkedln
          </Link>
        </div>
      </footer>
    </main>
  );
}
