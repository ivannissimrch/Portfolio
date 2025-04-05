import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";
import { TECHNOLOGIES_ICONS } from "./TechnologiesIcons";
import { PROJECTS_INFO } from "./projects_info";
import Footer from "@/components/Footer";
import TextAnimation from "@/components/TextAnimation";

export default function Home() {
  const title1 = "Hi, I’m Ivan Rebolledo. A front-end developer.";

  return (
    <main className="main-container flex  bg-accent ">
      <section className=" grid hero-container padding-top-72">
        <TextAnimation text={title1} />
        {/* <h1 id="title" className="ff-sans-normal hero-title">
          <div>Hi, I’m Ivan Rebolledo.</div>
          <div className="text-blue">A front-end developer.</div>
        </h1> */}
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
        {/* <Image
          src="/images/mobileImageCover.png"
          width={405}
          height={313}
          layout="responsive"
          className="hero-image-phone "
          alt="temp cover"
        />
        <Image
          src="/images/tabletImageCover.png"
          width={928}
          height={378}
          layout="responsive"
          className="hero-image-tablet "
          alt="temp cover"
        />
        <Image
          src="/images/desktopImageCover.png"
          width={928}
          height={378}
          layout="responsive"
          className="hero-image-desktop "
          alt="temp cover"
        /> */}
        <p className="bg-white hero-p fs-200 ff-sans-normal text-gray">
          I love learning about front-end development technologies and creating
          applications using <span> JavaScript, </span>
          <span> React,</span> <span> and Next.js</span>. Besides coding, I love
          taking my miniature poodle on hikes on the weekends and I enjoy Latin
          dancing.
        </p>
      </section>
      <section className="projects-container ">
        <h4 className="fs-400 projects-title ff-sans-normal">
          What I have been working on.
          <span className="text-blue">
            {" "}
            Projects that challenge me and inspired me.
          </span>
        </h4>
        <span className="cards-container">
          {PROJECTS_INFO.map((project, idx) => (
            <Card key={project.title} project={project} idx={idx} />
          ))}
        </span>
      </section>

      <section className="technologies-container">
        <h3
          className="fs-400 flex ff-sans-normal technologies-title "
          style={{ gap: "0.5rem" }}
        >
          Technologies I work with.
          <span className="text-blue">As a developer</span>
        </h3>
        <section className="flex technologies-icons-container">
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
          <h3 className=" fs-200 text-light-gray ff-sans-normal send-message-text">
            Send a message to my email
          </h3>
        </div>
        <div className="bg-blue flex email-container">
          <p>ivannissimrch@gmail.com</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
