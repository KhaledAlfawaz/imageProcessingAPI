import supertest from "supertest";
import app from "../index";

const req = supertest(app);

describe("endpoint testing", () => {
  it("gets route endpoint", async () => {
    const res = await req.get(
      "/resize?filename=santamonica&width=200&height=200"
    );
    expect(res.status).toBe(200);
  });
});
