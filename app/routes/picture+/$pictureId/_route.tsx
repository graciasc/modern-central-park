import { Card } from "~/components/ui/card";
import { useFetcher, useNavigate } from "@remix-run/react";
import { type LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getImage } from "~/model/image.server";
import { Suspense } from "react";

export function loader({ params }: LoaderFunctionArgs) {
  const { pictureId } = params;
  const image = getImage(pictureId);
  return json(image);
}

export default function Picture() {
  const data = useLoaderData<typeof loader>();
  console.log(data);
  const { filePath: initialImage } = data;
  const imageFetcher = useFetcher<typeof loader>();
  const navigate = useNavigate();

  const currentImage = imageFetcher?.data?.filePath || initialImage;

  const getImage = () => {
    imageFetcher.load("/resources/image");
    navigate(`/picture/${imageFetcher.data.id}`);
  };

  return (
    <div className="flex items-center justify-center pt-12">
      <Card className="h-[700px] w-[700px] border-none bg-gray-200 ">
        <Suspense fallback={<div>Loading...</div>}>
          <img
            className="hover:bg-green-700 pr-[5px] border-solid cursor-pointer h-full w-full object-cover rounded-xl"
            src={currentImage}
            onClick={getImage}
          />
        </Suspense>
      </Card>
    </div>
  );
}
