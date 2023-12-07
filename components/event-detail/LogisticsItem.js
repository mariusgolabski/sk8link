export default function LogisticsItem({ icon: Icon, children }) {
  return (
    <div className="flex text-xs text-neutral-700 items-center">
      <Icon />
      <span>{children}</span>
    </div>
  );
}
