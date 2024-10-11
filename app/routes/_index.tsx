import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Outlet, useNavigate } from "@remix-run/react";
import { type LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData, Form } from "@remix-run/react";
import { Suspense } from "react";

export async function loader() {
  // return a random img
  // get all images from assets folder
  return json({
    id: 1,
    img: "https://plus.unsplash.com/premium_photo-1728568724868-5d24ac1238ec?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  });
}

export default function Index() {
  const { id, img } = useLoaderData<typeof loader>();
  const navigate = useNavigate();
  // make like a home page ( hero section)
  return (
    <div className="flex-col space-y-9 w-full h-full">
      <div className="flex justify-center ">
        <h1 className=" text-5xl text-white pt-12 ">
          Come check out <br /> some cool pictures <br />
          <span
            className="cursor-pointer text-sky-500"
            onClick={() => navigate(`/picture/${1}`)}
          >
            with me
          </span>
        </h1>
      </div>
      <div className="flex items-center justify-center ">
        <Card
          className="h-96 w-[500px] border-none"
          onClick={() => {
            navigate(`/picture/${1}`);
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <img
              className="cursor-pointer h-full w-full object-cover rounded-xl"
              src={img}
            />
          </Suspense>
        </Card>
        <Outlet />
      </div>
    </div>
  );
}
