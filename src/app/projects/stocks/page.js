"use client";
import Image from "next/image";

export default function StocksPage() {
  return (
    <main className="bg-blue-100 text-black px-6 py-10 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <section className="mb-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Stocks</h1>
            <hr className="border-blue-300 mb-4" />
            <p className="text-base sm:text-lg">
              A responsive stock search and analysis app built to strengthen my
              skills in TypeScript, API integration, caching strategies, and
              unit testing.
            </p>
            <a
              className="text-blue-700 underline font-medium mt-2 inline-block"
              href="https://typescriptstocks.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Version
            </a>
          </div>
          <div className="bg-white shadow rounded overflow-hidden">
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
              My goal was to build a reliable stock-tracking app using
              real-world APIs. Users can search for stock data by name and
              analyze trends using historical data. The app displays charts for
              7-day, 6-week, and 5-month ranges, along with real-time price
              updates. I also practiced converting a Figma design to UI using
              plain CSS and improved my TypeScript, caching, and testing skills.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
            <div className="flex gap-4 flex-wrap mb-4">
              {[
                "/images/react-icon.svg",
                "/images/typescript-icon.svg",
                "/images/css-icon.svg",
                "/images/html-icon.svg",
              ].map((icon, idx) => (
                <Image
                  key={idx}
                  src={icon}
                  alt={`Tech icon ${idx + 1}`}
                  width={40}
                  height={40}
                />
              ))}
            </div>
            <ul className="list-disc pl-6 text-base space-y-1">
              <li>React, Vite, TypeScript, plain CSS</li>
              <li>Vitest for unit testing</li>
              <li>Custom caching mechanism using Context and custom hooks</li>
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
                Implemented caching using <code>useContext</code> and a custom{" "}
                <code>usePersistedState</code> hook
              </li>
              <li>
                Created reusable, typed components with clean TypeScript
                interfaces
              </li>
              <li>
                Wrote unit tests using <code>Vitest</code> to verify app
                behavior
              </li>
              <li>Added auto-refresh to update recently viewed stock data</li>
            </ul>
          </div>
          <div className="bg-white shadow rounded overflow-hidden">
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
            several Chingu Voyages. I applied many lessons learned from this
            app, like caching logic, search bar creation, and TypeScript best
            practices to my Chingu team projects.
          </p>
          <p className="text-base mb-4">
            I initially used Material UI but later transitioned to plain CSS to
            improve my layout and styling skills. Since I didn’t know how to
            convert a Figma design manually, I worked with a tutor,{" "}
            <a
              href="https://www.wyzant.com/match/tutor/89018372"
              className="text-blue-700 underline"
              target="_blank"
            >
              Green Lee
            </a>
            , to guide me through the process.
          </p>
          <p className="text-base mb-4">
            Due to API rate limits, I added local caching and integrated a
            second API to fill in missing data. Later, I introduced unit tests
            and began planning a stock simulation feature, which is currently in
            development.
          </p>
        </section>

        {/* What I Learned */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">What I Learned</h2>
          <ul className="list-disc pl-6 text-base space-y-1">
            <li>How to build UIs from a Figma file without a UI library</li>
            <li>How to handle API rate limits with caching and fallbacks</li>
            <li>How to write clean, maintainable React code with TypeScript</li>
            <li>
              How to test logic with <code>Vitest</code> and iterate from
              feedback
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
