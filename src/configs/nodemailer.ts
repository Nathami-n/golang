//nodemailer transporter
import { createTransport } from "nodemailer";
import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config();

const OAuth2 = new google.auth.OAuth2(
  process.env.CLIENT_ID as string,
  process.env.CLIENT_SECRET as string,
  "https://developers.google.com"
);

export const transporter = createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER as string,
    clientId: process.env.CLIENT_ID as string,
    clientSecret: process.env.CLIENT_SECRET as string,
    type: "OAUTH2",
    refreshToken: process.env.REFRESH_TOKEN as string,
    accessToken: () => OAuth2.getAccessToken(),
  },
} as any);
