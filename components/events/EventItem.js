import Image from "next/image";
import Link from "next/link";

export default function EventItem(featuredEvent) {
  const humanReadableDate = new Date(featuredEvent.date).toLocaleDateString(
    "en-US",
    { day: "numeric", month: "long", year: "numeric" }
  );

  const formattedAddress = featuredEvent.location.replace(", ", "\n");
  const exploreLink = `/events/${featuredEvent.id}`;

  return (
    <li className="border rounded-lg shadow-md p-4 m-2 md:m-4 lg:m-6 xl:m-8 flex">
      <div className="w-1/3 relative">
        <Image
          src={`/${featuredEvent.image}`}
          alt={featuredEvent.title}
          width={250}
          height={160}
          className="w-full h-40 object-cover rounded-lg"
        />
      </div>

      <div className="w-2/3 ml-4">
        <h2 className="text-xl font-semibold">{featuredEvent.title}</h2>
        <div className="text-gray-600">
          <time>{humanReadableDate}</time>
        </div>
        <div className="text-gray-600">
          <address>{formattedAddress}</address>
        </div>
        <div className="mt-2">
          <Link href={exploreLink} className="text-blue-500 hover:underline">
            Explore Event
          </Link>
        </div>
      </div>
    </li>
  );
}
