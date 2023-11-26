import Image from "next/image";
import rightImg from "../../public/images/landing-hero.png";

export default function SectionHero({}) {
  return (
    <section className="relative pl-4 pr-4 pt-10 pb-16 md:py-16 lg:pb-28 lg:pt-20">
      <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 rtl:space-x-reverse items-center relative text-center lg:text-left">
        <div className="w-screen max-w-full xl:max-w-lg space-y-5 lg:space-y-7">
          <h2 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
            <span>
              Skate into Action: <br /> Exclusive Events Await!
            </span>
          </h2>
          <span className="block text-base xl:text-lg text-neutral-6000 dark:text-neutral-400">
            Join us for exclusive skateboard events — connect, share stories,
            and ride the excitement!
          </span>
        </div>
        <div className="flex-grow">
          <Image className="w-full" src={rightImg} alt="" />
        </div>
      </div>
    </section>
  );
}
