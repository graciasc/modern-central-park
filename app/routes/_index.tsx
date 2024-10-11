import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Outlet, useNavigate } from "@remix-run/react";
import { type LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData, Form } from "@remix-run/react";
import { Suspense } from "react";
import { getImage } from "~/model/image.server";

export async function loader() {
  const content = getImage();
  return json(content);
}

export default function Index() {
  const { image, id } = useLoaderData<typeof loader>();
  console.log(image, id);
  const navigate = useNavigate();
  return (
    <div className="flex-col space-y-9 w-full h-full">
      <div className="flex justify-center ">
        <h1 className=" text-5xl text-white pt-12 ">
          Come check out <br /> some cool pictures <br />
          <span
            className="cursor-pointer text-sky-500"
            onClick={() => navigate(`/picture/${id}`)}
          >
            with me
          </span>
        </h1>
      </div>
      <div className="flex items-center justify-center ">
        <Card
          className="h-96 w-[500px] border-none"
          onClick={() => {
            navigate(`/picture/${id}`);
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <img
              className="cursor-pointer h-full w-full object-cover rounded-xl"
              src={image}
            />
          </Suspense>
        </Card>
        <Outlet />
      </div>
    </div>
  );
}
