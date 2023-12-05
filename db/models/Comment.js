import mongoose from "mongoose";
const { Schema } = mongoose;

const commentSchema = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  name: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  eventId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);

export default Comment;
