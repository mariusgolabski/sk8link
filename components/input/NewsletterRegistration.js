import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function NewsletterRegistration() {
  return (
    <section className="pt-10 pb-16 lg:pt-28 lg:pb-28">
      <div className="flex flex-col items-center p-5 bg-slate-100 rounded-xl sm:rounded-3xl lg:rounded-[40px] shadow-lg sm:p-10 lg:p-16">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Sign Up for New Skate Events!
          </h2>
          <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl xl:text-lg text-neutral-500">
            Stay in the loop with the latest skate events! Sign up for exclusive
            updates.
          </span>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-md relative">
          <input
            ref={email}
            className="w-full border border-slate-300 focus:outline-none focus:ring focus:ring-slate-200 bg-white rounded-full text-sm font-normal h-11 px-4 py-3"
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            required
          />
          <button
            className="ttnc-ButtonCircle flex items-center justify-center rounded-full !leading-none disabled:bg-opacity-70 bg-slate-900 hover:bg-slate-800 
              text-slate-50 absolute transform top-1/2 -translate-y-1/2 end-1 w-9 h-9  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300"
            type="submit"
          >
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  );
}
