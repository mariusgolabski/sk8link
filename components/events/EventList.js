import EventItem from "./EventItem";

export default function EventList({ events }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-6 gap-6 md:gap-8">
      {events.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          description={event.description}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </div>
  );
}
