import express, { Request, Response } from "express";
import fs from "fs";
import resize from "./sharp";
import checker from "./middleware/check";
import path from "path";

const app = express();
const port = 3000;

app.get(
  "/resize",
  checker,

  async (req: Request, res: Response): Promise<void> => {
    const filename: string = req.query.filename as string;
    const width: number = req.query.width as unknown as number;
    const height: number = req.query.height as unknown as number;
    let resiezedPath = path.join(
      __dirname,
      "../thumb",
      `${filename}-thumb(${width} , ${height}).jpg`
    );
    // check if image exists
    if (fs.existsSync(resiezedPath)) {
      res.sendFile(resiezedPath);
      return;
    }

    resiezedPath = await resize(filename, Number(width), Number(height));
    if (fs.existsSync(resiezedPath)) {
      res.sendFile(resiezedPath);
    } else {
      res.status(404).send("<h1>Error occurred please try again</h1>");
    }
  }
);

app.listen(port, (): void => {
  console.log(`server started at localhost:${port}`);
});

export default app;
