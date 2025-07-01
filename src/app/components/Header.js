import Link from "next/link";
export default function Header() {
  return (
    <nav className="w-full bg-blue-900 text-white px-6 py-4 flex justify-between ">
      <Link href="/" className="font-bold text-lg">
        Home
      </Link>
      <Link href="/journey" className="text-lg">
        My Coding Journey
      </Link>
    </nav>
  );
}
