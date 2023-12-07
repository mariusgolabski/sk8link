import Link from "next/link";

export default function Button({ children, link, onClick }) {
  if (link) {
    return (
      <Link href={link}>
        <button className="flex items-center justify-center font-medium px-5 text-sm py-3 rounded-full bg-slate-900 hover:bg-slate-700 text-slate-50">
          {children}
        </button>
      </Link>
    );
  }
  return (
    <button
      className="flex items-center justify-center font-medium px-5 text-sm py-3 rounded-full bg-slate-900 hover:bg-slate-700 text-slate-50"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
