import weeklyBytesImageMobile from "/public/images/weeklyBytesMobile.gif";
import weeklyBytesImageDesktop from "/public/images/weeklyBytesDesktop.gif";
import stocksImageMobile from "/public/images/stocksMobile.gif";
import stocksImageDesktop from "/public/images/stocksDesktop.gif";
import sliceImageMobile from "/public/images/sliceMobile.gif";
import sliceImageDesktop from "/public/images/sliceDesktop.gif";
import emberImageMobile from "/public/images/emberAiMobile.gif";
import emberImageDesktop from "/public/images/emberAiDesktop.gif";

export const PROJECTS_INFO = [
  {
    title: "WeeklyBytes",
    description:
      "Weekly Bytes is an intuitive web application designed to help managers effortlessly create and share weekly meal plans while prioritizing staff safety and dietary needs.",
    image: "/images/weeklyBytesMobile.gif",
    imageDesktop: weeklyBytesImageDesktop,
    teamWorkMobileImage: weeklyBytesImageMobile,
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

  {
    title: "Slice",
    description:
      "Expense-splitting app tailored specifically for roommates and friends. Slice helps users manage and divide expenses such as rent, utilities, subscription services, groceries, and more",
    image: "/images/sliceMobile.gif",
    imageDesktop: "/images/sliceDesktop.gif",
    teamWorkMobileImage: sliceImageMobile,
    teamWorkDesktopImage: sliceImageDesktop,
    date: "September 2024",
    siteLink: "https://islice.netlify.app/expenses-user",
    icons: [
      "/images/react-icon.svg",
      "/images/react-router-icon.svg",
      "/images/html-icon.svg",
      "/images/tailwind-icon.svg",
    ],
    purpose: ` To help  users manage and divide expenses such as rent, utilities, subscription services, groceries, and more. Our target demographic is the 18-30 age group, which includes students and early professionals who need an easy way to handle finances among roommates and friends.`,

    techStack: `We used React for the frontend, React Router for routing, Tailwind CSS for styling, React-hot-toast for alert messages, and the react-select library to create dropdown menus.`,

    collaboration: `We developed this project as part of a Chingu Voyage team.
My contributions included:

Creating a centralized state management system using useContext and useState

Building a custom dropdown component with react-select to assign expenses to specific users`,
    thoughtProcess: `Since this was the first time many of us had worked on a collaborative coding project, using GitHub effectively was a big challenge. We struggled with merge conflicts and accidentally overwriting each other’s code. It was a valuable learning experience in version control and teamwork.`,
  },
  {
    title: "emberAi",
    description:
      "Ember AI is an assistant app designed to help a user craft a well written, complete prompt to use when utilizing an AI platform in seeking information.",
    image: emberImageMobile,
    imageDesktop: emberImageDesktop,
    teamWorkMobileImage: "/images/comingSoon.jpg",
    teamWorkDesktopImage: "/images/comingSoon.jpg",
    date: "2024",
    siteLink: "https://typescriptstocks.netlify.app/",
    icons: [
      "/images/react-icon.svg",
      "/images/css-icon.svg",
      "/images/html-icon.svg",
      "/images/typescript-icon.svg",
    ],
    purpose: `We wanted to build an app that helps people write strong, clear AI prompts. This way, users can get better answers and make the most out of using AI tools.`,

    techStack: `We used React, Next.js, Tailwind, and TypeScript. Some teammates were new to these tools, so it was a great learning opportunity for them.`,

    collaboration: `This was a team project from a Chingu cohort with six developers working together.`,

    thoughtProcess: `One of the biggest challenges was communication. Since our schedules didn’t always line up and some teammates were new to the tech stack, it was hard to stay in sync. But it was a great learning experience for everyone involved.`,
  },
];
