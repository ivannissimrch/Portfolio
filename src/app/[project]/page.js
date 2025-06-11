"use client";
import Image from "next/image";
import React from "react";
import { SiJavascript, SiCss3, SiAdobeillustrator } from "react-icons/si";
import { PROJECTS_INFO } from "../projectsInfo";

export default function CaseStudy({ params }) {
  const { project } = React.use(params);
  const currentProject = PROJECTS_INFO.find(
    (storeProject) => storeProject.title === project
  );

  // Handle case where project is not found
  if (!currentProject) {
    return (
      <main className="bg-blue-200 text-black px-6 py-10 font-sans">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p>The project "{project}" could not be found.</p>
        </div>
      </main>
    );
  }

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
        <div className="bg-white shadow overflow-hidden">
          <div className="relative w-full">
            <Image
              src={currentProject.imageDesktop}
              alt={`${currentProject.title} project screenshot`}
              width={800}
              height={1200}
              quality={100}
              unoptimized
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 50vw"
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
            {currentProject.icons?.map((icon, idx) => (
              <Image
                key={idx}
                width={63}
                height={56}
                src={icon}
                alt="technologies icons"
                quality={95}
              />
            )) || <p className="text-sm">No tech stack icons available</p>}
          </div>
          <p className="text-sm max-w-md">{currentProject.techStack}</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Team collaboration</h3>
          <p className="text-sm max-w-md">{currentProject.collaboration}</p>
          {currentProject.teamWorkDesktopImage && (
            <div className="bg-white mt-4 overflow-hidden">
              <div className="relative w-full">
                <Image
                  src={currentProject.teamWorkDesktopImage}
                  alt={`${currentProject.title} team collaboration screenshot`}
                  width={800}
                  height={1200}
                  quality={100}
                  unoptimized
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          )}
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
          {PROJECTS_INFO.filter((p) => p.title !== currentProject.title)
            .slice(0, 2)
            .map((otherProject, i) => (
              <div
                key={otherProject.title || i}
                className="bg-white shadow overflow-hidden"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={otherProject.imageDesktop}
                    alt={`${otherProject.title} project screenshot`}
                    fill
                    quality={100}
                    unoptimized
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">{otherProject.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {otherProject.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}
