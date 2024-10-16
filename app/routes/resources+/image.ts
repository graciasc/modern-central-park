import { json, LoaderFunctionArgs } from "@remix-run/node";
import { getImage } from "~/model/image.server";

// Loader function to handle the request and fetch the next image
export function loader({ request }: LoaderFunctionArgs) {
  // Get the URL to extract query parameters
  const url = new URL(request.url);
  const pictureId = url.searchParams.get("pictureId");

  // Fetch the current image data
  const image = getImage();
  const { allImages, id } = image;

  // If pictureId matches the current image id, fetch the next one
  if (pictureId === id.toString()) {
    const start = 0;
    const newIndex = allImages.length === Number(id) ? start : id + 1;
    const newImage = allImages[newIndex];

    // Return the new image as JSON
    return json({ ...newImage });
  }

  // Return the current image by default if pictureId does not match
  return json({ ...image });
}
