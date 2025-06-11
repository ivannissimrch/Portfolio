import devVaultImageDesktop from "/public/images/weeklyBytesDesktop.png";
import stocksImageDesktop from "/public/images/stocksDesktop.png";

export const PROJECTS_INFO = [
  {
    title: "DevVault",
    description:
      "A resource search app that helps developers quickly find high-quality coding tutorials, blogs, and videos by searching through Chingu-curated content.",
    imageDesktop: devVaultImageDesktop,
    teamWorkMobileImage: "/images/devVaultMTeamWork.png",
    teamWorkDesktopImage: "/images/stocksDTeamWork.png",
    date: "June 2025",
    siteLink: "https://dev-vault-chingu.netlify.app/",
    icons: [
      "/images/react-icon.svg",
      "/images/html-icon.svg",
      "/images/tailwind-icon.svg",
      "/images/typescript-icon.svg",
    ],
    purpose: `The goal of this project was to create a centralized platform for discovering valuable coding resources. It includes smart search functionality with tag filtering and allows users to log in for a personalized experience.`,

    techStack: `The app was built using React, TypeScript, Tailwind CSS, and Vite. I also used Context API for state management, FlexSearch for indexing, and Material UI for select components.`,

    collaboration: `This was my 4th Chingu Voyage team project. I contributed:
Smart search functionality using the Fuse.js library
,Tag filtering system with clickable icons
,Persistent state management using local storage and custom hooks`,

    thoughtProcess: `One challenge was making the search bar both smart and performant. Initially, it updated on every keystroke, but I optimized it to search on button click for a better user experience. I also learned how to structure global state cleanly with custom hooks and context.`,
  },
  {
    title: "Stocks",
    description:
      "A responsive application for searching and tracking real-time stock data, built to improve my TypeScript and testing skills.",
    imageDesktop: stocksImageDesktop,
    teamWorkMobileImage: "/images/stocksMTeamWork.png",
    teamWorkDesktopImage: "/images/stocksDTeamWork.png",
    date: "September 2024",
    siteLink: "https://typescriptstocks.netlify.app/",
    icons: [
      "/images/react-icon.svg",
      "/images/typescript-icon.svg",
      "/images/css-icon.svg",
      "/images/html-icon.svg",
    ],
    purpose: `This project helped me level up my frontend development by turning a Figma design into a working app using TypeScript and CSS. I also learned how to work with real-world APIs and improve performance through caching strategies.`,

    techStack: `Built with React, TypeScript, Vite, and plain CSS. I added unit tests using Vitest and explored techniques to reduce API calls and improve reliability.`,

    collaboration: `This was a solo project developed under the guidance of my mentor. I iterated on both the design and features while applying feedback from previous projects.`,

    thoughtProcess: `This project went through several iterations. I started with Material UI but switched to a custom UI based on a Figma design to push my styling skills. Later, I added caching logic and began building a foundation for simulating trades and user portfolios.`,
  },
];
