import Image from "next/image";

export default function Card({ project }) {
  const { date, icons, title, description, image } = project;
  console.log(image);
  console.log(icons);
  return (
    <section className="w-full h-full bg-white">
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

      <Image src={image} alt="project image" width={405} height={512} />
    </section>
  );
}
