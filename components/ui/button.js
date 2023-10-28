import Link from "next/link";

export default function Button({ children, link }) {
  return (
    <Link href={link}>
      <div className="inline-block bg-blue-500 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
        {children}
      </div>
    </Link>
  );
}
