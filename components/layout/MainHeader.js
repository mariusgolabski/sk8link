import Link from "next/link";
import Button from "../ui/Button";

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
        <Button link="#">Get Started</Button>
      </nav>
    </header>
  );
}
