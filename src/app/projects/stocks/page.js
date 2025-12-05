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
              Stock tracker with dual API integration, smart caching with
              different TTLs, and data transformation that converts raw daily
              prices into weekly and monthly trend averages.
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
          <div className="w-full bg-gray-200 p-0.5">
            <Image
              src="/images/stocks.gif"
              alt="Stocks app demo"
              width={800}
              height={450}
              quality={100}
              unoptimized
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Goal + Tech Stack */}
        <section className="mb-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Project Goal</h2>
            <p className="text-base mb-6">
              Build a stock tracker that integrates multiple APIs, handles rate
              limits gracefully, and transforms raw daily data into meaningful
              trend visualizations. The challenge: APIs have strict rate limits,
              so I needed smart caching. Quotes refresh every 15 minutes,
              historical data refreshes daily.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
            <div className="flex gap-4 flex-wrap mb-4">
              {PROJECTS_LIST[2].tech.map((t) => (
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
              Solo Project
            </h2>
                        <ul className="list-disc pl-6 text-base space-y-1">
              <li>
                <strong>Dual API integration</strong>: Finnhub for real-time
                quotes, Alpha Vantage for historical data, with{" "}
                <code>Promise.all</code> for parallel fetching
              </li>
              <li>
                <strong>Smart caching with different TTLs</strong>: quotes
                invalidate after 15 minutes, historical data after 24 hours
              </li>
              <li>
                <strong>Data transformation pipeline</strong> that converts raw daily data to
                weekly averages and monthly averages for trend charts
              </li>
              <li>
                <strong>Auto-refresh system</strong> using{" "}
                <code>useAutoUpdateStock</code> hook with 30-second interval
                checks
              </li>
              <li>
                <strong>Debounced search</strong> (500ms) to prevent API spam on
                rapid typing
              </li>
              <li>
                Unit tests with <code>Vitest</code> for data transformation
                functions
              </li>
            </ul>
          </div>
          <div className="bg-blue-200 shadow relative w-full aspect-[16/9] overflow-hidden flex items-center justify-center">
            <p className="text-lg font-semibold text-blue-800">
              Solo Project
            </p>
          </div>
        </section>

        {/* Technical Decisions */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            Technical Decisions
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-2">Why Two APIs?</h3>
              <p className="text-base">
                Finnhub provides real-time quotes but limited historical data.
                Alpha Vantage has comprehensive historical data but slower
                updates. Using both gives users current prices AND meaningful
                trend analysis. <code>Promise.all</code> fetches both in
                parallel to minimize load time.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Why Different Cache TTLs?</h3>
              <p className="text-base">
                Stock quotes change throughout the day, so a 15-minute cache keeps
                data fresh without hitting rate limits. Historical data only
                changes once daily after market close, so a 24-hour cache is
                sufficient.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Why Transform Daily to Weekly/Monthly?</h3>
              <p className="text-base">
                Raw daily data over 5 months is noisy and hard to read. Weekly
                and monthly averages reveal actual trends. Built a generic
                grouping utility with a <code>GroupType</code> enum so the same
                logic handles both week and month aggregation.
              </p>
            </div>
          </div>
        </section>

        {/* What I Learned */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">What I Learned</h2>
          <ul className="list-disc pl-6 text-base space-y-1">
            <li>
              How to design caching strategies with different TTLs for different
              data types
            </li>
            <li>
              How to transform and aggregate time-series data (daily to weekly to
              monthly averages)
            </li>
            <li>
              How to integrate multiple APIs with fallback strategies for rate
              limits
            </li>
            <li>
              How to implement auto-refresh systems with interval-based checks
            </li>
            <li>
              How debouncing prevents unnecessary API calls and improves UX
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
