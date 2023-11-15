export default function ErrorAlert({ children }) {
  return (
    <div className="bg-red-500 text-white font-bold rounded-md px-4 py-2">
      {children}
    </div>
  );
}
