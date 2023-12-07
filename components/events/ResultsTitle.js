import Button from "../ui/Button";

export default function ResultsTitle({ date }) {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className="flex flex-col items-center max-w-2xl mx-auto pt-10 pb-16 gap-5">
      <h1 className="text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-5xl max-w-4xl">
        Events in {humanReadableDate}
      </h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
}
