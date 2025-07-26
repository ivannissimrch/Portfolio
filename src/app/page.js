import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PROJECTS_LIST } from "./projectsList";
import { TECHNOLOGIES_ICONS } from "./TechnologiesIcons";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-blue-100 text-black px-4 md:px-6 py-10 font-sans">
        <div className="max-w-8xl mx-auto">
          {/* Hero Section */}
          <section className="flex flex-col items-center  md:items-start text-left mb-16 gap-6 px-4">
            {/* Avatar */}
            <div className="w-26 h-26 bg-white rounded-full flex items-center justify-center shrink-0">
              <Image
                src="/images/profile.jpg"
                alt="Avatar"
                width={110}
                height={110}
                priority
                quality={95}
                className="rounded-full object-cover"
                sizes="128px"
              />
            </div>
            {/* Intro Text */}
            <div className="max-w-xl mt-6 md:mt-0">
              <h1 className="text-3xl sm:text-4xl  flex justify-center md:justify-start gap-1 font-bold">
                Hi, I&apos;m Ivan Rebolledo
              </h1>

              <h2 className="text-3xl sm:text-4xl mt-2  flex justify-center md:justify-start text-blue-800 font-bold">
                React Front-End Developer
              </h2>
              <h3 className="text-xl sm:text-xl mt-2 flex justify-center md:justify-start">
                Building apps with TypeScript,
              </h3>
              <h3 className="text-xl sm:text-xl mt-2 flex justify-center md:justify-start">
                JavaScript, Next.js and Tailwind
              </h3>

              <p className=" py-2 text-sm sm:text-base text-center md:text-left">
                I love learning about front-end development technologies and
                creating applications using{" "}
                <span className="font-bold">JavaScript, </span>
                <span className="font-bold">React,</span>{" "}
                <span className="font-bold">and Next.js</span>. Besides coding,
                I love taking my miniature poodle on hikes on the weekends and I
                enjoy Latin dancing.
              </p>

              <div className="flex space-x-4 my-4 text-4xl justify-center md:justify-start items-center">
                {/* <a
                  href="mailto:ivannissimrch@gmail.com"
                  className="bg-blue-900 text-white px-2 py-2 hover:bg-blue-800 transition rounded-4xl"
                >
                  Send message
                </a> */}
                <a href="https://www.linkedin.com/in/ivan-rebolledo-012b17244/">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/ivannissimrch">
                  <FaGithub />
                </a>
              </div>
            </div>
          </section>

          {/* Technologies Section */}
          <section className="mb-16">
            <h3 className="text-2xl font-bold mb-4">
              Technologies I work with. As a developer
            </h3>
            <div className="flex flex-wrap gap-8 text-3x justify-evenly">
              {TECHNOLOGIES_ICONS.map((tech, idx) => (
                <div key={tech.name} className="flex flex-col items-center">
                  <div
                    className={`w-14 h-14 flex items-center justify-center rounded-xl text-white shadow-md ${tech.bg}`}
                  >
                    <Icon icon={tech.icon} width="40" height="40" />
                  </div>
                  <span className="mt-2 text-sm text-gray-800">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-16">
            <h3 className="text-2xl font-bold mb-6">
              What I have been working on. Projects that challenge me and
              inspired me.
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECTS_LIST.map((project, index) => (
                <div key={index} className="bg-white overflow-hidden">
                  <div className="p-4">
                    <div className="text-sm flex items-center gap-2 mb-2">
                      <div className="min-w-28">{project.date}</div>
                      <div className="flex justify-end w-full gap-2">
                        {project.tech.map((t) => (
                          <Image
                            width={20}
                            height={20}
                            key={t}
                            alt={t}
                            src={`/images/${t}-icon.svg`}
                          />
                        ))}
                      </div>
                    </div>
                    <h4 className="font-semibold">{project.title}</h4>
                    <p className="text-sm text-black mb-4">
                      {project.description}
                    </p>
                    <Link
                      href={project.link}
                      className="bg-blue-900 text-white px-6 py-2 hover:bg-blue-800 transition cursor-pointer"
                    >
                      {" "}
                      View case study
                    </Link>
                  </div>
                  <div className="relative w-full aspect-[16/9] bg-blue-200">
                    <Image
                      src={project.imageDesktop}
                      alt={`${project.title} project screenshot`}
                      fill
                      quality={100}
                      unoptimized
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
