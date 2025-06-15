// "use client";
// import Image from "next/image";

// export default function CaseStudyPage({ project }) {
//   return (
//     <main className="bg-blue-200 text-black px-6 py-10 font-sans">
//       {/* Project Intro */}
//       <section className="mb-16 grid md:grid-cols-2 gap-10 items-center">
//         <div>
//           <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
//           <hr className="border-blue-300 mb-4" />
//           <h2 className="font-semibold mb-2">Purpose and Goal</h2>
//           <p className="text-sm max-w-md">{project.purpose}</p>
//         </div>
//         <div className="bg-white shadow overflow-hidden">
//           <Image
//             src={project.imageDesktop}
//             alt={`${project.title} screenshot`}
//             width={800}
//             height={600}
//             quality={100}
//             className="w-full h-auto"
//           />
//         </div>
//       </section>

//       {/* Tech + Team */}
//       <section className="mb-16 grid md:grid-cols-2 gap-10 items-start">
//         <div>
//           <h3 className="font-semibold text-lg mb-2">Tech Stack</h3>
//           <div className="flex gap-4 text-3xl mb-3">
//             {project.icons?.map((icon, idx) => (
//               <Image
//                 key={idx}
//                 width={48}
//                 height={48}
//                 src={icon}
//                 alt="tech icon"
//                 quality={95}
//               />
//             ))}
//           </div>
//           <p className="text-sm max-w-md">{project.techStack}</p>
//         </div>
//         <div>
//           <h3 className="font-semibold text-lg mb-2">Team Collaboration</h3>
//           <p className="text-sm max-w-md">{project.collaboration}</p>
//           {project.teamWorkDesktopImage && (
//             <Image
//               className="mt-4"
//               src={project.teamWorkDesktopImage}
//               alt="Teamwork screenshot"
//               width={800}
//               height={600}
//               quality={100}
//             />
//           )}
//         </div>
//       </section>

//       {/* Thought Process */}
//       <section className="mb-16">
//         <h3 className="font-semibold text-lg mb-2">
//           Problems and Thought Process
//         </h3>
//         <p className="text-sm max-w-2xl">{project.thoughtProcess}</p>
//       </section>
//     </main>
//   );
// }
