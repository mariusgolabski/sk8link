export default function CommentList({ comments }) {
  return (
    <div className="mt-20">
      {comments.map((comment) => (
        <div
          key={comment._id}
          className="flex flex-col p-4 my-5 text-sm border border-neutral-200 rounded-xl sm:text-base"
        >
          <div className="relative flex items-center">
            <p className="font-semibold">{comment.name}</p>
            <span className="mx-2">·</span>
            <p className="text-neutral-500 dark:text-neutral-400 text-xs line-clamp-1 sm:text-sm">
              {new Date(comment.createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
          <p className="break-words text-neutral-700 mt-2 mb-3 sm:mt-3 sm:mb-4 dark:text-neutral-300">
            {comment.text}
          </p>
        </div>
      ))}
    </div>
  );
}
