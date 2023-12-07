import { useContext, useEffect, useState } from "react";

import CommentList from "./CommentList";
import NewComment from "./NewComment";
import NotificationContext from "@/store/NotificationContext";
import Button from "../ui/Button";

export default function Comments({ eventId }) {
  const notificationCtx = useContext(NotificationContext);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [isFetchingComments, setIsFetchingComments] = useState(false);

  useEffect(() => {
    if (showComments) {
      setIsFetchingComments(true);
      fetch(`/api/comments/${eventId}`)
        .then((response) => response.json())
        .then((data) => {
          setComments(data.comments);
          setIsFetchingComments(false);
        });
    }
  }, [showComments, eventId]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    notificationCtx.showNotification({
      title: "Sending comment...",
      message: "Your comment is currently being stored into a database.",
      status: "pending",
    });

    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) return response.json();
        return response.json().then((data) => {
          throw new Error(data.message || "Something went wrong.");
        });
      })
      .then((data) =>
        notificationCtx.showNotification({
          title: "Success!",
          message: "Your comment was saved.",
          status: "success",
        })
      )
      .catch((error) => {
        notificationCtx.showNotification({
          title: "Error!",
          message: error.message || "Something went wrong.",
          status: "error",
        });
      });
  }

  return (
    <section className="max-w-screen-md mx-auto mb-20">
      <div className="flex justify-center">
        <Button onClick={toggleCommentsHandler}>
          {showComments ? "Hide" : "Show"} Comments
        </Button>
      </div>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && !isFetchingComments && (
        <CommentList comments={comments} />
      )}
      {showComments && isFetchingComments && <p>Loading...</p>}
    </section>
  );
}
