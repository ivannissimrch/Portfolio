import Image from "next/image";
import { Icon } from "@iconify/react";
import { PROJECTS_LIST } from "@/app/projectsList";

export default function ShadowSpeakPage() {
  return (
    <main className="bg-blue-100 text-black px-4 md:px-6 py-10 font-sans">
      <div className="max-w-8xl mx-auto">
        {/* Header Section */}
        <section className="mb-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">ShadowSpeak</h1>
            <hr className="border-blue-300 mb-4" />
            <p className="text-base sm:text-lg">
              A full-stack ESL learning platform where students practice
              pronunciation by recording themselves mimicking YouTube video
              segments, and teachers review submissions and provide feedback.
            </p>
            <a
              className="text-blue-500 underline font-medium mt-2 inline-block mr-2"
              href="https://shadowing-app-spec.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Version
            </a>
            <a
              href="https://github.com/chingu-voyages/V55-tier2-team-24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Repo
            </a>
          </div>
          <div className="w-full bg-gray-200 p-0.5">
            <Image
              src="/images/esl.gif"
              alt="ShadowSpeak app demo"
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
              Build a platform that replaces the scattered workflow ESL teachers
              use today: Google Drive for storage, email for submissions, and
              screen recording software for practice. Students can loop specific
              YouTube segments, record themselves in-browser, and submit
              directly. Teachers create lessons, assign them to students, and
              review submissions with feedback.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
            <div className="flex gap-4 flex-wrap mb-4">
              {PROJECTS_LIST[0].tech.map((t) => (
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
              <li>Next.js 15 with App Router, React 19, TypeScript</li>
              <li>Express.js backend with PostgreSQL database</li>
              <li>Azure Blob Storage for audio recordings and images</li>
              <li>JWT authentication with role-based access control</li>
              <li>SWR for data fetching with optimistic updates</li>
              <li>Material UI components, CSS Modules with container queries</li>
            </ul>
          </div>
        </section>

        {/* My Work */}
        <section className="mb-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Solo Project
            </h2>
            <p className="text-base mb-2">
              This is my most comprehensive project. I built everything from
              scratch:
            </p>
            <ul className="list-disc pl-6 text-base space-y-1">
              <li>
                <strong>Browser audio recording</strong> using MediaRecorder API
                with start, pause, resume, and stop controls
              </li>
              <li>
                <strong>YouTube segment looping</strong> via custom 100ms
                polling (YouTube API does not support native looping)
              </li>
              <li>
                <strong>Cloud storage pipeline</strong>: recordings converted to
                base64, uploaded to Azure Blob Storage, URLs persisted to
                database
              </li>
              <li>
                <strong>JWT auth with RBAC</strong>: teachers and students have
                different permissions enforced on both frontend and backend
              </li>
              <li>
                <strong>PostgreSQL schema</strong> with users, lessons, and
                assignments tables, proper foreign keys and cascade deletes
              </li>
              <li>
                <strong>State management</strong> using Context API + useReducer
                for complex recorder state machine
              </li>
            </ul>
          </div>
          <div className="bg-blue-200 shadow relative w-full aspect-[16/9] overflow-hidden flex items-center justify-center">
            <p className="text-lg font-semibold text-blue-800">
              Solo Project
            </p>
          </div>
        </section>

        {/* Technical Challenges */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            Technical Challenges Solved
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">
                YouTube Segment Looping
              </h3>
              <p className="text-base">
                The YouTube embedded player does not support native segment
                looping. I built a custom solution using a{" "}
                <code className="bg-gray-100 px-1">useLoopButtons</code> hook
                that polls the video position every 100ms. When playback reaches
                the end timestamp, it automatically seeks back to the start. The
                state machine manages transitions: idle, start_set, ready,
                looping.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">
                Browser Audio Recording Pipeline
              </h3>
              <p className="text-base">
                Recording audio in the browser and uploading to cloud storage
                required multiple integration steps: capture audio stream with
                MediaRecorder API, convert Blob to base64, send to Express
                backend, convert to Buffer, stream to Azure Blob Storage, return
                URL, and persist to PostgreSQL. All managed through a reducer
                pattern in{" "}
                <code className="bg-gray-100 px-1">RecorderPanelContext</code>.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">
                Role-Based Access Control
              </h3>
              <p className="text-base">
                Implemented two-tier access: JWT tokens contain role claims
                ({'"'}teacher{'"'} or {'"'}student{'"'}), middleware validates every API
                request, and server-side route protection checks{" "}
                <code className="bg-gray-100 px-1">
                  req.user.role !== {'"'}teacher{'"'}
                </code>{" "}
                before allowing destructive operations. Students get 403
                Forbidden if they try to access teacher endpoints.
              </p>
            </div>
          </div>
        </section>

        {/* What I Learned */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">What I Learned</h2>
          <ul className="list-disc pl-6 text-base space-y-1">
            <li>
              How to build a complete full-stack application from database
              schema to deployed frontend
            </li>
            <li>
              How to work with browser APIs (MediaRecorder) and cloud services
              (Azure Blob Storage)
            </li>
            <li>
              How to implement proper authentication and authorization with JWT
              and role-based access
            </li>
            <li>
              How to manage complex UI state using reducer patterns and state
              machines
            </li>
            <li>
              How to design relational database schemas with proper foreign keys
              and constraints
            </li>
            <li>
              How to handle file uploads with proper validation, size limits,
              and unique naming
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
