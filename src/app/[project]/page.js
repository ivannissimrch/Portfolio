"use client";
import Link from "next/link";
import React from "react";
import { PROJECTS_INFO } from "../projects_info";
import Card from "@/components/Card";
import CaseCard from "@/components/CaseCard";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function ProjectPage({ params }) {
  const { project } = React.use(params);

  const currentProject = PROJECTS_INFO.filter(
    (storeProject) => storeProject.title === project
  );

  const otherProjects = PROJECTS_INFO.filter(
    (storeProject, idx) => storeProject.title !== project
  );

  const randomNumber = Math.floor(Math.random() * 3);
  const towRandomOtherProjects = otherProjects.filter(
    (project, idx) => idx !== randomNumber
  );

  return (
    <main className="main-container case-page-container flex bg-accent">
      <section>
        <h1 className="case_title_padding_top ff-sans-normal case_title ">
          {currentProject[0].title}
        </h1>
        <CaseCard project={currentProject[0]} />
      </section>

      <section className="flex flex-col gap-12 purpose-section">
        <h1 className="fs-400 purpose-title case-subtitle">Purpose and Goal</h1>
        <p className="fs-200">
          This project included 3 phases and iterations of the site. Phase 1
          simply allowed users to enter their email to be alerted to when the
          product was released. Phase 2 was quite larger and is designed to
          introduce users to the Slice product and answer any questions they may
          have. Phase three is by far the largest and most complex, as it
          included the full shop and cart pages as well as the logic and backend
          that goes along with it.
        </p>
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
          <p className="fs-200">
            React made the most sense for the web application because it
            required to connect to GraphQL, and the Shophify-SDK for Javascript
            ties into Rect very smoothly. The Shopify-Buy-SDK was chosen because
            of the ability for the client to modify the products without any
            complex coding knowledge. React hooks and session storage are also
            used throughout the project to maintain the user cart items and
            allows the cart count and other shopping data to be displayed
            universally without the need for Redux. Netflify is also an obvious
            choice for deployment because of its speed and reliability.
          </p>
        </section>
      </section>

      <section className="flex flex-col gap-12 collaboration-section">
        <Image
          className="collaboration-image"
          src={"/images/case1.png"}
          width={405}
          height={296}
          alt="case image"
        />
        <section className="collaboration-text">
          <h2 className="fs-400 case-subtitle">Team collaboration</h2>
          <p className="fs-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
            nostrum laudantium officiis autem doloremque nesciunt omnis odit,
            incidunt rerum odio. Officiis, libero! Numquam, ducimus. Doloribus
            quo aperiam officia soluta provident?
          </p>
        </section>
      </section>

      <section className="flex flex-col gap-12 problems-section">
        <h2 className="fs-400 problems-title case-subtitle">
          Problems and thought process
        </h2>
        <p className="fs-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          odit debitis tempora maiores nam dolor accusantium est. Voluptatibus,
          quidem impedit.
        </p>
      </section>
      <Image
        className="problems-image-mobile"
        src={"/images/case2.jpeg"}
        width={405}
        height={296}
        alt="case image"
      />

      <Image
        className="problems-image-tablet"
        src={"/images/thoughtImage.png"}
        width={928}
        height={681}
        alt="case image"
      />

      <section className="flex flex-col gap-24">
        <h2 className="fs-400 other-projects-title case-subtitle">
          Other projects.{" "}
          <span className="text-blue">They are worth checking out too. </span>
        </h2>
        <section className="other-projects-parent-container">
          {towRandomOtherProjects.map((project, idx) => (
            <section key={project.title} className={"other-projects-container"}>
              <Card project={project} />
            </section>
          ))}
        </section>
      </section>
      <Footer />
    </main>
  );
}
