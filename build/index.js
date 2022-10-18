"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const sharp_1 = __importDefault(require("./sharp"));
const check_1 = __importDefault(require("./middleware/check"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3000;
app.get("/resize", check_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filename = req.query.filename;
    const width = req.query.width;
    const height = req.query.height;
    let resiezedPath = path_1.default.join(__dirname, "../thumb", `${filename}-thumb(${width} , ${height}).jpg`);
    // check if image exists
    if (fs_1.default.existsSync(resiezedPath)) {
        res.sendFile(resiezedPath);
        return;
    }
    resiezedPath = yield (0, sharp_1.default)(filename, Number(width), Number(height));
    if (fs_1.default.existsSync(resiezedPath)) {
        res.sendFile(resiezedPath);
    }
    else {
        res.status(404).send("<h1>Error occurred please try again</h1>");
    }
}));
app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
});
exports.default = app;
