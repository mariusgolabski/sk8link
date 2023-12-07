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
    <form
      className="grid md:grid-cols-2 gap-6 my-10"
      onSubmit={sendCommentHandler}
    >
      <label htmlFor="email">
        <span className="text-neutral-800 font-medium text-sm">Email</span>
        <input
          className="block w-full border border-neutral-200 bg-white rounded-full text-sm font-normal h-11 px-4 py-3 mt-1"
          type="email"
          id="email"
          ref={emailInputRef}
          required
        />
      </label>
      <label htmlFor="name">
        <span className="text-neutral-800 font-medium text-sm ">Your name</span>
        <input
          className="block w-full border border-neutral-200 bg-white rounded-full text-sm font-normal h-11 px-4 py-3 mt-1"
          type="text"
          id="name"
          ref={nameInputRef}
          required
        />
      </label>

      <label className="col-span-2" htmlFor="comment">
        <span className="text-neutral-800 font-medium text-sm">
          Your Comment
        </span>
        <textarea
          className="border py-2 px-3 block w-full text-sm rounded-xl border-neutral-200 bg-white mt-1"
          id="comment"
          rows="5"
          ref={commentInputRef}
          required
        ></textarea>
      </label>

      {isInvalid && <p>Please enter a valid email address and comment!</p>}
      <button className="col-span-2 flex w-full items-center justify-center font-medium px-5 text-sm py-3 rounded-full bg-slate-900 hover:bg-slate-700 text-slate-50">
        Submit
      </button>
    </form>
  );
}
