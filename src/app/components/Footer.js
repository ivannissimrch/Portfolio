export default function Footer() {
  return (
    <footer className="bg-black text-white text-center p-4">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 max-w-4xl mx-auto w-full">
        <p className="text-base">Interested in working together?</p>
        <a
          href="mailto:ivannissimrch@gmail.com"
          className="bg-blue-900 text-white px-6 py-2 hover:bg-blue-800 transition rounded"
        >
          Send message
        </a>
      </div>
    </footer>
  );
}
