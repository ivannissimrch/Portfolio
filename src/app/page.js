"use client";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PROJECTS_LIST } from "./projectsList";
import { TECHNOLOGIES_ICONS } from "./TechnologiesIcons";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import useAnimatedText from "@/hooks/useAnimatedText";

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
              <h1 className="text-3xl sm:text-4xl font-bold">
                {useAnimatedText("Hi, I’m Ivan Rebolledo")}
              </h1>
              <motion.h2
                className="text-3xl sm:text-4xl mt-2 font-bold text-blue-800"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(59,130,246,0)",
                    "0 0 8px rgba(59,130,246,1.1)",
                    "0 0 0px rgba(59,130,246,0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                React Front-End Developer
              </motion.h2>

              <p className="py-2text-base md:text-left">
                I build web apps with{" "}
                <strong>TypeScript, Next.js, React, Material UI</strong>,
                and <strong>Tailwind CSS</strong>. I have collaborated on{" "}
                <a href="https://www.chingu.io/" className="text-blue-800">
                  Chingu{" "}
                </a>
                team projects like{" "}
                <a
                  href="https://dev-vault-chingu.netlify.app/"
                  className="text-blue-800 "
                >
                  DevVault
                </a>
                , using Agile practices and the GitHub Flow
                workflow. My most recent project is{" "}
                <a
                  href="https://shadowing-app-spec.vercel.app/"
                  className="text-blue-800 "
                >
                  ShadowSpeak
                </a>
                , a full-stack ESL platform with browser audio recording, JWT auth, and PostgreSQL.
                When not coding, I am out hiking with my miniature poodle or
                enjoying Latin dancing.
              </p>

              {/* <div className="mt-4"></div> */}

              <div className="flex items-center space-x-4 mt-4 text-3xl">
                <a
                  href="mailto:ivannissimrch@gmail.com"
                  className="inline-block bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition  text-sm"
                >
                  Let’s connect
                </a>
                <a
                  href="https://www.linkedin.com/in/ivan-rebolledo-012b17244/"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a href="https://github.com/ivannissimrch" aria-label="GitHub">
                  <FaGithub />
                </a>
              </div>
            </div>
          </section>

          {/* Technologies Section */}
          <section className="mb-16">
            <h3 className="text-2xl font-bold mb-4">
              Technologies I work with.
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                  className="bg-white shadow-md overflow-hidden p-6 space-y-4"
                >
                  <div className="p-4">
                    <div className="text-sm flex  gap-2 mb-2">
                      <div className="min-w-28">{project.date}</div>
                      <div className="flex justify-evenly sm:justify-end w-full gap-2 flex-wrap">
                        {project.tech.map((t) => (
                          <div
                            key={t.name}
                            className="flex flex-col items-center"
                          >
                            <div
                              className={`w-8 h-8 flex items-center justify-center rounded-xl text-white shadow-md ${t.bg}`}
                            >
                              <Icon icon={t.icon} width="20" height="20" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <h4 className="font-semibold text-base">{project.title}</h4>
                    <p className="text-base text-gray-800 mb-4">
                      {project.description}
                    </p>

                    <Link
                      href={project.link}
                      className="bg-blue-900 text-white px-6 py-2 hover:bg-blue-800 transition cursor-pointer mr-2"
                    >
                      {" "}
                      View case study
                    </Link>
                    <Link
                      href={project.website}
                      className="bg-blue-900 text-white px-6 py-2 hover:bg-blue-800 transition cursor-pointer"
                    >
                      {" "}
                      Website
                    </Link>
                  </div>
                  <div className="w-full bg-gray-200 p-0.5">
                    <Image
                      src={project.imageDesktop}
                      alt={`${project.title} project screenshot`}
                      width={800}
                      height={450}
                      quality={100}
                      unoptimized
                      className="w-full h-auto"
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
