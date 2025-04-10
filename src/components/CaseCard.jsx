import Image from "next/image";
import Link from "next/link";

export default function CaseCard({ project }) {
  const { date, icons, title, description, image, imageDesktop, siteLink } =
    project;

  return (
    <section
      className={"w-full h-full  card-container flex case-card-gap  bg-accent"}
    >
      <section className="case-card-title bg-accent">
        <section className="flex case_card-title-icons">
          <span className="text-gray">{title}</span>
          <span className="flex">
            {icons
              ? icons.map((icon, idx) => (
                  <Image
                    className=""
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
        <p className="fs-200 ff-sans-normal case-first-description">
          {description}
        </p>
        <Link href={siteLink} className="ff-sans-normal fs-200 case-card-link">
          View site
        </Link>
      </section>
      <Image
        src={image}
        alt="project image"
        width={560}
        height={510}
        style={{ width: "100%", height: "auto" }}
        className={"case-card-image-mobile"}
      />
      <Image
        src={imageDesktop}
        alt="project image"
        width={930}
        height={510}
        style={{ width: "100%", height: "auto" }}
        className="case-card-image-desktop"
      />
    </section>
  );
}
