"use client";
import Link from "next/link";
import React from "react";
import { PROJECTS_INFO } from "../projects_info";
import Card from "@/components/Card";
import CaseCard from "@/components/CaseCard";
import Image from "next/image";

export default function ProjectPage({ params }) {
  const { project } = React.use(params);
  console.log(project);

  const currentProject = PROJECTS_INFO.filter(
    (storeProject) => storeProject.title === project
  );
  const otherProjects = PROJECTS_INFO.filter(
    (storeProject) => storeProject.title !== project
  );
  console.log(currentProject);

  return (
    <main className="main-container case-page-container flex bg-accent">
      <section>
        <h1 className="case_title_padding_top ff-sans-normal case_title">
          {currentProject[0].title}
        </h1>
        <CaseCard project={currentProject[0]} />
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ex.
          Neque, expedita. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Neque, expedita.
        </p>
        <Link href="https://chingu-expense-splitter.vercel.app">Live site</Link> */}
      </section>
      <section>
        <h1 className="fs-400">Purpose and Goal</h1>
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
      <section>
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

        <h2 className="fs-400 case-tech-stack-title">Tech stack</h2>
        <p className="fs-200">
          React made the most sense for the web application because it required
          to connect to GraphQL, and the Shophify-SDK for Javascript ties into
          Rect very smoothly. The Shopify-Buy-SDK was chosen because of the
          ability for the client to modify the products without any complex
          coding knowledge. React hooks and session storage are also used
          throughout the project to maintain the user cart items and allows the
          cart count and other shopping data to be displayed universally without
          the need for Redux. Netflify is also an obvious choice for deployment
          because of its speed and reliability.
        </p>
      </section>
      <section>
        <h2 className="fs-400">Team collaboration</h2>
        <p className="fs-200">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          nostrum laudantium officiis autem doloremque nesciunt omnis odit,
          incidunt rerum odio. Officiis, libero! Numquam, ducimus. Doloribus quo
          aperiam officia soluta provident?
        </p>
      </section>
      <section>
        <h2 className="fs-400">Problems and thougth process</h2>
        <p className="fs-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          odit debitis tempora maiores nam dolor accusantium est. Voluptatibus,
          quidem impedit.
        </p>
      </section>
      <section>
        <h2 className="fs-400">Other projects</h2>
        {otherProjects.map((project) => (
          <Card project={project} key={project.title} />
        ))}
      </section>
    </main>
  );
}
