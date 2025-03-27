import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex footer">
      <div>
        <p className="footer-name-text"> &copy; 2025 Ivan Rebolledo</p>
      </div>
      <div className="footer-links  flex ff-sans-normal">
        <Link href="https://github.com/ivannissimrch">GitHub</Link>
        <Link href="https://www.linkedin.com/in/ivan-rebolledo-012b17244/">
          {" "}
          Linkedln
        </Link>
      </div>
    </footer>
  );
}
