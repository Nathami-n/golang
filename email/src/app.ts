import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";

import emailRouter from "./routes/email.ts";

const app = express();

dotenv.config();
//generic middleware files
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use("/health", function (req: Request, res: Response) {
  res.status(200).sendFile(path.join(__dirname, "public/index.html"));
});

app.use("/send-email", emailRouter);

export default app;
