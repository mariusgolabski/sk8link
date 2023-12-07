import Link from "next/link";

export default function MainHeader() {
  return (
    <header className="container p-4 mx-auto">
      <nav className="flex justify-between items-center">
        <Link className="font-extrabold text-2xl" href="/">
          sk8link
        </Link>
        <ul>
          <li>
            <Link
              className="text-sm lg:text-[15px] font-medium py-2.5 px-4 xl:px-5 rounded-full text-slate-900 bg-slate-100 hover:bg-slate-200"
              href="/events"
            >
              All Events
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
