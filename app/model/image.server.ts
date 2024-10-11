import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Define __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function getImage(id: number | undefined = undefined): {
  id: number;
  image: string;
  allImages: { name: string; meta: string; id: number }[];
} {
  const images = parseImages();

  if (id !== undefined && id >= 0 && id < images.length) {
    return { id, image: images[id].meta, allImages: images };
  }

  const totalImages = images.length;
  const randomId = Math.floor(Math.random() * totalImages);
  const randomImage = images[randomId];

  return { id: randomId, image: randomImage.meta, allImages: images };
}

function parseImages() {
  const imageDirRoute = path.join(__dirname, "../../public/assets");
  const filesPath: { name: string; meta: string; id: number }[] = [];

  if (!fs.existsSync(imageDirRoute)) {
    console.error(`Directory does not exist: ${imageDirRoute}`);
    return filesPath; // Return an empty array if directory is missing
  }

  fs.readdirSync(imageDirRoute).forEach((file, i) => {
    const fullPath = path.join(imageDirRoute, file);
    const statsOfFile = fs.statSync(fullPath);

    // Ensure it's a file before adding
    if (statsOfFile.isFile()) {
      filesPath.push({
        name: file,
        meta: `../../public/assets/${file}`,
        id: i,
      });
    }
  });

  return filesPath;
}
