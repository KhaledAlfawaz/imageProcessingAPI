import { Request, Response, NextFunction } from "express";

// https://stackoverflow.com/a/26292418

const checker = (req: Request, res: Response, next: NextFunction) => {
  if (!req.query.filename || !req.query.width || !req.query.height) {
    res
      .status(404)
      .send(
        "<h1>please make sure to write the filename , width and height.</h1>"
      );
  } else {
    next();
  }
};

export default checker;
