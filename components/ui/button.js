import Link from "next/link";

export default function Button({ children, link }) {
  return (
    <Link href={link}>
      <div className="inline-block bg-gray-950 hover:bg-gray-800 text-white font-medium px-4 py-2 rounded-md transition duration-300">
        {children}
      </div>
    </Link>
  );
}