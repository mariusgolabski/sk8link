import EventItem from "./EventItem";

export default function EventList({ featuredEvents }) {
  return (
    <ul>
      {featuredEvents.map((featuredEvent) => (
        <EventItem
          key={featuredEvent.id}
          id={featuredEvent.id}
          title={featuredEvent.title}
          location={featuredEvent.location}
          date={featuredEvent.date}
          image={featuredEvent.image}
        />
      ))}
    </ul>
  );
}
