import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    if (!firstName || !email || !message) {
      return res.status(400).json({
        error: "Required fields missing",
      });
    }

    console.log("EMAIL_USER =", process.env.EMAIL_USER);
    console.log("EMAIL_PASS =", process.env.EMAIL_PASS ? "Loaded ✅" : "Missing ❌");

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: {
        name: "Spitel",
        address: process.env.EMAIL_USER!,
      },
      sender: process.env.EMAIL_USER,
      to: "sutharprerna806@gmail.com",
      replyTo: email,
      subject: "New Contact Form Submission | Spitel",
      html: `
    <h2>New Contact Message</h2>

    <p><b>First Name:</b> ${firstName}</p>
    <p><b>Last Name:</b> ${lastName}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>
    <p><b>Message:</b> ${message}</p>
  `,
    });
    return res.json({
      success: true,
    });
  } catch (err: any) {
    console.log(err);

    return res.status(500).json({
      error: err.message,
    });
  }
});

export default router;