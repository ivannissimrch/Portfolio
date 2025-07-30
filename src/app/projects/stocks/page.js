import Image from "next/image";
import { Icon } from "@iconify/react";
import { PROJECTS_LIST } from "@/app/projectsList";

export default function StocksPage() {
  return (
    <main className="bg-blue-100 text-black px-4  md:px-6 py-10 font-sans">
      <div className="max-w-8xl mx-auto">
        {/* Header Section */}
        <section className="mb-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Stocks</h1>
            <hr className="border-blue-300 mb-4" />
            <p className="text-base sm:text-lg">
              A stock search and analysis app that allows users to search for
              stocks by name and view detailed information about each stock.
            </p>
            <a
              className="text-blue-500 underline font-medium mt-2 inline-block mr-2"
              href="https://typescriptstocks.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Version
            </a>
            <a
              href="https://github.com/ivannissimrch/stockDashBoard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Repo
            </a>
          </div>
          <div className="bg-blue-200shadow relative w-full aspect-[16/9] overflow-hidden">
            <Image
              src="/images/stocksDesktop.png"
              alt="Stocks app homepage"
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
              My goal was to build a reliable stock search app using real-world
              APIs. Users can search for a stock by name and analyze its trends
              using historical data. The app displays charts for 7-day, 6-week,
              and 5-month periods, along with real-time price updates.
              <strong>
                {" "}
                (Note: only the currently selected stock is updated every 15
                minutes.)
              </strong>
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
              <li>React, TypeScript, Vite, plain CSS</li>
              <li>Vitest for unit testing</li>
              <li>
                Custom caching using React Context and a usePersistedState hook
              </li>
            </ul>
          </div>
        </section>

        {/* My Work */}
        <section className="mb-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              My Contributions (Solo Project)
            </h2>
            <p className="text-base mb-2">
              With mentorship support from{" "}
              <a
                href="https://mentorcruise.com/mentor/martinstadler/?queryID=37da4bb9f036b663fb9107010ef2416a&source=search"
                className="text-blue-700 underline"
                target="_blank"
              >
                Martin Stadler
              </a>
              , I completed the following:
            </p>
            <ul className="list-disc pl-6 text-base space-y-1">
              <li>
                Converted a Figma design into a responsive UI using plain CSS
              </li>
              <li>
                Implemented a caching system using <code>useContext</code> and a
                custom <code>usePersistedState</code> hook
              </li>
              <li>
                Created reusable, typed components with clean TypeScript
                interfaces
              </li>
              <li>
                Wrote unit tests with <code>Vitest</code> to ensure app
                functionality
              </li>
              <li>
                Built an quote auto-update feature to update the quotes of the
                stocks
              </li>
            </ul>
          </div>
          <div className="bg-blue-200shadow relative w-full aspect-[16/9] overflow-hidden">
            <Image
              src="/images/stocksDTeamWork.png"
              alt="Mentor feedback and development iterations"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Iterations */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            Iterations & Thought Process
          </h2>
          <p className="text-base mb-4">
            This project went through multiple iterations and overlapped with
            several Chingu Voyages. I used what I learned from this app, like
            caching logic and search implementation, to contribute more
            effectively to team projects.
          </p>
          <p className="text-base mb-4">
            I originally used Material UI, but switched to plain CSS to improve
            my layout and styling skills. Since I wasn’t familiar with turning
            Figma designs into HTML/CSS, I worked with a tutor,{" "}
            <a
              href="https://www.wyzant.com/match/tutor/89018372"
              className="text-blue-700 underline"
              target="_blank"
            >
              Green L
            </a>
            , to guide me through the process.
          </p>
          <p className="text-base mb-4">
            Due to API rate limits, I added local caching and integrated a
            fallback API to ensure the data remained reliable even during
            refresh limits.
          </p>
        </section>

        {/* What I Learned */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">What I Learned</h2>
          <ul className="list-disc pl-6 text-base space-y-1">
            <li>
              How to build a UI from a Figma design without using a UI library
            </li>
            <li>
              How to manage API rate limits using caching and fallback
              strategies
            </li>
            <li>
              How to write scalable, maintainable React code with TypeScript
            </li>
            <li>
              How to test core logic using <code>Vitest</code> and improve based
              on feedback
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
