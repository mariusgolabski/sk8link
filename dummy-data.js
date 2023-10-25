const DummySkateboardEvents = [
  {
    id: "e1",
    title: "Skateboarding Jam Session",
    description:
      "Join us for an epic skateboarding jam session! Skate with fellow enthusiasts and showcase your skills on the streets and ramps.",
    location: "Berlin Skatepark, 12345 Berlin",
    date: "2023-11-15",
    image: "images/skate-jam-session.jpg",
    isFeatured: true,
  },
  {
    id: "e2",
    title: "Skateboarding Workshop for Beginners",
    description:
      "New to skateboarding? No worries! This workshop is tailored for beginners. Learn the basics of skateboarding and start shredding in no time.",
    location: "Learn to Skate Berlin, 98765 Berlin",
    date: "2023-12-02",
    image: "images/skate-beginner-workshop.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Skateboarding Exhibition and Contest",
    description:
      "Get ready for a thrilling skateboarding exhibition and contest. Watch pro skaters perform mind-blowing tricks and compete for the title.",
    location: "Berlin Extreme Skate Arena, 10101 Berlin",
    date: "2024-01-20",
    image: "images/skate-contest.jpg",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DummySkateboardEvents.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DummySkateboardEvents;
}

export function getEventById(id) {
  return DummySkateboardEvents.find((event) => event.id === id);
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DummySkateboardEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
