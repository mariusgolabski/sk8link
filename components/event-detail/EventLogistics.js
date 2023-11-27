import LogisticsItem from "./LogisticsItem";
import MapPin from "../icons/map-pin";
import CalendarDays from "../icons/calendar-days";
import Image from "next/image";

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
        <Image
          alt={imageAlt}
          className="w-full rounded-xl container my-10 sm:my-12"
          src={`/${image}`}
          width={1260}
          height={750}
          sizes="(max-width: 1024px) 100vw, 1280px"
        />
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
