import Image from "next/image";
import Link from "next/link";

export default function Card({ project }) {
  const { date, icons, title, description, image, imageTablet } = project;
  const customStyles = project.title === "Slice" ? "project1" : "";
  return (
    <Link
      href={title}
      className={`w-full h-full bg-white card-container flex link-text text-black ${customStyles}`}
    >
      <section className="card-title bg-white">
        <section className="flex card-date-icons">
          <span className="text-gray">{date}</span>
          <span className="flex">
            {icons
              ? icons.map((icon) => (
                  <Image
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
        width={405}
        height={369}
        className={"card-image-mobile"}
      />
      <Image
        src={title === "Slice" ? imageTablet : image}
        alt="project image"
        width={930}
        height={369}
        className="card-image-tablet"
      />
    </Link>
  );
}
