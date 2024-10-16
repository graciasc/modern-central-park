import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Define __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function getImage(id: string | undefined = undefined): {
  id: string;
  filePath: string;
  allImages: { name: string; meta: string; id: string }[];
} {
  const images = parseImages();

  if (id !== undefined && Number(id) >= 0 && Number(id) < images.length) {
    return { id: id.toString(), filePath: images[id].meta, allImages: images };
  }

  const totalImages = images.length;
  const randomId = Math.floor(Math.random() * totalImages);
  const randomImage = images[randomId];

  return {
    id: randomId.toString(),
    filePath: randomImage.meta,
    allImages: images,
  };
}

function parseImages() {
  const imageDirRoute = path.join(__dirname, "../../assets");
  const filesPath: { name: string; meta: string; id: string }[] = [];

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
        meta: `../../assets/${file}`,
        id: i.toString(),
      });
    }
  });

  return filesPath;
}
