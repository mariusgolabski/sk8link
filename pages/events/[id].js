import Head from "next/head";
import EventSummary from "@/components/event-detail/EventSummary";
import EventContent from "@/components/event-detail/EventContent";
import EventLogistics from "@/components/event-detail/EventLogistics";
import { database } from "../../firebase";
import { ref, query, get } from "firebase/database";
import Comments from "@/components/input/Comment";

export default function EventDetailPage({ selectedEvent }) {
  const event = selectedEvent;

  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <article>
        <EventSummary title={event.title} />
        <EventLogistics
          date={event.date}
          address={event.location}
          image={event.image}
          imageAlt={event.title}
        />
        <EventContent>
          <p>{event.description}</p>
        </EventContent>
      </article>
      <Comments eventId={event.id} />
    </>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.id;
  const eventRef = ref(database, `skateEvents/${eventId}`);
  const snapshot = await get(eventRef);
  const event = snapshot.exists() ? snapshot.val() : null;

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const skateEventsRef = ref(database, "skateEvents");
  const skateEventsQuery = query(skateEventsRef);

  const snapshot = await get(skateEventsQuery);
  const eventIds = Object.keys(snapshot.val()).map((eventId) => ({
    params: { id: eventId },
  }));

  return {
    paths: eventIds,
    fallback: false,
  };
}
