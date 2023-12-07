import LogisticsItem from "./LogisticsItem";
import MapPin from "../icons/map-pin";
import CalendarDays from "../icons/calendar-days";

export default function EventLogistics({ date, address }) {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const addressText = address.replace(",", "\n");

  return (
    <div className="flex gap-4 mt-4">
      <LogisticsItem icon={CalendarDays}>
        <time className="ml-1">{humanReadableDate}</time>
      </LogisticsItem>
      <LogisticsItem icon={MapPin}>
        <address className="ml-1">{addressText}</address>
      </LogisticsItem>
    </div>
  );
}
