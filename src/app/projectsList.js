export const PROJECTS_LIST = [
  {
    title: "ShadowSpeak",
    date: "December 2025",
    description:
      "Full-stack ESL platform with browser-based audio recording (MediaRecorder API), YouTube segment looping via custom 100ms polling, and Azure Blob Storage integration. Built JWT authentication with role-based access control. Teachers create lessons and review submissions, students record and submit.",
    imageDesktop: "/images/esl.gif",
    link: "/projects/shadowspeak",
    website: "https://shadowing-app-spec.vercel.app/",
    tech: [
      { name: "Next.js", icon: "devicon:nextjs", bg: "bg-black" },
      { name: "TypeScript", icon: "devicon:typescript", bg: "bg-indigo-500" },
      { name: "React", icon: "devicon:react", bg: "bg-cyan-800 text-white" },
      { name: "Express", icon: "devicon:express", bg: "bg-gray-800" },
      { name: "PostgreSQL", icon: "devicon:postgresql", bg: "bg-blue-800" },
    ],
  },
  {
    title: "DevVault",
    date: "June 2025",
    description:
      "Developer resource hub with intelligent search. Built the search system: Fuse.js fuzzy matching for typo tolerance, keyword expansion that maps 'js' to 'javascript' and 'frontend' to [HTML, CSS, JavaScript, React], plus stopword removal for cleaner results.",
    imageDesktop: "/images/devvault.gif",
    link: "/projects/devvault",
    website: "https://dev-vault-chingu.netlify.app/",
    tech: [
      { name: "TypeScript", icon: "devicon:typescript", bg: "bg-indigo-500" },
      { name: "React", icon: "devicon:react", bg: "bg-cyan-800 text-white" },
      {
        name: "React-Router",
        icon: "simple-icons:reactrouter",
        bg: "bg-red-500",
      },
      { name: "Material UI", icon: "devicon:materialui", bg: "bg-blue-800" },
      {
        name: "Tailwind CSS",
        icon: "devicon:tailwindcss",
        bg: "bg-blue-800",
      },
    ],
  },
  {
    title: "Stocks",
    date: "September 2024",
    description:
      "Stock tracker with dual API integration (Finnhub for real-time quotes, Alpha Vantage for historical data). Built smart caching with quotes refreshing every 15 minutes, historical data daily. Transforms raw daily data into weekly and monthly averages for trend charts.",
    imageDesktop: "/images/stocks.gif",
    link: "/projects/stocks",
    website: "https://typescriptstocks.netlify.app/",
    tech: [
      { name: "React", icon: "devicon:react", bg: "bg-cyan-800 text-white" },
      { name: "TypeScript", icon: "devicon:typescript", bg: "bg-indigo-500" },
      { name: "Material UI", icon: "devicon:materialui", bg: "bg-blue-800" },
      { name: "CSS", icon: "devicon:css3", bg: "bg-blue-500" },
    ],
  },
];
