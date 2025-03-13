import Image from "next/image";
import Link from "next/link";

export default function CaseCard({ project }) {
  const { date, icons, title, description, image, imageTablet } = project;

  return (
    <section
      className={"w-full h-full bg-white card-container flex case-card-gap "}
    >
      <section className="case_card-title bg-white">
        <section className="flex case_card-title-icons">
          <span className="text-gray">{title}</span>
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
        <p className="fs-200 ff-sans-normal">{description}</p>
        <Link href={""} className="ff-sans-normal fs-200">
          View site
        </Link>
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
        src={imageTablet}
        alt="project image"
        width={930}
        height={510}
        style={{ width: "100%", height: "auto" }}
        className="card-image-tablet"
      />
    </section>
  );
}
