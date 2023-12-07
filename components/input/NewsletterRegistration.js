import { useContext, useRef } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import NotificationContext from "@/store/NotificationContext";

export default function NewsletterRegistration() {
  const emailInputRef = useRef();
  const notificationCtx = useContext(NotificationContext);

  function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;

    notificationCtx.showNotification({
      title: "Signing up...",
      message: "Registering for newsletter.",
      status: "pending",
    });

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response.json().then((data) => {
          throw new Error(data.message || "Something went wrong.");
        });
      })
      .then((data) => {
        notificationCtx.showNotification({
          title: "Success!",
          message: "Successfully registered for newsletter.",
          status: "success",
        });
      })
      .catch((error) => {
        notificationCtx.showNotification({
          title: "Error!",
          message: error.message || "Something went wrong.",
          status: "error",
        });
      });
  }

  return (
    <section className="pt-10 pb-16 lg:pt-28 lg:pb-28">
      <div className="flex flex-col items-center p-5 bg-slate-100 rounded-xl sm:rounded-3xl lg:rounded-[40px] shadow-lg sm:p-10 lg:p-16">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Sign Up for New Skate Events!
          </h2>
          <span className="mt-2 md:mt-3 block text-base xl:text-lg text-neutral-500">
            Stay in the loop with the latest skate events! Sign up for exclusive
            updates.
          </span>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-md relative">
          <input
            ref={emailInputRef}
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
