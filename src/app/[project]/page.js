"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PROJECTS_INFO } from "../projects_info";
import Card from "@/components/Card";
import CaseCard from "@/components/CaseCard";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function ProjectPage({ params }) {
  const { project } = React.use(params);
  const [twoProjects, setTwoProjects] = useState([]);

  const currentProject = PROJECTS_INFO.filter(
    (storeProject) => storeProject.title === project
  );
  const otherProjects = PROJECTS_INFO.filter(
    (storeProject, idx) => storeProject.title !== project
  );

  useEffect(() => {
    const shuffled = [...otherProjects].sort(() => 0.5 - Math.random());
    setTwoProjects(shuffled.slice(0, 2));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const randomNumber = Math.floor(Math.random() * 3);
  const towRandomOtherProjects = otherProjects.filter(
    (project, idx) => idx !== randomNumber
  );

  if (currentProject) {
    return (
      <main className="main-container case-page-container flex bg-accent">
        <section>
          <h1 className="case_title_padding_top ff-sans-normal case_title ">
            {currentProject[0].title}
          </h1>
          <CaseCard project={currentProject[0]} />
        </section>

        <section className="flex flex-col gap-12 purpose-section">
          <h1 className="fs-400 purpose-title case-subtitle">
            Purpose and Goal
          </h1>
          <p className="fs-200">{currentProject[0].purpose}</p>
        </section>
        <section className="stack-section">
          <section className="flex case-stack-icons-container">
            {currentProject[0].icons.map((icon, idx) => (
              <Image
                className="case-stack-icons-container"
                key={idx}
                width={63}
                height={56}
                src={icon}
                alt="technologies icons"
              />
            ))}
          </section>
          <section className="flex flex-col gap-12 case-stack-section-text">
            <h2 className="fs-400 case-tech-stack-title stack-title case-subtitle">
              Tech stack
            </h2>
            <p className="fs-200">{currentProject[0].techStack}</p>
          </section>
        </section>

        <section className="flex flex-col gap-12 collaboration-section">
          <Image
            className="collaboration-image"
            src={currentProject[0].teamWorkMobileImage}
            width={405}
            height={296}
            alt="case image"
          />
          <section className="collaboration-text">
            <h2 className="fs-400 case-subtitle">Team collaboration</h2>
            <p className="fs-200">{currentProject[0].collaboration}</p>
          </section>
        </section>

        <section className="flex flex-col gap-12 problems-section">
          <h2 className="fs-400 problems-title case-subtitle">
            Problems and thought process
          </h2>
          <p className="fs-200">{currentProject[0].thoughtProcess}</p>
        </section>

        <section className="flex flex-col gap-24">
          <h2 className="fs-400 other-projects-title case-subtitle">
            Other projects.{" "}
            <span className="text-blue">They are worth checking out too. </span>
          </h2>
          <section className="other-projects-parent-container">
            {twoProjects.map((project, idx) => (
              <section key={project.title} className="other-projects-container">
                {twoProjects ? <Card project={project} /> : "Loading"}
              </section>
            ))}
          </section>
        </section>
        <Footer />
      </main>
    );
  } else {
    return <h1>Loading</h1>;
  }
}
