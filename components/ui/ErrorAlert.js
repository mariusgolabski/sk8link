export default function ErrorAlert({ children }) {
  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto pt-10 pb-16 gap-5">
      {children}
    </div>
  );
}
