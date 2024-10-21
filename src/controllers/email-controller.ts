import { Request, Response } from "express";
import { sendEmail } from "../utils/send-email.ts";
interface EmailBodyTypeRequest extends Request {
  body: {
    from: string;
    to: string;
    subject: string;
    content: string;
  };
}

export async function handleEmailSend(
  req: EmailBodyTypeRequest,
  res: Response
) {
  const { from, to, subject, content } = req.body;

  if (!from || !to || !subject || !content) {
    return res.status(400).json({
      error: "Please enter the data",
      data: null,
    });
  }

  try {
    const result = await sendEmail({ from, to, subject, content });
    if (!result) {
      return res.status(500).json({
        error: "an unknown error occurred",
        data: null,
      });
    };
    
    return res.status(200).json({
      error: null,
      data: "Sent successfully",
    });
  } catch (err: any) {
    return res.status(500).json({ error: err.message, data: null });
  }
}
