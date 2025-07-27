"use client";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PROJECTS_LIST } from "./projectsList";
import { TECHNOLOGIES_ICONS } from "./TechnologiesIcons";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-blue-100 text-black px-4 md:px-6 py-10 font-sans">
        <div className="max-w-8xl mx-auto">
          {/* Hero Section */}
          <section className="flex flex-col items-center md:items-start text-left mb-16 gap-6 px-4">
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
              <h1 className="text-3xl sm:text-4xl   gap-1 font-bold">
                Hi, I&apos;m Ivan Rebolledo
              </h1>
              <h2 className="text-3xl sm:text-4xl mt-2   text-blue-800 font-bold">
                React Front-End Developer
              </h2>

              <p className=" py-2 text-sm sm:text-base  md:text-left">
                Building apps with{" "}
                <span className="font-bold">TypeScript, </span>
                <span className="font-bold">JavaScript, </span>
                <span className="font-bold">Next.js, </span>
                <span className="font-bold">Material-UI</span> and{" "}
                <span className="font-bold">Tailwind CSS. </span>I’ve
                contributed to team projects using GitHub Flow and Agile.
                Besides coding, I love taking my miniature poodle on hikes on
                the weekends and I enjoy Latin dancing.
              </p>

              <div className="flex space-x-4 my-4 text-3xl ">
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
                  <motion.div
                    className={`w-14 h-14 flex items-center justify-center rounded-xl text-white shadow-md ${tech.bg}`}
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(0,0,0,0)",
                        "0 0 10px rgba(59,130,246,0.9)",
                        "0 0 0px rgba(0,0,0,0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  >
                    <Icon icon={tech.icon} width="40" height="40" />
                  </motion.div>

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
                <motion.div
                  initial={{
                    opacity: -1,
                  }}
                  whileInView={{
                    opacity: 1,
                    transition: {
                      duration: 1.5,
                    },
                  }}
                  viewport={{ once: false }}
                  key={index}
                  className="bg-white overflow-hidden"
                >
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
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
