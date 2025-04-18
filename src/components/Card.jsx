"use client";

import Image from "next/image";
import Link from "next/link";
export default function Card({ project, idx }) {
  const { date, icons, title, description, image, imageDesktop } = project;
  let customStyles = `project${idx + 1}`;

  return (
    <Link
      href={title === "ComingSoon" ? "" : title}
      className={`w-full h-full bg-white card-container flex link-text text-black ${customStyles}`}
    >
      <section className="card-title bg-white">
        <section className="flex card-date-icons">
          <span className="text-gray">{date}</span>
          <span className="flex">
            {icons
              ? icons.map((icon, idx) => (
                  <Image
                    key={idx}
                    width={16}
                    height={14.9}
                    src={icon}
                    alt="technologies icons"
                  />
                ))
              : ""}
          </span>
        </section>
        <h4 className="fs-400 ff-sans-normal ">{title}</h4>
        <p className="fs-200 ff-sans-normal">{description}</p>
      </section>
      <Image
        src={image}
        alt="project image"
        width={560}
        height={510}
        style={{ width: "100%", height: "auto" }}
        className={"card-image-mobile"}
      />
      <Image
        src={imageDesktop}
        alt="project image"
        width={930}
        height={510}
        // style={{ width: "100%", height: "auto" }}
        className="card-image-desktop"
      />
    </Link>
  );
}
