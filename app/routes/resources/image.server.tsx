import { json, LoaderFunctionArgs } from "@remix-run/node";
import { getImage } from "~/model/image.server";

export function loader({ request }: LoaderFunctionArgs) {
  // Get the URL to extract query parameters
  const url = new URL(request.url);
  const pictureId = url.searchParams.get("pictureId");

  const image = getImage();
  const { allImages, id } = image;

  if (pictureId === id.toString()) {
    const start = 0;
    const newIndex = allImages.length === Number(id) ? start : id + 1;
    const newImage = allImages[newIndex];

    // Return the new image as JSON
    return json({ ...newImage });
  }

  return json({ ...image });
}
