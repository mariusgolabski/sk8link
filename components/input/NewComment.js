import { useRef, useState } from "react";

export default function NewComment({ onAddComment }) {
  const [isInvalid, setIsInvalid] = useState(false);

  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const commentInputRef = useRef();

  function sendCommentHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredComment = commentInputRef.current.value;

    if (
      !enteredEmail ||
      enteredEmail.trim() === "" ||
      !enteredEmail.includes("@") ||
      !enteredName ||
      enteredName.trim() === "" ||
      !enteredComment ||
      enteredComment.trim() === ""
    ) {
      setIsInvalid(true);
      return;
    }

    onAddComment({
      email: enteredEmail,
      name: enteredName,
      text: enteredComment,
    });
  }

  return (
    <div className="rounded-xl md:border md:border-neutral-100 md:p-6">
      <form className="grid md:grid-cols-2 gap-6" onSubmit={sendCommentHandler}>
        <label className="block " htmlFor="email">
          <span className="text-neutral-800 font-medium text-sm">Email</span>
          <input
            className="block w-full border border-neutral-200 bg-white rounded-full text-sm font-normal h-11 px-4 py-3 mt-1"
            type="email"
            id="email"
            ref={emailInputRef}
          />
        </label>
        <label className="block " htmlFor="name">
          <span className="text-neutral-800 font-medium text-sm ">
            Your name
          </span>
          <input
            className="block w-full border border-neutral-200 bg-white rounded-full text-sm font-normal h-11 px-4 py-3 mt-1"
            type="text"
            id="name"
            ref={nameInputRef}
          />
        </label>

        <label className="block md:col-span-2" htmlFor="comment">
          <span className="nc-Label  text-neutral-800 font-medium text-sm">
            your comment
          </span>
          <textarea
            className="border py-2 px-3 block w-full text-sm rounded-xl border-neutral-200 bg-white mt-1"
            id="comment"
            rows="5"
            ref={commentInputRef}
          ></textarea>
        </label>

        {isInvalid && <p>Please enter a valid email address and comment!</p>}
        <button
          className="flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-slate-700 hover:bg-slate-600 text-yellow-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 md:col-span-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
