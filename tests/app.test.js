const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("should return hello message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Hello CI/CD New World 🚀");
  });
});
