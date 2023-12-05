import dbConnect from "@/db/connect";
import Comment from "@/db/models/Comment";

export default async function handler(req, res) {
  await dbConnect();

  const eventId = req.query.id;

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email ||
      email.trim() === "" ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newComment = new Comment({
      eventId,
      email,
      name,
      text,
    });

    try {
      const savedComment = await newComment.save();
      res
        .status(201)
        .json({ message: "Added comment.", comment: savedComment });
    } catch (error) {
      console.error("Error adding comment:", error);
      res.status(500).json({ message: "Failed to add comment." });
    }
  }

  if (req.method === "GET") {
    try {
      const comments = await Comment.find({ eventId });

      res.status(200).json({ comments });
    } catch (error) {
      console.error("Error getting comments:", error);
      res.status(500).json({ message: "Failed to get comments." });
    }
  }
}
