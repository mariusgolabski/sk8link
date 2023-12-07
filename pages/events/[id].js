import Head from "next/head";
import EventSummary from "@/components/event-detail/EventSummary";
import EventContent from "@/components/event-detail/EventContent";
import EventLogistics from "@/components/event-detail/EventLogistics";
import { database } from "../../firebase";
import { ref, query, get } from "firebase/database";
import Comments from "@/components/input/Comment";
import Image from "next/image";

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

      <article className="pt-8 lg:pt-16 ">
        <div className="max-w-screen-md mx-auto">
          <EventSummary title={event.title} />
          <EventContent>
            <p className="text-base text-neutral-500 md:text-lg pb-1 my-5">
              {event.description}
            </p>
            <div className="w-full border-b border-neutral-200"></div>
          </EventContent>
          <EventLogistics date={event.date} address={event.location} />
        </div>

        <div>
          <Image
            alt={event.title}
            className="w-full rounded-xl container my-10 sm:my-12"
            src={`/${event.image}`}
            width={1260}
            height={750}
            sizes="(max-width: 1024px) 100vw, 1280px"
          />
        </div>
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
