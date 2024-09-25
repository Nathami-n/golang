//nodemailer transporter
import { createTransport } from "nodemailer";
import { google } from "googleapis";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const OAuth2 = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "https://developers.google.com"
);

export const transporter = createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    type: "OAUTH2",
    refreshToken: process.env.REFRESH_TOKEN,
    accessToken: () => OAuth2.getAccessToken(),
  },
} as any);
