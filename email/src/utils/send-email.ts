import { transporter } from "../configs/nodemailer";

export async function sendEmail(obj: {
  from: string;
  to: string;
  content: string;
  subject: string;
}) {
  const sendOptions = {
    from: obj.from,
    to: obj.to,
    subject: obj.subject,
    html: `<div>
    <h1> Here is your text</h1>
    ${obj.content}
    </div>`,
  };

  try {
    const result = await transporter.sendMail(sendOptions);
    return result;
  } catch (err: any) {
    throw new Error(err.message);
  }
}
