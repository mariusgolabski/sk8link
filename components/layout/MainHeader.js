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
            <Link href="/events">All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
