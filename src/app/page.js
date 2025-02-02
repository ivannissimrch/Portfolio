import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";
import { TECHNOLOGIES_ICONS } from "./TechnologiesIcons";

const PROJECTS_INFO = [
  {
    title: "Slice",
    description:
      "A user-friendly expense splitting application that takes the headache out of shared finances.",
    image: "/images/sliceImage.png",
    date: "September 2024",
    icons: [
      "/images/react-icon.svg",
      "/images/react-router-icon.svg",
      "/images/html-icon.svg",
      "/images/tailwind-icon.svg",
    ],
  },
  {
    title: "Weekly Bytes",
    description:
      "A meal Scheduler App that creates weekly menus safe for employees with allergies.",
    image: "/images/weeklyBytes.png",
    date: "January 2025",
    icons: [
      "/images/react-icon.svg",
      "/images/react-router-icon.svg",
      "/images/html-icon.svg",
      "/images/tailwind-icon.svg",
    ],
  },
  {
    title: "Stocks",
    description: "A stocks searching and display info about stocks",
    image: "/images/stocksImage.png",
    date: "01 2025",
    icons: [
      "/images/react-icon.svg",
      "/images/css-icon.svg",
      "/images/html-icon.svg",
      "/images/typescript-icon.svg",
    ],
  },
  {
    title: "PlayList",
    description:
      "A  playlist builder that allow you to search and save playlist to your spotify account",
    image: "/images/spotifyCloneImage.jpg",
    date: "01 2025",
    icons: [
      "/images/react-icon.svg",
      "/images/material-ui-icon.svg",
      "/images/html-icon.svg",
      "/images/react-router-icon.svg",
    ],
  },
];

export default function Home() {
  return (
    <main className="mobile-container flex  bg-accent padding-72 ">
      <section className=" grid hero-container">
        <h1 id="title" className="ff-sans-normal h2 hero-intro">
          <div> I’m Ivan Rebolledo,</div>
          <div className="text-blue">a front-end developer.</div>
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
          src="/images/mobileimageCover.png"
          width={405}
          height={313}
          layout="responsive"
          className="hero-image"
          alt="temp cover"
        />

        <p className="break-all bg-white hero-p fs-200 ff-sans-normal text-gray">
          Dedicated to creating engaging and user-friendly web applications. I
          have developed a strong skill set in front-end development through
          projects using <span>JavaScript,</span>
          <span>React,</span> and <span>Next.js,</span> focusing on intuitive
          design and clean code.
        </p>
      </section>
      <section id="projects">
        <h4 className="fs-400 projects-title ff-sans-normal">
          What I have been working on.
          <span className="text-blue">
            Projects that challenge me and inspired me.
          </span>
        </h4>
        {PROJECTS_INFO.map((project, idx) => (
          <Card key={idx} project={project} />
        ))}
      </section>

      <section className="">
        <h3 className="fs-400 flex ff-sans-normal technologies-title">
          Technologies I work with.
          <span className="text-blue">As a developer</span>{" "}
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
          <h2>Intersted in working together</h2>
          <h3>Send a message to my email</h3>
        </div>
        <div className="bg-blue flex email-container">
          <p>ivannissimrch@gmail.com</p>
        </div>
      </section>
      <footer className="flex footer">
        <div>
          <p>2025 Ivan Rebolledo</p>
        </div>
        <div>
          <span>GitHub</span>
          <span>Linkedln</span>
        </div>
      </footer>
    </main>
  );
}
