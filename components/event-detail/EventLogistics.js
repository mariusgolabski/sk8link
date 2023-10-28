import LogisticsItem from "./LogisticsItem";
import MapPin from "../icons/map-pin";
import CalendarDays from "../icons/calendar-days";

export default function EventLogistics({ date, address, image, imageAlt }) {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const addressText = address.replace(",", "\n");

  return (
    <div>
      <div>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul>
        <LogisticsItem icon={CalendarDays}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={MapPin}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </div>
  );
}
