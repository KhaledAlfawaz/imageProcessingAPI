import resize from "../sharp";
import path from "path";

describe("sharp testing", () => {
  it("resize image successfully", async () => {
    const imgPath = await resize("fjord", 200, 200);
    expect(imgPath).toContain(path.join("/thumb/fjord-thumb(200,200).jpg"));
  });
});
