import Image from "next/image";
import Link from "next/link";

export default function Card({ project }) {
  const { date, icons, title, description, image } = project;
  console.log(image);
  console.log(icons);
  return (
    <Link href={title} className="w-full h-full bg-white card-container">
      <section className="card-title">
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

      <Image src={image} alt="project image" width={405} height={369} />
    </Link>
  );
}
