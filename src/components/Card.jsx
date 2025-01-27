import Image from "next/image";

export default function Card({ project }) {
  const { date, icons, title, description, image } = project;
  console.log(image);
  return (
    <section className="w-full h-full">
      <div>
        <span>{date}</span>
        <span>{icons}</span>
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
      <Image src={image} alt="project image" width={405} height={512} />
    </section>
  );
}
