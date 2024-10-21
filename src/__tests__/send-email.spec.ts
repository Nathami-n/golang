import { expect } from "vitest";
import app from "../app.js";
import request from "supertest";
import nodeMailerMock from "nodemailer-mock";

describe("POST /send-email", () => {
  describe("Posting with no credentials", () => {
    it("should respond with a status code of 400 and an error message", async () => {
      const response = await request(app).post("/send-email").send({
        from: null,
        to: null,
        subject: null,
        content: null,
      });

      expect(response.status).toBe(400);
      expect(response.body.error).toBe("Please enter the data");
    });
  });

  describe("Using valid credentials", () => {
    it("should return status code 200 if email is sent successfully", async () => {
      const response = await request(app).post("/send-email").send({
        from: "georgenathan010@gmail.com",
        to: "georgenathan010@gmail.com",
        subject: "test subject",
        content: "Hello",
      });

      console.log(response.body);
      expect(response.status).toBe(200);
      expect(response.body.data).toBe("Sent successfully");
    });

    it("should return status code 500 if there is an error sending the email", async () => {
      nodeMailerMock.mock.isShouldFailOnce();

      const response = await request(app).post("/send-email").send({
        from: "georgenathan010@gmail.com",
        to: "georgenathan010@gmail.com",
        subject: "test subject",
        content: "Hello",
      });

      expect(response.status).toBe(500);
      expect(response.body.error).toBe( response.body.error);
    });
  });
});
