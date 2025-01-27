import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";

const PROJECTS_INFO = [
  {
    title: "Slice",
    description:
      "A user-friendly expense splitting application that takes the headache out of shared finances.",
    image: "/images/mobileAppImage.png",
    date: "01 25 2025",
    icon: [""],
  },
  {
    title: "Slice",
    description:
      "A user-friendly expense splitting application that takes the headache out of shared finances.",
    image: "/images/mobileAppImage.png",
    date: "01 25 2025",
    icon: [""],
  },
  {
    title: "Slice",
    description:
      "A user-friendly expense splitting application that takes the headache out of shared finances.",
    image: "/images/mobileAppImage.png",
    date: "01 25 2025",
    icon: [""],
  },
  {
    title: "Slice",
    description:
      "A user-friendly expense splitting application that takes the headache out of shared finances.",
    image: "/images/mobileAppImage.png",
    date: "01 25 2025",
    icon: [""],
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-accent grid">
        <h1 id="title" className="ff-sans-normal h2">
          <div> I’m Ivan Rebolledo,</div>
          <div className="text-blue"> a front-end developer.</div>
        </h1>
        <section className="flex">
          <span className="flex">
            <Image
              src="/images/location.svg"
              alt="location icon"
              width={20}
              height={21}
            />
            <span className="ff-sans-normal fs-200">Tucker, Georgia</span>
          </span>
          <Link href="">
            {" "}
            <Image
              src="/images/githubIcon.svg"
              alt="location icon"
              width={27}
              height={27}
            />
          </Link>
          <Link href="">
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
          alt="temp cover"
        />
        <p className="break-all">
          Dedicated to creating engaging and user-friendly web applications. I
          have developed a strong skill set in front-end development through
          projects using JavaScript, React, and Next.js, focusing on intuitive
          design and clean code.
        </p>
      </section>
      <section id="projects">
        <h3>
          What I have been working on. Projects that challenge me and inspired
          me.
        </h3>
        {PROJECTS_INFO.map((project, idx) => (
          <Card key={idx} project={project} />
        ))}
      </section>
      <section>
        <h3>Technologies I work with. As a developer</h3>
        <section>
          <span>Icon</span>
          <span>Icon</span>
          <span>Icon</span>
          <span>Icon</span>
          <span>Icon</span>
        </section>
      </section>
      <section>
        <div>
          <h2>Intersted in working together</h2>
          <h3>Send a message to my email</h3>
        </div>
        <div>
          <span>email icon</span>
          <span>email@gmail.com</span>
        </div>
      </section>
      <footer>
        <p>Ivan Rebolledo</p>
      </footer>
    </>
  );
}
