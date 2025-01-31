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
    <main className="mobile-container flex  bg-accent padding-top-72 ">
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
          alt="temp cover"
        />

        <p className="break-all bg-white hero-p fs-200 ff-sans-normal text-gray">
          Dedicated to creating engaging and user-friendly web applications. I
          have developed a strong skill set in front-end development through
          projects using <span className="text-black">JavaScript,</span>
          <span className="text-black">React,</span> and{" "}
          <span className="text-black">Next.js,</span> focusing on intuitive
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
        <h3 className="fs-400">
          Technologies I work with.
          <span className="text-blue">As a developer</span>{" "}
        </h3>
        <section>
          <span>Icon</span>
          <span>Icon</span>
          <span>Icon</span>
          <span>Icon</span>
          <span>Icon</span>
        </section>
      </section>
      <section className="bg-dark text-white">
        <div>
          <h2>Intersted in working together</h2>
          <h3>Send a message to my email</h3>
        </div>
        <div>
          <span>email icon</span>
          <span>ivannissimrch@gmail.com</span>
        </div>
      </section>
      <footer>
        <p>Ivan Rebolledo</p>
      </footer>
    </main>
  );
}
