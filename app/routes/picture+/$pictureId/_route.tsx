import { Card } from "~/components/ui/card";
import { useParams } from "@remix-run/react";
import { type LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export function loader() {
  // get the img with the img id
  return json({});
}

export default function Picture() {
  const { pictureId } = useParams();
  return (
    <div className="flex h-full items-center justify-center">
      <Card className="p-4"> Picture {pictureId} </Card>
    </div>
  );
}
