export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    const newMessage = {
      email,
      name,
      message,
    };

    res.status(200).json({ message: "success", newMessage });
  }
}
