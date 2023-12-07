import Head from "next/head";
import { useRouter } from "next/router";
import EventList from "@/components/events/EventList";
import ResultsTitle from "@/components/events/ResultsTitle";
import Button from "@/components/ui/Button";
import ErrorAlert from "@/components/ui/ErrorAlert";
import { database } from "../../firebase";
import {
  ref,
  query,
  orderByChild,
  startAt,
  endAt,
  get,
} from "firebase/database";

export default function FilteredEventsPage({ filteredEvents }) {
  const router = useRouter();
  const filterData = router.query.slug;

  const { isValidYear, isValidMonth, filteredYear, filteredMonth } =
    validateFilterData(filterData[0], filterData[1]);

  const pageHeadData = (
    <Head>
      <title>Skate Events | Filtered Events</title>
      <meta
        name="description"
        content={`All events for ${filteredYear}/${filteredMonth}.`}
      />
    </Head>
  );

  if (!filterData) {
    return (
      <>
        {pageHeadData}
        <p className="center">Loading...</p>;
      </>
    );
  }

  if (!isValidYear || !isValidMonth) {
    return (
      <>
        {pageHeadData}
        <ErrorAlert>
          <p>Invalid Filter. Please adjust your values!</p>
        </ErrorAlert>
      </>
    );
  }

  const date = new Date(filteredYear, filteredMonth - 1);

  return (
    <>
      {filteredEvents.length === 0 ? (
        <>
          {pageHeadData}
          <ErrorAlert>
            <p>No events found for the chosen filter!</p>
            <Button link="/events">Show all events</Button>
          </ErrorAlert>
        </>
      ) : (
        <>
          {pageHeadData}
          <ResultsTitle date={date} />
          <EventList events={filteredEvents} />
        </>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { isValidYear, isValidMonth, filteredYear, filteredMonth } =
    validateFilterData(params.slug[0], params.slug[1]);

  if (!isValidYear || !isValidMonth) {
    return {
      props: {
        filteredEvents: [],
      },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  return {
    props: {
      filteredEvents,
    },
  };
}

const validateFilterData = function (year, month) {
  const filteredYear = parseInt(year, 10);
  const filteredMonth = parseInt(month, 10);

  const isValidYear =
    isIntegerString(year) &&
    !isNaN(filteredYear) &&
    Number.isInteger(filteredYear);
  const isValidMonth =
    isIntegerString(month) &&
    !isNaN(filteredMonth) &&
    Number.isInteger(filteredMonth);

  return { isValidYear, isValidMonth, filteredYear, filteredMonth };
};

const isIntegerString = function (str) {
  return /^\d+$/.test(str);
};

const getFilteredEvents = async function ({ year, month }) {
  const eventsRef = ref(database, "skateEvents");

  try {
    if (!isValidDate(year, month)) {
      return [];
    }

    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);

    const start = startDate.toISOString();
    const end = endDate.toISOString();

    const eventsQuery = query(
      eventsRef,
      orderByChild("date"),
      startAt(start),
      endAt(end)
    );

    const snapshot = await get(eventsQuery);
    const events = [];

    snapshot.forEach((childSnapshot) => {
      events.push(childSnapshot.val());
    });

    return events;
  } catch (error) {
    console.error("Error fetching filtered events:", error);
    return [];
  }
};

const isValidDate = function (year, month) {
  return (
    !isNaN(year) &&
    !isNaN(month) &&
    year >= 2023 &&
    year <= 2030 &&
    month >= 1 &&
    month <= 12
  );
};
