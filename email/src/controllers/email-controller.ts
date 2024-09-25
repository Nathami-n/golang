import { Request, Response } from "express";
import {sendEmail} from '../utils/send-email';
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
    res.status(400).json({
      error: "Please enter the data",
      data: null,
    });
  }

  try {
    await sendEmail({from, to, subject, content,})
  } catch (err: any) {
    res.status(500).json({ error: err.message, data: null });
  }
}
