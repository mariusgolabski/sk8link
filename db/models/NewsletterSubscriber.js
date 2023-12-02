import mongoose from "mongoose";
const { Schema } = mongoose;

const newsletterSubscriberSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const NewsletterSubscriber =
  mongoose.models.NewsletterSubscriber ||
  mongoose.model("NewsletterSubscriber", newsletterSubscriberSchema);

export default NewsletterSubscriber;
