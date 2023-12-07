import Image from "next/image";
import CalendarDays from "../icons/calendar-days";
import MapPin from "../icons/map-pin";
import Link from "next/link";

export default function EventItem(featuredEvent) {
  const humanReadableDate = new Date(featuredEvent.date).toLocaleDateString(
    "en-US",
    { day: "numeric", month: "long", year: "numeric" }
  );

  const formattedAddress = featuredEvent.location.replace(", ", "\n");
  const exploreLink = `/events/${featuredEvent.id}`;

  return (
    <div className="flex flex-col sm:col-span-3 lg:col-span-2">
      <Link
        href={exploreLink}
        className="block flex-shrink-0 w-full rounded-3xl overflow-hidden aspect-w-3 xl:aspect-w-4 aspect-h-3"
      >
        <Image
          fill
          alt=""
          sizes="(max-width: 600px) 480px, 800px"
          src={`/${featuredEvent.image}`}
          className="object-cover"
        />
      </Link>

      <div className="transform -mt-12">
        <div className="p-5 mt-5 bg-white shadow-xl rounded-3xl rounded-tl-none rounded-tr-none flex flex-col ">
          <h2 className="sm:text-lg lg:text-xl font-semibold text-neutral-900 hover:text-slate-700 duration-75">
            <Link
              href={exploreLink}
              className="line-clamp-1"
              title={featuredEvent.title}
            >
              {featuredEvent.title}
            </Link>
          </h2>
          <div className="text-sm text-neutral-500 mt-3 mb-5">
            <span className="line-clamp-2">{featuredEvent.description}</span>
          </div>

          <div className="flex items-center text-xs text-neutral-700">
            <CalendarDays />
            <time className="ml-1">{humanReadableDate}</time>
          </div>

          <div className="flex items-center text-xs text-neutral-700 mt-2">
            <MapPin />
            <address className="ml-1">{formattedAddress}</address>
          </div>
        </div>
      </div>
    </div>
  );
}
