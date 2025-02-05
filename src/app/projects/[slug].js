import { useRouter } from "next/router";

export default async function ProjectPagePage({ params }) {
  const slug = (await params).slug;
  return <div>My Post: {slug}</div>;
}
