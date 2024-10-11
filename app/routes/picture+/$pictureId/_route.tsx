import { Card } from "~/components/ui/card";
import { useParams } from "@remix-run/react";
import { type LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getImage } from "../../../model/image.server";
import { Suspense } from "react";

export function loader({ params }) {
  const { pictureId } = params;
  const image = getImage(pictureId);
  return json(image);
}

export default function Picture() {
  const { image } = useLoaderData<typeof loader>();
  return (
    <div className="flex items-center justify-center pt-12">
      <Card className="h-[700px] w-[700px] border-none">
        <Suspense fallback={<div>Loading...</div>}>
          <img
            className="cursor-pointer h-full w-full object-cover rounded-xl"
            src={image}
          />
        </Suspense>
      </Card>
    </div>
  );
}
