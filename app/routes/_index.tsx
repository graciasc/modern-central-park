import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Navigate, Outlet, useNavigate } from "@remix-run/react";
import { type LoaderFunction, json } from "@remix-run/node";
import { useLoaderData, Form } from "@remix-run/react";
import { Suspense } from "react";

const loader: LoaderFunction = async () => {
  // return a random img
  // get all images from assets folder
  return json({
    id: 1,
    img: "https://plus.unsplash.com/premium_photo-1728568724868-5d24ac1238ec?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  });
};

export default function Index() {
  // const data = useLoaderData<typeof loader>();
  // console.log(data, "here");
  const navigate = useNavigate();
  return (
    <div className="flex h-full items-center justify-center">
      <Card
        className="p-4"
        onClick={() => {
          console.log("clicking");
          // navigate(`/picture/${1}`);
        }}
      >
        Card
        <Suspense fallback={<div>Loading...</div>}>
          {/* <img src={data.img} /> */}
        </Suspense>
      </Card>
      <Outlet />
    </div>
  );
}
