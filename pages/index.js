import { Inter } from "next/font/google";
import EventList from "@/components/events/EventList";
import { database } from "../firebase";
import { ref, query, orderByChild, equalTo, get } from "firebase/database";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage({ featuredEvents }) {
  return (
    <main className={`min-h-screen ${inter.className}`}>
      <EventList events={featuredEvents} />
    </main>
  );
}

export async function getStaticProps() {
  try {
    const eventsRef = ref(database, "skateEvents");
    const eventsQuery = query(
      eventsRef,
      orderByChild("isFeatured"),
      equalTo(true)
    );
    const snapshot = await get(eventsQuery);

    const featuredEventsData = snapshot.val();
    const featuredEvents = Object.values(featuredEventsData);

    return {
      props: {
        featuredEvents,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);

    return {
      props: {
        featuredEvents: [],
      },
    };
  }
}
