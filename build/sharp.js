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
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
//from sharp docs https://www.npmjs.com/package/sharp
//from path docs https://nodejs.org/docs/latest/api/path.html
//from nodejs docs https://nodejs.org/api/fs.html
const resize = (imageName, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    let imgPath = path_1.default.join(__dirname, "../images", `${imageName}.jpg`);
    const resiezedPath = path_1.default.join(__dirname, "../thumb", `${imageName}-thumb(${width},${height}).jpg`);
    const dir = "./thumb";
    try {
        if (!fs_1.default.existsSync(dir)) {
            fs_1.default.mkdirSync(dir);
        }
        yield (0, sharp_1.default)(imgPath).resize(width, height).toFile(resiezedPath);
        imgPath = resiezedPath;
    }
    catch (erorr) {
        console.error(erorr);
    }
    return imgPath;
});
exports.default = resize;
