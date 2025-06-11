import weeklyBytesImageMobile from "/public/images/weeklyBytesMobile.gif";
import weeklyBytesImageDesktop from "/public/images/weeklyBytesDesktop.png";
import stocksImageMobile from "/public/images/stocksMobile.gif";
import stocksImageDesktop from "/public/images/stocksDesktop.png";

export const PROJECTS_INFO = [
  {
    title: "WeeklyBytes",
    description:
      "Weekly Bytes is an intuitive web application designed to help managers effortlessly create and share weekly meal plans while prioritizing staff safety and dietary needs.",
    image: weeklyBytesImageMobile,
    imageDesktop: weeklyBytesImageDesktop,
    teamWorkMobileImage: "/images/weeklyBytesMTeamWork.png",
    teamWorkDesktopImage: "/images/weeklyBytesDTeamWork.png",
    date: "January 2025",
    siteLink: "https://v53-tier2-team-26-fork.vercel.app/",
    icons: [
      "/images/react-icon.svg",
      "/images/react-router-icon.svg",
      "/images/html-icon.svg",
      "/images/tailwind-icon.svg",
    ],
    purpose: `The app was designed to streamline meal planning for managers. With a wide selection of delicious meals, it automatically filters out dishes containing allergens based on employee input. It then generates a randomized weekly menu—ensuring variety and avoiding meal repetition.

`,

    techStack: `We used React for the frontend, React Router for routing, Tailwind CSS for styling, Material UI for alert messages, and the react-select library to build dropdown menus. `,

    collaboration: `This project was built as part of a 6-week Chingu Voyage with a team of 9 developers.
Some of the tasks I handled included:

Implementing the dropdown menu for selecting employee allergies using react-select

Writing the logic to filter out meals that contain any of the selected allergens`,
    thoughtProcess: `One challenge I faced was styling the react-select dropdown. Initially, it seemed like a great choice, but the more customization we needed, the harder it became to style. I was ready to build a custom dropdown from scratch, but I realized this too late in the project and we didn’t have enough time left to implement it.`,
  },
  {
    title: "Stocks",
    description:
      "A stock application that allows you to search for and retrieve data about stocks.",
    image: stocksImageMobile,
    imageDesktop: stocksImageDesktop,
    teamWorkMobileImage: "/images/stocksMTeamWork.png",
    teamWorkDesktopImage: "/images/stocksDTeamWork.png",
    date: "September 2024",
    siteLink: "https://typescriptstocks.netlify.app/",
    icons: [
      "/images/react-icon.svg",
      "/images/css-icon.svg",
      "/images/html-icon.svg",
      "/images/typescript-icon.svg",
    ],
    purpose: `I built this project to learn TypeScript, practice writing unit tests, and follow a Figma design. It helped me improve my frontend skills and learn how to turn a design into a working app.`,

    techStack: `I used React, TypeScript, CSS, and Vitest, this was my first time adding unit testing to a project also, I'm still getting use to work with typeScript`,

    collaboration: `I created this project under the guidance of my mentor.`,
    thoughtProcess: `This project went through a lot of changes. I started using Material UI, but later switched to building the UI based on a Figma design to challenge myself more. I worked on it on and off while also participating in Chingu voyages.`,
  },
];
