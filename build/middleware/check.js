"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://stackoverflow.com/a/26292418
const checker = (req, res, next) => {
    if (!req.query.filename || !req.query.width || !req.query.height) {
        res
            .status(404)
            .send("<h1>please make sure to write the filename , width and height.</h1>");
    }
    else {
        next();
    }
};
exports.default = checker;
