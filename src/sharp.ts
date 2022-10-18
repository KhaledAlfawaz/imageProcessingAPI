import sharp from "sharp";
import path from "path";
import fs from "fs";

//from sharp docs https://www.npmjs.com/package/sharp
//from path docs https://nodejs.org/docs/latest/api/path.html
//from nodejs docs https://nodejs.org/api/fs.html

const resize = async (
  imageName: string,
  width: number,
  height: number
): Promise<string> => {
  let imgPath = path.join(__dirname, "../images", `${imageName}.jpg`);
  const resiezedPath = path.join(
    __dirname,
    "../thumb",
    `${imageName}-thumb(${width},${height}).jpg`
  );
  const dir = "./thumb";
  try {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    await sharp(imgPath).resize(width, height).toFile(resiezedPath);
    imgPath = resiezedPath;
  } catch (erorr) {
    console.error(erorr);
  }
  return imgPath;
};
export default resize;
