"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { PROJECTS_LIST } from "@/app/projectsList";

export default function WeeklyBytesPage() {
  return (
    <main className="bg-blue-100 text-black px-4  md:px-6 py-10 font-sans">
      <div className="max-w-8xl mx-auto">
        {/* Header Section */}
        <section className="mb-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">
              Weekly Bytes
            </h1>
            <hr className="border-blue-300 mb-4" />
            <p className="text-base sm:text-lg">
              Weekly Bytes is an intuitive web application designed to help
              managers effortlessly create and share weekly meal plans while
              prioritizing staff safety and dietary needs.
            </p>
            <a
              className="text-blue-500 underline font-medium mt-2 inline-block mr-2"
              href="https://weekly-bytes.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Version
            </a>
            <a
              href="https://github.com/chingu-voyages/V53-tier2-team-26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Repo
            </a>
          </div>
          <div className="bg-blue-200shadow relative w-full aspect-[16/9] overflow-hidden">
            <Image
              src="/images/weeklyBytesDesktop.png"
              alt="Weekly Bytes desktop homepage"
              width={800}
              height={600}
              quality={100}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Goal + Tech Stack */}
        <section className="mb-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Project Goal</h2>
            <p className="text-base mb-6">
              The app was designed to streamline meal planning for managers.
              With a wide selection of delicious meals, it automatically filters
              out dishes containing allergens based on employee input. It then
              generates a randomized weekly menu, ensuring variety and avoiding
              repetition.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
            <div className="flex gap-4 flex-wrap mb-4">
              {PROJECTS_LIST[2].tech.map((t) => (
                <div key={t.name} className="flex flex-col items-center">
                  <motion.div
                    className={`w-8 h-8 flex items-center justify-center rounded-xl text-white shadow-md ${t.bg}`}
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
                    <Icon icon={t.icon} width="20" height="20" />
                  </motion.div>
                </div>
              ))}
            </div>
            <ul className="list-disc pl-6 text-base space-y-1">
              <li>React, JavaScript, Vite, Tailwind CSS</li>
              <li>React Router, React Select, and Material UI</li>
            </ul>
          </div>
        </section>

        {/* My Work */}
        <section className="mb-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-semibold mb-4">My Contributions</h2>
            <p className="text-base mb-2">
              This project was built as part of a 6-week Chingu Voyage with a
              team of 5 developers. Some of the tasks I handled included:
              implementing the dropdown menu for selecting employee allergies
              using React Select, writing the logic to filter out meals that
              contain any of the selected allergens, and creating a custom hook
              that uses `useState` and local storage to persist filtered dishes.
              I also contributed to PR reviews and helped deploy the app with a
              custom domain.
            </p>
          </div>
          <div className="bg-blue-200shadow relative w-full aspect-[16/9] overflow-hidden">
            <Image
              src="/images/weeklyBytesDTeamWork.png"
              alt="Weekly Bytes team collaboration"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/*Thought Process*/}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            Challenges and Thought Process
          </h2>
          <p className="text-base mb-4">
            One challenge I faced was styling the React Select dropdown.
            Initially, it seemed like a great choice, but the more customization
            we needed, the harder it became to style. I considered building a
            custom dropdown from scratch, but realized it too late in the
            project, and we didn’t have enough time left to implement it.
          </p>
        </section>

        {/* What I Learned */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">What I Learned</h2>
          <ul className="list-disc pl-6 text-base space-y-1">
            <li>How to add rules to GitHub repository branches</li>
            <li>How to deploy and use a custom domain</li>
            <li>How to add a pull request template</li>
            <li>
              How to implement a custom hook using <code>useState</code> and
              local storage
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
