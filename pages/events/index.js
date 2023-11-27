import Head from "next/head";
import { useRouter } from "next/router";
import EventList from "@/components/events/EventList";
import EventsSearch from "@/components/events/EventsSearch";

import { database } from "../../firebase";
import { ref, query, get } from "firebase/database";

export default function AllEventsPage({ events }) {
  const router = useRouter();

  function findEventsHandler(year, month) {
    router.push(`/events/${year}/${month}`);
  }

  return (
    <>
      <Head>
        <title>Skate Events | All Events</title>
        <meta
          name="description"
          content="Find the latest skate events in your area and around the world."
        />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </>
  );
}

export async function getStaticProps() {
  try {
    const eventsRef = ref(database, "skateEvents");
    const eventsQuery = query(eventsRef);
    const snapshot = await get(eventsQuery);

    const allEventsData = snapshot.val();
    const allEvents = Object.values(allEventsData);

    return {
      props: {
        events: allEvents,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);

    return {
      props: {
        allEvents: [],
      },
    };
  }
}
