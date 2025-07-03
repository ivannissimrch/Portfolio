import Image from "next/image";

export default function SlicePage() {
  return (
    <main className="bg-blue-100 text-black px-6 py-10 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <section className="mb-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Slice</h1>
            <hr className="border-blue-300 mb-4" />
            <p className="text-base sm:text-lg">
              Slice is an expense-splitting app tailored specifically for
              roommates and friends. It helps users manage and divide expenses
              such as rent, utilities, subscription services, groceries, and
              more.
            </p>
            <a
              className="text-blue-500 underline font-medium mt-2 inline-block mr-2"
              href="https://islice.netlify.app/expenses-user"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Version
            </a>
            <a
              href="https://github.com/chingu-voyages/v51-tier2-team-25"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Repo
            </a>
          </div>
          <div className="bg-white shadow rounded overflow-hidden">
            <Image
              src="/images/sliceDesktop.png"
              alt="Slice app homepage"
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
              The goal was to help users manage and divide expenses such as
              rent, utilities, subscription services, groceries, and more. Our
              target demographic was the 18–30 age group, including students and
              early-career professionals who need an easy way to handle finances
              among roommates and friends.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
            <div className="flex gap-4 flex-wrap mb-4">
              {[
                "/images/react-icon.svg",
                "/images/javascript-icon.svg",
                "/images/react-router-icon.svg",
                "/images/tailwind-icon.svg",
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
              <li>React, JavaScript, Vite, Tailwind CSS</li>
              <li>React Router</li>
            </ul>
          </div>
        </section>

        {/* My Work */}
        <section className="mb-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-semibold mb-4">My Contributions</h2>
            <p className="text-base mb-2">
              We developed this project as part of a Chingu Voyage team. My
              contributions included: creating a centralized state management
              system using <code>useContext</code> and <code>useState</code>,
              and building a custom dropdown component with React Select to
              assign expenses to specific users.
            </p>
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
          <h2 className="text-2xl font-semibold mb-4">Thought Process</h2>
          <p className="text-base mb-4">
            Since this was the first time many of us had worked on a
            collaborative coding project, using GitHub effectively was a big
            challenge. We struggled with merge conflicts and accidentally
            overwriting each other’s code. It was a valuable learning experience
            in version control and teamwork.
          </p>
        </section>

        {/* What I Learned */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">What I Learned</h2>
          <ul className="list-disc pl-6 text-base space-y-1">
            <li>How to work effectively as part of a team</li>
            <li>How to use the Gitflow workflow</li>
            <li>
              The importance of clear communication with teammates to avoid
              merge conflicts, especially during stand-ups and task planning
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
