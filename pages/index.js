import { Inter } from "next/font/google";
import { getFeaturedEvents } from "@/dummy-data";
import EventList from "@/components/events/EventList";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <main className={`min-h-screen ${inter.className}`}>
      <h1>Home</h1>
      <EventList featuredEvents={featuredEvents} />
    </main>
  );
}
