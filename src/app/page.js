import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PROJECTS_INFO } from "./projectsInfo";
import { TECHNOLOGIES_ICONS } from "./TechnologiesIcons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-100 text-black px-6 py-10 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center md:flex-row md:items-start md:justify-center text-left mb-16 gap-6 px-4">
        {/* Avatar */}
        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shrink-0">
          <Image
            src="/images/profile.jpg"
            alt="Avatar"
            width={450}
            height={450}
            layout="responsive"
            priority
            className="rounded-full object-cover"
          />
        </div>

        {/* Intro Text */}
        <div className="max-w-xl mt-6 md:mt-0">
          <h1 className="text-3xl sm:text-4xl font-bold flex justify-center md:justify-start  gap-1">
            Hi, I’m<span className="text-blue-700 ">Ivan Rebolledo</span>.
          </h1>
          <h2 className="text-xl sm:text-2xl mt-2  flex justify-center md:justify-start">
            I’m a front-end developer.
          </h2>

          <div className="flex space-x-4 my-4 text-xl justify-center md:justify-start">
            <FaLinkedin />
            <FaGithub />
          </div>

          <p className="bg-white px-6 py-2  text-sm sm:text-base text-center md:text-left">
            I love learning about front-end development technologies and
            creating applications using <span> JavaScript, </span>
            <span> React,</span> <span> and Next.js</span>. Besides coding, I
            love taking my miniature poodle on hikes on the weekends and I enjoy
            Latin dancing.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-6">
          What I have been working on. Projects that challenge me and inspired
          me.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS_INFO.map((project, index) => (
            <div key={index} className="bg-white p-4 ">
              <Image
                src={project.imageDesktop}
                alt="image"
                className="w-full h-96 bg-blue-200  mb-3"
              />
              <div className="text-sm text-right mb-2">{project.date}</div>
              <h4 className="font-semibold">{project.title}</h4>
              <Link href={project.title} className="text-sm text-blue-800">
                {project.description}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-4">
          Technologies I work with. As a developer
        </h3>
        <div className="flex flex-wrap gap-8 text-3xl">
          {TECHNOLOGIES_ICONS.map((icon, idx) => (
            <Image key={idx} src={icon} alt="" width={40} height={40} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center bg-black flex justify-center p-4">
        <div className="flex sm:flex-col justify-start w-1/2">
          <p className="mb-4 text-white">Interested in working together?</p>
          {/* <p className="mb-4 text-white">
            Feel free to reach out to me via email.
          </p> */}
        </div>

        <div className="flex justify-end w-1/2"></div>
        <button className="bg-blue-900 text-white px-6 py-2  hover:bg-blue-800">
          Send message
        </button>
      </section>
    </main>
  );
}
