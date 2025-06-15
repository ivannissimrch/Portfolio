import Link from "next/link";
export default function Header() {
  return (
    <nav className="w-full bg-blue-900 text-white px-6 py-4 flex justify-between">
      <Link href="/" className="font-bold text-lg">
        Home
      </Link>
      <div className="flex gap-4 text-sm">
        {/* <Link href="/">Projects</Link> */}
        <Link href="/journey">My Coding Journey</Link>
        {/* <Link href="/about">About</Link> */}
      </div>
    </nav>
  );
}
