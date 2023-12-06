import Link from "next/link";

export default function Button({ children, link, onClick }) {
  if (link) {
    return (
      <Link href={link}>
        <div className="inline-block bg-gray-950 hover:bg-gray-800 text-white font-medium px-4 py-2 rounded-md transition duration-300 h-11">
          {children}
        </div>
      </Link>
    );
  }
  return (
    <button
      className="inline-block bg-gray-950 hover:bg-gray-800 text-white font-medium px-4 py-2 rounded-md transition duration-300 h-11"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
