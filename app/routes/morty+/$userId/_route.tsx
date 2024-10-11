import { Card } from "~/components/ui/card";
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData, json } from "@remix-run/react";

const loader: LoaderFunction = async () => {
  return json({ name: "Morty Test" });
};

export default function Person() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <Card> Morty </Card>
    </div>
  );
}
