import EventList from "@/components/events/EventList";
import { database } from "../firebase";
import { ref, query, orderByChild, equalTo, get } from "firebase/database";

export default function HomePage({ featuredEvents }) {
  return <EventList events={featuredEvents} />;
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
      revalidate: 600,
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
