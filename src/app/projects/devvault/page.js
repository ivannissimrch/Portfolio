import Image from "next/image";
import { Icon } from "@iconify/react";
import { PROJECTS_LIST } from "@/app/projectsList";

export default function DevVaultPage() {
  return (
    <main className="bg-blue-100 text-black px-4 md:px-6 py-10 font-sans">
      <div className="max-w-8xl  mx-auto">
        {/* Header Section: Title + Hero Image */}
        <section className="mb-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">DevVault</h1>
            <hr className="border-blue-300 mb-4" />
            <p className="text-base sm:text-lg">
              DevVault is a developer resource search app built as part of a
              team project during a Chingu Voyage. It helps developers quickly
              find curated tutorials, blogs, and videos shared in the Chingu
              Discord.
              <br />
              <a
                href="https://dev-vault-chingu.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline mr-2"
              >
                Live version
              </a>
              <a
                href="https://github.com/chingu-voyages/V55-tier2-team-24"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Repo
              </a>
            </p>
          </div>
          <div className="w-full bg-gray-200 p-0.5">
            <Image
              src="/images/devvault.gif"
              alt="DevVault app demo"
              width={800}
              height={450}
              quality={100}
              unoptimized
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Goal + Tech Section */}
        <section className="mb-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Project Goal</h2>
            <p className="text-base mb-6">
              Build a developer resource hub with intelligent search that
              actually finds what you're looking for. The search needed to
              handle typos, understand related terms (searching "js" should find
              "javascript"), and work even when the API goes down.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
            <div className="flex gap-4 flex-wrap mb-4">
              {PROJECTS_LIST[1].tech.map((t) => (
                <div key={t.name} className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-xl text-white shadow-md ${t.bg}`}
                  >
                    <Icon icon={t.icon} width="20" height="20" />
                  </div>
                </div>
              ))}
            </div>
            <ul className="list-disc pl-6 text-base space-y-1">
              <li>React, Vite, TypeScript, Tailwind CSS</li>
              <li>
                Context API with a custom{" "}
                <code className="bg-gray-100 px-1">usePersistedState</code> hook
                for localStorage persistence
              </li>
              <li>Fuse.js for typo-tolerant search</li>
              <li>Material UI for select dropdowns</li>
              <li>Framer Motion for animated placeholder UX</li>
            </ul>
          </div>
        </section>

        {/* Contributions + Teamwork Image */}
        <section className="mb-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Teamwork & My Contributions
            </h2>
            <p className="text-base mb-4">
              This was my fourth Chingu Voyage, so by this point I had a solid
              understanding of working in a team using Scrum and Agile
              methodologies. It was also the first Voyage where we had no major
              merge conflicts something I believe was thanks to better planning,
              communication, and GitFlow practices. It was easy to collaborate
              because the other developers also had experience working in Chingu
              teams and understood the value of clean pull requests and frequent
              updates.
            </p>
            <ul className="list-disc pl-6 text-base space-y-1">
              <li>
                <strong>Fuse.js fuzzy matching</strong> with 0.1 threshold for
                typo tolerance, searching across name, author, and resource type
              </li>
              <li>
                <strong>Keyword expansion system</strong> that maps {'"'}js{'"'} to
                {'"'}javascript{'"'}, {'"'}frontend{'"'} to [HTML, CSS, JavaScript, React]
              </li>
              <li>
                <strong>Stopword removal</strong> using NLP library to filter
                out {'"'}the{'"'}, {'"'}and{'"'}, etc. for cleaner search results
              </li>
              <li>
                <strong>Set-based deduplication</strong> to prevent duplicate
                results when multiple keywords match
              </li>
              <li>
                <strong>localStorage caching</strong> with daily invalidation
                and fallback data when API fails
              </li>
              <li>
                Wrote and shared a GitFlow guide to support team collaboration
              </li>
            </ul>
          </div>
          <div className="bg-blue-200shadow relative w-full aspect-[16/9] overflow-hidden">
            <Image
              src="/images/devVaultTeamWork.png"
              alt="Team collaboration in DevVault project"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Challenges Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            Challenges & Thought Process
          </h2>
          <p className="text-base mb-4">
            The original Chingu API was unreliable and often went down. To keep
            the app functional, I:
          </p>
          <ul className="list-disc pl-6 text-base mb-4 space-y-1">
            <li>Fetched data once per day and stored it in localStorage</li>
            <li>
              Provided fallback resources using <code>FALLBACK_DATA</code>
            </li>
            <li>
              Filtered broken URLs and removed duplicates from the API response
            </li>
          </ul>
          <p className="text-base">
            Building a smart, typo-tolerant search bar pushed me to deeply
            explore Fuse.js and carefully design the app’s state structure. I
            also added additional educational resources for new Chingu users,
            like a Git team workflow guide, GitFlow documentation, and helpful
            videos from the Chingu YouTube channel about how Voyages work.
          </p>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">What I Learned</h2>
          <ul className="list-disc pl-6 text-base space-y-1">
            <li>
              How fuzzy search algorithms work and how to tune thresholds for
              the right balance of strictness vs flexibility
            </li>
            <li>
              How to implement keyword expansion and synonym mapping for
              intelligent search
            </li>
            <li>
              NLP concepts like stopword removal and why they matter for search
              quality
            </li>
            <li>
              How to use Sets for O(1) deduplication instead of O(n) array
              methods
            </li>
            <li>
              How to design caching strategies with time-based invalidation
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
