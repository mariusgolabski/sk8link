import Head from "next/head";
import EventList from "@/components/events/EventList";
import { database } from "../firebase";
import { ref, query, orderByChild, equalTo, get } from "firebase/database";
import SectionHero from "@/components/section-hero/SectionHero";

export default function HomePage({ featuredEvents }) {
  return (
    <>
      <Head>
        <title>Skate Events | Home</title>
        <meta
          name="description"
          content="Find the latest skate events in your area and around the world."
        />
      </Head>
      <SectionHero />
      <div className="py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900">
          <div className="text-center w-full max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              Featured Events
            </h2>
            <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl xl:text-lg text-neutral-500">
              Dive in, ride the excitement of skateboarding&apos;s finest
              events!
            </span>
          </div>
        </div>
        <EventList events={featuredEvents} />
      </div>
    </>
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
