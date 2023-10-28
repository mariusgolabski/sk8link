export default function LogisticsItem({ icon: Icon, children }) {
  return (
    <li>
      <span>
        <Icon />
      </span>
      <span>{children}</span>
    </li>
  );
}
