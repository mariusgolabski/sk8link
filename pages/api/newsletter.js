import dbConnect from "@/db/connect";
import NewsletterSubscriber from "@/db/models/NewsletterSubscriber";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    const existingSubscriber = await NewsletterSubscriber.findOne({
      email: userEmail,
    });

    if (existingSubscriber) {
      res.status(409).json({ message: "Email is already subscribed." });
      return;
    }

    try {
      // If the email is not subscribed, create a new NewsletterSubscriber
      await NewsletterSubscriber.create({ email: userEmail });

      res.status(201).json({ message: "Signed up." });
    } catch (createError) {
      console.error("Error creating NewsletterSubscriber:", createError);
      res.status(500).json({ message: "Failed to create subscriber." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
