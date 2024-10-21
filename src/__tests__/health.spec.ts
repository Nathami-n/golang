
import supertest from "supertest";
import app from "../app.js";
import { expect } from "vitest";

const request = supertest(app);

describe("Health route check", () => {
  it("should respond with an HTML file and a status code of 200", async () => {
    const response = await request.get("/health");
    expect(response.status).to.equal(200);
    expect(response.headers["content-type"]).to.include("text/html");
  });
});
