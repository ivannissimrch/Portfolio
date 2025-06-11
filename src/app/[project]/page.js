"use client";
import Image from "next/image";
import React from "react";
import { SiJavascript, SiCss3, SiAdobeillustrator } from "react-icons/si";
import { PROJECTS_INFO } from "../projectsInfo";

export default function CaseStudy({ params }) {
  const { project } = React.use(params);
  const [currentProject] = PROJECTS_INFO.filter(
    (storeProject) => storeProject.title === project
  );

  return (
    <main className="bg-blue-200 text-black px-6 py-10 font-sans">
      {/* Project Intro */}
      <section className="mb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">{currentProject.title}</h1>
          <hr className="border-blue-300 mb-4" />
          <h2 className="font-semibold mb-2">Purpose and Goal</h2>
          <p className="text-sm max-w-md">{currentProject.purpose}</p>
        </div>
        <div className="bg-white p-4  shadow">
          <div className="w-full h-96 bg-white mb-2">
            <Image
              src={currentProject.imageDesktop}
              alt="image"
              width={800}
              height={450}
              layout="responsive"
              priority
            />
          </div>
        </div>
      </section>

      {/* Tech + Team */}
      <section className="mb-16 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h3 className="font-semibold text-lg mb-2">Tech stack</h3>
          <div className="flex gap-4 text-3xl mb-3">
            {currentProject.icons.map((icon, idx) => (
              <Image
                key={idx}
                width={63}
                height={56}
                src={icon}
                alt="technologies icons"
              />
            ))}
          </div>
          <p className="text-sm max-w-md">{currentProject.techStack}</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Team collaboration</h3>

          <p className="text-sm max-w-md">{currentProject.collaboration}</p>
          <div className="w-full h-full bg-white p-4 mt-4">
            <Image
              src={currentProject.teamWorkDesktopImage}
              alt="image"
              width={800}
              height={450}
              layout="responsive"
              priority
            />
          </div>
        </div>
      </section>

      {/* Problems and Process */}
      <section className="mb-16">
        <h3 className="font-semibold text-lg mb-2">
          Problems and thought process
        </h3>
        <p className="text-sm max-w-2xl">{currentProject.thoughtProcess}</p>
      </section>

      {/* Other Projects */}
      <section>
        <h3 className="font-semibold text-lg mb-4">
          Other projects. They are worth checking out too.
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="bg-white p-4  shadow">
              <div className="w-full h-36 bg-blue-200 mb-2"></div>
              <h4 className="font-semibold">Project Title</h4>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
