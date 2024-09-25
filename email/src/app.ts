import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import os from "os";
import emailRouter from "./routes/email";

const app = express();
const port = process.env.PORT || 3000;

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

//start the server
(function Start() {
  app.listen(port as string, function () {
    const operating_system = os.type();
    console.log(
      `server running on os: ${operating_system} using port: ${port}`
    );
  });
})();
