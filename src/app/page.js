import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PROJECTS_LIST } from "./projectsList";
import { TECHNOLOGIES_ICONS } from "./TechnologiesIcons";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-blue-100 text-black px-6 py-10 font-sans">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <section className="flex flex-col items-center md:flex-row md:items-start md:justify-center text-left mb-16 gap-6 px-4">
            {/* Avatar */}
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shrink-0">
              <Image
                src="/images/profile.jpg"
                alt="Avatar"
                width={128}
                height={128}
                priority
                quality={95}
                className="rounded-full object-cover"
                sizes="128px"
              />
            </div>
            {/* Intro Text */}
            <div className="max-w-xl mt-6 md:mt-0">
              <h1 className="text-3xl sm:text-4xl font-bold flex justify-center md:justify-start gap-1">
                Hi, I&apos;m
                <span className="text-blue-700">Ivan Rebolledo</span>
              </h1>

              <h2 className="text-xl sm:text-2xl mt-2 flex justify-center md:justify-start">
                a front-end developer.
              </h2>
              <p>Welcome to my portfolio page</p>
              <div className="flex space-x-4 my-4 text-2xl justify-center md:justify-start">
                <a href="https://www.linkedin.com/in/ivan-rebolledo-012b17244/">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/ivannissimrch">
                  <FaGithub />
                </a>
              </div>
              <p className="bg-white px-6 py-2 text-sm sm:text-base text-center md:text-left">
                I love learning about front-end development technologies and
                creating applications using{" "}
                <span className="font-bold">JavaScript, </span>
                <span className="font-bold">React,</span>{" "}
                <span className="font-bold">and Next.js</span>. Besides coding,
                I love taking my miniature poodle on hikes on the weekends and I
                enjoy Latin dancing.
              </p>
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
                    <div className="text-sm text-right mb-2">
                      {project.date}
                    </div>
                    <h4 className="font-semibold">{project.title}</h4>
                    <Link href={project.link} className="text-sm text-blue-800">
                      {project.description}
                    </Link>
                  </div>
                  <div className="relative w-full h-96 bg-blue-200">
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

          {/* Technologies Section */}
          <section className="mb-16">
            <h3 className="text-2xl font-bold mb-4">
              Technologies I work with. As a developer
            </h3>
            <div className="flex flex-wrap gap-8 text-3xl">
              {TECHNOLOGIES_ICONS.map((icon, idx) => (
                <Image
                  key={idx}
                  src={icon}
                  alt=""
                  width={40}
                  height={40}
                  quality={95}
                />
              ))}
            </div>
          </section>

          {/* Contact Section */}
        </div>
      </main>
    </>
  );
}
